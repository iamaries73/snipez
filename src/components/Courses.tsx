import React from 'react';
import { Calculator, Brain, Award } from 'lucide-react';

const courses = [
  {
    title: "Abacus Mastery",
    icon: Calculator,
    description: "Learn mental arithmetic through ancient abacus techniques",
    levels: ["Beginner", "Intermediate", "Advanced"],
    duration: "3 months per level"
  },
  {
    title: "Vedic Mathematics",
    icon: Brain,
    description: "Ancient Indian system for lightning-fast calculations",
    levels: ["Foundation", "Advanced"],
    duration: "4 months per level"
  },
  {
    title: "Competitive Excellence",
    icon: Award,
    description: "Comprehensive preparation for mathematics competitions",
    levels: ["Olympiad Track", "Advanced Problem Solving"],
    duration: "6 months"
  }
];

export default function Courses() {
  return (
    <section className="py-20 bg-[#0f0926]" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Our Programs</h2>
          <p className="text-xl text-violet-200">Comprehensive courses designed for excellence</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.title} className="bg-[#1a1133] rounded-xl shadow-lg p-8 hover:shadow-violet-500/10 transition-shadow border border-violet-900/20">
              <course.icon className="w-12 h-12 text-violet-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-100 mb-4">{course.title}</h3>
              <p className="text-violet-200 mb-6">{course.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-200">Levels:</p>
                <ul className="list-disc list-inside text-violet-200 ml-2">
                  {course.levels.map((level) => (
                    <li key={level}>{level}</li>
                  ))}
                </ul>
                <p className="text-sm text-violet-400 font-semibold mt-4">
                  Duration: {course.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}