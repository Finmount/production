import React from 'react';
import useScrollToTop from '../../utils/useScrollToTop';

const PrivacyPolicyPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg mb-6">
            Last Updated: August 13, 2025
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p>
            Finmount Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or use our accounting services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Complete forms or create accounts on our website</li>
            <li>Sign up for our newsletter</li>
            <li>Contact us via email, phone, or other channels</li>
            <li>Engage our services</li>
            <li>Submit documents for accounting, tax, or advisory purposes</li>
          </ul>
          <p>This information may include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name, email address, phone number, and mailing address</li>
            <li>Business information, including company name, registration numbers, VAT numbers</li>
            <li>Financial information necessary for providing our services</li>
            <li>Identification documents and PPS numbers</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Automatically Collected Information</h3>
          <p>
            When you access our website, we may automatically collect certain information about your device and usage, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referral source</li>
            <li>Device information</li>
          </ul>
          <p>
            We collect this information using cookies and similar technologies. Please refer to our Cookie Policy for more information.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use your personal information for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process and complete transactions</li>
            <li>Send you service-related notices and updates</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Comply with our legal and regulatory obligations</li>
            <li>Prevent fraud and enhance security</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze usage patterns to improve our website and services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Legal Basis for Processing</h2>
          <p>We process your personal information based on one or more of the following legal grounds:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Contractual necessity:</strong> To fulfill our contractual obligations to you</li>
            <li><strong>Legal obligation:</strong> To comply with legal requirements</li>
            <li><strong>Legitimate interests:</strong> Where necessary for our legitimate business interests</li>
            <li><strong>Consent:</strong> Where you have given us consent to process your data</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Service providers:</strong> Third parties who provide services on our behalf</li>
            <li><strong>Professional advisors:</strong> Accountants, lawyers, or auditors as necessary</li>
            <li><strong>Regulatory authorities:</strong> Government agencies or tax authorities when required by law</li>
            <li><strong>Business partners:</strong> With your consent, when necessary for providing our services</li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes for which we collected it, 
            including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. 
            For tax and accounting records, we typically retain information for a minimum of 6 years as required by Irish law.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Your Data Protection Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Erasure:</strong> Request deletion of your data in certain circumstances</li>
            <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
            <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests or direct marketing</li>
            <li><strong>Withdraw consent:</strong> Withdraw previously given consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us at privacy@finmount.ie.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, 
            alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. International Data Transfers</h2>
          <p>
            We primarily process data within the European Economic Area (EEA). If we transfer your information outside the EEA, 
            we ensure that appropriate safeguards are in place in compliance with GDPR requirements.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Children's Privacy</h2>
          <p>
            Our services are not directed at individuals under 16 years of age. We do not knowingly collect personal information 
            from children. If you become aware that a child has provided us with personal information, 
            please contact us at privacy@finmount.ie.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be effective as of the date stated at the top of this page. 
            We encourage you to review this Privacy Policy periodically.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="mt-4">
            <strong>Finmount Ltd.</strong><br />
            Kylemore, Dublin 10, D10 EW77, Ireland<br />
            Email: privacy@finmount.ie<br />
            Phone: +353 87 490 5010
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Data Protection Officer</h2>
          <p>
            Our Data Protection Officer can be contacted at dpo@finmount.ie.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Complaints</h2>
          <p>
            If you believe that our processing of your personal information infringes data protection laws, 
            you have the right to lodge a complaint with the Irish Data Protection Commission or another EU supervisory authority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
