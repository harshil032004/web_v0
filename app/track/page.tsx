"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Clock, Car, Phone } from "lucide-react";

export default function TrackRide() {
  const [rideId, setRideId] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = () => {
    if (rideId.trim()) {
      setIsTracking(true);
      setTimeout(() => setIsTracking(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Ride</h1>
          <p className="text-xl text-gray-600">Enter your ride ID to track your cab in real-time</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter Ride ID (e.g., EVR123456)"
                value={rideId}
                onChange={(e) => setRideId(e.target.value)}
                className="text-lg py-3"
              />
            </div>
            <Button 
              onClick={handleTrack}
              disabled={!rideId.trim() || isTracking}
              className="bg-[#48166] hover:bg-[#48166]/90 px-8 py-3"
            >
              {isTracking ? (
                <>
                  <Clock className="h-5 w-5 mr-2 animate-spin" />
                  Tracking...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5 mr-2" />
                  Track Ride
                </>
              )}
            </Button>
          </div>
        </div>

        {rideId && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Ride Status</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                On the way
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Car className="h-5 w-5 text-[#48166] mr-3" />
                  <div>
                    <p className="font-medium">Driver: Rajesh Kumar</p>
                    <p className="text-gray-600">Tata Nexon EV - KA 01 AB 1234</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#48166] mr-3" />
                  <div>
                    <p className="font-medium">Contact: +91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#48166] mr-3" />
                  <div>
                    <p className="font-medium">Current Location</p>
                    <p className="text-gray-600">MG Road, Bangalore</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                  <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-sm font-medium">
                    ETA: 5 minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Can't find your ride ID? Check your booking confirmation SMS or email.
          </p>
          <Button variant="outline" className="border-[#48166] text-[#48166]">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}