import { Navigation } from "@/components/navigation";
import { BookingForm } from "@/components/booking-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Clock, Star, Phone, CheckCircle } from "lucide-react";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Book Your Ride</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose your service and book instantly. Safe, reliable, and comfortable rides across India.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Evera?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Verified professional drivers</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">On-time pickup guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">4.8★ average rating</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">No hidden charges</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-blue-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-gray-600 mb-4">Our customer support team is available 24/7 to assist you.</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support: +91 98765 43210
                </Button>
              </Card>

              <Card className="p-6 bg-green-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Download Our App</h3>
                <p className="text-gray-600 mb-4">Get exclusive offers and easier booking experience.</p>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  Download App
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}