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

  const services = [
    {
      title: "ETS",
      description: "Employee Transportation Services for seamless daily commutes",
      features: ["Scheduled routes", "Real-time tracking", "Cost-effective solutions"]
    },
    {
      title: "Rentals",
      description: "Flexible vehicle rental solutions for corporate needs",
      features: ["Short & long term", "Various vehicle types", "Dedicated support"]
    },
    {
      title: "Airport",
      description: "Reliable airport transfer services for business travel",
      features: ["Flight monitoring", "Professional chauffeurs", "Premium vehicles"]
    },
    {
      title: "Events",
      description: "Transportation solutions for corporate events and conferences",
      features: ["Event coordination", "Group transportation", "Custom scheduling"]
    },
    {
      title: "Intercity",
      description: "Comfortable intercity travel for business requirements",
      features: ["Long distance comfort", "Multiple stops", "Business class service"]
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
            <span className="text-yellow-400">Corporate</span> Mobilty Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Sustainable transportation solutions designed for modern businesses
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-black/60 to-black/40 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-400 mb-4">Our ESG Commitment</h2>
            <p className="text-lg text-gray-100 font-bold max-w-3xl mx-auto">
              Leading the way in sustainable mobility with environmentally responsible, 
              socially conscious, and ethically governed transportation solutions. Join us 
              in driving positive change for a greener future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-400 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-2xl text-gray-600">Comprehensive mobility solutions for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#335185]">{service.title}</CardTitle>
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
                </CardContent>
              </Card>
            ))}
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#335185]">And More</CardTitle>
                <CardDescription>Custom solutions tailored to your specific requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Contact us to discuss your unique transportation needs and discover 
                  how we can create a customized solution for your organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-2xl text-gray-600">
              Ready to transform your corporate transportation? Let's discuss your requirements.
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
                      <SelectItem value="ets">Employee Transportation Services</SelectItem>
                      <SelectItem value="rentals">Vehicle Rentals</SelectItem>
                      <SelectItem value="airport">Airport Transfers</SelectItem>
                      <SelectItem value="events">Event Transportation</SelectItem>
                      <SelectItem value="intercity">Intercity Travel</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your transportation requirements..."
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
    </div>
  );
}