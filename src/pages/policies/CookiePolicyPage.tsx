import React from 'react';
import useScrollToTop from '../../utils/useScrollToTop';

const CookiePolicyPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg mb-6">
            Last Updated: August 13, 2025
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p>
            This Cookie Policy explains how Finmount Ltd. ("we," "our," or "us") uses cookies and similar technologies 
            on our website. By using our website, you consent to the use of cookies as described in this policy.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit 
            a website. They are widely used to make websites work more efficiently, provide a better user experience, 
            and to provide information to the owners of the website.
          </p>
          <p className="mt-3">
            Cookies set by the website owner (in this case, Finmount Ltd.) are called "first-party cookies." Cookies set 
            by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party 
            features or functionality to be provided on or through the website (such as advertising, interactive content, and analytics).
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
          <p>We use the following types of cookies on our website:</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly and cannot be switched off in our systems. 
            They are usually only set in response to actions made by you which amount to a request for services, such as setting 
            your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, 
            but some parts of the site will not then work.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Performance Cookies</h3>
          <p>
            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. 
            They help us to know which pages are the most and least popular and see how visitors move around the site. All information 
            these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies, we will not know when you have 
            visited our site, and will not be able to monitor its performance.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Functionality Cookies</h3>
          <p>
            These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party 
            providers whose services we have added to our pages. If you do not allow these cookies, then some or all of these services may not 
            function properly.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.4 Targeting Cookies</h3>
          <p>
            These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your 
            interests and show you relevant advertisements on other sites. They do not store directly personal information but are based on 
            uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Specific Cookies Used</h2>
          <table className="border-collapse border border-gray-300 w-full mt-4 mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Cookie Name</th>
                <th className="border border-gray-300 p-2 text-left">Provider</th>
                <th className="border border-gray-300 p-2 text-left">Purpose</th>
                <th className="border border-gray-300 p-2 text-left">Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">_ga</td>
                <td className="border border-gray-300 p-2">Google Analytics</td>
                <td className="border border-gray-300 p-2">Used to distinguish users for analytics purposes</td>
                <td className="border border-gray-300 p-2">2 years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">_gid</td>
                <td className="border border-gray-300 p-2">Google Analytics</td>
                <td className="border border-gray-300 p-2">Used to distinguish users for analytics purposes</td>
                <td className="border border-gray-300 p-2">24 hours</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">_gat</td>
                <td className="border border-gray-300 p-2">Google Analytics</td>
                <td className="border border-gray-300 p-2">Used to throttle request rate</td>
                <td className="border border-gray-300 p-2">1 minute</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">cookieconsent_status</td>
                <td className="border border-gray-300 p-2">Finmount Ltd.</td>
                <td className="border border-gray-300 p-2">Saves your cookie consent status</td>
                <td className="border border-gray-300 p-2">1 year</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">sessionId</td>
                <td className="border border-gray-300 p-2">Finmount Ltd.</td>
                <td className="border border-gray-300 p-2">Manages session information</td>
                <td className="border border-gray-300 p-2">Session</td>
              </tr>
            </tbody>
          </table>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Third-Party Services</h2>
          <p>
            We use the following third-party services that may set cookies on your device:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Google Analytics:</strong> Used to analyze website traffic and user behavior</li>
            <li><strong>Google reCAPTCHA:</strong> Used to protect forms from spam</li>
            <li><strong>Social Media Sharing:</strong> Buttons that allow you to share content on social media platforms</li>
          </ul>
          <p>
            Each of these services has its own privacy policy and cookie usage, which we encourage you to review.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Managing Cookies</h2>
          <p>
            You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively 
            impact your user experience and parts of our website may no longer be fully accessible.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 Browser Controls</h3>
          <p>
            Most browsers allow you to view, delete, or block cookies from specific or all websites. Be aware that if you delete all 
            cookies, any preferences you have set will be lost, including the ability to opt-out from cookies as this function itself 
            requires the use of a cookie.
          </p>
          <p className="mt-3">
            For more information on how to modify your browser settings to block or filter cookies, visit:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Internet Explorer</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Microsoft Edge</a></li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Cookie Consent Tool</h3>
          <p>
            When you first visit our website, you will be presented with a cookie consent banner where you can choose which types of 
            cookies you allow. You can change your preferences at any time by clicking the "Cookie Settings" link in the footer of our website.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.3 Third-Party Opt-Out Tools</h3>
          <p>
            For cookies set by third-party services, you may use their opt-out mechanisms:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Google Analytics Opt-out Browser Add-on</a></li>
            <li>Online Advertising: <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">YourOnlineChoices</a> (EU) or <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">AboutAds</a> (US)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. 
            Any changes will be posted on this page with an updated revision date.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
          </p>
          <p className="mt-4">
            <strong>Finmount Ltd.</strong><br />
            Kylemore, Dublin 10, D10 EW77, Ireland<br />
            Email: privacy@finmount.ie<br />
            Phone: +353 87 490 5010
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
