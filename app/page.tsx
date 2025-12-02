"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
// import { FeatureCard } from "@/components/feature-card";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollAnimation } from "@/components/scroll-animation";
import Link from "next/link";
import Image from "next/image";
import { Shield, Star, Car, Users, CreditCard, Clock, MapPin, Phone, CheckCircle, Award, Smartphone, Headphones, X, Leaf, Heart, Plane, Calendar, Navigation as NavigationIcon, Route } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

interface ServiceDetails {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  availability: string;
  bookingInfo: string;
}

const serviceDetails: Record<string, ServiceDetails> = {
  "Airport Transfer": {
    title: "Airport Transfer",
    description: "Professional airport pickup and drop-off services with flight tracking and on-time guarantee.",
    features: [
      "Flight tracking for delayed arrivals",
      "Meet & greet service at arrivals",
      "Professional chauffeurs",
      "Clean, comfortable vehicles",
      "24/7 availability",
      "Fixed pricing - no surge charges",
      "Free waiting time up to 60 minutes",
      "SMS and call notifications"
    ],
    pricing: "Starting from ₹899 for Delhi Airport",
    availability: "Available 24/7 across Delhi-NCR",
    bookingInfo: "Book 2 hours in advance for guaranteed availability"
  },
  "Rentals": {
    title: "Car Rentals",
    description: "Flexible car rental solutions for your personal and business needs with complete freedom.",
    features: [
      "Hourly, daily, and weekly rentals",
      "Self-drive and chauffeur options",
      "Multiple vehicle categories",
      "Comprehensive insurance coverage",
      "24/7 roadside assistance",
      "Fuel-efficient electric vehicles",
      "Transparent pricing",
      "Easy online booking and payment"
    ],
    pricing: "Starting from ₹199/hour or ₹1,999/day",
    availability: "Available across Delhi, Gurgaon, Noida",
    bookingInfo: "Instant booking available with valid driving license"
  },
  "City Rides": {
    title: "City Rides",
    description: "Convenient point-to-point transportation within the city with professional drivers.",
    features: [
      "Quick city commutes",
      "Professional certified drivers",
      "Real-time GPS tracking",
      "Multiple payment options",
      "Clean electric vehicles",
      "No surge pricing",
      "Instant booking",
      "Safe and secure rides"
    ],
    pricing: "Starting from ₹99 for first 5km",
    availability: "Coming soon to Delhi-NCR",
    bookingInfo: "Pre-register now for early access and special offers"
  },
  "Intercity Rides": {
    title: "Intercity Rides",
    description: "Long-distance travel solutions with experienced drivers and comfortable vehicles.",
    features: [
      "Long-distance travel comfort",
      "Experienced highway drivers",
      "Regular rest stops",
      "24/7 customer support",
      "Vehicle breakdown assistance",
      "Flexible pickup times",
      "Competitive fixed pricing",
      "Safe and reliable service"
    ],
    pricing: "Starting from ₹12/km with driver allowance",
    availability: "Coming soon - Delhi to major cities",
    bookingInfo: "Book 24 hours in advance for outstation trips"
  }
};

