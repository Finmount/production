import React from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Building2, Calculator, CheckCircle } from 'lucide-react';
import useScrollToTop from '../utils/useScrollToTop';

const IndustriesPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const industries = [
    {
      id: 'contractors',
      title: 'Contractors',
      icon: Users,
      description: 'Choose umbrella for speed or a Ltd for flexibility. We model both so you see net effects after tax/expenses and administration. We liaise with agencies, operate payroll correctly, and provide clear payslips and year-end summaries.',
      benefits: [
        'Same-day umbrella setup',
        'Ltd vs umbrella comparison modeling',
        'Agency liaison and contract review',
        'Accurate payroll and take-home calculations',
        'Clear year-end tax summaries',
        'Expense guidance and compliance'
      ]
    },
    {
      id: 'startups-smes',
      title: 'Startups & SMEs',
      icon: TrendingUp,
      description: 'We implement cloud bookkeeping, standardise month-end, close on a fixed day, and hold a recurring review to keep budgets, cash, and VAT aligned. When you raise, we convert management accounts into investor-friendly projections.',
      benefits: [
        'Cloud bookkeeping implementation',
        'Standardized month-end processes',
        'Regular budget and cash flow reviews',
        'VAT compliance and planning',
        'Investor-ready financial projections',
        'Funding readiness support'
      ]
    },
    {
      id: 'retail-hospitality',
      title: 'Retail & Hospitality',
      icon: Building2,
      description: 'Multiple rates and tips pooling create VAT and payroll complexity. We align POS Z-reads to bookkeeping, reconcile merchant takings, and ensure service charges and benefits are treated correctly.',
      benefits: [
        'Complex VAT rate handling',
        'POS system integration and Z-read reconciliation',
        'Merchant takings reconciliation',
        'Tips pooling and service charge compliance',
        'Staff benefits administration',
        'Inventory and waste tracking'
      ]
    },
    {
      id: 'trades',
      title: 'Trades',
      icon: Calculator,
      description: 'We tame receipts and supplier bills, schedule VAT and RCT interactions where relevant, and project cash needs across seasonal swings.',
      benefits: [
        'Mobile receipt capture and management',
        'Supplier bill processing and tracking',
        'VAT and RCT compliance',
        'Seasonal cash flow projections',
        'Job costing and profitability analysis',
        'Equipment depreciation scheduling'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-24" 
               style={{
                 backgroundImage: `linear-gradient(rgba(0, 0, 60, 0.6), rgba(0, 0, 60, 0.6)), url('/images/setup.png')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries we help
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We understand the unique challenges and opportunities in different sectors. 
              Our tailored approach ensures your accounting supports your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div 
                key={industry.id}
                id={industry.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <industry.icon className="h-12 w-12 text-blue-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {industry.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {industry.description}
                  </p>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get tailored advice
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      How we help {industry.title.toLowerCase()}
                    </h3>
                    <ul className="space-y-3">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get industry-specific support?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us about your business and we'll show you how our services can be tailored to your industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              Get a tailored quote
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

export default IndustriesPage;