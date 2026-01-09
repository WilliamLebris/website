import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-gray-800 bg-[#0a0f1e]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} William Lebris Tissi. All rights reserved.
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={20} className="text-red-400 fill-current" />
            <span>and</span>
            <span className="text-cyan-400 font-semibold">React</span>
          </div>

          {/* Tech Stack */}
          <div className="text-gray-400 text-sm">
            <span className="hidden sm:inline">Powered by </span>
            <span className="text-cyan-400">Vite</span>
            <span className="mx-1">•</span>
            <span className="text-purple-400">Tailwind</span>
            <span className="mx-1">•</span>
            <span className="text-pink-400">Framer Motion</span>
          </div>
        </div>

        {/* Optional: Social Links in Footer */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            Designed and built by William Lebris Tissi | Portfolio {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;