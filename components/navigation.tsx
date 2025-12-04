"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Car, Menu, X, Download, MapPin } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);
  const pathname = usePathname();

  const getNavLinkClass = (path: string) => 
    pathname === path 
      ? 'text-black border-b-2 border-white pb-1' 
      : 'text-white hover:text-black';

  const getMobileNavLinkClass = (path: string) => 
    pathname === path 
      ? 'px-2 py-2 font-medium border-b-2 border-white' 
      : 'px-2 py-2 hover:font-bold text-white hover:text-black';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-dropdown]')) {
        setIsAppDropdownOpen(false);
      }
    };

    if (isAppDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isAppDropdownOpen]);

  return (
    <header className="shadow-lg sticky top-0 z-50 border-b 
      bg-linear-to-r from-[#48A66F] to-[#335185] border-[#48A66F]">
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-6">
          
          {/* Left Side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              <Link href="/" className={`font-medium ${getNavLinkClass('/')}`}>Home</Link>
              <Link href="/corporate" className={`font-medium ${getNavLinkClass('/corporate')}`}>Evera Corporate</Link>
              <Link href="/about" className={`font-medium ${getNavLinkClass('/about')}`}>About</Link>
              <Link href="/fleet" className={`font-medium ${getNavLinkClass('/fleet')}`}>Fleet</Link>
              <Link href="/team" className={`font-medium ${getNavLinkClass('/team')}`}>Team</Link>
              <Link href="/careers" className={`font-medium ${getNavLinkClass('/careers')}`}>Careers</Link>
              <Link href="/contact" className={`font-medium ${getNavLinkClass('/contact')}`}>Contact</Link>
              <Link href="/track" className={`font-medium flex items-center ${getNavLinkClass('/track')}`}>
                <MapPin className="h-4 w-4 mr-1" />
                Track
              </Link>
            </nav>
          </div>

          {/* Right Side - Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3 ml-auto">
            <div className="relative" data-dropdown>
              <Button
                variant="outline"
                size="sm"
                className="border-white bg-white text-[#48A66F]"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAppDropdownOpen(!isAppDropdownOpen);
                }}
              >
                <Download className="h-5 w-5 mr-2" />
                App
              </Button>
              
              {isAppDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border min-w-48 z-50">
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

            <Button className="bg-white hover:bg-blue-100 text-[#335185]" size="sm" asChild>
              <Link href="/book" className="flex items-center">
                <Car className="h-4 w-4 mr-2" />
                Book Ride
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-white hover:text-black hover:bg-white" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            
            <Button size="sm" className="bg-white text-[#48A66F] hover:bg-gray-100" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t py-4 border-white bg-linear-to-r from-[#48A66F] to-[#335185]">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={getMobileNavLinkClass('/')}>Home</Link>
              <Link href="/services" className={getMobileNavLinkClass('/services')}>Services</Link>
              <Link href="/corporate" className={getMobileNavLinkClass('/corporate')}>Corporate</Link>
              <Link href="/fleet" className={getMobileNavLinkClass('/fleet')}>Fleet</Link>
              <Link href="/about" className={getMobileNavLinkClass('/about')}>About</Link>
              <Link href="/team" className={getMobileNavLinkClass('/team')}>Team</Link>
              <Link href="/careers" className={getMobileNavLinkClass('/careers')}>Careers</Link>
              <Link href="/contact" className={getMobileNavLinkClass('/contact')}>Contact</Link>
              <Link href="/track" className={`${getMobileNavLinkClass('/track')} flex items-center`}>
                <MapPin className="h-4 w-4 mr-2" />
                Track Ride
              </Link>

              <div className="px-2 pt-4 space-y-3">
                <div className="space-y-2">
                  <Link 
                    href="https://qrcodes.pro/2g0L5e" 
                    target="_blank"
                    className="w-full border border-white bg-white text-[#48A66F] px-4 py-2 rounded flex items-center justify-center"
                  >
                    <Image src="/Android-icon.png" alt="Android" width={20} height={20} className="mr-2" />
                    Android App
                  </Link>
                  <Link 
                    href="https://apps.apple.com/in/app/evera/id1625582988" 
                    target="_blank"
                    className="w-full border border-white bg-white text-[#48A66F] px-4 py-2 rounded flex items-center justify-center"
                  >
                    <Image src="/apple.png" alt="iOS" width={20} height={20} className="mr-2" />
                    iOS App
                  </Link>
                </div>

                <Button className="w-full bg-[#335185] hover:bg-[#2A426E]" asChild>
                  <Link href="/book" className="flex items-center">
                    <Car className="h-4 w-4 mr-2" />
                    Book Ride
                  </Link>
                </Button>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 border-white text-white hover:bg-white hover:text-[#48A66F]" asChild>
                    <Link href="/signin">Sign In</Link>
                  </Button>
                  <Button size="sm" className="flex-1 bg-white text-[#48A66F] hover:bg-gray-100" asChild>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}