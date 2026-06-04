import React from 'react';
import CustomYearEndPage from '../../components/CustomYearEndPage';
import {
Building2,
CheckCircle,
Shield,
FileText,
Briefcase,
Users
} from 'lucide-react';
import useScrollToTop from '../../utils/useScrollToTop';

const BusinessRegistrationPage: React.FC = () => {
useScrollToTop();

const servicePoints = [
{ text: 'Company Registration' },
{ text: 'Sole Trader Registration' },
{ text: 'VAT Registration' },
{ text: 'Trading Name Registration' },
{ text: 'Revenue Registration' },
{ text: 'RBO Compliance Setup' }
];

const benefits = [
{
icon: Building2,
title: 'Fast Business Setup',
description: 'Get your business registered quickly and correctly.'
},
{
icon: Shield,
title: 'Full Compliance',
description: 'Ensure compliance with CRO, Revenue and RBO requirements.'
},
{
icon: FileText,
title: 'Accurate Documentation',
description: 'All registrations and filings completed professionally.'
},
{
icon: Briefcase,
title: 'Business Ready',
description: 'Start trading with confidence from day one.'
}
];

const keyBenefitsSection = ( <div className="my-16"> <h2 className="text-3xl font-bold text-gray-900 mb-8">
Key Benefits Explained </h2>

```
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img
        src="/images/setup.png"
        alt="Business Registration"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 border-b border-blue-300 pb-3">
        Why Proper Registration Matters
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg">
            Legal Business Structure
          </h4>
          <p className="text-blue-100">
            Establish the right legal structure for your business from the beginning.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">
            Revenue Compliance
          </h4>
          <p className="text-blue-100">
            Ensure all tax registrations are completed correctly.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">
            Professional Image
          </h4>
          <p className="text-blue-100">
            Build trust with customers, suppliers and lenders.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">
            Growth Ready
          </h4>
          <p className="text-blue-100">
            Create a solid foundation for future expansion.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


);

const keyServicesSection = (
<> <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
Key Services </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <Building2 className="h-12 w-12 mx-auto text-blue-700 mb-4" />
      <h3 className="text-xl font-semibold mb-3">
        Company Formation
      </h3>
      <p>
        Private Limited Company registration and setup.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow text-center">
      <Users className="h-12 w-12 mx-auto text-blue-700 mb-4" />
      <h3 className="text-xl font-semibold mb-3">
        Revenue Registration
      </h3>
      <p>
        Corporation Tax, PAYE and VAT registrations.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow text-center">
      <CheckCircle className="h-12 w-12 mx-auto text-blue-700 mb-4" />
      <h3 className="text-xl font-semibold mb-3">
        Compliance Setup
      </h3>
      <p>
        RBO registration and ongoing compliance support.
      </p>
    </div>
  </div>
</>
```

);

const additionalContent = (
<>
{keyBenefitsSection} <div className="mt-16"></div>
{keyServicesSection}
</>
);

return ( <CustomYearEndPage
   title="Business Registration Services"
   subtitle="Start your business with confidence"
   description="Finmount provides complete business registration services for entrepreneurs, startups and growing businesses. We assist with company incorporation, sole trader registration, VAT registration, trading name registration, Revenue registrations and RBO compliance."
   mainIcon={Building2}
   servicePoints={servicePoints}
   benefits={benefits}
   additionalContent={additionalContent}
   outcome="Clients benefit from a fully compliant business structure, professional registration support and a strong foundation for future growth."
   ctaTitle="Start your business today"
   ctaDescription="Let us handle the registration process while you focus on growing your business."
   ctaButtonText="Get Started"
   heroImage="/images/setup.png"
 />
);
};

export default BusinessRegistrationPage;
