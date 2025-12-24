"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Car, Award, Clock, CheckCircle, Target, Eye, Heart, Leaf, Sparkles, TrendingUp, Globe, Wind, Droplets, Section } from "lucide-react";
import Link from "next/link";
// import { AnimatedCounter } from "@/components/animated-counter";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 transition-all duration-300">
      <Navigation />

      <section className="py-20 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Bouncing badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-green-600/10 border border-green-600/30 text-green-700 rounded-full text-sm font-semibold mb-6 shadow-xl backdrop-blur-sm"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
          >
            <Award className="h-4 w-4 mr-2" />
            Our Story & Values
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            <span className="text-green-600">About</span> Evera Cabs
          </h1>
          <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed drop-shadow">
            India's most trusted electric cab service, committed to providing safe, reliable, and sustainable mobility solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white/20 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Bouncing badge */}
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-green-600/10 border border-green-600/30 text-green-700 rounded-full text-sm font-semibold mb-6 shadow-xl backdrop-blur-sm"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Car className="h-4 w-4 mr-2" />
                Our Journey
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Revolutionizing Urban Mobility</h2>
              <p className="text-lg text-black mb-6 leading-relaxed">
                Evera Cabs is pioneering India's transition to all-electric mobility. We're not just another cab service – we're building a cleaner, safer, and more reliable commuting experience for millions of Indians.
              </p>
              <p className="text-lg text-black mb-6 leading-relaxed">
                Unlike traditional cab services, our app ensures drivers can't cancel your ride. Combined with our all-electric fleet and professionally certified full-time drivers, we're addressing the core issues of safety, comfort, and environmental responsibility.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <span className="text-black">100% Electric Fleet - Zero Emissions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <span className="text-black">No Driver Cancellations Policy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <span className="text-black">Professionally Certified Full-time Drivers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <span className="text-black">Pan-India Service Coverage</span>
                </div>
              </div>
            </div>
            
            <div className="bg-linear-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
              {/* Large Impact Card */}
              <div className="bg-linear-to-br from-green-600 to-emerald-700 rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                
                <div className="relative z-10">
                  <Globe className="h-16 w-16 mb-6 opacity-90" />
                  <h3 className="text-3xl font-bold mb-4">Our Carbon Impact</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-lg font-medium">CO₂ Saved</span>
                      <span className="text-2xl font-bold">1.25M+ kg</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-lg font-medium">Trees Equivalent</span>
                      <span className="text-2xl font-bold">50,000+</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-lg font-medium">Green KM</span>
                      <span className="text-2xl font-bold">25M+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
          {/* Header */}
          <div className="text-center mb-8">
            {/* Bouncing badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-green-600/10 border border-green-600/30 text-green-700 rounded-full text-sm font-semibold mb-6 shadow-xl backdrop-blur-sm"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              <Leaf className="h-4 w-4 mr-2" />
              Driving Towards a Greener Future
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Every Ride Makes a
              <span className="block text-transparent bg-clip-text bg-green-600 mt-2">
                Difference
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join us in our mission to revolutionize urban mobility while protecting the planet.
              With every electric ride, you're contributing to cleaner air and a sustainable future.
            </p>
          </div>
          
          {/* Mission & Vision Cards */}
          <div className="absolute inset-0 opacity-40" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-1">
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-black/20">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Our Mission</h3>
                <p className="text-gray-800 leading-relaxed">
                  To revolutionize India's mobility by building the nation's largest all-electric cab network that prioritizes safety, comfort, and environmental sustainability while eliminating common pain points like driver cancellations and surge pricing.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-black/20">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h3>
                <p className="text-gray-800 leading-relaxed">
                  To become India's most trusted and preferred electric mobility partner, setting new benchmarks in customer experience, environmental responsibility, and urban mobility while helping cities breathe cleaner air.
                </p>
              </Card>
            </div>
          </div>
          {/* Main Content Grid */}
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our <span className="text-green-600">Sustainability</span> Journey
                </h2>
              </div>

              {/* Grid Layout - Clean and Aligned */}
              <div className="relative max-w-6xl mx-auto">
                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                  {/* Card 1 */}
                  <div className="flex justify-center">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xs">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Wind className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 text-center">Zero Emissions</h3>
                      <p className="text-sm text-gray-600 text-center mt-2">100% electric fleet reducing carbon footprint</p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex justify-center">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xs">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 text-center">Energy Efficiency</h3>
                      <p className="text-sm text-gray-600 text-center mt-2">Optimized routes and smart charging systems</p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex justify-center">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xs">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 text-center">Growing Impact</h3>
                      <p className="text-sm text-gray-600 text-center mt-2">Expanding network for greater environmental benefit</p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="flex justify-center">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xs">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Droplets className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 text-center">Renewable Energy</h3>
                      <p className="text-sm text-gray-600 text-center mt-2">Solar-powered charging infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 bg-white/20 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            {/* Bouncing badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-green-600/10 border border-green-600/30 text-green-700 rounded-full text-sm font-semibold mb-6 shadow-xl backdrop-blur-sm"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              <Heart className="h-4 w-4 mr-2" />
              What Drives Us
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center text-black bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-black/20 hover:bg-black/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Safety First</h3>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Your safety is paramount. Verified drivers, GPS tracking, and 24/7 support ensure secure journeys.
              </p>
            </div>
            
            <div className="text-center text-black bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-black/20 hover:bg-black/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Reliability</h3>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                No cancellations, no surge pricing. Count on us for punctual and dependable service.
              </p>
            </div>
            
            <div className="text-center text-black bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-black/20 hover:bg-black/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Customer Care</h3>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Your satisfaction drives us. 24/7 support and personalized service every time.
              </p>
            </div>

            <div className="text-center text-black bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-black/20 hover:bg-black/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Excellence</h3>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Continuous innovation and improvement to deliver the best experience possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="p-12 text-center py-10 relative overflow-hidden inset-0 opacity-100">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Every journey with Evera Cabs contributes to a cleaner environment. 
              Download our app and start your sustainable commute today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="/book">
                  Book Your Green Ride
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-black hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}