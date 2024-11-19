import React from 'react';
import { Database, LineChart, Code, Brain, Binary, Network, Cpu } from 'lucide-react';

export default function DataSciencePage() {
  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
          alt="Data Science Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a061f]/95 via-[#0a061f]/90 to-violet-900/50" />
      </div>

      {/* Python Logo Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img
          src="https://raw.githubusercontent.com/python/python-logos/main/python-logo-only.png"
          alt="Python Logo"
          className="w-96 h-96 object-contain opacity-20"
        />
      </div>

      {/* Rest of the content remains exactly the same */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a061f]/95 to-violet-900/50 opacity-90 z-10" />
        
        {/* Floating Binary Grid */}
        <div className="absolute inset-0 grid-bg z-0" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.1
              }}
            >
              {[Binary, Network, Cpu][i % 3] && (
                <div className="text-violet-400 opacity-20">
                  {React.createElement([Binary, Network, Cpu][i % 3], {
                    size: 40 + (i * 20),
                    className: "animate-pulse"
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-20">
        <div className="backdrop-blur-sm py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Brain className="w-64 h-64 text-violet-400 animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
                Data Science
              </h1>
              <p className="text-xl text-violet-200 max-w-3xl mx-auto relative z-10">
                Transform data into actionable insights through advanced analytics and machine learning
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-[#1a1133]/80 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20 hover:border-violet-500/40 transition-colors">
                <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
                <ul className="space-y-4 text-violet-200">
                  <li className="flex items-start group">
                    <Database className="w-5 h-5 text-violet-400 mt-1 mr-3 group-hover:text-violet-300 transition-colors" />
                    <span>Data collection and preprocessing techniques</span>
                  </li>
                  <li className="flex items-start group">
                    <LineChart className="w-5 h-5 text-violet-400 mt-1 mr-3 group-hover:text-violet-300 transition-colors" />
                    <span>Advanced statistical analysis and visualization</span>
                  </li>
                  <li className="flex items-start group">
                    <Code className="w-5 h-5 text-violet-400 mt-1 mr-3 group-hover:text-violet-300 transition-colors" />
                    <span>Python programming and data structures</span>
                  </li>
                  <li className="flex items-start group">
                    <Brain className="w-5 h-5 text-violet-400 mt-1 mr-3 group-hover:text-violet-300 transition-colors" />
                    <span>Machine learning algorithms and applications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1a1133]/80 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20 hover:border-violet-500/40 transition-colors">
                <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
                <ul className="space-y-2 text-violet-200">
                  <li className="transform hover:translate-x-2 transition-transform">• Python programming and libraries</li>
                  <li className="transform hover:translate-x-2 transition-transform">• Data analysis with Pandas & NumPy</li>
                  <li className="transform hover:translate-x-2 transition-transform">• Interactive data visualization</li>
                  <li className="transform hover:translate-x-2 transition-transform">• Statistical methods and inference</li>
                  <li className="transform hover:translate-x-2 transition-transform">• Machine learning algorithms</li>
                  <li className="transform hover:translate-x-2 transition-transform">• Real-world project implementation</li>
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <div className="bg-[#1a1133]/80 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Learning Path</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Foundations",
                      desc: "Python and statistics fundamentals",
                      icon: Code
                    },
                    {
                      title: "Core Skills",
                      desc: "Data analysis and visualization",
                      icon: LineChart
                    },
                    {
                      title: "Advanced Topics",
                      desc: "Machine learning and deployment",
                      icon: Brain
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-6 bg-violet-900/20 rounded-lg hover:bg-violet-900/30 transition-colors group"
                    >
                      <item.icon className="w-8 h-8 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-violet-200">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}