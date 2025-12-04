import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/navigation";
import { DollarSign, Headphones, MapPin, Shield, CheckCircle } from "lucide-react";

export default function DriverOnboarding() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-green-900">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Become your own boss with
                <span className="text-green-400 block">Evera Cabs</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Apply now to become an Evera driver-partner. Start earning in 24 hours!
              </p>
            </div>
            
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Register now as Driver Partner</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter Your Name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter Your Email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter Your Phone Number" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <select id="city" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select City</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                      <option>Chennai</option>
                      <option>Hyderabad</option>
                      <option>Pune</option>
                    </select>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
                    Submit Your Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Freedom Of Work, Daily Payments</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Daily payments 365 days</h3>
              <p className="text-gray-600">Get paid daily for your rides. No waiting for weekly or monthly payments.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 helpline for your support</h3>
              <p className="text-gray-600">Round the clock support for all your queries and assistance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Get a booking on your way home</h3>
              <p className="text-gray-600">Smart algorithm ensures you get rides even on your way back home.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Insurance Coverage</h3>
              <p className="text-gray-600">Complete insurance coverage for you and your vehicle during rides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Driver Requirements</h2>
            <p className="text-xl text-gray-600">Simple requirements to get started</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Documents Required</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    Valid Driving License
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    Aadhaar Card
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    PAN Card
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    Vehicle Registration Certificate
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    Vehicle Insurance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    Police Verification Certificate
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Eligibility Criteria</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    Age: 21-60 years
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    Minimum 1 year driving experience
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    Clean driving record
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    Vehicle age: Less than 10 years
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    4-door sedan or hatchback
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    Valid commercial permit
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of drivers who are already earning with Evera Cabs
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg">
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
}