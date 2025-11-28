"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Clock, Car, Phone, Award } from "lucide-react";

type RideData = {
  driver: string;
  vehicle: string;
  phone: string;
  location: string;
  status: string;
  eta: string;
};

export default function TrackRide() {
  const [rideId, setRideId] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [showRideStatus, setShowRideStatus] = useState(false);
  const [rideData, setRideData] = useState<RideData | null>(null);

  const testRides: { [key: string]: RideData } = {
    "EVR123456": {
      driver: "Rajesh Kumar",
      vehicle: "Tata Nexon EV - KA 01 AB 1234",
      phone: "+91 98765 43210",
      location: "MG Road, Bangalore",
      status: "On the way",
      eta: "5 minutes"
    },
    "EVR789012": {
      driver: "Priya Sharma",
      vehicle: "Mahindra eVerito - KA 02 CD 5678",
      phone: "+91 87654 32109",
      location: "Koramangala, Bangalore",
      status: "Arrived",
      eta: "Now"
    },
    "EVR345678": {
      driver: "Amit Singh",
      vehicle: "Hyundai Kona Electric - KA 03 EF 9012",
      phone: "+91 76543 21098",
      location: "Whitefield, Bangalore",
      status: "Starting",
      eta: "10 minutes"
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRideId(e.target.value);
    setShowRideStatus(false);
    setRideData(null);
  };

  const handleTrack = () => {
    if (rideId.trim()) {
      const ride = testRides[rideId.trim()];
      if (ride) {
        setIsTracking(true);
        setTimeout(() => {
          setIsTracking(false);
          setRideData(ride);
          setShowRideStatus(true);
        }, 2000);
      } else {
        alert("Ride ID not found. Try: EVR123456, EVR789012, or EVR345678");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> */}
        <section className="bg-gradient-to-r from-[#48A66F] to-[#335185] text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Track Your Ride with Ease
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Track <span className="text-yellow-400">Your</span> Ride
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Enter your Ride ID below to get real-time updates on your electric vehicle's location and estimated arrival time.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-blue-200 rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter Ride ID (e.g., EVR123456)"
                  value={rideId}
                  onChange={handleInputChange}
                  className="border-2 border-gray-500 text-lg py-3"
                />
              </div>
              <Button 
                onClick={handleTrack}
                disabled={!rideId.trim() || isTracking}
                className="bg-green-400 hover:bg-green-800 text-black-500 px-8 py-3"
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

          {showRideStatus && rideId && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Ride Status</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  rideData?.status === 'Arrived' ? 'bg-blue-100 text-blue-800' :
                  rideData?.status === 'Starting' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {rideData?.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-[#48A66F] mr-3" />
                    <div>
                      <p className="font-medium">Driver: {rideData?.driver}</p>
                      <p className="text-gray-600">{rideData?.vehicle}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#48A66F] mr-3" />
                    <div>
                      <p className="font-medium">Contact: {rideData?.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#48A66F] mr-3" />
                    <div>
                      <p className="font-medium">Current Location</p>
                      <p className="text-gray-600">{rideData?.location}</p>
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
                      ETA: {rideData?.eta}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Can't find your ride ID? Check your booking confirmation SMS or email.
          </p>
          <Button variant="outline" className="border-[#48166] text-[#48166]">
            Contact Support
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            We're here to help you every step of the way.
          </p>
          <p className="text-lg text-gray-500 mt-2"></p>
        </div>
    </div>
  );
}