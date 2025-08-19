import React from 'react';
import CustomYearEndPage from '../../components/CustomYearEndPage';
import { TrendingUp, CheckCircle, BarChart3, Target, DollarSign } from 'lucide-react';
import useScrollToTop from '../../utils/useScrollToTop';

const BusinessAdvisoryPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const servicePoints = [
    { text: '12-month budget + 13-week cash-flow with scenario modeling' },
    { text: 'KPI selection and dashboard build for commercial & operational metrics' },
    { text: 'Pricing strategy, gross margin, and break-even analysis' },
    { text: 'Funding readiness assessment and lender pack preparation' },
    { text: 'Regular strategy sessions with clear action items and accountability' }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: 'Forward-Looking',
      description: 'Finmount helps you plan what to do next, not just explain what happened last month'
    },
    {
      icon: Target,
      title: 'Actionable Insights',
      description: 'Every recommendation comes with clear actions, owners, and success metrics'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Focused',
      description: 'We help you understand your unit economics and scale efficiently'
    },
    {
      icon: DollarSign,
      title: 'Investment Ready',
      description: 'We prepare you for funding conversations with robust projections and sensitivity analysis'
    }
  ];

  const engagementTypes = [
    {
      icon: BarChart3,
      title: 'Financial Modeling',
      description: 'We build custom financial models with scenario toggles to help you visualize different business outcomes and make data-driven decisions'
    },
    {
      icon: Target,
      title: 'KPI Dashboard Design',
      description: 'We identify the key performance indicators that truly matter to your business and build intuitive dashboards for monitoring progress'
    },
    {
      icon: DollarSign,
      title: 'Pricing Strategy',
      description: 'We analyze your cost structure, market positioning, and competitive landscape to optimize your pricing for profitability and growth'
    },
    {
      icon: TrendingUp,
      title: 'Funding Preparation',
      description: 'We create comprehensive financial projections, sensitivity analyses, and lender-ready documentation to support your funding journey'
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
              alt="Business advisory services" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-blue-300 pb-3">
              Why Strategic Advisory Matters
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Strategic Direction</h4>
                  <p className="text-blue-100">
                    Move beyond reactive management to proactive decision-making with data-backed plans.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Focused Execution</h4>
                  <p className="text-blue-100">
                    Transform strategy into actionable plans with clear metrics, milestones, and accountabilities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Performance Visibility</h4>
                  <p className="text-blue-100">
                    Identify trends and patterns before they become problems or missed opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-full text-blue-700">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Resource Optimization</h4>
                  <p className="text-blue-100">
                    Allocate financial and human capital more effectively based on ROI and strategic priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const engagementTypesSection = (
    <div className="relative">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Engagement Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {engagementTypes.map((engagement, index) => {
          const EngagementIcon = engagement.icon;
          return (
            <div 
              key={engagement.title}
              className="bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-lg animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <EngagementIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{engagement.title}</h3>
                  <p className="text-gray-600">{engagement.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  
  const approachSection = (
    <div className="relative">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach</h2>
      <div className="bg-blue-50 p-8 rounded-lg shadow transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start space-x-4">
          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-gray-700 text-lg">
              At Finmount, we believe that effective advisory services require more than just financial expertise. 
              We establish an agreed monthly or quarterly cadence with clear actions, owners, and metrics. 
              We document the "why" behind every recommendation so you can teach the model to your team and 
              build internal capabilities. Our goal is to be a true partner in your business success, not just 
              an external advisor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const additionalContent = (
    <>
      {keyBenefitsSection}
      <div className="mt-16">
        {engagementTypesSection}
      </div>
      <div className="mt-16">
        {approachSection}
      </div>
    </>
  );

  return (
    <CustomYearEndPage
      title="Business Advisory"
      subtitle="From reports to decisions"
      description="At Finmount, we transform your bookkeeping and year-end outputs into forward-looking plans: comprehensive budgets, rolling forecasts, pricing and margin analysis, and board-ready packs. Our advisory service bridges the gap between historical financial data and strategic business decisions. We focus on helping you decide what to do next quarter, not just explaining what happened last quarter."
      mainIcon={TrendingUp}
      servicePoints={servicePoints}
      benefits={benefits}
      additionalContent={additionalContent}
      outcome="Our business advisory services have helped numerous clients overcome challenges, capitalize on opportunities, and achieve sustainable growth. By providing objective insights and strategic guidance, we've enabled businesses to make informed decisions that have resulted in improved profitability, operational efficiency, and market position."
      ctaTitle="Get strategic guidance"
      ctaDescription="Transform challenges into opportunities with our expert business advisory services."
      ctaButtonText="Schedule a consultation"
      heroImage="/images/banner.png"
    />
  );
};

export default BusinessAdvisoryPage;