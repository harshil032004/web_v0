import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, Headphones, Users, Shield } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact EveraCabs</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help you 24/7. Get in touch with us for bookings, support, or any questions about our services.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600">Choose the most convenient way to reach us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-2xl font-bold text-blue-600 mb-1">+91 98765 43210</p>
              <p className="text-sm text-gray-500">24/7 Available</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-lg font-semibold text-green-600 mb-1">+91 98765 43210</p>
              <p className="text-sm text-gray-500">Quick Support</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-lg font-semibold text-purple-600 mb-1">info@everacabs.com</p>
              <p className="text-sm text-gray-500">Response in 2 hours</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-lg font-semibold text-orange-600 mb-1">Chat Now</p>
              <p className="text-sm text-gray-500">Instant Support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Our customer support team is available 24/7 to assist you with bookings, queries, and any support you need.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Head Office</h3>
                    <p className="text-gray-600">EveraCabs Headquarters</p>
                    <p className="text-gray-600">123 Business District, Bandra Kurla Complex</p>
                    <p className="text-gray-600">Mumbai, Maharashtra 400051</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Service Hours</h3>
                    <p className="text-gray-600">Cab Service: 24/7 Available</p>
                    <p className="text-gray-600">Customer Support: 24/7 Available</p>
                    <p className="text-gray-600">Office Hours: Mon-Sat 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Corporate Bookings</h3>
                    <p className="text-gray-600">corporate@everacabs.com</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                    <p className="text-gray-600">Special rates for businesses</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Emergency Support</h3>
                    <p className="text-gray-600">emergency@everacabs.com</p>
                    <p className="text-gray-600">+91 98765 43212</p>
                    <p className="text-gray-600">24/7 Emergency assistance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 2 hours.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name *</Label>
                      <Input id="firstName" placeholder="John" className="mt-1" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-1" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-1" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" className="mt-1" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject *</Label>
                    <select id="subject" className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
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
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..." 
                      rows={5}
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    We typically respond within 2 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I book a cab?</h3>
              <p className="text-gray-600 mb-4">You can book through our website, mobile app, or by calling +91 98765 43210.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your payment options?</h3>
              <p className="text-gray-600 mb-4">We accept cash, cards, UPI, and all major digital wallets.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide airport transfers?</h3>
              <p className="text-gray-600 mb-4">Yes, we offer 24/7 airport pickup and drop services with flight tracking.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel my booking?</h3>
              <p className="text-gray-600 mb-4">Yes, you can cancel up to 5 minutes before pickup without any charges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}