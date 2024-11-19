import React from 'react';
import { Target, Users, Trophy, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: "Personalized Attention",
    description: "Small batch sizes ensuring individual growth tracking and support"
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from certified professionals with years of teaching experience"
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "90% of our students show significant improvement within 3 months"
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Choose from multiple batches to suit your convenience"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-[#0a061f]" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Why Choose Us</h2>
          <p className="text-xl text-violet-200">Experience the difference with our unique approach</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="inline-block p-4 bg-violet-900/20 rounded-full mb-6">
                <benefit.icon className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">{benefit.title}</h3>
              <p className="text-violet-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}