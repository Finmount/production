import React from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Building2, Calculator, CheckCircle } from 'lucide-react';
import useScrollToTop from '../utils/useScrollToTop';

const IndustriesPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
const industries = [
  {
    id: 'smes',
    title: 'SMEs',
    icon: TrendingUp,
    description:
      'Growing SMEs need reliable bookkeeping, management accounts, VAT compliance and strategic financial advice. We help business owners make informed decisions with accurate financial information.',
    benefits: [
      'Cloud bookkeeping',
      'Management accounts',
      'Cashflow forecasting',
      'VAT compliance',
      'Payroll management',
      'Business growth support'
    ]
  },

  {
    id: 'healthcare',
    title: 'Healthcare Professionals & HSE Contractors',
    icon: Users,
    description:
      'Specialist accounting support for doctors, consultants, nurses, locums, pharmacists and HSE contractors operating through limited companies or as self-employed professionals.',
    benefits: [
      'Medical contractor tax planning',
      'Revenue compliance',
      'Payroll and pension advice',
      'Practice setup support',
      'Annual accounts',
      'Income tax returns'
    ]
  },

  {
    id: 'restaurants',
    title: 'Restaurants, Cafés & Catering Businesses',
    icon: Building2,
    description:
      'Hospitality businesses face complex VAT rates, payroll requirements and cashflow challenges. We provide industry-specific support to keep your business compliant and profitable.',
    benefits: [
      'Hospitality VAT support',
      'Payroll and tips management',
      'POS reconciliation',
      'Cashflow management',
      'Management reporting',
      'Revenue compliance'
    ]
  },

  {
    id: 'import-export',
    title: 'Import & Export Businesses',
    icon: Building2,
    description:
      'Cross-border trade creates additional VAT and customs obligations. We help businesses manage international transactions efficiently.',
    benefits: [
      'Import VAT advice',
      'Export VAT compliance',
      'Intrastat guidance',
      'Cross-border tax planning',
      'Financial reporting',
      'Revenue compliance'
    ]
  },

  {
    id: 'non-resident',
    title: 'Non-Resident Companies',
    icon: Calculator,
    description:
      'We assist overseas companies trading in Ireland with VAT registration, compliance obligations and Irish tax requirements.',
    benefits: [
      'Irish VAT registration',
      'Non-resident VAT returns',
      'Revenue correspondence',
      'Irish compliance support',
      'Cross-border tax advice',
      'Ongoing accounting support'
    ]
  },

  {
    id: 'startups',
    title: 'Startups & New Businesses',
    icon: TrendingUp,
    description:
      'From company formation to funding readiness, we help startups establish strong financial foundations and scalable systems.',
    benefits: [
      'Company formation',
      'Business registrations',
      'Startup tax planning',
      'Investor-ready reporting',
      'Financial forecasting',
      'Growth advisory'
    ]
  },

  {
    id: 'owner-managed',
    title: 'Owner-Managed Companies',
    icon: Users,
    description:
      'Practical accounting and tax advice for directors seeking to maximise profits, optimise remuneration and grow their businesses.',
    benefits: [
      'Director remuneration planning',
      'Corporate tax planning',
      'Annual accounts',
      'Dividend planning',
      'Management reporting',
      'Business advisory'
    ]
  },

  {
    id: 'property-owners',
    title: 'Property Owners & Landlords',
    icon: Building2,
    description:
      'Specialist support for landlords and property investors covering rental income, tax compliance and investment planning.',
    benefits: [
      'Rental income reporting',
      'Income tax returns',
      'Property tax planning',
      'Capital gains tax guidance',
      'Record keeping support',
      'Revenue compliance'
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
