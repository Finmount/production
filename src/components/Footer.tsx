import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/images/Logo.png" alt="Finmount Logo" className="h-10" />
              <span className="text-xl font-bold text-white">Finmount</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Proactive accounting for Irish businesses. ACCA-qualified leadership with director-level oversight on every file.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+353 87 490 5010</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@finmount.ie</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/year-end-accounts" className="text-gray-300 hover:text-white transition-colors">Year-End Accounts</Link></li>
              <li><Link to="/services/online-bookkeeping" className="text-gray-300 hover:text-white transition-colors">Online Bookkeeping</Link></li>
              <li><Link to="/services/vat-returns" className="text-gray-300 hover:text-white transition-colors">VAT Returns Filing</Link></li>
              <li><Link to="/services/payroll-hr" className="text-gray-300 hover:text-white transition-colors">Payroll & HR</Link></li>
              <li><Link to="/services/business-advisory" className="text-gray-300 hover:text-white transition-colors">Business Advisory</Link></li>
              <li><Link to="/services/company-secretarial" className="text-gray-300 hover:text-white transition-colors">Company Secretarial</Link></li>
              <li><Link to="/services/eiis-advisory" className="text-gray-300 hover:text-white transition-colors">EIIS Advisory</Link></li>
              <li><Link to="/services/umbrella-company" className="text-gray-300 hover:text-white transition-colors">Umbrella Company</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/industries#contractors" className="text-gray-300 hover:text-white transition-colors">Contractors</Link></li>
              <li><Link to="/industries#startups-smes" className="text-gray-300 hover:text-white transition-colors">Startups & SMEs</Link></li>
              <li><Link to="/industries#retail-hospitality" className="text-gray-300 hover:text-white transition-colors">Retail & Hospitality</Link></li>
              <li><Link to="/industries#trades" className="text-gray-300 hover:text-white transition-colors">Trades</Link></li>
            </ul>
            <h3 className="text-lg font-semibold mb-4 mt-6">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources#guides" className="text-gray-300 hover:text-white transition-colors">VAT Scheme Guide</Link></li>
              <li><Link to="/resources#guides" className="text-gray-300 hover:text-white transition-colors">Director's Checklist</Link></li>
              <li><Link to="/resources#calculators" className="text-gray-300 hover:text-white transition-colors">Contractor Calculator</Link></li>
              <li><Link to="/resources#guides" className="text-gray-300 hover:text-white transition-colors">EIIS Guide</Link></li>
            </ul>
            <h3 className="text-lg font-semibold mb-4 mt-6">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/complaints" className="text-gray-300 hover:text-white transition-colors">Complaints</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-8 border-t border-gray-800 pt-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-lg font-semibold mb-4">Visit Our Office</h3>
              <p className="text-gray-300 mb-4">
                Our office is conveniently located in Kylemore, Dublin 10. We're easily accessible and serve clients throughout Ireland.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <MapPin className="h-4 w-4" />
                <span>Kylemore, Dublin 10, D10 EW77, Ireland</span>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                While we're happy to meet in person, most of our services can be delivered remotely for your convenience.
              </p>
              <div className="mt-4">
                <Link to="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  Contact us to schedule a meeting
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full h-[250px] rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9529.793019412185!2d-6.35770892672049!3d53.335231656574464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670cea29134e83%3A0x43be4b4a82569cc2!2sKylemore%2C%20Dublin%2010%2C%20D10%20EW77!5e0!3m2!1sen!2sie!4v1755084464218!5m2!1sen!2sie" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Finmount Dublin Office Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Finmount Ltd. Kylemore, Dublin 10. Director: Binu Jose, ACCA, MBA (Finance). 
              All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-gray-400">
              <span>ACCA-qualified leadership</span>
              <span className="hidden md:inline">•</span>
              <span>Dublin-based, nationwide service</span>
              <span className="hidden md:inline">•</span>
              <span>Secure client portal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;