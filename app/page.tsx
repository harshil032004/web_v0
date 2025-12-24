"use client";

import React, { useState, useRef, useEffect, lazy, Suspense, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollAnimation } from "@/components/scroll-animation";
import Link from "next/link";
import Image from "next/image";
import { Shield, Star, Car, Users, CreditCard, Clock, MapPin, Phone, CheckCircle, Award, Smartphone, Headphones, X, Heart, Leaf, Quote, Plane } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
// Lazy load heavy components with preload
const TestimonialCard = lazy(() => import("@/components/testimonial-card").then(m => ({ default: m.TestimonialCard })));

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
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const [screenSize, setScreenSize] = useState('lg');

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 640) setScreenSize('sm');
      else if (window.innerWidth < 768) setScreenSize('md');
      else if (window.innerWidth < 1024) setScreenSize('lg');
      else setScreenSize('xl');
    };
    
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const getResponsiveWidth = () => {
    switch(screenSize) {
      case 'sm': return '14rem';
      case 'md': return '18rem';
      case 'lg': return '22rem';
      case 'xl': return '28rem';
      default: return '20rem';
    }
  };

  // Optimized animations with reduced motion support
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Hanging card data with enhanced animations
  const hangingCards = [
    { 
      icon: Car, 
      top: '10%', 
      left: '10%',
      delay: 0,
      stringHeight: 80,
      image: '🚗',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: Plane, 
      top: '15%', 
      right: '12%',
      delay: 0.5,
      stringHeight: 100,
      image: '✈️',
      color: 'from-green-500 to-green-600'
    },
    { 
      icon: MapPin, 
      top: '60%', 
      left: '5%',
      delay: 1,
      stringHeight: 90,
      image: '📍',
      color: 'from-red-500 to-red-600'
    },
    { 
      icon: Users, 
      top: '70%', 
      right: '8%',
      delay: 1.5,
      stringHeight: 110,
      image: '👥',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest('[data-dropdown]')) {
      setIsAppDropdownOpen(false);
    }
  }, []);

  const handleModalClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest('[data-modal-content]')) {
      setIsModalOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isAppDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isAppDropdownOpen, handleClickOutside]);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('click', handleModalClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleModalClickOutside);
    };
  }, [isModalOpen, handleModalClickOutside]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      if (HERO_VIDEOS.length === 1) {
        const currentVideo = videoRef.current;
        if (currentVideo) {
          currentVideo.currentTime = 0;
          currentVideo.play().catch(console.error);
        }
      } else {
        setCurrentVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
      }
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isLoading = false;

    const loadAndPlay = async () => {
      if (isLoading) return;
      isLoading = true;
      
      try {
        video.load();
        await new Promise(resolve => setTimeout(resolve, 100));
        await video.play();
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Video playback failed:', error);
        }
      } finally {
        isLoading = false;
      }
    };

    loadAndPlay();
  }, [currentVideo]);


  return (
    <>
    <div className={`min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 overflow-x-hidden ${isModalOpen ? 'blur-sm' : ''} transition-all duration-300`}>
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-[65vh] sm:min-h-[65vh] overflow-hidden flex items-center bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
        <motion.div 
          className="relative z-10 w-full max-w-[95%] sm:max-w-full lg:w-full lg:max-w-xl mx-auto lg:ml-105 text-left lg:text-left"
          variants={staggerContainer}
          initial="initial"
          animate={isHeroInView ? "animate" : "initial"}
        >
          <div className="w-full lg:w-xl max-w-7xl gap-12 items-center">

            {/* Badge */}
            <motion.div 
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-4 bg-gray-900/40 border border-gray-100/50 text-white rounded-full text-xs sm:text-sm font-semibold shadow-xl backdrop-blur-sm mb-4 sm:mb-6"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-4 text-white" />
              </motion.div>
              India's Most Trusted Cab Service
            </motion.div>

            {/* Main Content with Blurred Background */}
            <motion.div 
              className="bg-white/10 backdrop-blur-xs rounded-3xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              {/* Heading */}
              <div className="space-y-2 sm:space-y-1 mb-3 sm:mb-4">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black text-gray-900 leading-[1.1] sm:leading-none tracking-[-0.01em]"
                  variants={staggerContainer}
                  initial="initial"
                  animate={isHeroInView ? "animate" : "initial"}
                >
                  <motion.span
                    className="block"
                    variants={{
                      initial: { opacity: 0, x: -100, rotateY: -90 },
                      animate: { opacity: 1, x: 0, rotateY: 0 }
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Book Your
                  </motion.span>
                  <motion.span
                    className="block text-transparent bg-clip-text bg-linear-to-r from-green-600 to-green-600"
                    variants={{
                      initial: { opacity: 0, x: 100, rotateY: 90 },
                      animate: { opacity: 1, x: 0, rotateY: 0 }
                    }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    Perfect Ride
                  </motion.span>
                </motion.h1>
                <motion.div 
                  className="h-1.5 sm:h-2 bg-linear-to-r from-gray-600 to-gray-900 rounded-full mx-full lg:mx-0"
                  initial={{ width: 0 }}
                  animate={{ width: isHeroInView ? getResponsiveWidth() : 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Subtext */}
              <motion.p 
                className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-800 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium mb-6 sm:mb-8"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <motion.span 
                  className="font-semibold text-gray-900"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    background: "linear-gradient(90deg, #1f2937, #059669, #1f2937)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Electric Vehicles | Experienced Drivers | Premium
                </motion.span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-6 sm:mb-8"
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
              >

                {/* Download App */}
                <div className="relative w-full sm:w-auto" data-dropdown>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsAppDropdownOpen(!isAppDropdownOpen);
                      }}
                    >
                      <motion.div
                        animate={{ rotate: isAppDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      </motion.div>
                      Download App
                    </Button>
                  </motion.div>

                  <AnimatePresence>
                    {isAppDropdownOpen && (
                      <motion.div 
                        className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 sm:left-0 sm:transform-none bg-white rounded-xl shadow-2xl border border-gray-100 min-w-[200px] sm:min-w-[220px] z-50"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href="https://qrcodes.pro/2g0L5e"
                            target="_blank"
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-t-xl text-sm"
                            onClick={() => setIsAppDropdownOpen(false)}
                          >
                            <Image src="/Android-icon.png" alt="Android" width={18} height={18} className="mr-3" />
                            Download for Android
                          </Link>
                        </motion.div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href="https://apps.apple.com/in/app/evera/id1625582988"
                            target="_blank"
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-b-xl text-sm"
                            onClick={() => setIsAppDropdownOpen(false)}
                          >
                            <Image src="/apple.png" alt="iOS" width={18} height={18} className="mr-3" />
                            Download for iOS
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Book Ride */}
                <div className="relative w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base"
                      asChild
                    >
                      <Link href="/book">Book Ride</Link>
                    </Button>
                  </motion.div>
                </div>  
              </motion.div>

              {/* Features */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-left"
                variants={staggerContainer}
                initial="initial"
                animate={isHeroInView ? "animate" : "initial"}
              >
                {["GPS Enabled", "24/7 Support", "Safe & Secure"].map((item, index) => (
                  <motion.div 
                    key={item} 
                    className="flex items-center group"
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 }
                    }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center mr-2 sm:mr-3"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </motion.div>
                    <span className="text-xs sm:text-sm font-semibold text-black">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <div className="hidden lg:block"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Electric Cab Service Section */}
      <section className="py-12 sm:py-16 lg:py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-4">Driving India’s Electric Mobility Revolution</h2>
            <div className="relative inline-block">
              {/* <Quote className="h-6 w-5 text-green-600 absolute left-3 sm:left-1 -top-1 scale-x-[-1]" /> */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 pl-8">Electric Cabs You Can Count On</h3>
              {/* <Quote className="h-6 w-5 text-green-600 absolute -right-7 sm:-right-5 -top-1" /> */}
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
                  priority={false}
                  loading="lazy"
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
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <section className="py-8 sm:py-12 lg:py-16 xl:py-20 overflow-hidden relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            {/* Floating badge */}
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ Why Choose Us
                </div>
            </motion.div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-2 sm:mb-4">More Than a Cab</h2>
              <div className="relative inline-block">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600">A Better Way to Commute</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: CreditCard, title: "NO SURGE", desc: "Fixed pricing regardless of traffic or demand. No surprise charges." },
                { icon: X, title: "NO SERVICE DENIALS", desc: "Professional drivers can't cancel your ride. Only you control your trip." },
                { icon: Leaf, title: "NO EMISSIONS", desc: "100% electric fleet. Zero emissions. Cleaner cities." },
                { icon: Users, title: "PROFESSIONAL DRIVERS", desc: "Trained, certified drivers. Hassle-free rides guaranteed." },
                { icon: Heart, title: "COMFORT", desc: "Smooth electric vehicles. No gears, no jerks, maximum comfort." },
                { icon: Shield, title: "SAFETY", desc: "Background-checked drivers. Advanced safety features. Your security first." }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center text-green-600"
                >
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 sm:border-3 text-white border-black bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ 
                    scale: [0, 1],
                    rotate: [0, 360]
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                  </motion.div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">{item.title}</h4>
                  <p className="text-sm sm:text-base text-black leading-relaxed px-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Suspense>

      {/* Animated Statistics Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/Website-banner-2.jpg)'}}></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center text-white">
            <div>
              <div className="mb-2 sm:mb-4">
                <Car className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto text-white drop-shadow-lg" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-1 sm:mb-2 drop-shadow-lg">
                <AnimatedCounter end={25000000} />
              </div>
              <div className="text-xs sm:text-sm lg:text-lg font-bold tracking-wide drop-shadow-lg">GREEN KM TRAVELLED</div>
            </div>
            
            <div>
              <div className="mb-2 sm:mb-4">
                <div className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto flex items-center justify-center">
                  <svg className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-1 sm:mb-2 drop-shadow-lg">
                <AnimatedCounter end={50000} />
              </div>
              <div className="text-xs sm:text-sm lg:text-lg font-bold tracking-wide drop-shadow-lg">TREES SAVED</div>
            </div>
            
            <div>
              <div className="mb-2 sm:mb-4">
                <div className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto flex items-center justify-center">
                  <svg className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 10.1 14.1 11 13 11V22H11V11C9.9 11 9 10.1 9 9V7H3V9C3 10.1 2.1 11 1 11V22H23V11C21.9 11 21 10.1 21 9Z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-1 sm:mb-2 drop-shadow-lg">
                <AnimatedCounter end={1250000} />
              </div>
              <div className="text-xs sm:text-sm lg:text-lg font-bold tracking-wide drop-shadow-lg">CARBON EMISSIONS SAVED</div>
            </div>
            
            <div>
              <div className="mb-2 sm:mb-4">
                <div className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto flex items-center justify-center">
                  <svg className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 3c.28 0 .5.22.5.5V6h2.5c.28 0 .5.22.5.5v14c0 .28-.22.5-.5.5s-.5-.22-.5-.5V18h-2v2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-17c0-.28.22-.5.5-.5zM17 7v10h2V7h-2zM5 3c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-1v4h10v-4H7c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-1v4c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-4H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h4zm2 3l-3 5h2v3l3-5H7V6z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-1 sm:mb-2 drop-shadow-lg">
                <AnimatedCounter end={200} />
              </div>
              <div className="text-xs sm:text-sm lg:text-lg font-bold tracking-wide drop-shadow-lg">CHARGING STATIONS</div>
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

      {/* Services Section */}
      <section
        id="services"
        className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-b from-gray-50 via-green-50/20 to-white"
      >
        {/* Soft ambient background – very subtle */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="max-w-2xl mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Hanging "OUR SERVICES" */}
            <div className="flex justify-center mb-6">
              <motion.div
                className="flex flex-col items-center"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* String */}
                <motion.div
                  className="w-0.5 h-16 bg-green-600/30"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ transformOrigin: 'top' }}
                />
                {/* Hanging text */}
                <motion.p
                  className="text-sm font-semibold tracking-widest text-green-600 uppercase bg-white px-4 py-2 rounded-lg shadow-md border border-green-100 cursor-pointer select-none"
                  initial={{ rotate: -5 }}
                  whileInView={{ rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ 
                    rotate: [0, -3, 3, -2, 2, 0],
                    transition: { duration: 0.6 }
                  }}
                  whileTap={{ 
                    rotate: [0, -15, 15, -10, 10, -5, 5, 0],
                    transition: { duration: 1.2 }
                  }}
                  style={{ transformOrigin: 'top center' }}
                >
                  Our Services
                </motion.p>
              </motion.div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              Reliable <span className="text-green-600">electric mobility</span>,
              <br className="hidden sm:block" />
              built for real journeys
            </h2>

            <p className="text-gray-600 text-base sm:text-lg">
              Whether it’s a short city commute or a long intercity ride, EveraCabs
              delivers dependable, all-electric transportation with professional
              service at every step.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                key: "Airport Transfer",
                title: "Airport Transfers",
                desc: serviceDetails["Airport Transfer"].description,
                tag: "Live",
              },
              {
                key: "Rentals",
                title: "Car Rentals",
                desc: serviceDetails["Rentals"].description,
                tag: "Live",
              },
              {
                key: "City Rides",
                title: "City Rides",
                desc: serviceDetails["City Rides"].description,
                tag: "Coming Soon",
              },
              {
                key: "Intercity Rides",
                title: "Intercity Travel",
                desc: serviceDetails["Intercity Rides"].description,
                tag: "Coming Soon",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="group relative bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 lg:p-6 xl:p-7 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-green-200 cursor-pointer w-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => {
                  setSelectedService(serviceDetails[service.key]);
                  setIsModalOpen(true);
                }}
                whileTap={{ 
                  rotateY: 180,
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Status tag */}
                <span
                  className={`inline-block mb-3 sm:mb-4 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full ${
                    service.tag === "Live"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {service.tag}
                </span>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-600 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-black leading-relaxed mb-4 sm:mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center text-sm sm:text-md font-medium text-green-700 group-hover:text-green-800 transition-colors">
                  Learn more
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-linear-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e0e7ff\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1.5\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Bouncing badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-green-600/10 border border-green-600/30 text-green-700 rounded-full text-sm font-semibold mb-6 shadow-xl backdrop-blur-sm"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              <Clock className="h-4 w-4 mr-2" />
              Simple Process
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              How It <span className="text-green-600"> Works</span>
            </motion.h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Book your ride in just 3 simple steps and enjoy a hassle-free travel experience.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Animated Connection Lines */}
            <motion.div 
              className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-linear-to-r from-blue-300 via-green-300 to-purple-300"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            
            {[1, 2, 3].map((step, index) => (
              <motion.div 
                key={step}
                className="text-center relative"
                initial={{ opacity: 0, y: 100, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="w-24 h-24 bg-linear-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.8 }
                  }}
                >
                  <span className="text-3xl font-bold text-white">{step}</span>
                </motion.div>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-300 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {step === 1 ? "Book Your Ride" : step === 2 ? "Track Your Driver" : "Enjoy Your Ride"}
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-lg">
                    {step === 1 
                      ? "Enter your pickup and drop location, select your preferred vehicle type, and confirm your booking with ease."
                      : step === 2 
                      ? "Get real-time updates on your driver's location and estimated arrival time with live GPS tracking."
                      : "Sit back and relax in our clean, comfortable vehicles with professional drivers and safe journey."
                    }
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <section className="py-20 bg-linear-to-br from-slate-50 via-stone-50 to-zinc-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-60" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fbbf24\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16"> 
              {/* Bouncing badge */}
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-green-600/10 border border-green-600/30 text-green-700 rounded-full text-sm font-semibold mb-6 shadow-xl backdrop-blur-sm"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Star className="h-4 w-4 mr-2" />
                Customer Reviews
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-black to-black bg-clip-text text-transparent mb-6">
                What <span className="text-green-600">Our Customers</span> Say
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Evera Cabs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Rajesh Kumar",
                  location: "Gurgaon",
                  rating: 5,
                  comment: "Excellent service! The driver was punctual and the car was clean. The electric vehicle was so quiet and comfortable. Will definitely use again."
                },
                {
                  name: "Priya Sharma",
                  location: "Delhi",
                  rating: 5,
                  comment: "Safe and reliable. I use Evera Cabs for all my airport transfers. Never had a cancellation issue. Highly recommended!"
                },
                {
                  name: "Amit Patel",
                  location: "Noida",
                  rating: 5,
                  comment: "Great experience with car rentals. Professional drivers and fair pricing. The electric cars are amazing for the environment too."
                }
              ].map((testimonial, index) => (
                <div key={index}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-600">
                <div className="flex items-center">
                  <div className="flex text-green-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">4.8/5 Average Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-semibold">50,000+ Happy Customers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-semibold">99% On-Time Performance</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>

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
              <div className="bg-transparent backdrop-blur-sm rounded-2xl p-45 shadow-xl border border-gray-300 relative">
                <Image 
                  src="/download-section-img.jpg" 
                  alt="EveraCabs App Background" 
                  fill
                  className="object-cover rounded-2xl mb-6 shadow-2xl hover:scale-105 transition-transform duration-300" 
                />
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
                <li><a href="#" className="hover:text-green-600 transition-colors">City Rides</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Airport Transfer</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Outstation</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Car Rental</a></li>
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
    <AnimatePresence>
      {isModalOpen && selectedService && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'fixed'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4 sm:mx-0"
            data-modal-content
            initial={{ 
              scale: 0.8, 
              rotateY: -90, 
              opacity: 0,
              transformPerspective: 1000
            }}
            animate={{ 
              scale: 1, 
              rotateY: 0, 
              opacity: 1,
              transformPerspective: 1000
            }}
            exit={{ 
              scale: 0.8, 
              rotateY: 90, 
              opacity: 0,
              transformPerspective: 1000
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeInOut",
              type: "spring",
              stiffness: 100
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    document.body.style.overflow = 'unset';
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                {selectedService.description}
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm sm:text-base text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 shrink-0 mt-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                      <CreditCard className="h-4 w-4 text-green-600 mr-2" />
                      Pricing
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700">{selectedService.pricing}</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                      <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                      Availability
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700">{selectedService.availability}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                    <Clock className="h-4 w-4 text-gray-600 mr-2" />
                    Booking Information
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700">{selectedService.bookingInfo}</p>
                </div>
                
                <div className="flex flex-col gap-3 pt-4">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    asChild
                  >
                    <Link href="/book">
                      Book Now
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                    asChild
                  >
                    <Link href="/contact">
                      Contact Support
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
