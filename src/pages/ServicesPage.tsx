import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Calculator, 
  Users, 
  TrendingUp, 
  Building2, 
  Star, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import useScrollToTop from '../utils/useScrollToTop';

const ServicesPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const services = [
    {
      title: 'Year-End Accounts',
      path: '/services/year-end-accounts',
      icon: FileText,
      description: 'Compliant financial statements, iXBRL preparation, and CRO filing within the required window.',
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
      description: 'Always-on books with bank feeds, reconciliations, and monthly management packs with commentary.',
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
      description: 'Right scheme assessment, accurate returns from reconciled records, and on-time ROS filing.',
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
      title: 'Payroll & HR Solutions',
      path: '/services/payroll-hr',
      icon: Users,
      description: 'PAYE Modernisation compliant payroll with real-time reporting and HR support templates.',
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
      description: 'Forward-looking budgets, cash flow projections, and board-ready management packs.',
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
      description: 'Company formations, annual returns, officer changes, and statutory register maintenance.',
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
      title: 'EIIS Investment Advisory',
      path: '/services/eiis-advisory',
      icon: Star,
      description: 'Structure EIIS investment schemes correctly with Revenue coordination and compliance.',
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
      title: 'Umbrella Company (PAYE)',
      path: '/services/umbrella-company',
      icon: Shield,
      description: 'Same-day contractor setup with compliant payroll, expenses handling, and dedicated support.',
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

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-16">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
          backgroundImage: "url('/images/setup.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Full-stack finance for Irish businesses
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Whether you're hiring your first employee or coordinating a contractor payroll at scale, 
              Finmount provides one place for compliance and decision support. Explore our services below, 
              then request a scope-specific quote.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* What's included */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {service.included.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to discuss your needs?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us about your business — we'll recommend the right services and provide a tailored quote.
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

export default ServicesPage;