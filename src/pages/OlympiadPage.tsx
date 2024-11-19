import React from 'react';
import { Trophy, Book, Target, Users } from 'lucide-react';

export default function OlympiadPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0a061f] to-violet-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Mathematics Olympiad</h1>
            <p className="text-xl text-violet-200 max-w-3xl mx-auto">
              Comprehensive preparation for mathematics competitions
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Program Overview</h2>
              <ul className="space-y-4 text-violet-200">
                <li className="flex items-start">
                  <Trophy className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Preparation for national and international olympiads</span>
                </li>
                <li className="flex items-start">
                  <Book className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Advanced problem-solving techniques</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Mock tests and performance analysis</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Expert guidance from olympiad winners</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Topics Covered</h2>
              <ul className="space-y-2 text-violet-200">
                <li>• Number Theory</li>
                <li>• Algebra and Functions</li>
                <li>• Geometry and Trigonometry</li>
                <li>• Combinatorics</li>
                <li>• Probability and Statistics</li>
                <li>• Mathematical Reasoning</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Training Levels</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Level 1: Foundation</h3>
                  <p className="text-violet-200">Basic concepts and problem-solving</p>
                </div>
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Level 2: Advanced</h3>
                  <p className="text-violet-200">Complex problems and strategies</p>
                </div>
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Level 3: Elite</h3>
                  <p className="text-violet-200">International olympiad preparation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}