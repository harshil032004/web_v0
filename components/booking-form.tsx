"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Plane, Car as CarIcon, Navigation } from "lucide-react";

export function BookingForm() {
  const [activeTab, setActiveTab] = useState('airport');
  const [tripType, setTripType] = useState('pickup');
  const [currentLocation, setCurrentLocation] = useState('');
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  const reverseGeocode = async (lat: number, lng: number) => {
    try {
      // Using a free geocoding service (you can replace with Google Maps API)
      const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
      const data = await response.json();
      return data.display_name || data.locality || `${data.city}, ${data.countryName}` || 'Address not found';
    } catch {
      return 'Unable to get address';
    }
  };

  const getCurrentLocation = () => {
    setIsGettingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const address = await reverseGeocode(latitude, longitude);
          setCurrentLocation(address);
          setIsGettingLocation(false);
        },
        () => {
          setCurrentLocation('Location access denied');
          setIsGettingLocation(false);
        }
      );
    } else {
      setCurrentLocation('Geolocation not supported');
      setIsGettingLocation(false);
    }
  };

  const openMapModal = () => {
    setShowMapModal(true);
  };

  return (
    <Card className="p-4 max-w-md mx-auto bg-gradient-to-b from-cyan-400 to-blue-500 text-white border-0 shadow-xl rounded-lg">
      {/* Service Tabs */}
      <div className="flex mb-4 bg-black/20 rounded-lg p-1">
        {/* <button
          onClick={() => setActiveTab('outstation')}
          className={`flex-1 py-2 px-2 text-xs font-medium rounded transition-colors ${
            activeTab === 'outstation' ? 'bg-black/40 text-white' : 'text-white/80 hover:text-white'
          }`}
        >
          <CarIcon className="h-3 w-3 inline mr-1" />
          OUTSTATION
        </button> */}
        <button
          onClick={() => setActiveTab('airport')}
          className={`flex-1 py-2 px-2 text-xs font-medium rounded transition-colors ${
            activeTab === 'airport' ? 'bg-black/40 text-white' : 'text-white/80 hover:text-white'
          }`}
        >
          <Plane className="h-3 w-3 inline mr-1" />
          AIRPORT
        </button>
        <button
          onClick={() => setActiveTab('rental')}
          className={`flex-1 py-2 px-2 text-xs font-medium rounded transition-colors ${
            activeTab === 'rental' ? 'bg-black/40 text-white' : 'text-white/80 hover:text-white'
          }`}
        >
          <CarIcon className="h-3 w-3 inline mr-1" />
          RENTAL
        </button>
      </div>

      {activeTab === 'airport' && (
        <form className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium block mb-1">City</label>
              <select className="w-full p-2 text-sm text-gray-800 rounded bg-white border-0 focus:ring-2 focus:ring-white/50">
                <option>Choose city</option>
                <option>Delhi</option>
                <option>Gurgaon</option>
                <option>Noida</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium block mb-1">Select Trip</label>
              <select 
                className="w-full p-2 text-sm text-gray-800 rounded bg-white border-0 focus:ring-2 focus:ring-white/50"
                onChange={(e) => setTripType(e.target.value)}
              >
                <option value="pickup">Pickup from Airport</option>
                <option value="drop">Drop to Airport</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium block mb-1">Airport Terminal</label>
            <select className="w-full p-2 text-sm text-gray-800 rounded bg-white border-0 focus:ring-2 focus:ring-white/50">
              <option>Select Terminal</option>
              <option>Terminal 1</option>
              <option>Terminal 2</option>
              <option>Terminal 3</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-medium block mb-1">Pickup Date & Time</label>
            <Input 
              type="datetime-local" 
              className="w-full p-2 text-sm text-gray-800 bg-white border-0 focus:ring-2 focus:ring-white/50" 
            />
          </div>

          <div>
            <label className="text-xs font-medium block mb-1">
              {tripType === 'pickup' ? 'Drop Address' : 'Pickup Address'}
            </label>
            <div className="relative">
              <Input 
                className="w-full p-2 pr-20 text-sm text-gray-800 bg-white border-0 focus:ring-2 focus:ring-white/50" 
                placeholder={tripType === 'pickup' ? 'Enter drop location' : 'Enter pickup location'}
                value={currentLocation}
                onChange={(e) => setCurrentLocation(e.target.value)}
                onClick={openMapModal}
                readOnly
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  disabled={isGettingLocation}
                  className="text-gray-500 hover:text-gray-700"
                  title="Use current location"
                >
                  <Navigation className={`h-4 w-4 ${isGettingLocation ? 'animate-spin' : ''}`} />
                </button>
                <button
                  type="button"
                  onClick={openMapModal}
                  className="text-gray-500 hover:text-gray-700"
                  title="Select on map"
                >
                  <MapPin className="h-4 w-4" />
                </button>
              </div>
            </div>
            <p className="text-xs text-white/80 mt-1">Click field to select on map or 📍 for current location</p>
          </div>

          <Button className="w-full bg-red-500 hover:bg-red-600 py-3 text-sm font-bold shadow-lg">
            Select Car ➤
          </Button>
        </form>
      )}

      {activeTab === 'rental' && (
        <form className="space-y-3">
          <div>
            <label className="text-xs font-medium block mb-1">From</label>
            <Input 
              className="w-full p-2 text-sm text-gray-800 bg-white border-0 focus:ring-2 focus:ring-white/50" 
              placeholder="Enter location"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium block mb-1">Select Package</label>
              <select className="w-full p-2 text-sm text-gray-800 rounded bg-white border-0 focus:ring-2 focus:ring-white/50">
                <option>4 Hours / 40 KM</option>
                <option>8 Hours / 80 KM</option>
                <option>12 Hours / 120 KM</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium block mb-1">When</label>
              <select className="w-full p-2 text-sm text-gray-800 rounded bg-white border-0 focus:ring-2 focus:ring-white/50">
                <option>Today</option>
                <option>Tomorrow</option>
                <option>Later</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium block mb-1">Date & time</label>
            <Input 
              type="datetime-local" 
              className="w-full p-2 text-sm text-gray-800 bg-white border-0 focus:ring-2 focus:ring-white/50"
            />
          </div>

          <Button className="w-full bg-red-500 hover:bg-red-600 py-3 text-sm font-bold shadow-lg">
            Select Car ➤
          </Button>
        </form>
      )}

      <div className="text-center mt-4 pt-3 border-t border-white/30">
        <p className="text-xs font-medium mb-2">For Direct Booking 24/7 Call us at</p>
        <div className="flex items-center justify-center text-sm font-bold">
          <Phone className="h-4 w-4 mr-2" />
          +91 98765 43210
        </div>
      </div>

      {/* Map Modal */}
      {showMapModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Select Location</h3>
              <button
                onClick={() => setShowMapModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="bg-gray-200 h-64 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Interactive Map</p>
                <p className="text-xs">(Google Maps integration needed)</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <Input 
                placeholder="Search for a location..."
                className="w-full"
              />
              
              <div className="flex gap-2">
                <Button 
                  onClick={getCurrentLocation}
                  disabled={isGettingLocation}
                  className="flex-1 bg-blue-500 hover:bg-blue-600"
                >
                  <Navigation className={`h-4 w-4 mr-2 ${isGettingLocation ? 'animate-spin' : ''}`} />
                  Current Location
                </Button>
                <Button 
                  onClick={() => {
                    // Set selected location from map
                    setCurrentLocation('Selected location from map');
                    setShowMapModal(false);
                  }}
                  className="flex-1 bg-green-500 hover:bg-green-600"
                >
                  Confirm Location
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}