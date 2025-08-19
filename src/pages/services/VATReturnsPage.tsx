import React from 'react';
import CustomYearEndPage from '../../components/CustomYearEndPage';
import { FileText, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import useScrollToTop from '../../utils/useScrollToTop';

const VATReturnsPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const servicePoints = [
    { text: 'Scheme check & threshold monitoring' },
    { text: 'Return preparation & ROS filing' },
    { text: 'EC Sales/Listings if relevant' },
    { text: 'Audit trail & document retention' },
    { text: 'Deadline reminders and late-payment prevention' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'On-Time Filing',
      description: 'Finmount ensures your VAT returns are always submitted before deadlines, eliminating late filing penalties'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Mitigation',
      description: 'We maintain proper documentation and evidence to support your VAT claims during Revenue reviews'
    },
    {
      icon: CheckCircle,
      title: 'Accuracy Guaranteed',
      description: 'Our multi-stage review process ensures returns are accurate, reducing the risk of amendments'
    },
    {
      icon: FileText,
      title: 'Compliance Focus',
      description: 'We stay current with VAT regulations to ensure your business remains compliant with all requirements'
    }
  ];

  const keyBenefitsSection = (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits Explained</h2>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-full shadow-lg">
            <img 
              src="/images/meeting_room.png" 
              alt="VAT consultation and filing services" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-blue-300 pb-3">
              Why Professional VAT Management Matters
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Avoid Costly Penalties</h4>
                  <p className="text-blue-100">
                    Late or incorrect VAT filings can trigger significant penalties and interest charges from Revenue.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Documentation Defense</h4>
                  <p className="text-blue-100">
                    Proper record-keeping provides protection during Revenue inquiries and audits, preventing costly disputes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Cash Flow Optimization</h4>
                  <p className="text-blue-100">
                    Proper VAT planning helps manage payment timing and prevents unexpected cash flow disruptions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Time & Focus Recovery</h4>
                  <p className="text-blue-100">
                    Outsourcing VAT compliance frees you to concentrate on revenue-generating activities rather than administrative tasks.
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
      <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16">Why It Matters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg shadow transition-all duration-300 hover:shadow-lg">
          <Clock className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevents Penalties</h3>
          <p className="text-gray-600">
            At Finmount, we understand that VAT compliance isn't just about filing forms—it's about 
            protecting your business from unexpected penalties and cash flow disruptions. Our 
            structured approach ensures all returns are filed accurately and on time, every time.
          </p>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg shadow transition-all duration-300 hover:shadow-lg">
          <AlertTriangle className="h-8 w-8 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Coordinated Approach</h3>
          <p className="text-gray-600">
            We synchronize your VAT returns with your overall bookkeeping cadence, ensuring balances 
            are predictable and manageable. This integrated approach eliminates last-minute surprises 
            and helps you maintain steady cash flow planning throughout the year.
          </p>
        </div>
      </div>
    </>
  );

  return (
    <CustomYearEndPage
      title="VAT Returns Filing"
      subtitle="Right scheme, right evidence, right on time"
      description="At Finmount, we take a comprehensive approach to VAT compliance. We begin by assessing your VAT position and confirming scheme suitability based on your business model and thresholds. We then prepare your returns from reconciled records and file them on schedule with Revenue Online Service (ROS). All supporting evidence is meticulously retained to withstand potential reviews, and we provide expert guidance on complex scenarios such as mixed-rate supplies, cross-border services, and credit note processing."
      mainIcon={FileText}
      servicePoints={servicePoints}
      benefits={benefits}
      additionalContent={additionalContent}
      outcome="By partnering with Finmount for VAT returns, businesses can minimize their tax liability, avoid penalties for late or incorrect filing, and maintain compliance with all relevant tax regulations. This allows them to focus on growing their business rather than navigating complex tax requirements."
      ctaTitle="Get help with VAT returns"
      ctaDescription="Ensure compliance and optimize your VAT position with our expert support."
      ctaButtonText="Book a consultation"
      heroImage="/images/meeting_room.png"
    />
  );
};

export default VATReturnsPage;