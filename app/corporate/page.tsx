"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

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

      <section className="text-black py-20 relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Corporate <span className="text-green-600">Mobility Solutions</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">Our ESG Commitments</h2>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              Leading the way in sustainable mobility with environmentally responsible, 
              socially conscious, and ethically governed solutions for a greener future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Environmental */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7.5 19 17 8 17 8Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  100% electric vehicle fleet by 2025
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Carbon neutral operations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Renewable energy charging stations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Waste reduction initiatives
                </li>
              </ul>
            </div>
            
            {/* Social */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4ZM8 13C10.67 13 16 14.33 16 17V20H0V17C0 14.33 5.33 13 8 13ZM16 13C18.67 13 24 14.33 24 17V20H18V17.5C18 15.9 17.1 14.7 16 13Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Fair employment practices
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Driver welfare programs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Community development initiatives
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Accessible mobility solutions
                </li>
              </ul>
            </div>
            
            {/* Governance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Governance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Transparent business practices
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Ethical data management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Regulatory compliance
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Stakeholder accountability
                </li>
              </ul>
            </div>
          </div>
          
          {/* Impact Stats */}
          <div className="mt-16 bg-green-600 rounded-3xl p-8 text-white">
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
            {services.map((service, index) => {
              const getServiceIcon = (title: string) => {
                // ... (Your switch statement with SVG definitions remains the same)
                switch (title) {
                  case 'ETS':
                    // Corporate mobility - briefcase with car
                    return (
                      <svg className="w-12 h-12 text-white bg-green-600 rounded-full p-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 2h4c.55 0 1 .45 1 1v1h4c1.1 0 2 .9 2 2v2h-2v-2h-4v1c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V6H5v2H3V6c0-1.1.9-2 2-2h4V3c0-.55.45-1 1-1zm8.92 8.01C18.72 9.42 18.16 9 17.5 9h-11c-.66 0-1.22.42-1.42 1.01L3 16v5c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-5l-2.08-5.99zM6.5 19c-.83 0-1.5-.67-1.5-1.5S5.67 16 6.5 16s1.5.67 1.5 1.5S7.33 19 6.5 19zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 14l1.5-3.5h11L19 14H5z" />
                      </svg>
                    );

                  case 'Rentals':
                    // Car key
                    return (
                      <svg className="w-8 h-8 text-white bg-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4.5 3.5L9 14l1.5 1.5L12 14h5v-2h-5.5zM21 11v5c0 1.1-.9 2-2 2h-1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H8v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H5c-1.1 0-2-.9-2-2v-5l2-6h14l2 6zm-2 0H5v5h14v-5zm-1.5-1l-1.1-3H7.6l-1.1 3h11z" />
                      </svg>
                    );

                  case 'Airport':
                    // Airplane taking off
                    return (
                      <svg className="w-8 h-8 text-white bg-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                        <path d="M2.5 19h19v2h-19z" opacity="0.3" />
                      </svg>
                    );

                  case 'Events':
                    // Red carpet with stars
                    return (
                      <svg className="w-8 h-8 text-white bg-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 2v16h12V2H6zm6 13l-2.5 1.5.75-2.85L8 11.5l2.85-.2L12 8.5l1.15 2.8 2.85.2-2.25 2.15.75 2.85L12 15z" />
                        <path d="M4 20h16v2H4z" />
                        <path d="M3 18h2v2H3zm16 0h2v2h-2z" />
                      </svg>
                    );

                  case 'Intercity':
                    // Highway road with distance markers
                    return (
                      <svg className="w-8 h-8 text-white bg-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm1.5-9H17V12h4.46L19.5 9.5zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S4.5 16.17 4.5 17s.67 1.5 1.5 1.5zM20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.1.9-2 2-2h14v4h3zM8 6H3v6h5V6z" />
                        <path d="M10 3h2v3h-2zm0 5h2v3h-2zm0 5h2v3h-2z" opacity="0.6" />
                      </svg>
                    );

                  case 'And More':
                    // Grid with plus/more indicator
                    return (
                      <svg className="w-8 h-8 text-white bg-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6z" />
                        <path d="M19 14h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z" />
                      </svg>
                    );

                  default:
                    return (
                      <svg className="w-8 h-8 text-white bg-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    );
                }
              };

              return (
                <Card key={index} className="hover:shadow-xl transition-shadow border border-gray-300">
                  <CardHeader>
                    {/* *** MODIFIED BLOCK START *** */}
                    <div className="flex items-center mb-5">
                      {/* Reduced size from w-16 h-16 to w-8 h-8 */}
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-5">
                        {/* Note: The SVG itself is w-8 h-8, so this wrapper size will make it smaller relative to the title's previous spacing */}
                        {getServiceIcon(service.title)}
                      </div>
                      <CardTitle className="text-black font-bold text-2xl">{service.title}</CardTitle>
                    </div>
                    {/* *** MODIFIED BLOCK END *** */}
                    <CardDescription className="text-gray-800">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-800">
                          <span className="w-2 h-2 bg-[#48A66F] rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}

            {/* Also applying the changes to the 'And More' Card */}
            <Card className="hover:shadow-xl transition-shadow border border-gray-300">
              <CardHeader>
                  {/* *** MODIFIED BLOCK START *** */}
                  <div className="flex items-center mb-4">
                      {/* Reduced size from w-16 h-16 to w-8 h-8 */}
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-5">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,6H13V9H16V11H13V14H11V11H8V9H11V6Z" />
                          </svg>
                      </div>
                      <CardTitle className="text-black font-bold text-2xl">And More</CardTitle>
                  </div>
                  {/* *** MODIFIED BLOCK END *** */}
                  <CardDescription className="text-gray-800">Custom solutions tailored to your specific requirements</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col">
                  <p className="text-sm text-gray-800">
                      Contact us to discuss your mobility needs and discover.
                      We're here to help you.
                  </p>
                  {/* <Link 
                    href="/contact" 
                    className="text-white  hover:underline mt-4 inline-block"
                    >
                    Contact Us
                  </Link> */}
              </CardContent>
              <Button size="sm" variant="outline"
                className="px-5 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white w-full sm:w-auto rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg mt-0 mx-auto"
                asChild
              >
                <Link href="/contact">
                    Contact Us
                </Link>
              </Button>
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

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
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