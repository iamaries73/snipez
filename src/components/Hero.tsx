import React from 'react';
import { Calculator, Brain, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#0a061f] to-violet-900 text-white pt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-10 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Master the Art of Mental Mathematics
          </h1>
          <p className="text-xl md:text-2xl text-violet-200 max-w-3xl mx-auto mb-8">
            Unlock your mind's potential with our specialized training in Abacus, 
            Vedic Mathematics, and Competitive Exam Preparation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#courses"
              className="bg-violet-600/90 hover:bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-violet-500/20"
            >
              Explore Courses
            </a>
            <a 
              href="#contact"
              className="border-2 border-violet-500/50 hover:border-violet-500 px-8 py-3 rounded-lg font-semibold hover:bg-violet-900/30 transition-all"
            >
              Free Trial Class
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}