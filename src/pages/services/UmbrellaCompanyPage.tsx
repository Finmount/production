import React from 'react';
import CustomYearEndPage from '../../components/CustomYearEndPage';
import { Shield, CheckCircle, Calculator, Clock, FileText, ExternalLink, Coins, LineChart, PiggyBank } from 'lucide-react';
import useScrollToTop from '../../utils/useScrollToTop';

const UmbrellaCompanyPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const servicePoints = [
    { text: 'Same-day setup (once documents are complete)' },
    { text: 'Contract review & right-to-work checks' },
    { text: 'Employer taxes, PAYE/USC/PRSI handled' },
    { text: 'Weekly/fortnightly payroll, payslips portal' },
    { text: 'Expense guidance and compliant record-keeping' },
    { text: 'Dedicated support for queries' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Predictable Take-Home',
      description: 'Finmount ensures you know exactly what you\'ll receive each month with clear pay calculations'
    },
    {
      icon: Shield,
      title: 'Minimal Admin',
      description: 'We handle all the paperwork, compliance, and tax calculations so you can focus on your contracts'
    },
    {
      icon: CheckCircle,
      title: 'Fully Compliant',
      description: 'Work as a contractor without forming a Limited company while maintaining full compliance'
    },
    {
      icon: FileText,
      title: 'Dedicated Support',
      description: 'Get personalized assistance from our team who understand your specific contracting situation'
    }
  ];

  const ccpcToolsSection = (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Financial Planning Tools</h2>
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-100">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                  <Calculator className="h-6 w-6 text-blue-600 mr-2" />
                  CCPC Money Tools
                </h3>
                <p className="text-gray-700 mb-6">
                  For accurate financial planning, we recommend using the Competition and Consumer Protection Commission's comprehensive suite of financial calculators and budget tools.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <PiggyBank className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-600">Budget planners to manage your monthly finances</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <LineChart className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-600">Tax calculators to estimate your take-home pay</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <Coins className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-600">Financial comparison tools for better decision making</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="https://www.ccpc.ie/consumers/money-tools/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Access CCPC Money Tools
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">How Finmount Works With You</h3>
              <p className="text-gray-700 mb-6">
                While these tools provide excellent general estimates, at Finmount we offer personalized calculations based on your specific circumstances and contract details.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800">Personal Consultation</h4>
                  <p className="text-gray-600">We'll walk through your specific situation and provide tailored advice</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800">Detailed Breakdown</h4>
                  <p className="text-gray-600">Receive a complete analysis of your income, deductions, and tax obligations</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-800">Ongoing Support</h4>
                  <p className="text-gray-600">Regular reviews as your circumstances change to maximize your income</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const futurePathSection = (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Future Path Options</h2>
      <div className="bg-blue-50 p-8 rounded-lg shadow transition-all duration-300 hover:shadow-lg">
        <p className="text-gray-700 text-lg">
          At Finmount, we understand that your contracting journey may evolve over time. If you later decide 
          to switch to a Limited company structure, our team will map out the steps and timing to ensure a 
          smooth transition without losing momentum in your contracting work.
        </p>
        <p className="text-gray-700 text-lg mt-4">
          We'll provide guidance on the optimal timing for making this transition based on your contract 
          terms, income levels, and future plans. Our integrated service means you'll have continuity of 
          support whether you operate under our umbrella or through your own Limited company.
        </p>
      </div>
    </>
  );

  const keyBenefitsSection = (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits Explained</h2>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-full shadow-lg">
            <img 
              src="/images/setup.png" 
              alt="Contractor working with umbrella company support" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-blue-300 pb-3">
              Why Choose an Umbrella Company
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Immediate Start</h4>
                  <p className="text-blue-100">
                    Begin contracting within hours instead of waiting weeks to set up a limited company.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Zero Compliance Burden</h4>
                  <p className="text-blue-100">
                    No company filings, director responsibilities, or tax complexity to worry about.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Calculator className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Transparent Finances</h4>
                  <p className="text-blue-100">
                    Clear breakdown of income, deductions, and take-home pay with no hidden surprises.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Employment Benefits</h4>
                  <p className="text-blue-100">
                    Access to statutory benefits while maintaining the freedom and rates of contracting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const additionalContent = (
    <>
      {keyBenefitsSection}
      <div className="mt-16"></div>
      {ccpcToolsSection}
      <div className="mt-16"></div>
      {futurePathSection}
    </>
  );

  return (
    <CustomYearEndPage
      title="Umbrella Company (PAYE)"
      subtitle="Contracting made simple under a PAYE umbrella"
      description="At Finmount, we offer a streamlined PAYE umbrella solution for contractors who want to start fast with minimal administration. Our ready-to-use umbrella company handles invoicing your agency or client, runs compliant payroll, and manages all tax and expense requirements. This solution is ideal for short engagements, first-time contractors, or professionals who prefer not to manage their own Limited company. We take care of the paperwork so you can focus on your contracts."
      mainIcon={Shield}
      servicePoints={servicePoints}
      benefits={benefits}
      additionalContent={additionalContent}
      outcome="Contractors who use our umbrella company service enjoy hassle-free contracting, with all administrative burdens handled by us. They receive the benefits of employment status while maintaining the flexibility of contracting, and can focus entirely on their professional work without worrying about compliance or administrative tasks."
      ctaTitle="Simplify your contracting"
      ctaDescription="Join our umbrella company and enjoy the benefits of contracting with the flexibility of employment."
      ctaButtonText="Get started"
      heroImage="/images/setup.png"
    />
  );
};

export default UmbrellaCompanyPage;