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
      ? 'text-white font-bold' 
      : 'text-white hover:text-gray-200';

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
        <div className="flex items-center justify-between py-4 lg:py-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/Evera-Logo-02-svg.svg" 
              alt="Evera" 
              width={120} 
              height={40} 
              className="h-8 sm:h-10 w-auto filter invert brightness-0 contrast-100" 
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

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-white bg-green-600 hover:bg-green-700" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            
            <Button size="sm" className="bg-white text-[#48A66F] hover:bg-gray-100" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t py-4 border-white/30 bg-linear-to-r from-[#48A66F] to-[#335185]">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className={`font-medium px-2 py-2 ${getMobileNavLinkClass('/')}`} onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/corporate" className={`font-medium px-2 py-2 ${getMobileNavLinkClass('/corporate')}`} onClick={() => setIsOpen(false)}>Evera Corporate</Link>
              <Link href="/about" className={`font-medium px-2 py-2 ${getMobileNavLinkClass('/about')}`} onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/fleet" className={`font-medium px-2 py-2 ${getMobileNavLinkClass('/fleet')}`} onClick={() => setIsOpen(false)}>Fleet</Link>
              <Link href="/team" className={`font-medium px-2 py-2 ${getMobileNavLinkClass('/team')}`} onClick={() => setIsOpen(false)}>Team</Link>
              <Link href="/careers" className={`font-medium px-2 py-2 ${getMobileNavLinkClass('/careers')}`} onClick={() => setIsOpen(false)}>Careers</Link>
              <Link href="/contact" className={`font-medium px-2 py-2 ${getMobileNavLinkClass('/contact')}`} onClick={() => setIsOpen(false)}>Contact</Link>
              <Link href="/track" className={`font-medium flex items-center px-2 py-2 ${getMobileNavLinkClass('/track')}`} onClick={() => setIsOpen(false)}>
                <MapPin className="h-4 w-4 mr-1" />
                Track
              </Link>

              <div className="px-2 pt-4 space-y-3 border-t border-white/30">
                <div className="space-y-2">
                  <Link 
                    href="https://qrcodes.pro/2g0L5e" 
                    target="_blank"
                    className="w-full border border-white bg-white text-[#48A66F] px-3 py-2 rounded-lg flex items-center justify-center text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image src="/Android-icon.png" alt="Android" width={16} height={16} className="mr-2" />
                    Android App
                  </Link>
                  <Link 
                    href="https://apps.apple.com/in/app/evera/id1625582988" 
                    target="_blank"
                    className="w-full border border-white bg-white text-[#48A66F] px-3 py-2 rounded-lg flex items-center justify-center text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image src="/apple.png" alt="iOS" width={16} height={16} className="mr-2" />
                    iOS App
                  </Link>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 border-white text-white hover:bg-white hover:text-[#48A66F]" asChild>
                    <Link href="/signin" onClick={() => setIsOpen(false)}>Sign In</Link>
                  </Button>
                  <Button size="sm" className="flex-1 bg-white text-[#48A66F] hover:bg-gray-100" asChild>
                    <Link href="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
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