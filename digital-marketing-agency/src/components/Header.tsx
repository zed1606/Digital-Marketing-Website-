"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-black text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold font-montserrat">
          <Link href="/">DMA</Link> {/* Shortened for mobile */}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-poppins">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-green-500 transition-colors duration-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black shadow-lg py-2">
          <ul className="flex flex-col items-center space-y-4 font-poppins">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-green-500 transition-colors duration-300 py-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
