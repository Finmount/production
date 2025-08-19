import React from 'react';
import useScrollToTop from '../../utils/useScrollToTop';

const TermsOfServicePage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg mb-6">
            Last Updated: August 13, 2025
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p>
            These Terms of Service ("Terms") govern your use of the website and services provided by Finmount Ltd. 
            ("we," "our," or "us"), including our accounting, advisory, and financial services (collectively, the "Services"). 
            By accessing or using our Services, you agree to be bound by these Terms.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Service Description</h2>
          <p>
            Finmount Ltd. provides accounting, tax, bookkeeping, and advisory services to businesses and individuals in Ireland. 
            Our specific services include year-end accounts preparation, online bookkeeping, VAT returns, payroll services, 
            business advisory, company secretarial services, EIIS advisory, and umbrella company services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Client Responsibilities</h2>
          <p>When using our Services, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate, complete, and up-to-date information</li>
            <li>Cooperate with our reasonable requests for information and documentation</li>
            <li>Review and approve any documents or filings we prepare on your behalf</li>
            <li>Maintain the confidentiality of any passwords or access credentials</li>
            <li>Pay all fees and charges as set out in our engagement letter or fee schedule</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Fees and Payment</h2>
          <p>
            Our fees are outlined in our engagement letter or fee schedule provided to you before commencing Services. 
            Unless otherwise agreed in writing:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Invoices are payable within 14 days of issue</li>
            <li>We reserve the right to charge interest on late payments at the rate of 8% per annum above the European Central Bank base rate</li>
            <li>We may suspend or terminate Services if payments are not received when due</li>
            <li>We may review and adjust our fees annually</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property Rights</h2>
          <p>
            All content on our website, including text, graphics, logos, images, and software, is the property of Finmount Ltd. 
            or our licensors and is protected by copyright and other intellectual property laws.
          </p>
          <p className="mt-3">
            We grant you a limited, non-exclusive, non-transferable license to access and use our website for your personal, 
            non-commercial use. You may not reproduce, distribute, modify, create derivative works of, publicly display, 
            publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Confidentiality</h2>
          <p>
            We will maintain the confidentiality of your information in accordance with our professional obligations and applicable laws. 
            We will not disclose your information to third parties without your consent, except as required by law or as necessary to 
            provide our Services.
          </p>
          <p className="mt-3">
            You agree to maintain the confidentiality of any information we provide to you that is marked confidential or that would 
            reasonably be understood to be confidential.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Finmount Ltd. shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
            or any loss of data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your use of or inability to use our Services</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
            <li>Any errors or omissions in the content of our website</li>
            <li>Any third-party content or services accessed through our website</li>
          </ul>
          <p>
            Our total liability for any claim arising out of or relating to these Terms or our Services shall not exceed the total 
            amount paid by you to us during the 12 months preceding the event giving rise to the claim.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Finmount Ltd., our officers, directors, employees, and agents from 
            and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable 
            attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Termination</h2>
          <p>
            We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, 
            including if you breach these Terms.
          </p>
          <p className="mt-3">
            You may terminate your engagement with us by providing written notice in accordance with the notice period specified 
            in our engagement letter.
          </p>
          <p className="mt-3">
            Upon termination, your right to use our Services will immediately cease. All provisions of these Terms which by their 
            nature should survive termination shall survive termination, including, without limitation, ownership provisions, 
            warranty disclaimers, indemnity, and limitations of liability.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Ireland, without regard to its conflict of 
            law principles. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in 
            the courts of Ireland.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of any significant changes by posting the 
            updated Terms on our website. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Entire Agreement</h2>
          <p>
            These Terms, together with any engagement letter or other written agreement between us, constitute the entire agreement 
            between you and Finmount Ltd. regarding our Services and supersede all prior and contemporaneous understandings, agreements, 
            representations, and warranties, both written and oral.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Severability</h2>
          <p>
            If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining 
            provisions shall be enforced to the fullest extent under law.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-4">
            <strong>Finmount Ltd.</strong><br />
            Kylemore, Dublin 10, D10 EW77, Ireland<br />
            Email: info@finmount.ie<br />
            Phone: +353 87 490 5010
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
