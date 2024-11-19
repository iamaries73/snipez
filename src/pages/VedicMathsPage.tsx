import React from 'react';
import { Brain, Lightbulb, Target, Clock } from 'lucide-react';

export default function VedicMathsPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0a061f] to-violet-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Vedic Mathematics</h1>
            <p className="text-xl text-violet-200 max-w-3xl mx-auto">
              Ancient Indian system for lightning-fast calculations
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
              <ul className="space-y-4 text-violet-200">
                <li className="flex items-start">
                  <Brain className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Master ancient Vedic calculation techniques</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Learn shortcuts for complex calculations</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Develop speed and accuracy in mathematics</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Practice with real-world applications</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
              <ul className="space-y-2 text-violet-200">
                <li>• Vedic multiplication techniques</li>
                <li>• Quick division methods</li>
                <li>• Square and cube calculations</li>
                <li>• Algebra shortcuts</li>
                <li>• Mental math strategies</li>
                <li>• Competitive exam preparation</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Course Structure</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Foundation</h3>
                  <p className="text-violet-200">Basic Vedic sutras and applications</p>
                </div>
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Advanced</h3>
                  <p className="text-violet-200">Complex calculations and speed math</p>
                </div>
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Expert</h3>
                  <p className="text-violet-200">Advanced techniques and teaching methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}