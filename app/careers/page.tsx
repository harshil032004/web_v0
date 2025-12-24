"use client";

import { useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/navigation";
import { ChevronLeft, ChevronRight, MapPin, Clock, Users, Star, DollarSign, Headphones, Shield, CheckCircle } from "lucide-react";
import { getFromLocalStorage } from '@/lib/localStorage';

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

export default function CareersPage() {
  const mounted = useHydrated();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [activeTab, setActiveTab] = useState('driver');

  const jobs: Job[] = mounted ? getFromLocalStorage('jobs', []) : [];
  const testimonials: Testimonial[] = mounted ? getFromLocalStorage('testimonials', []) : [];

  const departments = ['all', ...Array.from(new Set(jobs.map(job => job.department)))];
  const filteredJobs = selectedDepartment === 'all' 
    ? jobs.filter(job => job.status === 'open')
    : jobs.filter(job => job.department === selectedDepartment && job.status === 'open');

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Join Our <span className="text-green-600">Mission</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Build the future of sustainable transportation with us
          </p>
          <div className="flex justify-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>500+ Employees</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>15+ Cities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('driver')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'driver'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Driver Partner
              </button>
              <button
                onClick={() => setActiveTab('jobs')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'jobs'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Other Job Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Partner Section */}
      {activeTab === 'driver' && (
        <>
          {/* Driver Registration Form */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Driver Application / ड्राइवर आवेदन</h3>
                      <p className="text-gray-600 mb-2">Ready to join our team? Fill out the basic information below. / हमारी टीम में शामिल होने के लिए तैयार हैं?</p>
                      <p className="text-gray-600 mb-4">नीचे बुनियादी जानकारी भरें।</p>
                      <p className="text-blue-600 text-sm">Our HR team will contact you for document verification / हमारी HR टीम दस्तावेज़ सत्यापन के लिए आपसे संपर्क करेगी</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Driver Registration Form / ड्राइवर पंजीकरण फॉर्म</h4>
                      <p className="text-sm text-gray-600">Please provide accurate basic information / कृपया सटीक बुनियादी जानकारी प्रदान करें</p>
                    </div>
                    
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName" className="text-sm font-medium">Full Name / पूरा नाम *</Label>
                          <Input id="fullName" placeholder="Enter your full name / अपना पूरा नाम दर्ज करें" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-sm font-medium">Phone Number / फोन नंबर *</Label>
                          <Input id="phone" placeholder="Enter your phone number / अपना फोन नंबर दर्ज करें" className="mt-1" />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city" className="text-sm font-medium">City / शहर *</Label>
                          <select id="city" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Enter your city / अपना शहर दर्ज करें</option>
                            <option>Mumbai</option>
                            <option>Delhi</option>
                            <option>Bangalore</option>
                            <option>Chennai</option>
                            <option>Hyderabad</option>
                            <option>Pune</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="experience" className="text-sm font-medium">Driving Experience / ड्राइविंग अनुभव *</Label>
                          <select id="experience" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Select experience / अनुभव चुनें</option>
                            <option>Less than 1 year</option>
                            <option>1-3 years</option>
                            <option>3-5 years</option>
                            <option>5+ years</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="shift" className="text-sm font-medium">Shift Preference / शिफ्ट प्राथमिकता *</Label>
                          <select id="shift" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Select shift / शिफ्ट चुनें</option>
                            <option>Day Shift (6 AM - 6 PM)</option>
                            <option>Night Shift (6 PM - 6 AM)</option>
                            <option>Flexible</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="license" className="text-sm font-medium">Do you have a valid driving license? / क्या आपके पास वैध ड्राइविंग लाइसेंस है? *</Label>
                          <select id="license" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Select / चुनें</option>
                            <option>Yes / हाँ</option>
                            <option>No / नहीं</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Note / नोट:</strong> Our HR team will contact you within 2-3 working days for document verification and further process.
                          / हमारी HR टीम दस्तावेज़ सत्यापन और आगे की प्रक्रिया के लिए 2-3 कार्य दिवसों में आपसे संपर्क करेगी।
                        </p>
                      </div>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 font-semibold">
                        Submit Application / आवेदन जमा करें
                      </Button>
                    </form>
                  </CardContent>
                </Card>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 relative bg-white overflow-hidden shadow-xl mx-4 sm:mx-6 lg:mx-8 mb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Freedom Of Work, Daily Payments</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Daily payments 365 days</h3>
                  <p className="text-gray-600">Get paid daily for your rides. No waiting for weekly or monthly payments.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Headphones className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">24/7 helpline for your support</h3>
                  <p className="text-gray-600">Round the clock support for all your queries and assistance.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Get a booking on your way home</h3>
                  <p className="text-gray-600">Smart algorithm ensures you get rides even on your way back home.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Insurance Coverage</h3>
                  <p className="text-gray-600">Complete insurance coverage for you and your vehicle during rides.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Driver Requirements</h2>
                <p className="text-xl text-black">Simple requirements to get started</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Documents Required</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Valid Driving License
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Aadhaar Card
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        PAN Card
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Vehicle Registration Certificate
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Vehicle Insurance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Police Verification Certificate
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Eligibility Criteria</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Age: 21-60 years
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Minimum 1 year driving experience
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Clean driving record
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Vehicle age: Less than 10 years
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        4-door sedan or hatchback
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Valid commercial permit
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Job Listings */}
      {activeTab === 'jobs' && (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-800">Find your perfect role in our growing team</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDepartment === dept ? "default" : "outline"}
                onClick={() => setSelectedDepartment(dept)}
                className="capitalize"
              >
                {dept === 'all' ? 'All Departments' : dept}
              </Button>
            ))}
          </div>

          {/* Jobs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {job.type}
                    </span>
                  </div>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-[#48A66F] hover:bg-[#3d8f5f]">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No open positions in this department currently.</p>
            </div>
          )}
        </div>
      </section>
      )}

      {/* Employee Testimonials Carousel */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">What Our Team Says</h2>
            <p className="text-xl text-gray-800">Hear from our employees and interns</p>
          </div>

          {testimonials.length > 0 && (
            <div className="relative max-w-4xl mx-auto">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="shrink-0">
                      <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                        <Users className="w-10 h-10 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonials[currentTestimonial].rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 mb-4 italic">
                        &ldquo;{testimonials[currentTestimonial].review}&rdquo;
                      </p>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-gray-600">
                          {testimonials[currentTestimonial].position} • {testimonials[currentTestimonial].department}
                        </p>
                        <p className="text-sm text-gray-500">
                          Joined {new Date(testimonials[currentTestimonial].joinDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-[#48A66F]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#48A66F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {activeTab === 'driver' ? 'Ready to Start Earning?' : 'Ready to Join Us?'}
          </h2>
          <p className="text-xl mb-8">
            {activeTab === 'driver' 
              ? 'Join thousands of drivers who are already earning with Evera Cabs'
              : "Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities."
            }
          </p>
          <Button className="bg-white text-[#48A66F] hover:bg-gray-100 px-8 py-3 text-lg">
            {activeTab === 'driver' ? 'Apply Now' : 'Send Resume'}
          </Button>
        </div>
      </section>
    </div>
  );
}