import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Users, Luggage, Star, Shield, CheckCircle, Award, Zap, Leaf } from "lucide-react";
import Link from "next/link";

export default function FleetPage() {
  const vehicles = [
    {
      name: "Electric Sedan",
      category: "Comfort",
      seats: "4 Seats",
      luggage: "3 Bags",
      features: ["Premium AC", "GPS Navigation", "Premium Interior", "USB Charging"],
      gradient: "from-white-400 to-white-600",
      icon: "🚙",
      price: "$45/day"
    },
    {
      name: "Electric SUV",
      category: "Premium",
      seats: "4 Seats",
      luggage: "4 Bags",
      features: ["Premium AC", "GPS Navigation", "Premium Interior", "USB Charging"],
      gradient: "from-purple-400 to-purple-600",
      icon: "🚘",
      price: "$65/day"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#48A66F] to-[#335185] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            <Leaf className="h-4 w-4 mr-2" />
            100% Electric Fleet
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Our <span className="text-green-500">Premium</span> Electric Fleet
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow">
            Choose from our range of eco-friendly, well-maintained electric vehicles for every occasion and budget. Zero emissions, maximum comfort.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-black/10 text-black rounded-full text-sm font-medium mb-4">
              <Car className="h-4 w-4 mr-2" />
              Choose Your Vehicle
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Vehicle for Every Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              All vehicles are regularly serviced, sanitized, and equipped with modern amenities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${vehicle.gradient} p-8 text-center relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
                      </div>
                      <div className="text-7xl mb-4 relative z-10">{vehicle.icon}</div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-800 shadow-lg">
                          {vehicle.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                          <Leaf className="h-3 w-3 mr-1" />
                          Zero Emissions
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{vehicle.name}</h3>
                          <div className="flex items-center space-x-4 text-gray-600">
                            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                              <Users className="h-4 w-4 mr-1" />
                              <span className="text-sm font-medium">{vehicle.seats}</span>
                            </div>
                            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                              <Luggage className="h-4 w-4 mr-1" />
                              <span className="text-sm font-medium">{vehicle.luggage}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {vehicle.price}
                          </div>
                          <div className="text-sm text-gray-500">Starting from</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          Features Included
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {vehicle.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link href="/book" className="block">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                          Book {vehicle.name}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4 mr-2" />
              Premium Quality
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose Our Fleet?</h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Every vehicle meets the highest standards of quality, safety, and sustainability
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Leaf className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">100% Electric</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Zero emissions for a cleaner environment. All vehicles are fully electric.
              </p>
            </div>

            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Safety First</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Regular safety inspections and maintenance for your peace of mind.
              </p>
            </div>

            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Star className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Clean, well-maintained vehicles with modern amenities and comfort.
              </p>
            </div>

            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Zap className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Latest Tech</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Modern vehicles with latest technology and comfort features.
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
            Ready to Book Your Electric Ride?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose your preferred electric vehicle and enjoy a comfortable, eco-friendly journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 shadow-lg" asChild>
              <Link href="/book">
                <Car className="h-5 w-5 mr-2" />
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}