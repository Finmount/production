import React from 'react';
import CustomYearEndPage from '../../components/CustomYearEndPage';
import { Star, CheckCircle, Users, TrendingUp, FileText } from 'lucide-react';
import useScrollToTop from '../../utils/useScrollToTop';

const EIISAdvisoryPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const servicePoints = [
    { text: 'Eligibility check against EIIS rules and company stage' },
    { text: 'Investor pack: business plan, projections, term sheet' },
    { text: 'Share issue mechanics and cap-table impact' },
    { text: 'Drafting support for required EIIS documentation' },
    { text: 'Liaison with Revenue and ongoing compliance calendar' }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Eligibility Certainty',
      description: 'Finmount performs thorough assessments to confirm your eligibility before you begin the process'
    },
    {
      icon: FileText,
      title: 'Investor-Ready Materials',
      description: 'We create professional documentation that gives investors confidence in your compliance'
    },
    {
      icon: Star,
      title: 'Tax Relief Maximization',
      description: 'Our structured approach ensures investors can claim their full tax relief entitlement'
    },
    {
      icon: TrendingUp,
      title: 'Ongoing Compliance',
      description: 'We establish a clear timeline of compliance requirements throughout the holding period'
    }
  ];

  const whoItsFor = [
    {
      icon: TrendingUp,
      title: 'Founders',
      description: 'Planning a compliant fundraise with tax-efficient investor incentives'
    },
    {
      icon: Users,
      title: 'Angel Investors',
      description: 'Assessing investee eligibility and documentation requirements'
    },
    {
      icon: Star,
      title: 'Growing SMEs',
      description: 'Seeking growth capital with attractive investor relief'
    }
  ];

  const keyBenefitsSection = (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits Explained</h2>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-full shadow-lg">
            <img 
              src="/images/banner.png" 
              alt="EIIS investment advisory" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-blue-300 pb-3">
              Why EIIS Matters
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Tax-Efficient Fundraising</h4>
                  <p className="text-blue-100">
                    Investors can claim up to 40% of their investment as tax relief, making your company more attractive.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Avoid Costly Errors</h4>
                  <p className="text-blue-100">
                    Incorrect EIIS implementation can lead to Revenue challenges and investor tax relief rejection.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Professional Documentation</h4>
                  <p className="text-blue-100">
                    Complete, compliant documentation gives investors confidence in your offering.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Growth Acceleration</h4>
                  <p className="text-blue-100">
                    Access to capital allows for strategic investments in expansion, development, and market entry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const whoItsForSection = (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Who It's For</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {whoItsFor.map((audience, index) => {
          const AudienceIcon = audience.icon;
          return (
            <div 
              key={audience.title}
              className="text-center p-6 rounded-lg bg-white shadow transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110">
                <AudienceIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
  
  const additionalContent = (
    <>
      {keyBenefitsSection}
      <div className="mt-16"></div>
      {whoItsForSection}
    </>
  );

  return (
    <CustomYearEndPage
      title="EIIS Investment Advisory"
      subtitle="Structure EIIS the right way from day one"
      description="At Finmount, we provide comprehensive guidance on the Employment/Enterprise Investment Incentive Scheme (EIIS), which offers valuable tax relief to qualifying investors in eligible trading companies. Our expert team assesses your eligibility, helps structure the fundraise, prepares investor-grade financials, and coordinates with Revenue to ensure all documentation and timelines are correctly managed. We help you navigate this complex but valuable funding avenue with confidence."
      mainIcon={Star}
      servicePoints={servicePoints}
      benefits={benefits}
      additionalContent={additionalContent}
      outcome="Our EIIS advisory service has helped numerous companies successfully raise funding to fuel their growth, while providing investors with attractive tax-efficient investment opportunities. Companies have been able to expand operations, develop new products, and enter new markets, while investors have enjoyed significant tax relief."
      ctaTitle="Explore EIIS opportunities"
      ctaDescription="Learn how your company can benefit from EIIS funding or how you can invest tax-efficiently."
      ctaButtonText="Schedule a consultation"
      heroImage="/images/banner.png"
    />
  );
};

export default EIISAdvisoryPage;