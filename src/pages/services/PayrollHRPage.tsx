import React from 'react';
import CustomYearEndPage from '../../components/CustomYearEndPage';
import { Users, CheckCircle, Shield, Clock, FileText } from 'lucide-react';
import useScrollToTop from '../../utils/useScrollToTop';

const PayrollHRPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const servicePoints = [
    { text: 'Employee setup, RPN lookups, ROS submissions' },
    { text: 'Weekly/fortnightly/monthly runs with validations' },
    { text: 'Payslips and employer reports' },
    { text: 'Year-end statements and corrections per Revenue rules' },
    { text: 'Optional HR add-ons: onboarding packs, policy templates, leave tracker' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Real-Time Reporting',
      description: 'Finmount ensures all submissions are made in real-time according to Revenue\'s PAYE Modernisation requirements'
    },
    {
      icon: Users,
      title: 'Named Contact',
      description: 'Your queries go to a dedicated payroll specialist who understands your business and your unique setup'
    },
    {
      icon: Shield,
      title: 'Compliance Assured',
      description: 'Our multi-stage validation process prevents errors and ensures all statutory obligations are met'
    },
    {
      icon: FileText,
      title: 'Secure Delivery',
      description: 'All payslips and reports are delivered through our encrypted client portal for maximum data protection'
    }
  ];

  const keyBenefitsSection = (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits Explained</h2>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-full shadow-lg">
            <img 
              src="/images/setup.png" 
              alt="Payroll and HR administration" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-blue-300 pb-3">
              Why Outsource Payroll & HR
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Eliminate Compliance Risk</h4>
                  <p className="text-blue-100">
                    Avoid costly penalties and interest for incorrect or late filings with Revenue.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Reclaim Valuable Time</h4>
                  <p className="text-blue-100">
                    Free up internal resources from complex administrative tasks to focus on growth activities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Enhance Employee Experience</h4>
                  <p className="text-blue-100">
                    Provide professional, accurate payslips and responsive support for employee queries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Access Expert Knowledge</h4>
                  <p className="text-blue-100">
                    Leverage specialists who stay current with changing employment and tax regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const assuranceSection = (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">PAYE Modernisation Compliance</h2>
      <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-400 shadow transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start space-x-4">
          <Shield className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Compliance Matters</h3>
            <p className="text-gray-700 text-lg">
              Revenue's PAYE Modernisation initiative requires accurate, real-time reporting for all payroll 
              transactions. At Finmount, our structured process prevents "month-end surprises" by validating 
              data before submission and ensuring any necessary corrections are handled according to Revenue's 
              specific protocols.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              Non-compliance can result in penalties, interest charges, and potential Revenue interventions. 
              Our team stays current with all regulatory changes and ensures your payroll remains fully 
              compliant at all times, giving you peace of mind and allowing you to focus on your core business.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const additionalContent = (
    <>
      {keyBenefitsSection}
      <div className="mt-16"></div>
      {assuranceSection}
    </>
  );

  return (
    <CustomYearEndPage
      title="Payroll & HR Solutions"
      subtitle="On-time, compliant payroll under PAYE Modernisation"
      description="At Finmount, we operate your payroll to Revenue's real-time reporting standard, manage starters and leavers efficiently, calculate statutory leave entitlements, and issue payslips securely. Employee queries are directed to a named contact who knows your business and understands your specific payroll requirements. Our comprehensive approach ensures you remain fully compliant while providing a smooth experience for both employers and employees."
      mainIcon={Users}
      servicePoints={servicePoints}
      benefits={benefits}
      additionalContent={additionalContent}
      outcome="Clients who use our payroll and HR services benefit from reduced administrative burden, guaranteed compliance with ever-changing regulations, and more time to focus on core business activities. Employees receive accurate, timely payments and clear documentation, leading to higher satisfaction and trust."
      ctaTitle="Streamline your payroll"
      ctaDescription="Focus on your business while we handle your payroll and HR compliance."
      ctaButtonText="Get started"
      heroImage="/images/setup.png"
    />
  );
};

export default PayrollHRPage;