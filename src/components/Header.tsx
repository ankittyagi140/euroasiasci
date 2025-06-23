'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const industryLinks = [
  { name: 'Food & Feed', href: '/industries/food-and-feed' },
  { name: 'Consumer Products', href: '/industries/consumer-products' },
  { name: 'Cosmetics & Personal Care', href: '/industries/cosmetics-and-personal-care' },
  { name: 'Pharmaceutical', href: '/industries/pharmaceutical' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsIndustriesOpen(false);
  }

  return (
    <header className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMenu}>
              <div>
                <Image
                  src="/euroasialogo.png"
                  alt="EuroAsia Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
                <p className="text-[10px] text-slate-500 -mt-1">Your trusted partner in quality assurance</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-slate-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </Link>
            <div className="relative">
              <button
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
                className="text-slate-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Industries <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isIndustriesOpen && (
                 <div 
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                  className="absolute top-full -left-4 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                 >
                   <div className="py-1">
                     {industryLinks.map(link => (
                       <Link key={link.name} href={link.href} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-violet-600">
                          {link.name}
                       </Link>
                     ))}
                   </div>
                 </div>
              )}
            </div>
            <Link
              href="/services"
              className="text-slate-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-violet-600 focus:outline-none focus:text-violet-600"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed top-0 right-0 h-full bg-white w-64 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" onClick={closeMenu}>
              <div>
                <Image
                  src="/euroasialogo.png"
                  alt="EuroAsia Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
                <p className="text-[10px] text-slate-500 -mt-1">Your trusted partner in quality assurance</p>
              </div>
            </Link>
            <button onClick={closeMenu} className="text-slate-700 hover:text-violet-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-slate-700 hover:text-violet-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-violet-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              About
            </Link>
            <div>
              <button 
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="w-full text-left text-slate-700 hover:text-violet-600 flex items-center justify-between px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Industries
                <ChevronDown className={`w-5 h-5 transition-transform ${isIndustriesOpen ? 'transform rotate-180' : ''}`} />
              </button>
              {isIndustriesOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {industryLinks.map(link => (
                    <Link key={link.name} href={link.href} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-violet-600" onClick={closeMenu}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/services"
              className="text-slate-700 hover:text-violet-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-violet-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={closeMenu}></div>}

      </div>
    </header>
  );
} 