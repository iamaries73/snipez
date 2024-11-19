import React from 'react';
import { Calculator, Brain, Target, Clock } from 'lucide-react';

export default function AbacusPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0a061f] to-violet-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Abacus Training Program</h1>
            <p className="text-xl text-violet-200 max-w-3xl mx-auto">
              Master mental arithmetic through ancient abacus techniques
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
              <ul className="space-y-4 text-violet-200">
                <li className="flex items-start">
                  <Calculator className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Comprehensive training in abacus calculation techniques</span>
                </li>
                <li className="flex items-start">
                  <Brain className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Mental arithmetic development and visualization training</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Progressive learning path from basic to advanced levels</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Regular practice sessions and assessments</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
              <ul className="space-y-2 text-violet-200">
                <li>• Basic to advanced abacus operations</li>
                <li>• Mental calculation techniques</li>
                <li>• Speed mathematics</li>
                <li>• Visualization methods</li>
                <li>• Number sense development</li>
                <li>• Problem-solving strategies</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Course Structure</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Level 1: Foundation</h3>
                  <p className="text-violet-200">Basic operations and number concepts</p>
                </div>
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Level 2: Intermediate</h3>
                  <p className="text-violet-200">Advanced calculations and speed training</p>
                </div>
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Level 3: Advanced</h3>
                  <p className="text-violet-200">Mental arithmetic and competition prep</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}