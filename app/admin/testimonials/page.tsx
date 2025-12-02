"use client";

import { useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Star, Users } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';
import { getFromLocalStorage, setToLocalStorage } from '@/lib/localStorage';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  department: string;
  image: string;
  rating: number;
  review: string;
  joinDate: string;
}

// Custom hook for hydration
function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function TestimonialsManagement() {
  const mounted = useHydrated();
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => 
    mounted ? getFromLocalStorage('testimonials', []) : []
  );
  const [showForm, setShowForm] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    image: '',
    rating: 5,
    review: '',
    joinDate: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTestimonial = {
      id: editingTestimonial ? editingTestimonial.id : uuidv4(), 
      ...formData
    };

    const updatedTestimonials = editingTestimonial
      ? testimonials.map(t => t.id === editingTestimonial.id ? newTestimonial : t)
      : [...testimonials, newTestimonial];
    
    setTestimonials(updatedTestimonials);
    setToLocalStorage('testimonials', updatedTestimonials);
    resetForm();
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      name: testimonial.name,
      position: testimonial.position,
      department: testimonial.department,
      image: testimonial.image,
      rating: testimonial.rating,
      review: testimonial.review,
      joinDate: testimonial.joinDate
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      const updatedTestimonials = testimonials.filter(t => t.id !== id);
      setTestimonials(updatedTestimonials);
      setToLocalStorage('testimonials', updatedTestimonials);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      position: '',
      department: '',
      image: '',
      rating: 5,
      review: '',
      joinDate: ''
    });
    setEditingTestimonial(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Testimonials Management</h2>
          <p className="text-gray-600">Manage employee and intern testimonials</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="bg-[#48A66F] hover:bg-[#3d8f5f]">
          <Plus className="w-4 h-4 mr-2" />
          Add Testimonial
        </Button>
      </div>

      {/* Testimonial Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="joinDate">Join Date</Label>
                  <Input
                    id="joinDate"
                    type="date"
                    value={formData.joinDate}
                    onChange={(e) => setFormData({...formData, joinDate: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <Select 
                    value={formData.rating.toString()}
                    onValueChange={(value) => setFormData({...formData, rating: parseInt(value)})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Star</SelectItem>
                      <SelectItem value="2">2 Stars</SelectItem>
                      <SelectItem value="3">3 Stars</SelectItem>
                      <SelectItem value="4">4 Stars</SelectItem>
                      <SelectItem value="5">5 Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="review">Review</Label>
                <Textarea
                  id="review"
                  value={formData.review}
                  onChange={(e) => setFormData({...formData, review: e.target.value})}
                  rows={4}
                  placeholder="Write the testimonial review..."
                  required
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="bg-[#48A66F] hover:bg-[#3d8f5f]">
                  {editingTestimonial ? 'Update Testimonial' : 'Create Testimonial'}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Testimonials List */}
      <div className="grid gap-4">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">
                      {testimonial.position} • {testimonial.department}
                    </p>
                    <p className="text-gray-700 mb-2 italic">&ldquo;{testimonial.review}&rdquo;</p>
                    <p className="text-sm text-gray-500">
                      Joined: {new Date(testimonial.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(testimonial)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(testimonial.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}