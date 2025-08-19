import React from 'react';
import CustomYearEndPage from '../../components/CustomYearEndPage';
import { Calculator, Clock, BarChart3, Shield, Users, FileCheck, Database, PieChart, Laptop } from 'lucide-react';
import useScrollToTop from '../../utils/useScrollToTop';

const OnlineBookkeepingPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const servicePoints = [
    { text: 'Bank/Stripe/PayPal feeds, reconciliations, supplier bills, expense management' },
    { text: 'Aged debtors/creditors with follow-up options and automated reminders' },
    { text: 'Month-end journals & schedules (fixed assets, deferred revenue, work-in-progress)' },
    { text: 'Comprehensive monthly pack: P&L, Balance Sheet, Cash Flow, plus detailed commentary and KPIs' },
    { text: 'Advanced features: inventory/project tracking; custom integrations with your business systems' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Always Current',
      description: 'At Finmount, we ensure your financial data is updated daily, so decisions are made with real-time information'
    },
    {
      icon: BarChart3,
      title: 'Clear Insights',
      description: 'Our team provides actionable narratives explaining financial movements, not just raw numbers'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'We implement enterprise-grade encryption and secure authentication to protect your sensitive financial data'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Every client at Finmount receives a dedicated bookkeeper with director-level oversight on all accounts'
    }
  ];
  
  const processSteps = [
    {
      icon: FileCheck,
      title: 'Initial Setup',
      description: 'We configure your chart of accounts, import historical data, and establish bank feeds',
      timeline: 'Week 1'
    },
    {
      icon: Database,
      title: 'Daily Processing',
      description: 'Our team categorizes transactions, matches receipts, and reconciles accounts daily',
      timeline: 'Ongoing'
    },
    {
      icon: PieChart,
      title: 'Monthly Review',
      description: 'We prepare financial statements, variance analysis, and conduct review meetings',
      timeline: 'Monthly'
    },
    {
      icon: Laptop,
      title: 'Strategic Planning',
      description: 'Quarterly deep dives into your financials with actionable recommendations',
      timeline: 'Quarterly'
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
              alt="Online bookkeeping services" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-blue-300 pb-3">
              Why Professional Bookkeeping Matters
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Real-Time Decision Making</h4>
                  <p className="text-blue-100">
                    Daily updated books enable immediate strategic decisions without waiting for month-end.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Reduced Compliance Risk</h4>
                  <p className="text-blue-100">
                    Accurate ongoing bookkeeping eliminates VAT errors, filing delays, and audit concerns.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Database className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Clean Financial Records</h4>
                  <p className="text-blue-100">
                    Well-maintained books streamline year-end processes, saving time and professional fees.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Better Business Insights</h4>
                  <p className="text-blue-100">
                    Regular reporting reveals trends, opportunities, and areas requiring attention before they become issues.
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
      <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16">Cadence & Tooling</h2>
      <div className="bg-blue-50 p-8 rounded-lg shadow transition-all duration-300 hover:shadow-lg">
        <p className="text-gray-700 text-lg">
          At Finmount, we believe in structure and transparency. We'll agree on a monthly close date 
          and establish a standing agenda for your regular review calls. You'll have access to a 
          secure client portal for document uploads, approvals, and real-time insights into your 
          financial performance.
        </p>
        <p className="text-gray-700 text-lg mt-4">
          Our bookkeeping service integrates seamlessly with your existing tools and workflows. 
          Whether you use Xero, QuickBooks, Sage, or other accounting software, our team will work 
          within your preferred ecosystem or recommend the most efficient solution for your business needs.
        </p>
      </div>
    </>
  );

  return (
    <CustomYearEndPage
      title="Online Bookkeeping"
      subtitle="Always-on books for everyday decisions"
      description="At Finmount, we keep your ledgers current with bank feeds, intelligent rules, and regular reconciliations so your P&L and cash position are never weeks out of date. Expect clean AP/AR, VAT tracking, and comprehensive month-end packs that explain why profit moved, not just that it moved. Our dedicated team ensures your financial data is always accurate, secure, and actionable."
      mainIcon={Calculator}
      servicePoints={servicePoints}
      benefits={benefits}
      processSteps={processSteps}
      additionalContent={additionalContent}
      outcome="With Finmount's online bookkeeping service, our clients enjoy the peace of mind that comes with knowing their financial records are accurate, up-to-date, and compliant. They can make informed business decisions based on real-time data rather than outdated reports."
      ctaTitle="Get a bookkeeping plan"
      ctaDescription="Keep your books current and get monthly insights that help you make better decisions."
      ctaButtonText="Get a bookkeeping plan"
      heroImage="/images/setup.png"
    />
  );
};

export default OnlineBookkeepingPage;