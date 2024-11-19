import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a061f] text-white py-12 border-t border-violet-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-violet-200">MathGenius Academy</h3>
            <p className="text-violet-300">Empowering minds through mathematical excellence since 2020</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-violet-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-violet-300 hover:text-violet-400">Home</a></li>
              <li><a href="#courses" className="text-violet-300 hover:text-violet-400">Courses</a></li>
              <li><a href="#contact" className="text-violet-300 hover:text-violet-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-violet-200">Contact Us</h3>
            <ul className="space-y-2 text-violet-300">
              <li>123 Learning Street</li>
              <li>Education City, ED 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@mathgenius.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-violet-200">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-violet-300 hover:text-violet-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-violet-300 hover:text-violet-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-violet-300 hover:text-violet-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-violet-300 hover:text-violet-400">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-violet-900/20 mt-8 pt-8 text-center">
          <p className="text-violet-300">© {new Date().getFullYear()} MathGenius Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}