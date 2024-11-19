import React from 'react';
import { Globe, Smartphone, BarChart, Mail } from 'lucide-react';

export default function DigitalMarketingPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0a061f] to-violet-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Digital Marketing</h1>
            <p className="text-xl text-violet-200 max-w-3xl mx-auto">
              Master modern digital marketing strategies and tools
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
              <ul className="space-y-4 text-violet-200">
                <li className="flex items-start">
                  <Globe className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Comprehensive digital marketing fundamentals</span>
                </li>
                <li className="flex items-start">
                  <Smartphone className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Social media marketing strategies</span>
                </li>
                <li className="flex items-start">
                  <BarChart className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Analytics and performance tracking</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Email marketing campaigns</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
              <ul className="space-y-2 text-violet-200">
                <li>• SEO and content marketing</li>
                <li>• PPC advertising</li>
                <li>• Social media management</li>
                <li>• Email marketing</li>
                <li>• Analytics and reporting</li>
                <li>• Marketing automation</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Course Modules</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Digital Foundations</h3>
                  <p className="text-violet-200">Core concepts and strategies</p>
                </div>
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Platform Mastery</h3>
                  <p className="text-violet-200">Social media and advertising</p>
                </div>
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Analytics & ROI</h3>
                  <p className="text-violet-200">Measurement and optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}