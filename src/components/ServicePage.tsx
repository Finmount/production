import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

export interface ServicePoint {
  text: string;
}

export interface BenefitPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
  timeline?: string;
}

export interface ServicePageProps {
  // Basic info
  title: string;
  subtitle: string;
  description: string;
  mainIcon: LucideIcon;
  
  // Content sections
  servicePoints: ServicePoint[];
  benefits: BenefitPoint[];
  processSteps?: ProcessStep[];
  
  // Optional sections
  additionalContent?: React.ReactNode;
  outcome?: string;
  
  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  
  // Optional - for hero section background
  heroImage?: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  description,
  mainIcon: MainIcon,
  servicePoints,
  benefits,
  processSteps,
  additionalContent,
  outcome,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  heroImage
}) => {
  // Add scroll animations effect
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className={`relative text-white py-24 ${!heroImage ? 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700' : ''}`}
        style={heroImage ? {
          backgroundImage: `linear-gradient(rgba(0, 0, 60, 0.6), rgba(0, 0, 60, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl animate-on-scroll mt-8">
            <div className="flex items-center space-x-3 mb-6">
              <MainIcon className="h-8 w-8 text-blue-200" />
              <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            </div>
            <h2 className="text-2xl text-blue-100 mb-6">{subtitle}</h2>
            <p className="text-xl text-blue-100 mb-8">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-on-scroll">Key Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div 
                  key={benefit.title}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 animate-on-scroll"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110">
                    <BenefitIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-on-scroll">What's Included</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm animate-on-scroll">
            <ul className="space-y-4">
              {servicePoints.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 flex-shrink-0 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-lg">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Steps (if provided) */}
      {processSteps && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-on-scroll">Our Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <div 
                    key={step.title}
                    className="relative p-6 bg-blue-50 rounded-lg animate-on-scroll"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Number indicator */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    
                    <StepIcon className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    {step.timeline && (
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {step.timeline}
                      </span>
                    )}
                    
                    {/* Arrow connector for desktop */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <svg className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      
      {/* Additional Content (if provided) */}
      {additionalContent && (
        <section className="py-16 bg-gray-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {additionalContent}
          </div>
        </section>
      )}
      
      {/* Outcome (if provided) */}
      {outcome && (
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-on-scroll">Outcome</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-on-scroll">
              <p className="text-gray-700 text-lg italic">
                "{outcome}"
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <MainIcon className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {ctaTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {ctaDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              {ctaButtonText}
            </Link>
            <a
              href="https://wa.me/353874905010"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
