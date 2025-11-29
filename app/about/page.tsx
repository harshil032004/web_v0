import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Users, Car, Award, Clock, Star, Phone, CheckCircle, Target, Eye, Heart, Zap } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/animated-counter";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="bg-gradient-to-r from-[#48A66F] to-[#335185] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Our Story & Values
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            About <span className="text-yellow-400">Evera Cabs</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow">
            India's most trusted electric cab service, committed to providing safe, reliable, and sustainable mobility solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Car className="h-4 w-4 mr-2" />
                Our Journey
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Revolutionizing Urban Mobility</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Evera Cabs is pioneering India's transition to all-electric mobility. We're not just another cab service – we're building a cleaner, safer, and more reliable commuting experience for millions of Indians.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Unlike traditional cab services, our app ensures drivers can't cancel your ride. Combined with our all-electric fleet and professionally certified full-time drivers, we're addressing the core issues of safety, comfort, and environmental responsibility.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">100% Electric Fleet - Zero Emissions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">No Driver Cancellations Policy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Professionally Certified Full-time Drivers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Pan-India Service Coverage</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6">
                  <Car className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    <AnimatedCounter end={25000000} />
                  </div>
                  <div className="text-sm text-gray-600">Green KM Travelled</div>
                </div>
                
                <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                
                <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Certified Drivers</div>
                </div>
                
                <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">4.8★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driving towards a sustainable and comfortable future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To revolutionize India's mobility by building the nation's largest all-electric cab network that prioritizes safety, comfort, and environmental sustainability while eliminating common pain points like driver cancellations and surge pricing.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become India's most trusted and preferred electric mobility partner, setting new benchmarks in customer experience, environmental responsibility, and urban mobility while helping cities breathe cleaner air.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4 mr-2" />
              What Drives Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Safety First</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Your safety is paramount. Verified drivers, GPS tracking, and 24/7 support ensure secure journeys.
              </p>
            </div>
            
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Reliability</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                No cancellations, no surge pricing. Count on us for punctual and dependable service.
              </p>
            </div>
            
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Customer Care</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Your satisfaction drives us. 24/7 support and personalized service every time.
              </p>
            </div>

            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Excellence</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Continuous innovation and improvement to deliver the best experience possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the Evera Cabs Family
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the future of mobility with India's leading all-electric cab service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 shadow-lg" asChild>
              <Link href="/book">
                <Car className="h-5 w-5 mr-2" />
                Book Your First Ride
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}