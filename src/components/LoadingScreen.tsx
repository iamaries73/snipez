import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0a061f] z-50 flex items-center justify-center">
      <div className="relative">
        {/* Animated circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-violet-500/20 rounded-full animate-ping" />
          <div className="absolute w-24 h-24 border-4 border-violet-400/30 rounded-full animate-ping [animation-delay:0.2s]" />
          <div className="absolute w-16 h-16 border-4 border-violet-300/40 rounded-full animate-ping [animation-delay:0.4s]" />
        </div>
        
        {/* Tech grid background */}
        <div className="absolute inset-0 grid-bg opacity-20" />
        
        {/* Center logo */}
        <div className="relative z-10 bg-[#0a061f]/80 backdrop-blur-sm p-6 rounded-2xl border border-violet-500/20">
          <div className="flex flex-col items-center">
            <div className="calculator-icon mb-4">
              <div className="w-12 h-12 border-4 border-violet-400 rounded-lg relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-4 bg-violet-400 transform -skew-x-12 translate-x-2" />
                <div className="absolute bottom-1 left-1 w-3 h-3 bg-violet-400 rounded-sm" />
                <div className="absolute bottom-1 right-1 w-3 h-3 bg-violet-400 rounded-sm" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">MathGenius</h2>
            <p className="text-violet-300 text-sm">Loading amazing content...</p>
            
            {/* Loading bar */}
            <div className="mt-4 w-48 h-1.5 bg-violet-900/30 rounded-full overflow-hidden">
              <div className="h-full bg-violet-500 rounded-full animate-loading-bar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}