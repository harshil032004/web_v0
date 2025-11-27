import { Navigation } from "@/components/navigation";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Car, Users, MapPin, Plane, Clock, Shield, Star, CreditCard, Phone, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Premium Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive transportation solutions designed to meet all your travel needs with comfort, safety, and reliability.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Ride</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick city rides to long-distance journeys, we have the right service for every occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local City Rides</h3>
              <p className="text-gray-600 mb-6">
                Quick and convenient rides within the city for daily commutes, shopping trips, and errands. Available 24/7 with instant booking.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Instant booking & confirmation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real-time GPS tracking
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Multiple vehicle options
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Book City Ride</Button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Plane className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Airport Transfer</h3>
              <p className="text-gray-600 mb-6">
                Reliable airport pickups and drops with flight tracking, meet & greet service, and luggage assistance for stress-free travel.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Flight tracking & monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Meet & greet service
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Luggage assistance
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">Book Airport Transfer</Button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Outstation Travel</h3>
              <p className="text-gray-600 mb-6">
                Comfortable long-distance travel with experienced drivers, flexible packages, and multiple vehicle options for intercity journeys.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Experienced drivers
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Flexible packages
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Multiple vehicle options
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Book Outstation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Specialized services for your unique transportation needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Corporate Travel</h3>
              <p className="text-gray-600">Dedicated corporate solutions with billing and reporting</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wedding & Events</h3>
              <p className="text-gray-600">Special occasion transportation with decorated vehicles</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hourly Rental</h3>
              <p className="text-gray-600">Flexible hourly packages for multiple stops and waiting</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Medical Emergency</h3>
              <p className="text-gray-600">Priority booking for medical emergencies and hospital visits</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Premium Service?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust EveraCabs for their transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Book Your Ride Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
              <Phone className="h-5 w-5 mr-2" />
              Call: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}