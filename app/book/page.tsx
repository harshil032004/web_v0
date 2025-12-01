"use client";

import { Navigation } from "@/components/navigation";
import { BookingForm } from "@/components/booking-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Star, Phone, CheckCircle, Zap, Award, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BookPage() {
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#48A66F] to-[#335185] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Instant Booking • Zero Waiting
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Book Your <span className="text-yellow-400">Perfect</span> Ride
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Experience premium electric mobility with instant booking, transparent pricing, and professional service.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-blue-300" />
              <span>Safe & Secure</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2 text-yellow-300" />
              <span>4.8★ Rated Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-gradient-to-b from-slate-100 via-gray-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Booking Row */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Book Your Ride</h2>
                  <p className="text-slate-200">Fill in the details below for instant booking</p>
                </div>
                <div className="p-8">
                  <BookingForm />
                </div>
              </div>
            </div>

            {/* Why Choose Us - Extended */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-shadow duration-300 h-full bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-[#48A66F]" />
                    Why Choose Evera?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-green-50 border border-green-100">
                      <Shield className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Verified Drivers</p>
                        <p className="text-sm text-gray-600 leading-relaxed">All our drivers are background verified, professionally trained, and committed to your safety and comfort.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-blue-50 border border-blue-100">
                      <Clock className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">On-Time Guarantee</p>
                        <p className="text-sm text-gray-600 leading-relaxed">We guarantee punctual service. If we're late, you get ride credits for your next journey.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-yellow-50 border border-yellow-100">
                      <Star className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">4.8★ Rating</p>
                        <p className="text-sm text-gray-600 leading-relaxed">Trusted by over 50,000+ satisfied customers across multiple cities with excellent service ratings.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-purple-50 border border-purple-100">
                      <CheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Transparent Pricing</p>
                        <p className="text-sm text-gray-600 leading-relaxed">No surge pricing, no hidden charges. What you see is what you pay - fair and transparent always.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Support Cards Row */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Support */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 mr-3" />
                  <h3 className="font-bold text-xl">Need Help?</h3>
                </div>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">Our dedicated customer support team is available 24/7 to assist you with any queries or concerns.</p>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 01149540005
                </Button>
              </CardContent>
            </Card>

            {/* App Download */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 mr-3" />
                  <h3 className="font-bold text-xl">Download Our App</h3>
                </div>
                <p className="text-emerald-100 mb-6 text-base leading-relaxed">Get exclusive offers, faster booking experience, and real-time ride tracking on your mobile device.</p>
                <div className="relative">
                  <Button 
                    className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-semibold py-3"
                    onClick={() => {
                      try {
                        setIsAppDropdownOpen(!isAppDropdownOpen);
                      } catch (error) {
                        console.error('Failed to toggle dropdown:', error);
                      }
                    }}
                  >
                    Get Mobile App
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                  
                  {isAppDropdownOpen && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg shadow-lg border z-50">
                      <Link 
                        href="https://qrcodes.pro/2g0L5e" 
                        target="_blank"
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-t-lg"
                        onClick={() => {
                          try {
                            setIsAppDropdownOpen(false);
                          } catch (error) {
                            console.error('Failed to close dropdown:', error);
                          }
                        }}
                      >
                        <Image src="/Android-icon.png" alt="Android" width={20} height={20} className="mr-3" />
                        Download for Android
                      </Link>
                      <Link 
                        href="https://apps.apple.com/in/app/evera/id1625582988" 
                        target="_blank"
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-b-lg"
                        onClick={() => setIsAppDropdownOpen(false)}
                      >
                        <Image src="/apple.png" alt="iOS" width={20} height={20} className="mr-3" />
                        Download for iOS
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#48A66F] to-[#335185]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Live Statistics</h2>
            <p className="text-lg text-white/80">Real-time data from our platform</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">150+</div>
              <p className="text-white/80">Active Drivers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2.5k+</div>
              <p className="text-white/80">Daily Rides</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <p className="text-white/80">Cities Covered</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">4.8★</div>
              <p className="text-white/80">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-lg text-gray-600">Join our community of satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-[#48A66F] mb-2">50K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-[#335185] mb-2">1M+</div>
              <p className="text-gray-600">Rides Completed</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-[#48A66F] mb-2">99.5%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}