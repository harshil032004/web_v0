"use client";

import { useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';
import { getFromLocalStorage, setToLocalStorage } from '@/lib/localStorage';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  status: 'open' | 'closed';
  postedDate: string;
}

// Custom hook for hydration
function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function JobsManagement() {
  const mounted = useHydrated();
  const [jobs, setJobs] = useState<Job[]>(() => 
    mounted ? getFromLocalStorage('jobs', []) : []
  );
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    experience: '',
    description: '',
    requirements: '',
    status: 'open' as 'open' | 'closed'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const jobData = {
      ...formData,
      requirements: formData.requirements.split('\n').filter(req => req.trim()),
      postedDate: editingJob ? editingJob.postedDate : new Date().toISOString().split('T')[0]
    };

    const newJob: Job = {
      id: editingJob ? editingJob.id : uuidv4(),
      ...jobData
    };

    const updatedJobs = editingJob 
      ? jobs.map(job => job.id === editingJob.id ? newJob : job)
      : [...jobs, newJob];
    
    setJobs(updatedJobs);
    setToLocalStorage('jobs', updatedJobs);
    resetForm();
  };

  const handleEdit = (job: Job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      experience: job.experience,
      description: job.description,
      requirements: job.requirements.join('\n'),
      status: job.status
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this job?')) {
      const updatedJobs = jobs.filter(job => job.id !== id);
      setJobs(updatedJobs);
      setToLocalStorage('jobs', updatedJobs);
    }
  };

  const toggleStatus = async (id: string, currentStatus: 'open' | 'closed') => {
    const newStatus: 'open' | 'closed' = currentStatus === 'open' ? 'closed' : 'open';
    const updatedJobs = jobs.map(job => 
      job.id === id ? { ...job, status: newStatus } : job
    );
    setJobs(updatedJobs);
    setToLocalStorage('jobs', updatedJobs);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      department: '',
      location: '',
      type: '',
      experience: '',
      description: '',
      requirements: '',
      status: 'open'
    });
    setEditingJob(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Jobs Management</h2>
          <p className="text-gray-600">Create and manage job postings</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="bg-[#48A66F] hover:bg-[#3d8f5f]">
          <Plus className="w-4 h-4 mr-2" />
          Add Job
        </Button>
      </div>

      {/* Job Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingJob ? 'Edit Job' : 'Add New Job'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="type">Job Type</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="experience">Experience</Label>
                  <Input
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    placeholder="e.g., 2-4 years"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="requirements">Requirements (one per line)</Label>
                <Textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                  rows={4}
                  placeholder="React/Next.js&#10;Node.js&#10;TypeScript"
                  required
                />
              </div>

              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value: 'open' | 'closed') => setFormData({...formData, status: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="bg-[#48A66F] hover:bg-[#3d8f5f]">
                  {editingJob ? 'Update Job' : 'Create Job'}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Jobs List */}
      <div className="grid gap-4">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      job.status === 'open' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {job.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{job.department} • {job.location} • {job.type}</p>
                  <p className="text-gray-700 mb-2">{job.description}</p>
                  <p className="text-sm text-gray-500">Posted: {job.postedDate}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleStatus(job.id, job.status)}
                  >
                    {job.status === 'open' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleEdit(job)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(job.id)}>
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