import React from 'react';
import CustomYearEndPage from '../../components/CustomYearEndPage';
import { Building2, CheckCircle, AlertCircle, FileText, Calendar, Shield } from 'lucide-react';
import useScrollToTop from '../../utils/useScrollToTop';

const CompanySecretarialPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const servicePoints = [
    { text: 'Company formations & name checks' },
    { text: 'Annual returns (B1), registered office/agent updates' },
    { text: 'Director/secretary appointments & resignations' },
    { text: 'Share allotments/transfers, certificates, and PSC/RBO considerations' },
    { text: 'Minute books and statutory registers maintenance' }
  ];

  const benefits = [
    {
      icon: Calendar,
      title: 'Never Miss Deadlines',
      description: 'Finmount\'s proactive reminder system ensures all statutory filings occur within required timeframes'
    },
    {
      icon: Building2,
      title: 'Proper Documentation',
      description: 'We maintain comprehensive records that satisfy legal requirements and stand up to scrutiny'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Our experts stay current with changing CRO and RBO requirements to keep your company compliant'
    },
    {
      icon: FileText,
      title: 'Organized Records',
      description: 'Digital and physical filing systems that make information retrieval simple when needed'
    }
  ];

  const reminderSection = (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Important Compliance Alert</h2>
      <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-400 shadow transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start space-x-4">
          <AlertCircle className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-orange-800 mb-3">Critical Annual Return Deadline</h3>
            <p className="text-orange-700 text-lg">
              The Companies Registration Office (CRO) imposes a strict 56-day window for filing annual returns. 
              Missing this deadline triggers escalating late fees and can permanently impact your company's audit 
              exemption status—significantly increasing compliance costs in future years.
            </p>
            <p className="text-orange-700 text-lg mt-4">
              At Finmount, our structured calendar system ensures we begin preparing your annual return well 
              in advance of deadlines. We provide multiple reminders and handle the entire process efficiently, 
              keeping your company in good standing with the CRO at all times.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const keyServicesSection = (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-lg text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110">
            <Building2 className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Company Formations</h3>
          <p className="text-gray-600">
            Complete company setup with name availability checks, incorporation documentation, and initial statutory registers
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-lg text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110">
            <FileText className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Annual Returns</h3>
          <p className="text-gray-600">
            Timely B1 filings with the CRO, registered office updates, and maintenance of accurate company records
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-lg text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Governance Support</h3>
          <p className="text-gray-600">
            Director/secretary changes, share transactions, and RBO filings handled with precision and compliance focus
          </p>
        </div>
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
              src="/images/meeting_room.png" 
              alt="Company secretarial services" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-blue-300 pb-3">
              Why Proper Company Secretarial Matters
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Avoid Costly Penalties</h4>
                  <p className="text-blue-100">
                    Late filings result in substantial CRO penalties and potential loss of audit exemption status.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Maintain Legal Standing</h4>
                  <p className="text-blue-100">
                    Proper documentation protects your company's limited liability status and corporate veil.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Director Protection</h4>
                  <p className="text-blue-100">
                    Compliant records reduce personal liability risks for directors and corporate officers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Transaction Readiness</h4>
                  <p className="text-blue-100">
                    Clean corporate records facilitate smooth financing, investment, or acquisition processes.
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
      {reminderSection}
      <div className="mt-16"></div>
      {keyServicesSection}
    </>
  );

  return (
    <CustomYearEndPage
      title="Company Secretarial"
      subtitle="Clean registers, smooth filings"
      description="At Finmount, we provide comprehensive company secretarial services, managing everything from initial company formations and name checks to annual returns, officer changes, share movements, and statutory register maintenance. Our structured approach ensures you have organized records and never miss critical filing deadlines. We act as your dedicated company secretary, handling all administrative compliance so you can focus on running your business."
      mainIcon={Building2}
      servicePoints={servicePoints}
      benefits={benefits}
      additionalContent={additionalContent}
      outcome="By utilizing our company secretarial services, clients maintain perfect compliance with statutory requirements, avoid penalties, and benefit from a professionally managed corporate governance structure. This gives directors peace of mind and allows them to focus on business growth rather than administrative compliance."
      ctaTitle="Ensure corporate compliance"
      ctaDescription="Let our experts handle your company secretarial needs so you can focus on running your business."
      ctaButtonText="Learn more"
      heroImage="/images/meeting_room.png"
    />
  );
};

export default CompanySecretarialPage;