export default function Home() {
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-dropdown]')) {
        setIsAppDropdownOpen(false);
      }
    };

    if (isAppDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isAppDropdownOpen]);

  return (
    <>
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ${isModalOpen ? 'blur-sm' : ''} transition-all duration-300`}>
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <ScrollAnimation>
        <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden min-h-[100vh] sm:min-h-[600px] lg:min-h-[700px] flex items-center bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-white border border-green-200 text-black rounded-full text-sm font-semibold shadow-2xl transition-all border-gray-300">
                  <Award className="h-4 w-4 mr-2 text-green-600" />
                  India's Most Trusted Cab Service
                </div>
                
                {/* Main Heading - Uber Style */}
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight">
                    <span className="block animate-slide-in-left">Book Your</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-600 animate-slide-in-right animation-delay-200">Perfect Ride</span>
                  </h1>
                  <div className="w-105 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-expand-width animation-delay-400"></div>
                </div>
                
                {/* Description */}
                <p className="text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light animate-fade-in animation-delay-600">
                  Experience premium cab services with <span className="font-semibold text-gray-900">EVs</span>, <span className="font-semibold text-gray-900">transparent pricing</span>, and <span className="font-semibold text-gray-900">experienced drivers</span>.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-800">
                  <div className="relative w-full sm:w-auto" data-dropdown>
                    <Button 
                      size="lg" 
                      className="bg-black hover:bg-gray-800 text-white px-8 py-4 w-full sm:w-auto rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsAppDropdownOpen(!isAppDropdownOpen);
                      }}
                    >
                      <Smartphone className="h-5 w-5 mr-2" />
                      Download App
                    </Button>
                    
                    {isAppDropdownOpen && (
                      <div className="absolute top-full mt-2 left-0 right-0 sm:left-0 sm:right-auto bg-white rounded-xl shadow-2xl border border-gray-100 min-w-[220px] z-50 animate-fade-in">
                        <Link 
                          href="https://qrcodes.pro/2g0L5e" 
                          target="_blank"
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-t-xl transition-colors duration-200"
                          onClick={() => setIsAppDropdownOpen(false)}
                        >
                          <Image src="/Android-icon.png" alt="Android" width={20} height={20} className="mr-3" />
                          Download for Android
                        </Link>
                        <Link 
                          href="https://apps.apple.com/in/app/evera/id1625582988" 
                          target="_blank"
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-b-xl transition-colors duration-200"
                          onClick={() => setIsAppDropdownOpen(false)}
                        >
                          <Image src="/apple.png" alt="iOS" width={20} height={20} className="mr-3" />
                          Download for iOS
                        </Link>
                      </div>
                    )}
                  </div>
                  <Button size="lg" variant="outline" className="px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white w-full sm:w-auto rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg" asChild>
                    <Link href="/book">
                      Book Ride
                    </Link>
                  </Button>
                </div>

                {/* Features */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-center lg:justify-start animate-fade-in animation-delay-1000">
                  <div className="flex items-center justify-center lg:justify-start group">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">GPS Enabled</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start group">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start group">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Safe & Secure</span>
                  </div>
                </div>
              </div>
              
              {/* Right Illustration */}
              <div className="flex justify-center">
                <Image 
                  src="/concept.png" 
                  alt="Book Your Perfect Ride" 
                  width={400} 
                  height={300} 
                  className="w-full max-w-full h-auto object-contain rounded-xl shadow-2xl border border-gray-300" 
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Electric Cab Service Section */}
      <section className="py-12 sm:py-16 lg:py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-4">India's All Electric Cab Service</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="flex justify-center order-1 lg:order-1">
              <div className="flex justify-center">
                <Image
                  src="/charging.jpg" 
                  alt="Electric Cab"
                  width={400}
                  height={300}
                  className="w-full max-w-full h-auto object-contain rounded-xl shadow-2xl border border-gray-300"
                />
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed font-semibold">
                Evera Cabs is soon to become India's biggest network of all-electric cabs that you can book using our App. Not only have we created an all-electric cab service to help reduce carbon emissions being released by diesel/petrol – run cabs on a daily basis, we are also addressing safety and comfort issues through a best in class commuting experience powered by our fleet of all-electric cars, professionally certified and full-time drivers combined!
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed font-semibold">
                Unlike other cab services, our app does not allow drivers to cancel your ride. This is only one small aspect of an all-electric cab service that will help India commute in a safe & comfortable manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 sm:py-16 lg:py-20 overflow-hidden relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-4">More Than Just An</h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600">All Electric Cab Service</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center text-green-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-3 text-white border-black bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CreditCard className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">NO SURGE</h4>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Fixed pricing regardless of traffic or demand. No surprise charges.
              </p>
            </div>
            
            <div className="text-center text-green-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-3 text-white border-black bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <X className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">NO SERVICE DENIALS</h4>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Professional drivers can't cancel your ride. Only you control your trip.
              </p>
            </div>
            
            <div className="text-center text-green-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-3 text-white border-black bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Leaf className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">NO EMISSIONS</h4>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                100% electric fleet. Zero emissions. Cleaner cities.
              </p>
            </div>
                        
            <div className="text-center text-green-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-3 text-white border-black bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">PROFESSIONAL DRIVERS</h4>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Trained, certified drivers. Hassle-free rides guaranteed.
              </p>
            </div>
            
            <div className="text-center text-green-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-3 text-white border-black bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">COMFORT</h4>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Smooth electric vehicles. No gears, no jerks, maximum comfort.
              </p>
            </div>
            
            <div className="text-center text-green-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-3 text-white border-black bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">SAFETY</h4>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Background-checked drivers. Advanced safety features. Your security first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/Website-banner-2.jpg)'}}></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="mb-4">
                <Car className="h-16 w-16 mx-auto text-white drop-shadow-lg" />
              </div>
              <div className="text-5xl font-bold mb-2 drop-shadow-lg">
                <AnimatedCounter end={25000000} />
              </div>
              <div className="text-lg font-bold tracking-wide drop-shadow-lg">GREEN KM TRAVELLED</div>
            </div>
            
            <div>
              <div className="mb-4">
                <div className="h-16 w-16 mx-auto flex items-center justify-center">
                  <svg className="h-16 w-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
              <div className="text-5xl font-bold mb-2 drop-shadow-lg">
                <AnimatedCounter end={50000} />
              </div>
              <div className="text-lg font-bold tracking-wide drop-shadow-lg">TREES SAVED</div>
            </div>
            
            <div>
              <div className="mb-4">
                <div className="h-16 w-16 mx-auto flex items-center justify-center">
                  <svg className="h-16 w-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 10.1 14.1 11 13 11V22H11V11C9.9 11 9 10.1 9 9V7H3V9C3 10.1 2.1 11 1 11V22H23V11C21.9 11 21 10.1 21 9Z" />
                  </svg>
                </div>
              </div>
              <div className="text-5xl font-bold mb-2 drop-shadow-lg">
                <AnimatedCounter end={1250000} />
              </div>
              <div className="text-lg font-bold tracking-wide drop-shadow-lg">CARBON EMISSIONS SAVED</div>
            </div>
            
            <div>
              <div className="mb-4">
                <div className="h-16 w-16 mx-auto flex items-center justify-center">
                  <svg className="h-16 w-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 3c.28 0 .5.22.5.5V6h2.5c.28 0 .5.22.5.5v14c0 .28-.22.5-.5.5s-.5-.22-.5-.5V18h-2v2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-17c0-.28.22-.5.5-.5zM17 7v10h2V7h-2zM5 3c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-1v4h10v-4H7c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-1v4c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-4H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h4zm2 3l-3 5h2v3l3-5H7V6z" />
                  </svg>
                </div>
              </div>
              <div className="text-5xl font-bold mb-2 drop-shadow-lg">
                <AnimatedCounter end={200} />
              </div>
              <div className="text-lg font-bold tracking-wide drop-shadow-lg">CHARGING STATIONS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Rides Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Professional Drivers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services */}
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e0e7ff\' fill-opacity=\'0.3\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left side - Headings */}
            <div>
              <div className="mb-8 relative">
                {/* <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11C5.84 5 5.28 5.42 5.08 6.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse">
                    <svg className="w-3 h-3 text-white ml-0.5 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                    </svg>
                  </div>
                </div> */}
                {/* <div className="flex justify-center mt-2 space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                </div> */}
              </div>
              <h2 className="text-4xl md:text-5xl text-black font-bold bg-clip-text mb-6">Our Premium Services</h2>
              <p className="text-xl text-gray-800 leading-relaxed">From quick city rides to long-distance travel, we offer comprehensive mobility solutions tailored to your needs.</p>
            </div>
            
            {/* Right side - 2x2 Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
              <ServiceCard
                title="Airport Transfer"
                description="On-time pickups. Flight tracking. Stress-free travel."
                buttonText="Learn More"
                color="text-green-600"
                onClick={() => {
                  setSelectedService(serviceDetails["Airport Transfer"]);
                  setIsModalOpen(true);
                }}
              />
              <ServiceCard
                title="Rentals"
                description="Your vehicle. Your terms. Complete flexibility."
                buttonText="Learn More"
                color="text-green-600"
                onClick={() => {
                  setSelectedService(serviceDetails["Rentals"]);
                  setIsModalOpen(true);
                }}
              />
              <ServiceCard
                title="City Rides"
                description="Professional drivers. Safe journeys. Every time."
                buttonText="Learn More"
                color="text-green-600"
                onClick={() => {
                  setSelectedService(serviceDetails["City Rides"]);
                  setIsModalOpen(true);
                }}
              />
              <ServiceCard
                title="Intercity Rides"
                description="Long distances. Experienced drivers. Comfort assured."
                buttonText="Learn More"
                color="text-green-600"
                onClick={() => {
                  setSelectedService(serviceDetails["Intercity Rides"]);
                  setIsModalOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e0e7ff\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1.5\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-black/10 text-black rounded-full text-sm font-semibold mb-6 shadow-sm">
              <Clock className="h-4 w-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Book your ride in just 3 simple steps and enjoy a hassle-free travel experience.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-300 via-green-300 to-purple-300"></div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-300 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Book Your Ride</h3>
                <p className="text-gray-800 leading-relaxed text-lg">Enter your pickup and drop location, select your preferred vehicle type, and confirm your booking with ease.</p>
              </div>
            </div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-300 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Track Your Driver</h3>
                <p className="text-gray-800 leading-relaxed text-lg">Get real-time updates on your driver's location and estimated arrival time with live GPS tracking.</p>
              </div>
            </div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-300 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Enjoy Your Ride</h3>
                <p className="text-gray-800 leading-relaxed text-lg">Sit back and relax in our clean, comfortable vehicles with professional drivers and safe journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-60" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fbbf24\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-black/10 text-black rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              Customer Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-black bg-clip-text text-transparent mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Evera Cabs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rajesh Kumar"
              location="Gurgaon"
              rating={5}
              comment="Excellent service! The driver was punctual and the car was clean. Will definitely use again."
            />
            <TestimonialCard
              name="Priya Sharma"
              location="Delhi"
              rating={5}
              comment="Safe and reliable. I use Evera Cabs for all my airport transfers. Highly recommended!"
            />
            <TestimonialCard
              name="Amit Patel"
              location="Noida"
              rating={4}
              comment="Great experience with outstation travel. Professional drivers and fair pricing."
            />
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-black">
              <h2 className="text-4xl font-bold mb-6">Download EveraCabs App</h2>
              <p className="text-xl text-black mb-8">Get the best cab booking experience with our mobile app. Available on both Android and iOS platforms.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg">Easy booking with just a few taps</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg">Real-time tracking and notifications</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg">Multiple payment options</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg">24/7 customer support</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 px-8" asChild>
                  <Link href="https://qrcodes.pro/2g0L5e" target="_blank" className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Download for Android
                  </Link>
                </Button>
                <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 px-8" asChild>
                  <Link href="https://apps.apple.com/in/app/evera/id1625582988" target="_blank" className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Download for iOS
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-transparent backdrop-blur-sm rounded-2xl p-20 shadow-xl border border-gray-300">
                  {/* <div className="absolute inset-0 opacity-50"> */}
                    <Image 
                      src="/AKP02057-Enhanced-NR.jpg" 
                      alt="EveraCabs App Background" 
                      fill
                      className="object-cover rounded-2xl mb-6" 
                    />
                  {/* </div> */}
                <h3 className="text-2xl font-bold text-black mb-4">EveraCabs</h3>
                <p className="text-black mb-6">Your trusted ride partner</p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">4.8★</div>
                    <div className="text-sm text-black">App Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">1M+</div>
                    <div className="text-sm text-black">Downloads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Link href="/" className="flex items-center">
                <Image 
                  src="/Evera-Logo-02-1.svg" 
                  alt="Evera" 
                  width={120} 
                  height={40} 
                  className="h-10 w-auto filter invert brightness-0 contrast-100" 
                  style={{ imageRendering: 'crisp-edges' }}
                  priority
                />
              </Link>
              </div>
              <p className="text-gray-400">Your trusted partner for safe, reliable, and comfortable mobility services.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">City Rides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Airport Transfer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Outstation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Car Rental</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> 01149540005</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> support@everacabs.com</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Service in Delhi-NCR</li>
                <li className="flex items-center"><Headphones className="h-4 w-4 mr-2" /> 24/7 Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Evera Cabs. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>

    {/* Service Details Modal */}
    {isModalOpen && selectedService && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {selectedService.description}
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <CreditCard className="h-4 w-4 text-green-600 mr-2" />
                    Pricing
                  </h4>
                  <p className="text-gray-700">{selectedService.pricing}</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                    Availability
                  </h4>
                  <p className="text-gray-700">{selectedService.availability}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Clock className="h-4 w-4 text-gray-600 mr-2" />
                  Booking Information
                </h4>
                <p className="text-gray-700">{selectedService.bookingInfo}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button 
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <Link href="/book">
                    Book Now
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                  asChild
                >
                  <Link href="/contact">
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
