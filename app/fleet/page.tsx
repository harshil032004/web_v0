import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Users, Luggage, Star, Shield, CheckCircle, Phone } from "lucide-react";

export default function FleetPage() {
  const vehicles = [
    {
      name: "Hatchback",
      category: "Economy",
      seats: "4 Seats",
      luggage: "2 Bags",
      features: ["AC", "GPS", "Music System"],
      price: "₹12/km",
      image: "🚗",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Sedan",
      category: "Comfort",
      seats: "4 Seats",
      luggage: "3 Bags",
      features: ["AC", "GPS", "Premium Interior", "Phone Charger"],
      price: "₹15/km",
      image: "🚙",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "SUV",
      category: "Premium",
      seats: "6-7 Seats",
      luggage: "4 Bags",
      features: ["AC", "GPS", "Leather Seats", "Entertainment System"],
      price: "₹20/km",
      image: "🚐",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Luxury Sedan",
      category: "Luxury",
      seats: "4 Seats",
      luggage: "3 Bags",
      features: ["Premium AC", "GPS", "Luxury Interior", "Complimentary Water"],
      price: "₹25/km",
      image: "🚗",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Premium Fleet</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our wide range of well-maintained, clean, and comfortable vehicles for every occasion and budget.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Vehicle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our vehicles are regularly serviced, sanitized, and equipped with modern amenities for your comfort and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className={`${vehicle.color} p-8 text-center`}>
                      <div className="text-6xl mb-4">{vehicle.image}</div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                          {vehicle.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                          <div className="flex items-center space-x-4 text-gray-600">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span className="text-sm">{vehicle.seats}</span>
                            </div>
                            <div className="flex items-center">
                              <Luggage className="h-4 w-4 mr-1" />
                              <span className="text-sm">{vehicle.luggage}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{vehicle.price}</div>
                          <div className="text-sm text-gray-500">Starting from</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Features Included:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {vehicle.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Book {vehicle.name}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Fleet?</h2>
            <p className="text-xl text-gray-600">Every vehicle in our fleet meets the highest standards of quality and safety</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">All vehicles undergo regular safety inspections and maintenance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Clean, well-maintained vehicles with modern amenities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Models</h3>
              <p className="text-gray-600">Modern vehicles with latest technology and comfort features</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sanitized</h3>
              <p className="text-gray-600">Thoroughly cleaned and sanitized after every ride</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Book Your Ride?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your preferred vehicle and enjoy a comfortable, safe journey with EveraCabs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Book Now
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