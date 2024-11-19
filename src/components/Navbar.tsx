import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    { name: 'Abacus', path: '/courses/abacus' },
    { name: 'Vedic Maths', path: '/courses/vedic-maths' },
    { name: 'Olympiad', path: '/courses/olympiad' },
    { name: 'Digital Marketing', path: '/courses/digital-marketing' },
    { name: 'MS Office', path: '/courses/ms-office' },
    { name: 'Data Science', path: '/courses/data-science' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a061f]/40 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Calculator className="h-8 w-8 text-violet-400" />
            <span className="ml-2 text-xl font-bold text-white">MathGenius Academy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-violet-400 transition-colors">Home</a>
            <div className="relative">
              <button 
                className="text-white hover:text-violet-400 transition-colors flex items-center"
                onMouseEnter={() => setShowCourses(true)}
                onClick={() => setShowCourses(!showCourses)}
              >
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showCourses && (
                <div 
                  className="absolute top-full left-0 w-48 bg-[#0a061f]/95 backdrop-blur-sm border border-violet-500/20 rounded-lg shadow-lg py-2"
                  onMouseLeave={() => setShowCourses(false)}
                >
                  {courses.map((course) => (
                    <a
                      key={course.path}
                      href={course.path}
                      className="block px-4 py-2 text-white hover:bg-violet-600/20 transition-colors"
                    >
                      {course.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#benefits" className="text-white hover:text-violet-400 transition-colors">Benefits</a>
            <a 
              href="#contact" 
              className="bg-violet-600/70 hover:bg-violet-600 text-white px-6 py-2.5 rounded-lg transition-colors border border-violet-500/30 backdrop-blur-sm"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-violet-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0a061f]/60 backdrop-blur-sm border-t border-violet-900/20">
            <a
              href="/"
              className="block px-3 py-2 text-white hover:text-violet-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            {courses.map((course) => (
              <a
                key={course.path}
                href={course.path}
                className="block px-3 py-2 text-white hover:text-violet-400 transition-colors pl-6"
                onClick={() => setIsOpen(false)}
              >
                {course.name}
              </a>
            ))}
            <a
              href="#benefits"
              className="block px-3 py-2 text-white hover:text-violet-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 bg-violet-600/70 hover:bg-violet-600 text-white rounded-lg transition-colors border border-violet-500/30 backdrop-blur-sm mx-3"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}