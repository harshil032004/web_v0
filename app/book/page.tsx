"use client";

import { Navigation } from "@/components/navigation";
import { BookingForm } from "@/components/booking-form";
import {  } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Star, CheckCircle, Zap, Award } from "lucide-react";
import { useState } from "react";

export default function BookPage() {
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white transition-all duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="text-black bg-white py-12 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-1">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-black/20 backdrop-blur-sm text-black rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Instant Booking • Zero Waiting
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            <span className="text-green-600">Book</span> Your <span className="text-green-600">Best</span> Ride
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience premium electric mobility with instant booking, transparent pricing, and professional service.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-800" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-green-800" />
              <span>Safe & Secure</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2 text-green-800" />
              <span>4.8★ Rated Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 bg-white relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
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
                <div className="p-8 text-md text-black">
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
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 col span-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-800">Join our community of satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-green-600 text-white backdrop-blur-sm rounded-lg p-6 border-3 border-gray-300 shadow-2xl hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <p className="p-2">Happy Customers</p>
            </div>
            <div className="p-6 bg-green-600 text-white backdrop-blur-sm rounded-lg border-3 border-gray-300 shadow-2xl hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold mb-2">1M+</div>
              <p className="p-2">Rides Completed</p>
            </div>
            <div className="p-6 bg-green-600 text-white backdrop-blur-sm rounded-lg border-3 border-gray-300 shadow-2xl hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold mb-2">99.5%</div>
              <p className="p-2">Customer Satisfaction</p>
            </div>
            <div className="p-6 bg-green-600 text-white backdrop-blur-sm rounded-lg border-3 border-gray-300 shadow-2xl hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold mb-2">4.8★</div>
              <p className="p-2">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}