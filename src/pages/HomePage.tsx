import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Users, 
  FileText,
  Calculator,
  TrendingUp,
  Building2,
  MessageCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import useScrollToTop from '../utils/useScrollToTop';
import TeamSection from '../components/TeamSection';

interface HomePageProps {
  onQuoteClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onQuoteClick }) => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const services = [
    {
      title: 'Year-End Accounts',
      path: '/services/year-end-accounts',
      icon: FileText,
      included: [
        'Compliant financial statements',
        'iXBRL preparation & filing',
        'Director\'s report if required',
        'CRO filing within 56-day window',
        'Management letter with actions',
        'Next-year compliance calendar'
      ]
    },
    {
      title: 'Online Bookkeeping',
      path: '/services/online-bookkeeping',
      icon: Calculator,
      included: [
        'Bank feeds & reconciliations',
        'Supplier bills & expense management',
        'Monthly P&L, Balance Sheet, Cash Flow',
        'Commentary explaining movements',
        'Aged debtors/creditors tracking',
        'Secure client portal access'
      ]
    },
    {
      title: 'VAT Returns Filing',
      path: '/services/vat-returns',
      icon: FileText,
      included: [
        'Scheme check & threshold monitoring',
        'Return preparation from reconciled records',
        'ROS filing on schedule',
        'EC Sales/Listings if relevant',
        'Document retention for audits',
        'Deadline reminders & penalty prevention'
      ]
    },
    {
      title: 'Payroll & HR',
      path: '/services/payroll-hr',
      icon: Users,
      included: [
        'PAYE Modernisation compliance',
        'Employee setup & RPN lookups',
        'Weekly/fortnightly/monthly runs',
        'Payslips & employer reports',
        'Year-end statements per Revenue rules',
        'HR templates & leave tracking'
      ]
    },
    {
      title: 'Business Advisory',
      path: '/services/business-advisory',
      icon: TrendingUp,
      included: [
        '12-month budget + 13-week cash flow',
        'KPI selection & dashboard build',
        'Pricing & margin analysis',
        'Funding readiness projections',
        'Board-ready management packs',
        'Monthly/quarterly review calls'
      ]
    },
    {
      title: 'Company Secretarial',
      path: '/services/company-secretarial',
      icon: Building2,
      included: [
        'Company formations & name checks',
        'Annual returns (B1) filing',
        'Director/secretary appointments',
        'Share allotments & transfers',
        'Minute books & statutory registers',
        'PSC/RBO compliance tracking'
      ]
    },
    {
      title: 'EIIS Advisory',
      path: '/services/eiis-advisory',
      icon: Star,
      included: [
        'Eligibility assessment vs EIIS rules',
        'Investor pack preparation',
        'Share issue mechanics',
        'Required documentation drafting',
        'Revenue liaison & submissions',
        'Ongoing compliance calendar'
      ]
    },
    {
      title: 'Umbrella Company',
      path: '/services/umbrella-company',
      icon: Shield,
      included: [
        'Same-day setup once documents complete',
        'Contract review & right-to-work checks',
        'PAYE/USC/PRSI handling',
        'Weekly/fortnightly payroll',
        'Expense guidance & record-keeping',
        'Dedicated support for queries'
      ]
    }
  ];

  const industries = [
    {
      title: 'Contractors',
      description: 'Quick start, umbrella or Ltd guidance, predictable take-home.',
      icon: Users,
      path: '/industries#contractors'
    },
    {
      title: 'Startups/SMEs',
      description: 'Cloud bookkeeping, monthly packs with commentary, funding readiness.',
      icon: TrendingUp,
      path: '/industries#startups-smes'
    },
    {
      title: 'Retail & Hospitality',
      description: 'VAT complexity handled; rota-to-payroll flows; inventory discipline.',
      icon: Building2,
      path: '/industries#retail-hospitality'
    },
    {
      title: 'Trades',
      description: 'Mobile receipt capture; cash-flow smoothing; quarterly reviews.',
      icon: Calculator,
      path: '/industries#trades'
    }
  ];

  const trustIndicators = [
    'ACCA-qualified leadership',
    'Responsive turnarounds',
    'Dublin-based, nationwide service',
    'Secure client portal',
    'Plain-English reporting'
  ];

  const whyFinmount = [
    {
      title: 'Proactive, not reactive',
      description: 'We don\'t just total the numbers at year-end; we keep your books current, flag risks early, and turn management accounts into specific actions.',
      icon: TrendingUp
    },
    {
      title: 'Senior oversight',
      description: 'Every file benefits from director-level review so you can sign with confidence.',
      icon: CheckCircle
    },
    {
      title: 'CRO/Revenue compliance',
      description: 'Annual returns, iXBRL uploads, ROS submissions, and payroll reporting are handled on time with reminders so deadlines never slip.',
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: 'Can you onboard mid-year?',
      answer: 'Yes — we reconcile to date and pick up filings immediately.'
    },
    {
      question: 'Do you liaise with Revenue & CRO?',
      answer: 'Yes — we prepare and submit, and we calendarise the next deadlines.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white pt-24 pb-16">
        {/* Background Image - Replace the URL with your actual image */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
          backgroundImage: "url('/images/banner.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Finmount Ltd — Accountants in Dublin for SMEs, contractors & growth companies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-up animation-delay-200">
              Accounting that keeps pace with your business. We prepare year-end accounts, maintain live online bookkeeping, 
              file accurate VAT returns, run payroll under PAYE Modernisation, and handle company secretarial tasks. 
              For founders and contractors, we add advisory support, EIIS investment guidance, and a compliant umbrella solution.
            </p>
            <p className="text-lg mb-10 text-blue-200 animate-fade-up animation-delay-400">
              Speak with us today and get a tailored quote that fits how you actually work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-600">
              <button
                onClick={onQuoteClick}
                className="px-8 py-4 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get a tailored quote
              </button>
              <a
                href="https://wa.me/353874905010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-gray-600">
            {trustIndicators.map((indicator, index) => (
              <React.Fragment key={indicator}>
                <span className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{indicator}</span>
                </span>
                {index < trustIndicators.length - 1 && (
                  <span className="hidden md:inline text-gray-300">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Why Finmount */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Finmount</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver more than just compliance—we're your partner for financial clarity and strategic growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image with floating elements */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500">
                <img 
                  src="/images/deal.png" 
                  alt="Business handshake" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-8 -right-8 bg-blue-100 text-blue-800 px-6 py-3 rounded-full shadow-lg transform rotate-12 animate-pulse">
                Director-level oversight
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-green-100 text-green-800 px-5 py-3 rounded-full shadow-lg transform -rotate-6">
                ACCA-qualified
              </div>
            </div>
            
            {/* Right side - Content cards */}
            <div className="space-y-8">
              {whyFinmount.map((item, index) => (
                <div 
                  key={item.title}
                  className="bg-white border-l-4 border-blue-600 shadow-md rounded-lg p-6 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-800 rounded-full">
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-6 text-center lg:text-left">
                <button
                  onClick={onQuoteClick}
                  className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Start your journey with us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services at a glance</h2>
            <p className="text-lg text-gray-600">Everything we include with our services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={service.title}
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3 mb-4 border-b pb-3">
                  <service.icon className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">{service.title}</h3>
                </div>
                
                {/* What's included - visible by default */}
                <div className="space-y-2 mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">What's included:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {service.included.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium mt-3"
                  >
                    Learn more <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
            >
              View All Services <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries we help</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Link
                key={industry.title}
                to={industry.path}
                className="group p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-800">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* FAQ Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              View all FAQs <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tell us how you work — we'll tailor the scope and fee
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onQuoteClick}
              className="px-8 py-4 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-all duration-200 transform hover:scale-105"
            >
              Get your tailored quote
            </button>
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

export default HomePage;