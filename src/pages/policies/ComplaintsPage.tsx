import React from 'react';
import useScrollToTop from '../../utils/useScrollToTop';

const ComplaintsPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Complaints Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg mb-6">
            Last Updated: August 13, 2025
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment</h2>
          <p>
            At Finmount Ltd., we are committed to providing high-quality accounting and advisory services to all our clients. 
            However, we recognize that sometimes things can go wrong, and you may feel that we have not provided the standard of 
            service you expected. This complaints policy outlines how we handle and resolve complaints.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Make a Complaint</h2>
          <p>If you are dissatisfied with any aspect of our service, you can make a complaint in the following ways:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>By email:</strong> Send your complaint to complaints@finmount.ie with the subject line "Complaint"
            </li>
            <li>
              <strong>By post:</strong> Write to us at Finmount Ltd., Kylemore, Dublin 10, D10 EW77, Ireland, marking your 
              letter "Complaint - For the attention of the Complaints Manager"
            </li>
            <li>
              <strong>By phone:</strong> Call us on +353 87 490 5010 and ask to speak to the Complaints Manager
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Information We Need</h2>
          <p>To help us investigate and resolve your complaint efficiently, please provide:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your full name and contact details</li>
            <li>A clear description of your complaint</li>
            <li>Any relevant documentation or correspondence</li>
            <li>Details of what you would like us to do to resolve the matter</li>
            <li>Your client reference number (if applicable)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Complaints Procedure</h2>
          <p>We will handle your complaint according to the following process:</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Acknowledgment</h3>
          <p>
            We will acknowledge receipt of your complaint in writing within 3 business days of receiving it.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Investigation</h3>
          <p>
            Your complaint will be investigated by a senior member of our team who was not directly involved in the matter. 
            They will review all relevant information and may contact you for further details if necessary.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Response</h3>
          <p>
            We aim to provide a full response to your complaint within 15 business days. If the complaint is complex and requires 
            more time to investigate, we will let you know and keep you updated on our progress.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Resolution</h3>
          <p>
            Our response will explain our findings and any actions we have taken or propose to take to resolve your complaint. 
            If we find that we have fallen short of our standards, we will apologize and explain what went wrong.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Further Action</h3>
          <p>
            If you are not satisfied with our response, you can ask for your complaint to be escalated to our Director, 
            Binu Jose, who will review your case and provide a final response within 15 business days.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">External Resolution</h2>
          <p>
            If, after following our complaints procedure, you remain dissatisfied with our response, you may have the right to 
            refer your complaint to the appropriate professional body:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>For accounting and taxation matters:</strong> Association of Chartered Certified Accountants (ACCA)<br />
              The Adelphi<br />
              1-11 John Adam Street<br />
              London WC2N 6AU<br />
              United Kingdom<br />
              Website: <a href="https://www.accaglobal.com/gb/en/footertoolbar/contact-us/make-a-complaint.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">ACCA Complaints</a>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Record Keeping</h2>
          <p>
            We maintain records of all complaints received, our investigation, and the outcome. These records are used to 
            monitor the effectiveness of our complaints handling procedure and to identify trends or systemic issues that may need addressing.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Confidentiality</h2>
          <p>
            All complaints will be handled confidentially and in accordance with our Privacy Policy and relevant data protection regulations.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Continuous Improvement</h2>
          <p>
            We value your feedback and use it to improve our services. We regularly review our complaints to identify areas 
            where we can enhance our processes, services, or communication.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Complaints Policy, please contact:
          </p>
          <p className="mt-4">
            <strong>Complaints Manager</strong><br />
            Finmount Ltd.<br />
            Kylemore, Dublin 10, D10 EW77, Ireland<br />
            Email: complaints@finmount.ie<br />
            Phone: +353 87 490 5010
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPage;
