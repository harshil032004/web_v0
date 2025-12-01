"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/navigation";

export default function CorporatePage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    servicePackage: "",
    message: ""
  });

  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "ETS",
      description: "Employee mobility Services for seamless daily commutes",
      features: ["Scheduled routes", "Real-time tracking", "Cost-effective solutions"],
      details: {
        overview: "Our Employee Transportation Services provide reliable, scheduled transportation for your workforce, ensuring punctual arrivals and departures.",
        benefits: ["Reduced employee stress", "Improved productivity", "Cost savings on parking", "Environmental benefits"],
        pricing: "Starting from ₹15,000/month per route",
        coverage: "Available across Delhi NCR with flexible route planning"
      }
    },
    {
      title: "Rentals",
      description: "Flexible vehicle rental solutions for corporate needs",
      features: ["Short & long term", "Various vehicle types", "Dedicated support"],
      details: {
        overview: "Comprehensive vehicle rental services with a wide range of vehicles from economy to luxury, available for short-term and long-term rentals.",
        benefits: ["No maintenance hassles", "24/7 roadside assistance", "Flexible terms", "All-inclusive packages"],
        pricing: "Starting from ₹2,500/day for sedans",
        coverage: "Pan-India coverage with local support teams"
      }
    },
    {
      title: "Airport",
      description: "Reliable airport transfer services for business travel",
      features: ["Flight monitoring", "Professional chauffeurs", "Premium vehicles"],
      details: {
        overview: "Premium airport transfer services with flight tracking, meet & greet services, and professional chauffeurs for seamless business travel.",
        benefits: ["Flight delay monitoring", "Meet & greet service", "Luggage assistance", "Premium vehicle fleet"],
        pricing: "Starting from ₹1,200 for airport transfers",
        coverage: "All major airports in India with 24/7 availability"
      }
    },
    {
      title: "Events",
      description: "mobility solutions for corporate events and conferences",
      features: ["Event coordination", "Group mobility", "Custom scheduling"],
      details: {
        overview: "Specialized transportation solutions for corporate events, conferences, and business gatherings with dedicated event coordinators.",
        benefits: ["Dedicated event manager", "Group coordination", "Custom branding options", "Real-time guest tracking"],
        pricing: "Custom pricing based on event requirements",
        coverage: "Event transportation across major cities in India"
      }
    },
    {
      title: "Intercity",
      description: "Comfortable intercity travel for business requirements",
      features: ["Long distance comfort", "Multiple stops", "Business class service"],
      details: {
        overview: "Comfortable intercity travel solutions for business trips with experienced drivers and premium vehicles designed for long-distance comfort.",
        benefits: ["Experienced drivers", "Multiple pickup/drop points", "Refreshment stops", "Business class comfort"],
        pricing: "Starting from ₹12/km for intercity travel",
        coverage: "Connecting all major cities across India"
      }
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="bg-gradient-to-r from-[#48A66F] to-[#335185] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            <span className="text-green-500">Corporate</span> Mobilty Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Sustainable mobility solutions designed for modern businesses
          </p>
        </div>
      </section>

      {/* Our ESG Commitments */}
      <section className="py-20 bg-white relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2310b981\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              </svg>
              ESG Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Our ESG Commitments</h2>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              Leading the way in sustainable mobility with environmentally responsible, 
              socially conscious, and ethically governed solutions for a greener future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Environmental */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7.5 19 17 8 17 8Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  100% electric vehicle fleet by 2025
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Carbon neutral operations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Renewable energy charging stations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Waste reduction initiatives
                </li>
              </ul>
            </div>
            
            {/* Social */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4ZM8 13C10.67 13 16 14.33 16 17V20H0V17C0 14.33 5.33 13 8 13ZM16 13C18.67 13 24 14.33 24 17V20H18V17.5C18 15.9 17.1 14.7 16 13Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fair employment practices
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Driver welfare programs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community development initiatives
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Accessible mobility solutions
                </li>
              </ul>
            </div>
            
            {/* Governance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Governance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Transparent business practices
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ethical data management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Regulatory compliance
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Stakeholder accountability
                </li>
              </ul>
            </div>
          </div>
          
          {/* Impact Stats */}
          <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Our Impact So Far</h3>
              <p className="text-green-100 text-lg">Making a difference through sustainable mobility</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-green-100">Trees Saved</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1.2M</div>
                <div className="text-green-100">CO₂ Reduced (kg)</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-green-100">Charging Stations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25M</div>
                <div className="text-green-100">Green KM Traveled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-2xl text-gray-800">Comprehensive mobility solutions for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border border-gray-300">
                <CardHeader>
                  <CardTitle className="text-[#335185] text-center text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-[#48A66F] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="mt-6 w-full bg-[#48A66F] hover:bg-[#3d8f5f] text-white"
                    onClick={() => {
                      setSelectedService(service);
                      setIsModalOpen(true);
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#335185] text-center">And More</CardTitle>
                <CardDescription>Custom solutions tailored to your specific requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Contact us to discuss your mobility needs and discover 
                  how we can create a customized solution for your organization.
                  We're here to help you.
                </p>
                <Button className="mt-6 w-full bg-[#48A66F] hover:bg-[#3d8f5f] text-white">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-2xl text-gray-600">
              Ready to transform your corporate mobility? Let's discuss your requirements.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Request Information</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service Package Interest</Label>
                  <Select onValueChange={(value) => setFormData({...formData, servicePackage: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ets">Employee mobility Services</SelectItem>
                      <SelectItem value="rentals">Vehicle Rentals</SelectItem>
                      <SelectItem value="airport">Airport Transfers</SelectItem>
                      <SelectItem value="events">Event mobility</SelectItem>
                      <SelectItem value="intercity">Intercity Travel</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your mobility requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-[#48A66F] hover:bg-[#3d8f5f]">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedService.details.overview}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.details.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing</h3>
                    <p className="text-green-600 font-semibold">{selectedService.details.pricing}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Coverage</h3>
                    <p className="text-gray-600">{selectedService.details.coverage}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button className="flex-1 bg-[#48A66F] hover:bg-[#3d8f5f] text-white">
                    Get Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}