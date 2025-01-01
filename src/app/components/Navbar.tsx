"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-200 via-gray-400 to-[#91AC85] shadow-lg py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16 md:h-28">
          {/* Logo Section */}
          <div>
            <Image 
              src="/images/parenting-logo.png" 
              alt="parents logo"
              width={100}  
              height={100}
              className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
            />
          </div>

          {/* Links for Larger Screens */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-[#F72C5B] text-lg lg:text-2xl">Home</Link>
            <Link href="/about" className="hover:text-[#F72C5B] text-lg lg:text-2xl">About</Link>
            <Link href="/contact" className="hover:text-[#F72C5B] text-lg lg:text-2xl">Contact</Link>
            <Link href="/blogs" className="hover:text-[#F72C5B] text-lg lg:text-2xl">Blogs</Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none w-10 h-10 text-3xl"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Links for Small Screens */}
        {isOpen && (
          <div className="md:hidden space-y-2 mt-2 flex flex-col justify-center items-center">
            <Link href="/" className="block hover:text-orange-300 text-base">Home</Link>
            <Link href="/about" className="block hover:text-orange-300 text-base">About</Link>
            <Link href="/contact" className="block hover:text-orange-300 text-base">Contact</Link>
            <Link href="/blogs" className="block hover:text-orange-300 text-base">Blogs</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
