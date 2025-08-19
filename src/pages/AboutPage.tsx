import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, MessageCircle, Star, Users } from 'lucide-react';
import useScrollToTop from '../utils/useScrollToTop';
import TeamSection from '../components/TeamSection';

const AboutPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const howWeWork = [
    {
      icon: MessageCircle,
      title: 'Plain English',
      description: 'We explain numbers so your team can act on them.'
    },
    {
      icon: Star,
      title: 'Senior review',
      description: 'Director oversight on every file.'
    },
    {
      icon: Shield,
      title: 'Secure & timely',
      description: 'Portal-based workflows; clear deadlines; no last-minute scrambles.'
    },
    {
      icon: CheckCircle,
      title: 'Partner mindset',
      description: 'We treat your objectives as ours and challenge assumptions when data says so.'
    }
  ];

  // No need for team data here as we'll use the TeamSection component

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-16">
        {/* Background Image - Replace the URL with your actual image */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
          backgroundImage: "url('/images/meeting_room.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our promise is clarity
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Finmount was founded to deliver proactive accounting to Irish businesses — work that prevents 
              surprises rather than explaining them afterwards. We combine ACCA-level rigour with modern 
              tooling and responsive service so you can focus on sales, delivery, and hiring.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How we work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWork.map((item, index) => (
              <div 
                key={item.title}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Contact Preference */}
      <section className="py-8 bg-blue-50 border-l-4 border-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            <p className="text-blue-800 font-semibold">
              Prefer chat? 
              <a
                href="https://wa.me/353874905010"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 underline hover:text-blue-900"
              >
                WhatsApp Us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to work with us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience proactive accounting that keeps pace with your business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-all duration-200 transform hover:scale-105"
            >
              Get a tailored quote
            </Link>
            <a
              href="https://wa.me/353874905010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;