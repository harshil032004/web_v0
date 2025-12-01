"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/navigation";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    experience: "",
    shiftPreference: "",
    hasLicense: ""
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    try {
      console.log("Driver application submitted:", formData);
      setIsSuccess(true);
      setShowPopup(true);
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        city: "",
        experience: "",
        shiftPreference: "",
        hasLicense: ""
      });
    } catch {
      setIsSuccess(false);
      setShowPopup(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="bg-gradient-to-r from-[#48A66F] to-[#335185] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Join<span className="text-green-500"> Our Team</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Drive with purpose. Build a sustainable future together.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Driver Application / ड्राइवर आवेदन</h2>
            <p className="text-lg text-gray-600">
              Ready to join our team? Fill out the basic information below. / हमारी टीम में शामिल होने के लिए तैयार हैं? नीचे बुनियादी जानकारी भरें।
            </p>
            <p className="text-sm text-green-600 mt-2">
              Our HR team will contact you for document verification / हमारी HR टीम दस्तावेज़ सत्यापन के लिए आपसे संपर्क करेगी
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 border-t pt-8">
            <CardHeader>
              <CardTitle>Driver Registration Form / ड्राइवर पंजीकरण फॉर्म</CardTitle>
              <CardDescription>Please provide accurate basic information / कृपया सटीक बुनियादी जानकारी प्रदान करें</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name / पूरा नाम *</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name / अपना पूरा नाम दर्ज करें"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number / फोन नंबर *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number / अपना फोन नंबर दर्ज करें"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City / शहर *</Label>
                    <Input
                      id="city"
                      placeholder="Enter your city / अपना शहर दर्ज करें"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Driving Experience / ड्राइविंग अनुभव *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience / अनुभव चुनें" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 Years / वर्ष</SelectItem>
                        <SelectItem value="1-3">1-3 Years / वर्ष</SelectItem>
                        <SelectItem value="3-5">3-5 Years / वर्ष</SelectItem>
                        <SelectItem value="5+">5+ Years / वर्ष</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="shiftPreference">Shift Preference / शिफ्ट प्राथमिकता *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, shiftPreference: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shift / शिफ्ट चुनें" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="day">Day Shift / दिन की शिफ्ट</SelectItem>
                        <SelectItem value="night">Night Shift / रात की शिफ्ट</SelectItem>
                        <SelectItem value="flexible">Flexible / लचीला</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="hasLicense">Do you have a valid driving license? / क्या आपके पास वैध ड्राइविंग लाइसेंस है? *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, hasLicense: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select / चुनें" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes / हाँ</SelectItem>
                        <SelectItem value="no">No / नहीं</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Note / नोट:</strong> Our HR team will contact you within 2-3 working days for document verification and further process. / हमारी HR टीम दस्तावेज़ सत्यापन और आगे की प्रक्रिया के लिए 2-3 कार्य दिवसों में आपसे संपर्क करेगी।
                  </p>
                </div>

                <Button type="submit" className="w-full bg-[#48A66F] hover:bg-[#3d8f5f] py-3 text-lg">
                  Submit Application / आवेदन जमा करें
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success/Error Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            {isSuccess ? (
              <>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted Successfully!</h3>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">आवेदन सफलतापूर्वक जमा किया गया!</h3>
                <p className="text-gray-600 mb-2">Thank you for your interest. Our HR team will contact you within 2-3 working days.</p>
                <p className="text-gray-600 mb-6">आपकी रुचि के लिए धन्यवाद। हमारी HR टीम 2-3 कार्य दिवसों में आपसे संपर्क करेगी।</p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Submission Failed!</h3>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">सबमिशन असफल!</h3>
                <p className="text-gray-600 mb-2">Something went wrong. Please try again.</p>
                <p className="text-gray-600 mb-6">कुछ गलत हुआ। कृपया पुनः प्रयास करें।</p>
              </>
            )}
            <Button 
              onClick={() => setShowPopup(false)}
              className="bg-[#48A66F] hover:bg-[#3d8f5f]"
            >
              Close / बंद करें
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}