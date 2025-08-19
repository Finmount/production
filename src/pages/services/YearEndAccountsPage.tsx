import React, { useEffect } from 'react';
import CustomYearEndPage from '../../components/CustomYearEndPage';
import { FileText, CheckCircle, Calendar, AlertCircle, ArrowRight, Award, Shield, TrendingUp, Clock, Briefcase, PieChart, BookOpen, FilePlus } from 'lucide-react';
import useScrollToTop from '../../utils/useScrollToTop';

const YearEndAccountsPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const servicePoints = [
    { text: 'Compliant financial statement preparation aligned with your trial balance' },
    { text: 'Year-end journal postings (depreciation, accruals, prepayments)' },
    { text: 'Comprehensive sign-off pack for records, lenders, and investors' },
    { text: 'Director\'s report drafting with appropriate business review sections' },
    { text: 'iXBRL preparation and submission (where required)' },
    { text: 'CRO and Revenue filing status monitoring' },
    { text: 'Financial statement footnotes with required disclosures' },
    { text: 'Year-end tax provision calculations' },
    { text: 'Audit support (if applicable) or audit exemption statements' },
    { text: 'Electronic filing with appropriate authorities' }
  ];

  const benefits = [
    {
      icon: Calendar,
      title: 'On-Time Filing',
      description: 'Finmount ensures your accounts meet all statutory deadlines, avoiding penalties and preserving audit exemption. Our proactive approach means you\'ll never miss a critical date.'
    },
    {
      icon: FileText,
      title: 'Professional Documentation',
      description: 'Our presentation-quality financial statements are suitable for banks, investors, and other stakeholders. Clear formatting and comprehensive notes make your financials accessible and professional.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Assured',
      description: 'We stay current with changing accounting standards and disclosure requirements. Our team continuously updates their knowledge to ensure your accounts remain fully compliant with the latest regulations.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Our thorough review process identifies and addresses potential issues before they become problems, protecting your business from compliance risks and financial misstatements.'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Insights',
      description: 'Beyond compliance, we provide analytical commentary that helps you understand your financial position and make informed business decisions based on your year-end results.'
    },
    {
      icon: Award,
      title: 'Expert Oversight',
      description: 'All work is reviewed by ACCA-qualified professionals who ensure technical accuracy and identify opportunities for financial optimization.'
    },
    {
      icon: AlertCircle,
      title: 'Forward Planning',
      description: 'Receive a next-year compliance calendar with all critical deadlines and requirements, allowing you to plan effectively and avoid last-minute pressure.'
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'By outsourcing this complex task to specialists, you free up valuable internal resources to focus on core business activities and growth opportunities.'
    }
  ];
  
  const processSteps = [
    {
      icon: FileText,
      title: 'Data Handover',
      description: 'We collect your trial balance, nominal ledger, AP/AR schedules, and fixed assets register',
      timeline: 'Week 1'
    },
    {
      icon: CheckCircle,
      title: 'Technical Review',
      description: 'Our team performs adjustments, prepares necessary disclosures, and drafts director\'s report if needed',
      timeline: 'Week 2-3'
    },
    {
      icon: FileText,
      title: 'Draft Pack',
      description: 'We prepare a comprehensive draft including P&L, Balance Sheet, Cash Flow, and notes',
      timeline: 'Week 3-4'
    },
    {
      icon: Calendar,
      title: 'Sign-off & Filing',
      description: 'Final approval, submission, and reminders for next ARD and tax dates',
      timeline: 'Week 4-5'
    }
  ];

  const whatIncludedSection = (
    <div className="mt-12 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included in Detail</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
              Financial Statements Package
            </h3>
            <div className="space-y-3 mb-6 flex-grow">
              <p className="text-gray-700">
                Our comprehensive financial statements package includes:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-medium">Profit & Loss Statement:</span> Detailed breakdown of revenue and expenses with year-on-year comparisons
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-medium">Balance Sheet:</span> Complete overview of assets, liabilities, and shareholders' equity
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-medium">Cash Flow Statement:</span> Analysis of operating, investing, and financing activities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-medium">Notes to Financial Statements:</span> Comprehensive explanations of accounting policies and disclosures
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-medium">Director's Report:</span> Professionally drafted narrative meeting all legal requirements
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FilePlus className="h-6 w-6 text-blue-600 mr-2" />
              Technical & Compliance Elements
            </h3>
            <div className="space-y-3 mb-6 flex-grow">
              <p className="text-gray-700">
                We handle all technical aspects required for compliance:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-medium">iXBRL Tagging:</span> Proper preparation of accounts in iXBRL format as required by Revenue
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-medium">Audit Exemption Statements:</span> Documentation confirming eligibility for audit exemption
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-medium">Year-End Adjustments:</span> All necessary journals including depreciation, accruals, prepayments, and provisions
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-medium">CRO Annual Return (B1):</span> Preparation and filing of form B1 within the statutory window
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-medium">Management Letter:</span> Strategic recommendations based on financial findings
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const keyBenefitsSection = (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits Explained</h2>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-full shadow-lg">
            <img 
              src="/images/table.png" 
              alt="Financial analysis with business documents" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-blue-300 pb-3">
              Why Professional Year-End Accounts Matter
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Build Credibility</h4>
                  <p className="text-blue-100">
                    Professional accounts inspire confidence among stakeholders, from investors to banks to suppliers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Avoid Costly Penalties</h4>
                  <p className="text-blue-100">
                    Late or incorrect filings can lead to substantial penalties, loss of audit exemption, and damage to credit rating.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <PieChart className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Gain Financial Insights</h4>
                  <p className="text-blue-100">
                    Our detailed analysis helps you understand performance trends and make informed strategic decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Support Growth Opportunities</h4>
                  <p className="text-blue-100">
                    Clean, professional financial statements are essential when seeking investment, loans, or new business relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const complianceAlert = (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Compliance Alert</h2>
      <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-400 shadow transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Important CRO Requirements</h3>
            <p className="text-orange-700">
              The Companies Registration Office (CRO) requires an annual return (Form B1) within 56 days of 
              its effective date. Late filings risk substantial fees and potential loss of audit exemption, 
              which can significantly increase compliance costs. At Finmount, we carefully track these 
              deadlines for you and ensure all submissions are made with ample time to spare.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const deliverablesSection = (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Deliverables</h2>
      <div className="bg-white p-8 rounded-lg shadow transition-all duration-300 hover:shadow-lg">
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Final signed accounts (PDF) + iXBRL where applicable</span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Management letter with improvement actions</span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Filing confirmation + next-year compliance calendar</span>
          </li>
        </ul>
      </div>
    </>
  );
  
  const additionalContent = (
    <>
      {keyBenefitsSection}
      {whatIncludedSection}
      <div className="mt-16"></div>
      {complianceAlert}
      <div className="mt-16"></div>
      {deliverablesSection}
    </>
  );

  return (
    <CustomYearEndPage
      title="Year-End Accounts"
      subtitle="Professional financial statements that keep you compliant"
      description="At Finmount, we prepare compliant financial statements, align them to your trial balance, post year-end journals (depreciation, accruals, prepayments), and produce a clean, sign-offable pack for your records, lenders, and investors. Where required, we prepare iXBRL and submit via the correct channels so your company remains in good standing with the CRO and Revenue."
      mainIcon={FileText}
      servicePoints={servicePoints}
      benefits={benefits}
      processSteps={processSteps}
      additionalContent={additionalContent}
      outcome="Our year-end accounts service provides businesses with accurate, compliant financial statements that satisfy regulatory requirements while providing valuable insights for business planning. This approach not only ensures compliance but also identifies opportunities for tax efficiency and business improvement."
      ctaTitle="Prepare for year-end"
      ctaDescription="Get your accounts in order and ensure compliance with our expert year-end service."
      ctaButtonText="Book a consultation"
      heroImage="/images/meeting_room.png"
    />
  );
};

export default YearEndAccountsPage;