'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background-card border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white font-bold py-1 px-3 rounded">
              GC
            </div>
            <span className="text-text-primary font-semibold">GreenCoin</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/portfolio"
              className={`text-${isActive('/portfolio') ? 'primary' : 'text-secondary'} hover:text-primary transition-colors`}
            >
              Portfolio
            </Link>
            <Link
              href="/news"
              className={`text-${isActive('/news') ? 'primary' : 'text-secondary'} hover:text-primary transition-colors`}
            >
              News
            </Link>
            
            {/* Learn Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLearnOpen(!isLearnOpen)}
                className={`flex items-center text-${isActive('/learn') ? 'primary' : 'text-secondary'} hover:text-primary transition-colors`}
              >
                <span>Learn</span>
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isLearnOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isLearnOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-background-card border border-border rounded-lg shadow-lg py-2">
                  <Link
                    href="/learn"
                    className="block px-4 py-2 text-text-secondary hover:bg-primary/10 hover:text-primary"
                    onClick={() => setIsLearnOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/learn/beginner"
                    className="block px-4 py-2 text-text-secondary hover:bg-primary/10 hover:text-primary"
                    onClick={() => setIsLearnOpen(false)}
                  >
                    Beginner Guide
                  </Link>
                  <Link
                    href="/learn/intermediate"
                    className="block px-4 py-2 text-text-secondary hover:bg-primary/10 hover:text-primary"
                    onClick={() => setIsLearnOpen(false)}
                  >
                    Intermediate Guide
                  </Link>
                  <Link
                    href="/learn/advanced"
                    className="block px-4 py-2 text-text-secondary hover:bg-primary/10 hover:text-primary"
                    onClick={() => setIsLearnOpen(false)}
                  >
                    Advanced Topics
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`text-${isActive('/about') ? 'primary' : 'text-secondary'} hover:text-primary transition-colors`}
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 