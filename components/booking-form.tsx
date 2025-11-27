"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Phone, Plane, Car as CarIcon } from "lucide-react";

export function BookingForm() {
  const [activeTab, setActiveTab] = useState('airport');

  return (
    <Card className="p-4 max-w-md mx-auto bg-gradient-to-b from-cyan-400 to-blue-500 text-white border-0 shadow-xl rounded-lg">
      {/* Service Tabs */}
      <div className="flex mb-4 bg-black/20 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('outstation')}
          className={`flex-1 py-2 px-2 text-xs font-medium rounded transition-colors ${
            activeTab === 'outstation' ? 'bg-black/40 text-white' : 'text-white/80 hover:text-white'
          }`}
        >
          <CarIcon className="h-3 w-3 inline mr-1" />
          OUTSTATION
        </button>
        <button
          onClick={() => setActiveTab('airport')}
          className={`flex-1 py-2 px-2 text-xs font-medium rounded transition-colors ${
            activeTab === 'airport' ? 'bg-black/40 text-white' : 'text-white/80 hover:text-white'
          }`}
        >
          <Plane className="h-3 w-3 inline mr-1" />
          AIRPORT & LOCAL
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
          <div className="flex space-x-4 mb-3">
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="service" value="airport" defaultChecked className="mr-2 accent-white" />
              <span className="text-sm font-medium">Airport</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="service" value="local" className="mr-2 accent-white" />
              <span className="text-sm font-medium">Local</span>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium block mb-1">City</label>
              <select className="w-full p-2 text-sm text-gray-800 rounded bg-white border-0 focus:ring-2 focus:ring-white/50">
                <option>Choose city</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium block mb-1">Select Trip</label>
              <select className="w-full p-2 text-sm text-gray-800 rounded bg-white border-0 focus:ring-2 focus:ring-white/50">
                <option>Pickup from Airport</option>
                <option>Drop to Airport</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium block mb-1">Pickup Date & Time</label>
            <Input 
              type="datetime-local" 
              className="w-full p-2 text-sm text-gray-800 bg-white border-0 focus:ring-2 focus:ring-white/50" 
            />
          </div>

          <div>
            <label className="text-xs font-medium block mb-1">Pickup/drop Location</label>
            <Input 
              className="w-full p-2 text-sm text-gray-800 bg-white border-0 focus:ring-2 focus:ring-white/50" 
              placeholder="Enter pickup location"
            />
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
    </Card>
  );
}