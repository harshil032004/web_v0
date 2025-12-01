"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Headphones, Users, Shield, Award, Send } from "lucide-react";

const HERO_PATTERN = "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z'/%3E%3C/g%3E%3C/svg%3E')";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you within 2 hours.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#48A66F] to-[#335185] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{backgroundImage: HERO_PATTERN}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            <Headphones className="h-4 w-4 mr-2" />
            24/7 Support Available
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Get in <span className="text-green-500">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow">
            We're here to help you 24/7. Contact us for bookings, support, or any questions about our services.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our customer support team is available 24/7 to assist you with bookings, queries, and any support you need. We&apos;re committed to providing you with the best service possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Head Office</h3>
                    <p className="text-gray-600">Eprakriti E-Mobility</p>
                    <p className="text-gray-600">3rd Floor, DLF Tower A, 308</p>
                    <p className="text-gray-600">Jasola Vihar, New Delhi, Delhi, 110025</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Service Hours</h3>
                    <p className="text-gray-600">🚗 Cab Service: 24/7 Available</p>
                    <p className="text-gray-600">💬 Customer Support: 24/7 Available</p>
                    <p className="text-gray-600">🏢 Office: Mon-Sat, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Corporate Bookings</h3>
                    <p className="text-gray-600">📧 corporate@everacabs.com</p>
                    <p className="text-gray-600">📞 +91 98765 43211</p>
                    <p className="text-gray-600">💼 Special rates for businesses</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Emergency Support</h3>
                    <p className="text-gray-600">📧 support@everacabs.com</p>
                    <p className="text-gray-600">📞 +91 98765 43212</p>
                    <p className="text-gray-600">🚨 24/7 Emergency assistance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <p className="text-gray-600 mb-6">Fill out the form and we'll get back to you within 2 hours.</p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">First Name *</Label>
                      <Input id="firstName" placeholder="John" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">Subject *</Label>
                    <select id="subject" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="corporate">Corporate Services</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..." 
                      rows={5}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    ⏱️ We typically respond within 2 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}      
      <section className="py-16 sm:py-20 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="absolute inset-0 opacity-60" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-black/10 text-black rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4 mr-2" />
              Quick Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black bg-clip-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-800">Find quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 border-t pt-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I book a cab?</h3>
              <p className="text-gray-600 leading-relaxed">You can book through our website or mobile app. It's quick and easy!</p>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What payment options do you accept?</h3>
              <p className="text-gray-600 leading-relaxed">We accept cash, credit/debit cards, UPI, and all major digital wallets for your convenience.</p>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide airport transfers?</h3>
              <p className="text-gray-600 leading-relaxed">Yes! We offer 24/7 airport pickup and drop services with flight tracking for timely arrivals.</p>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I cancel my booking?</h3>
              <p className="text-gray-600 leading-relaxed">Yes, you can cancel up to 5 minutes before pickup without any charges through the app.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}