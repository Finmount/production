import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import useScrollToTop from '../utils/useScrollToTop';

const PricingPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const plans = [
    {
      name: 'Option 1',
      price: '€350',
      period: '/mo',
      description: 'Weekly Payroll & Monthly Bookkeeping Services',
      features: [
        'Weekly payroll processing - up to 5 employees',
        'Monthly Payroll submission to Revenue',
        'Sales Invoice processing - Till Data',
        'Supplier invoice processing',
        'Vat Return processing & filing – Bi Monthly',
        'Weekly Payroll - Small (1-5 Employees) - €100',
        'Small Company - Monthly Bookkeeping Services - €250'
      ],
      cta: 'Choose Option 1',
      popular: false
    },
    {
      name: 'Option 2',
      price: '€600',
      period: '/mo',
      description: 'Small Company Full Accounting Service',
      features: [
        'Weekly payroll processing - up to 5 employees',
        'Monthly Payroll submission to Revenue',
        'Sales Invoice processing - Till Data',
        'Supplier invoice processing',
        'Vat Return processing & filing – Bimonthly',
        'Bank Reconciliation',
        'Cash Reconciliation',
        'Payroll Data posting to accounting system',
        'Monthly Management Accounts to Directors - P & L A/c',
        'Weekly Payroll - Small (1-5 Employees) - €100'
      ],
      cta: 'Choose Option 2',
      popular: true
    },
    {
      name: 'Option 3',
      price: '€1,000',
      period: '/mo',
      description: 'Medium Company Full Accounting Service',
      features: [
        'Experienced bookkeeper in client site - 2 Days/Month',
        'Weekly payroll processing - up to 15 employees',
        'Monthly Payroll submission to Revenue',
        'Sales Invoice processing - Till Data',
        'Supplier invoice processing',
        'Vat Return processing & filing – Bi Monthly',
        'Bank Reconciliation',
        'Credit Card Reconciliation',
        'Directors A/c Reconciliation',
        'Cash Reconciliation'
      ],
      cta: 'Choose Option 3',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-16">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
          backgroundImage: "url('/images/banner.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple structure; scope-specific quotes
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Choose the plan that fits your business size and needs. All plans include 
              deadline tracking and reminders so filings don't slip.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:ring-2 hover:ring-blue-500 animate-fade-up relative ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transform hover:scale-105'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Charges */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Yearly Charges</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Year End Accounts Preparation - Ltd company</h3>
            <p className="text-3xl font-bold text-blue-700 mb-6">€1,500 <span className="text-gray-500 text-lg font-normal">Ex Vat</span></p>
            
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Services:</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Year end accounts preparation for Directors</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">CRO B-1 Return Filing</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">CRO - Abridged Accounts preparation & filing</span>
              </li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-700">
              <p className="font-medium mb-1">Notes:</p>
              <p>For Cash & Bank reconciliation, we need to provide with supporting breakdowns</p>
              <p>Billing - End of every month & payable on or before 15th of next month</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Plans Include */}
      <section className="py-8 bg-blue-50 border-l-4 border-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Every plan includes</h3>
              <p className="text-blue-700">
                Deadline tracking and reminders (CRO/Revenue) so filings don't slip. 
                Never miss an important compliance date again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get an exact quote
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tell us your turnover band, employee count, systems used, and desired cadence for a precise quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-all duration-200 transform hover:scale-105"
            >
              Get an exact quote <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <a
              href="https://wa.me/353874905010"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              WhatsApp for pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;