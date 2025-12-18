"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
// import { FeatureCard } from "@/components/feature-card";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollAnimation } from "@/components/scroll-animation";
import Link from "next/link";
import Image from "next/image";
import { Shield, Star, Car, Users, CreditCard, Clock, MapPin, Phone, CheckCircle, Award, Smartphone, Headphones, X, Heart, Leaf, Quote } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

interface ServiceDetails {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  availability: string;
  bookingInfo: string;
}

const HERO_VIDEOS = [
  // "/hero_vid/vid_1.mp4",
  // "/hero_vid/vid_2.mp4",
  // "/hero_vid/vid_3.mp4",
  "/hero_vid/f1.mp4",
];

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      if (HERO_VIDEOS.length === 1) {
        videoRef.current!.currentTime = 0;
        videoRef.current!.play();
      } else{
        setCurrentVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
      }
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    video.play().catch(() => {});
  }, [currentVideo]);


  return (
    <>
    <div className={`min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 ${isModalOpen ? 'blur-sm' : ''} transition-all duration-300`}>
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <ScrollAnimation>
        <section className="min-w-full relative min-h-[65vh] overflow-hidden flex items-center bg-white">

          {/* Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              ref={videoRef}
              src={HERO_VIDEOS[currentVideo]}
              autoPlay
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 z-5 bg-linear-to-r from-gray-900/10 via-gray-900/10 to-gray-900/10"></div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-0 sm:px-1 lg:px-2">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8 animate-fade-in-up">

                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-gray-900/30 border border-gray-100 text-white rounded-full text-sm font-semibold shadow-xl backdrop-blur-sm">
                  <Award className="h-4 w-4 mr-2 text-white" />
                  India's Most Trusted Cab Service
                </div>

                {/* Main Content with Blurred Background */}
                <div className="bg-white/10 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-white/30 shadow-xl">
                  {/* Heading */}
                  <div className="space-y-5 mb-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight">
                      <span className="block animate-slide-in-left">Book Your</span>
                      <span className="block text-transparent  bg-clip-text bg-linear-to-r from-green-600 to-green-600 animate-slide-in-right animation-delay-200">
                        Perfect Ride
                      </span>
                    </h1>
                    <div className="w-105 h-1.5 bg-linear-to-r from-gray-600 to-gray-900 rounded-full animate-expand-width animation-delay-400"></div>
                  </div>

                  {/* Subtext */}
                  <p className="text-lg lg:text-xl text-gray-800 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light animate-fade-in animation-delay-600 mb-6">
                    <span className="font-semibold text-gray-900">
                      Electric Vehicles | Experienced Drivers | Premium
                    </span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-800 mb-6">

                    {/* Download App */}
                    <div className="relative w-full sm:w-auto" data-dropdown>
                      <Button
                        size="lg"
                        className="bg-black hover:bg-gray-800 text-white px-8 py-4 w-full sm:w-auto rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsAppDropdownOpen(!isAppDropdownOpen);
                        }}
                      >
                        <Smartphone className="h-5 w-5 mr-2" />
                        Download App
                      </Button>

                      {isAppDropdownOpen && (
                        <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-2xl border border-gray-100 min-w-[220px] z-50 animate-fade-in">
                          <Link
                            href="https://qrcodes.pro/2g0L5e"
                            target="_blank"
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-t-xl"
                            onClick={() => setIsAppDropdownOpen(false)}
                          >
                            <Image src="/Android-icon.png" alt="Android" width={20} height={20} className="mr-3" />
                            Download for Android
                          </Link>
                          <Link
                            href="https://apps.apple.com/in/app/evera/id1625582988"
                            target="_blank"
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-b-xl"
                            onClick={() => setIsAppDropdownOpen(false)}
                          >
                            <Image src="/apple.png" alt="iOS" width={20} height={20} className="mr-3" />
                            Download for iOS
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Book Ride */}
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white w-full sm:w-auto rounded-xl font-semibold transition-all duration-300"
                      asChild
                    >
                      <Link href="/book">Book Ride</Link>
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in animation-delay-1000">
                    {["GPS Enabled", "24/7 Support", "Safe & Secure"].map((item) => (
                      <div key={item} className="flex items-center group">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right column empty for layout balance */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Electric Cab Service Section */}
      <section className="py-12 sm:py-16 lg:py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-4">Driving India’s Electric Mobility Revolution</h2>
            <div className="relative inline-block">
              <Quote className="h-6 w-5 text-green-600 absolute left-1 -top-1 scale-x-[-1]" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 pl-8">Electric Cabs You Can Count On</h3>
              <Quote className="h-6 w-5 text-green-600 absolute -right-7 -top-1" />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="flex justify-center order-1 lg:order-1">
              <div className="flex justify-center">
                <Image
                  src="/section_2.jpg"
                  alt="Electric Cab"
                  width={400}
                  height={300}
                  className="w-full max-w-full h-auto object-contain rounded-xl shadow-2xl border border-gray-300 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed font-semibold">
                Evera Cabs is building India’s largest network of all-electric cabs, designed to make everyday commuting cleaner, safer, and more reliable. Bookable exclusively through the Evera Cabs app, our 100% electric fleet helps significantly reduce carbon emissions while delivering a quiet, comfortable, and modern ride experience.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed font-semibold">
                Unlike traditional cab services, drivers on Evera cannot cancel your ride—ensuring complete reliability and peace of mind. Every Evera cab is driven by professionally trained, full-time drivers and powered by certified electric vehicles, offering superior safety standards and a best-in-class commuting experience.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed font-semibold">
                By combining sustainable mobility, zero cancellations, and premium comfort, Evera Cabs is redefining how India moves—one electric ride at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 sm:py-16 lg:py-20 overflow-hidden relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-4">More Than a Cab</h2>
            <div className="relative inline-block">
              <Quote className="h-6 w-5 text-green-600 absolute -left-5 -top-1 scale-x-[-1]" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">A Better Way to Commute</h3>
              <Quote className="h-6 w-5 text-green-600 absolute -right-6 -top-1" />
            </div>
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
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Header */}
            <div>
              <h2 className="text-2xl sm:text-5xl font-bold text-black mb-6">Our <span className="text-green-600">Services</span></h2>
              <p className="text-xl text-gray-800">From quick city rides to long-distance travel, we offer comprehensive mobility solutions tailored to your needs.</p>
            </div>
            
            {/* Right: 2x2 Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Airport Transfer Card */}
              <div className="group cursor-pointer"
                   onClick={() => {
                     setSelectedService(serviceDetails["Airport Transfer"]);
                     setIsModalOpen(true);
                   }}>
                <div className="bg-white rounded-2xl p-4 shadow-2xl hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-3">
                      <Car className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Airport Transfer</h3>
                  </div>
                  <p className="text-black font-semibold text-xs mb-3">Professional airport services ...</p>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white text-xs">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Rentals Card */}
              <div className="group cursor-pointer"
                   onClick={() => {
                     setSelectedService(serviceDetails["Rentals"]);
                     setIsModalOpen(true);
                   }}>
                <div className="bg-white rounded-2xl p-4 shadow-2xl hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-3">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Car Rentals</h3>
                  </div>
                  <p className="text-black font-semibold text-xs mb-3">Flexible rental solutions ...</p>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white text-xs">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* City Rides Card */}
              <div className="group cursor-pointer"
                   onClick={() => {
                     setSelectedService(serviceDetails["City Rides"]);
                     setIsModalOpen(true);
                   }}>
                <div className="bg-white rounded-2xl p-4 shadow-2xl hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold">Coming Soon</div>
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">City Rides</h3>
                  </div>
                  <p className="text-black font-semibold text-xs mb-3">Quick city commutes ...</p>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white text-xs">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Intercity Rides Card */}
              <div className="group cursor-pointer"
                   onClick={() => {
                     setSelectedService(serviceDetails["Intercity Rides"]);
                     setIsModalOpen(true);
                   }}>
                <div className="bg-white rounded-2xl p-4 shadow-2xl hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold">Coming Soon</div>
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-3">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Intercity Rides</h3>
                  </div>
                  <p className="text-black font-semibold text-xs mb-3">Long-distance travel ...</p>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white text-xs">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-linear-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e0e7ff\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1.5\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-green-600/10 border border-green-600/30 text-green-700 rounded-full text-sm font-semibold mb-6 shadow-xl backdrop-blur-sm">
              <Clock className="h-4 w-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It <span className="text-green-600"> Works</span></h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Book your ride in just 3 simple steps and enjoy a hassle-free travel experience.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-linear-to-r from-blue-300 via-green-300 to-purple-300"></div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 bg-linear-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-300 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Book Your Ride</h3>
                <p className="text-gray-800 leading-relaxed text-lg">Enter your pickup and drop location, select your preferred vehicle type, and confirm your booking with ease.</p>
              </div>
            </div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 bg-linear-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-300 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Track Your Driver</h3>
                <p className="text-gray-800 leading-relaxed text-lg">Get real-time updates on your driver's location and estimated arrival time with live GPS tracking.</p>
              </div>
            </div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 bg-linear-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
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
      <section className="py-20 bg-linear-to-br from-slate-50 via-stone-50 to-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-60" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fbbf24\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-green-600/10 border border-green-600/30 text-green-700 rounded-full text-sm font-semibold mb-4 shadow-xl backdrop-blur-sm">
              <Star className="h-4 w-4 mr-2" />
              Customer Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-black to-black bg-clip-text text-transparent mb-6">What <span className="text-green-600"> Our Customers</span> Say</h2>
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
                      className="object-cover rounded-2xl mb-6 shadow-2xl hover:scale-105 transition-transform duration-300" 
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
                  src="/Evera-Logo-02-svg.svg"
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
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 shrink-0"></div>
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
