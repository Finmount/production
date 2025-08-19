import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calculator, BookOpen, Download, ExternalLink } from 'lucide-react';
import useScrollToTop from '../utils/useScrollToTop';

const ResourcesPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const guides = [
    {
      title: 'VAT in Ireland: choosing the right scheme',
      description: 'Complete guide with examples of reduced/zero rates and documentation requirements',
      icon: FileText,
      type: 'Guide'
    },
    {
      title: 'Year-end: the director\'s checklist',
      description: 'What to review before sign-off to ensure compliance and accuracy',
      icon: BookOpen,
      type: 'Checklist'
    },
    {
      title: 'Umbrella vs Ltd for contractors',
      description: 'Decision tree and calculator to help choose the right structure',
      icon: Calculator,
      type: 'Guide + Calculator'
    },
    {
      title: 'EIIS: founder & investor basics',
      description: 'Eligibility, documentation, and relief timing explained',
      icon: FileText,
      type: 'Guide'
    }
  ];

  const calculators = [
    {
      title: 'Contractor take-home estimator',
      description: 'Calculate your net take-home under umbrella employment',
      link: '/services/umbrella-company',
      type: 'Calculator'
    },
    {
      title: 'Employer payroll cost estimator',
      description: 'Estimate total employment costs including PRSI and other charges',
      type: 'Calculator'
    },
    {
      title: 'VAT liability estimator',
      description: 'Calculate your VAT obligations based on turnover and scheme',
      type: 'Calculator'
    }
  ];

  const blogPosts = [
    {
      title: 'How PAYE Modernisation affects corrections and arrears',
      excerpt: 'Understanding the real-time reporting requirements and how to handle corrections properly',
      readTime: '5 min read'
    },
    {
      title: 'Annual Return pitfalls that trigger late fees',
      excerpt: 'Common mistakes that result in CRO penalties and how to avoid them',
      readTime: '4 min read'
    },
    {
      title: 'How to prepare an investor pack for EIIS',
      excerpt: 'Essential documents and structuring advice for qualifying investment schemes',
      readTime: '7 min read'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-16">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
          backgroundImage: "url('/images/meeting_room.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-blue-100 mb-8">
              Free guides, calculators, and insights to help you navigate Irish business compliance 
              and make informed financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Guides & Checklists */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Guides & Checklists</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <div 
                key={guide.title}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-up cursor-pointer group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <guide.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {guide.type}
                      </span>
                      <Download className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{guide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16 bg-gray-50" id="calculators">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Calculators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {calculators.map((calculator, index) => (
              <div 
                key={calculator.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                  <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                    {calculator.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {calculator.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{calculator.description}</p>
                
                {calculator.link ? (
                  <Link
                    to={calculator.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Use calculator <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                ) : (
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Coming soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Blog</h2>
          <p className="text-lg text-gray-600 mb-8">
            Short, practical articles covering Irish business compliance and financial management.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article 
                key={post.title}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-up cursor-pointer group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <span className="text-blue-600 text-sm font-medium group-hover:text-blue-800">
                    Read more →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need personalized advice?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our resources are a great start, but every business is unique. 
            Get tailored advice for your specific situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              Get tailored advice
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

export default ResourcesPage;