import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
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
    },
    {
      title: 'Corporate Tax Services',
      path: '/services/corporate-tax',
      icon: TrendingUp,
      included: [
        'Corporation tax returns',
        'Tax planning strategies',
        'Revenue compliance support',
        'Profit extraction planning',
        'Group structure advice',
        'Tax risk reviews'
      ]
    },
    {
      title: 'Personal Tax Services',
      path: '/services/personal-tax',
      icon: Users,
      included: [
        'Income tax returns',
        'Self-assessment filing',
        'Rental income reporting',
        'CGT calculations',
        'Tax credit reviews',
        'Revenue correspondence'
      ]
    },
    {
      title: 'Management Accounting',
      path: '/services/management-accounting',
      icon: Calculator,
      included: [
        'Monthly management accounts',
        'Cash flow forecasting',
        'Budget preparation',
        'KPI reporting',
        'Performance analysis',
        'Decision support reporting'
      ]
    },
    {
      title: 'Tax Planning & Advisory',
      path: '/services/tax-planning',
      icon: Shield,
      included: [
        'Business tax planning',
        'Personal tax optimisation',
        'Director remuneration planning',
        'Pension contribution strategies',
        'Capital gains planning',
        'Succession planning'
      ]
    },
    {
      title: 'Revenue Audit Assistance',
      path: '/services/revenue-audit',
      icon: FileText,
      included: [
        'Revenue audit preparation',
        'Documentation reviews',
        'Audit representation',
        'Compliance assessments',
        'Risk mitigation advice',
        'Revenue communications'
      ]
    },
    {
      title: 'Financial Consultancy',
      path: '/services/financial-consultancy',
      icon: TrendingUp,
      included: [
        'Business growth planning',
        'Funding readiness',
        'Financial modelling',
        'Investment analysis',
        'Strategic planning',
        'Performance improvement'
      ]
    },
    {
      title: 'Non-Resident VAT Registration',
      path: '/services/non-resident-vat-registration',
      icon: Building2,
      included: [
        'Irish VAT registration',
        'Non-resident compliance',
        'Revenue registrations',
        'VAT filing support',
        'Cross-border guidance',
        'Ongoing compliance monitoring'
      ]
    }
  ];

  const industries = [
    {
      title: 'Construction Companies',
      description: 'Accounting, payroll, VAT and tax support for builders and contractors.',
      icon: Building2,
      path: '/industries'
    },
    {
      title: 'Healthcare Professionals',
      description: 'Accounting and tax support for doctors, nurses and healthcare contractors.',
      icon: Shield,
      path: '/industries'
    },
    {
      title: 'E-Commerce',
      description: 'VAT, bookkeeping and reporting support for online businesses.',
      icon: TrendingUp,
      path: '/industries'
    },
    {
      title: 'Property Owners',
      description: 'Rental income reporting and tax planning support.',
      icon: Building2,
      path: '/industries'
    },
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
          backgroundImage: "url('/images/banner.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Accounting, Tax & Business Advisory
              <br />
              for Irish Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Professional accounting, payroll, taxation, company formation
              and business support services for SMEs, contractors and
              growing businesses across Ireland.
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

      {/* Salary Calculator Banner */}
      <section className="py-12 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      
            <div>
              <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                🇮🇪 NEW TOOL
              </span>
      
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Irish Salary Calculator 2026
              </h2>
      
              <p className="text-blue-100 text-lg max-w-2xl">
                Calculate your take-home pay instantly. Estimate PAYE, USC,
                PRSI and pension deductions using the latest Irish tax rates.
              </p>
      
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-blue-100">
                <span>✓ PAYE Calculator</span>
                <span>✓ USC Calculator</span>
                <span>✓ PRSI Calculator</span>
                <span>✓ Pension Impact</span>
              </div>
            </div>
      
            <Link
              to="/salary-calculator"
              className="px-8 py-4 bg-white text-blue-800 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Calculate My Salary →
            </Link>
      
          </div>
      
        </div>
      </section>
      <section className="py-12 bg-white">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        <div className="grid md:grid-cols-4 gap-6">
    
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-900">11+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
    
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-900">500+</h3>
            <p className="text-gray-600">Clients Supported</p>
          </div>
    
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-900">ACCA</h3>
            <p className="text-gray-600">Qualified Team</p>
          </div>
    
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-900">Nationwide</h3>
            <p className="text-gray-600">Service Across Ireland</p>
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
    <section className="relative min-h-[800px] overflow-hidden">
    
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/deal.jpg"
          alt="Why Finmount"
          className="w-full h-full object-cover"
        />
    
        <div className="absolute inset-0 bg-slate-900/45"></div>
      </div>
    
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
    
        <div className="max-w-3xl mb-16">
    
          <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm mb-6">
            WHY FINMOUNT
          </span>
    
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            More Than Compliance.
            <br />
            Strategic Business Support.
          </h2>
    
          <p className="text-xl text-gray-200 leading-relaxed">
            We help Irish businesses stay compliant, improve cash flow,
            reduce tax exposure and make better financial decisions.
          </p>
    
        </div>
    
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
    
        {whyFinmount.map((item) => (
          <div
            key={item.title}
            className="
              group
              relative
              overflow-hidden
              backdrop-blur-xl
              bg-white/10
              border
              border-white/20
              rounded-2xl
              p-8
              transition-all
              duration-500
              hover:-translate-y-3
              hover:scale-[1.02]
              hover:bg-white/15
              hover:border-white/40
              hover:shadow-[0_25px_50px_rgba(59,130,246,0.25)]
            "
          >
            {/* Blue Glow Effect */}
            <div
              className="
                absolute
                -top-12
                -right-12
                w-40
                h-40
                bg-blue-500/20
                rounded-full
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
              "
            />
        
            {/* Icon */}
            <div
              className="
                relative
                z-10
                w-14
                h-14
                rounded-xl
                bg-white/20
                flex
                items-center
                justify-center
                mb-5
                transition-all
                duration-500
                group-hover:scale-125
                group-hover:rotate-6
              "
            >
              <item.icon className="h-7 w-7 text-white" />
            </div>
        
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
        
              <p className="text-gray-200">
                {item.description}
              </p>
            </div>
          </div>
        ))}
    
        </div>
    
      </div>
    
    </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accounting & Business Services for Irish Companies</h2>
            <p className="text-lg text-gray-600">ACCA-qualified accounting, tax, payroll, company formation and business advisory services for SMEs, contractors, startups and growing businesses across Ireland.</p>
          </div>
          
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {services.map((service, index) => (
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
      
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Free Business Resources
            </h2>
      
            <p className="text-gray-600">
              Tools and guides for Irish businesses.
            </p>
          </div>
      
          <div className="grid md:grid-cols-3 gap-8">
      
            <Link to="/salary-calculator">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-3">
                  Irish Salary Calculator
                </h3>
      
                <p className="text-gray-600">
                  Calculate PAYE, USC and PRSI instantly.
                </p>
              </div>
            </Link>
      
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">
                VAT Calculator
              </h3>
      
              <p className="text-gray-600">
                Coming Soon
              </p>
            </div>
      
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">
                Startup Guide
              </h3>
      
              <p className="text-gray-600">
                Coming Soon
              </p>
            </div>
      
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
