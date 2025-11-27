"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { HeroSlideshow } from "@/components/hero-slideshow";
// import { FeatureCard } from "@/components/feature-card";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { ScrollToTop } from "@/components/scroll-to-top";
import Link from "next/link";
import Image from "next/image";
import { Shield, Star, Car, Users, CreditCard, Clock, MapPin, Phone, CheckCircle, Award, Smartphone, Headphones, X, Leaf, Heart } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

export default function Home() {
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsAppDropdownOpen(false);
    };

    if (isAppDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isAppDropdownOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section with Slideshow */}
      <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden min-h-[100vh] sm:min-h-[600px] lg:min-h-[700px] flex items-center">
        <HeroSlideshow />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto sm:mx-0">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                India's Most Trusted Cab Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                Book Your
                <span className="text-yellow-400 block">Perfect Ride</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto sm:mx-0 drop-shadow">
                Experience premium taxi services with professional drivers, clean vehicles, and transparent pricing. Available 24/7 across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center sm:justify-start">
                <div className="relative w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 px-8 shadow-lg w-full sm:w-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAppDropdownOpen(!isAppDropdownOpen);
                    }}
                  >
                    <Smartphone className="h-5 w-5 mr-2" />
                    Download App
                  </Button>
                  
                  {isAppDropdownOpen && (
                    <div className="absolute top-full mt-2 left-0 right-0 sm:left-0 sm:right-auto bg-white rounded-lg shadow-lg border min-w-[200px] z-50">
                      <Link 
                        href="https://qrcodes.pro/2g0L5e" 
                        target="_blank"
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-t-lg"
                        onClick={() => setIsAppDropdownOpen(false)}
                      >
                        <Image src="/Android-icon.png" alt="Android" width={20} height={20} className="mr-3" />
                        Download for Android
                      </Link>
                      <Link 
                        href="https://apps.apple.com/in/app/evera/id1625582988" 
                        target="_blank"
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-b-lg"
                        onClick={() => setIsAppDropdownOpen(false)}
                      >
                        <Image src="/apple.png" alt="iOS" width={20} height={20} className="mr-3" />
                        Download for iOS
                      </Link>
                    </div>
                  )}
                </div>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 shadow-lg w-full sm:w-auto" asChild>
                  <Link href="/book">
                    <Car className="h-5 w-5 mr-2" />
                    Book Ride
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-xs sm:text-sm text-white/80 justify-center sm:justify-start">
                <div className="flex items-center justify-center sm:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2" />
                  GPS Enabled
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2" />
                  24/7 Support
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2" />
                  Safe & Secure
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electric Cab Service Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-4">India's All Electric Cab Service</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Evera Cabs is soon to become India's biggest network of all-electric cabs that you can book using our App. Not only have we created an all-electric cab service to help reduce carbon emissions being released by diesel/petrol – run cabs on a daily basis, we are also addressing safety and comfort issues through a best in class commuting experience powered by our fleet of all-electric cars, professionally certified and full-time drivers combined!
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Unlike other taxi services, our app does not allow drivers to cancel your ride. This is only one small aspect of an all-electric cab service that will help India commute in a safe & comfortable manner.
              </p>
            </div>
            
            <div className="flex justify-center order-1 lg:order-2">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/3] bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
                <Image 
                  src="/02Charging-Station-2.jpg" 
                  alt="Electric Cab" 
                  width={400} 
                  height={300} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">More Than Just An</h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">All Electric Cab Service</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CreditCard className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">NO SURGE CHARGE</h4>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                No amount of traffic or demand will bring about a change in the cost of the journey. As a result, customers can book cabs without worrying about absurd prices.
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <X className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">NO SERVICE DENIALS</h4>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Our driver are trained professional who are on duty if on the app. Only customers have the ability to cancel their trip.
              </p>
            </div>
            
            <div className="text-center text-white sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Leaf className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">NO EMISSIONS</h4>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                As our fleet will be all electric, the cars will release no emissions in their lifespan. As a result, cities will eventually be able to breathe easy without worrying about toxic fumes from exhaust pipes.
              </p>
            </div>
                        
            <div className="text-center text-white">
              <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-bold mb-4">PROFESSIONAL DRIVERS</h4>
              <p className="text-blue-100 leading-relaxed">
                Our drivers don't have any facility to cancel your ride. Only customers can cancel their trips. Ride hassle-free with us.
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-bold mb-4">COMFORT</h4>
              <p className="text-blue-100 leading-relaxed">
                Due to the electric nature of our vehicles, the comfort factor too has been upped as the cars operate without gears. This eliminates the jerks and discomfort felt while commuting in a manual car with an inexperienced driver.
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-bold mb-4">SAFETY</h4>
              <p className="text-blue-100 leading-relaxed">
                Our service has placed top priority on passenger safety by conducting comprehensive background checks and installing state of the art safety features within the cars.
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
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
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
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e0e7ff\' fill-opacity=\'0.3\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Car className="h-4 w-4 mr-2" />
              Premium Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Our Premium Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">From quick city rides to long-distance travel, we offer comprehensive transportation solutions tailored to your needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Car}
              title="Local City Rides"
              description="Quick and convenient rides within the city for daily commutes, shopping, and errands with instant booking."
              buttonText="Book City Ride"
              color="text-blue-600"
            />
            <ServiceCard
              icon={Users}
              title="Airport Transfer"
              description="Reliable airport pickups and drops with flight tracking, meet & greet service, and luggage assistance."
              buttonText="Book Airport Transfer"
              color="text-green-600"
            />
            <ServiceCard
              icon={MapPin}
              title="Outstation Travel"
              description="Comfortable long-distance travel with experienced drivers, flexible packages, and multiple vehicle options."
              buttonText="Book Outstation"
              color="text-purple-600"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">Book your ride in just 3 simple steps and enjoy a hassle-free travel experience.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform translate-y-8"></div>
            
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white/20">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-white">Book Your Ride</h3>
                <p className="text-blue-100 leading-relaxed">Enter your pickup and drop location, select your preferred vehicle type, and confirm your booking.</p>
              </div>
            </div>
            
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white/20">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-white">Track Your Driver</h3>
                <p className="text-blue-100 leading-relaxed">Get real-time updates on your driver's location and estimated arrival time with live GPS tracking.</p>
              </div>
            </div>
            
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white/20">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-white">Enjoy Your Ride</h3>
                <p className="text-blue-100 leading-relaxed">Sit back and relax in our clean, comfortable vehicles with professional drivers and safe journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-60" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fbbf24\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              Customer Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Evera Cabs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rajesh Kumar"
              location="Mumbai"
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
              location="Bangalore"
              rating={4}
              comment="Great experience with outstation travel. Professional drivers and fair pricing."
            />
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Download EveraCabs App</h2>
              <p className="text-xl text-blue-100 mb-8">Get the best cab booking experience with our mobile app. Available on both Android and iOS platforms.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-lg">Easy booking with just a few taps</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-lg">Real-time tracking and notifications</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-lg">Multiple payment options</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-lg">24/7 customer support</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8" asChild>
                  <Link href="https://qrcodes.pro/2g0L5e" target="_blank" className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Download for Android
                  </Link>
                </Button>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8" asChild>
                  <Link href="https://qrcodes.pro/2g0L5e" target="_blank" className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Download for iOS
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-32 h-32 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Car className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">EveraCabs</h3>
                <p className="text-blue-100 mb-6">Your trusted ride partner</p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">4.8★</div>
                    <div className="text-sm text-blue-100">App Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1M+</div>
                    <div className="text-sm text-blue-100">Downloads</div>
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
                <Car className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Evera Cabs</span>
              </div>
              <p className="text-gray-400">Your trusted partner for safe, reliable, and comfortable transportation services.</p>
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
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +91 98765 43210</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> info@everacabs.com</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Pan India Service</li>
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
  );
}
