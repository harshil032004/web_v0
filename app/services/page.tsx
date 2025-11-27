import { Navigation } from "@/components/navigation";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Car, Users, MapPin, Plane, Clock, Shield, Star, CreditCard, Phone, CheckCircle, Award, Briefcase, Heart, Zap } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Premium Transportation Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Our Premium <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow">
            From quick city rides to long-distance travel, we offer comprehensive transportation solutions tailored to your needs with comfort and reliability.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Car className="h-4 w-4 mr-2" />
              Choose Your Service
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Ride Options for Every Need
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Whether it's a quick trip or a long journey, we have the perfect solution for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              icon={Car}
              title="Local City Rides"
              description="Quick and convenient rides within the city for daily commutes, shopping, and errands with instant booking and real-time tracking."
              buttonText="Book City Ride"
              color="text-blue-600"
            />
            <ServiceCard
              icon={Plane}
              title="Airport Transfer"
              description="Reliable airport pickups and drops with flight tracking, meet & greet service, and luggage assistance for stress-free travel."
              buttonText="Book Airport Transfer"
              color="text-green-600"
            />
            <ServiceCard
              icon={MapPin}
              title="Outstation Travel"
              description="Comfortable long-distance travel with experienced drivers, flexible packages, and multiple vehicle options for intercity journeys."
              buttonText="Book Outstation"
              color="text-purple-600"
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              Specialized Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Tailored solutions for every occasion and requirement
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Briefcase className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Corporate Travel</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Dedicated corporate solutions with billing, reporting, and priority booking for businesses
              </p>
            </div>
            
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Wedding & Events</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Special occasion transportation with decorated vehicles and premium service
              </p>
            </div>
            
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Hourly Rental</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Flexible hourly packages for multiple stops, waiting time, and extended trips
              </p>
            </div>

            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Medical Emergency</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Priority booking for medical emergencies and hospital visits with trained drivers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Surge Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent pricing with no hidden charges or surge pricing during peak hours
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Booking</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick and easy booking process with instant confirmation and driver assignment
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safety First</h3>
              <p className="text-gray-600 leading-relaxed">
                Verified drivers, GPS tracking, and 24/7 support for your peace of mind
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
            Ready to Experience Premium Service?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust Evera Cabs for their transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 shadow-lg" asChild>
              <Link href="/book">
                <Car className="h-5 w-5 mr-2" />
                Book Your Ride Now
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />
              Call: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}