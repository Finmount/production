import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, CheckCircle, Clock } from 'lucide-react';
import { sendEmail, formatFormData } from '../utils/emailService';
import useScrollToTop from '../utils/useScrollToTop';

const ContactPage: React.FC = () => {
  // Use the custom hook to scroll to top on page load
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    services: [] as string[],
    turnoverBand: '',
    headcount: '',
    systems: '',
    cadence: '',
    notes: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email with form data
      await sendEmail({
        to: 'info@finmount.ie',
        subject: `Contact Form Submission from ${formData.name}`,
        body: formatFormData(formData)
      });
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessType: '',
          services: [],
          turnoverBand: '',
          headcount: '',
          systems: '',
          cadence: '',
          notes: '',
          consent: false
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const faqs = [
    {
      question: 'Do you file our annual return with the CRO?',
      answer: 'Yes. We capture the B1 electronically and manage uploads/sign-off within the 56-day window so you avoid late fees and loss of audit exemption.'
    },
    {
      question: 'How do you ensure payroll is compliant?',
      answer: 'We operate to PAYE Modernisation standards: accurate RPN lookups, real-time submissions, and correction rules when needed.'
    },
    {
      question: 'Can you set up umbrella employment quickly?',
      answer: 'Yes — once we have KYC and contract details, we can usually start same day, aligning with Irish contractor best-practice for speed and compliance.'
    },
    {
      question: 'Do you help with EIIS?',
      answer: 'We assess eligibility, prepare the investor pack, and coordinate documentation to protect relief claims for qualifying investments.'
    },
    {
      question: 'Can you take over mid-financial year?',
      answer: 'Yes. We reconcile to date, document opening balances, and catch any missed filings.'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-lg p-8 m-4 max-w-md w-full text-center shadow-lg">
          <div className="text-green-600 mb-4">
            <CheckCircle className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Thanks!</h3>
          <p className="text-gray-600 mb-2">We'll respond within one business day with next steps.</p>
          <div className="flex items-center justify-center space-x-2 text-blue-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Expected response: 1 business day</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-16">
        {/* Background Image - Replace the URL with your actual image */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
          backgroundImage: "url('/images/setup.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tell us how you work — we'll tailor the scope and fee
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Get a personalized quote based on your business needs, systems, and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a tailored quote</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-base font-bold text-gray-800 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-base font-bold text-gray-800 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-base font-bold text-gray-800 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessType" className="block text-base font-bold text-gray-800 mb-2">
                        Business Type *
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select business type</option>
                        <option value="sole-trader">Sole Trader</option>
                        <option value="limited-company">Limited Company</option>
                        <option value="contractor">Contractor</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-bold text-gray-800 mb-3">
                      Services Needed (select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Year-End Accounts',
                        'Online Bookkeeping',
                        'VAT Returns Filing',
                        'Payroll & HR',
                        'Business Advisory',
                        'Company Secretarial',
                        'EIIS Advisory',
                        'Umbrella Company'
                      ].map((service) => (
                        <label key={service} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="turnoverBand" className="block text-base font-bold text-gray-800 mb-2">
                        Turnover Band
                      </label>
                      <select
                        id="turnoverBand"
                        name="turnoverBand"
                        value={formData.turnoverBand}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select turnover band</option>
                        <option value="under-50k">Under €50k</option>
                        <option value="50k-100k">€50k - €100k</option>
                        <option value="100k-250k">€100k - €250k</option>
                        <option value="250k-500k">€250k - €500k</option>
                        <option value="500k-1m">€500k - €1M</option>
                        <option value="over-1m">Over €1M</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="headcount" className="block text-base font-bold text-gray-800 mb-2">
                        Headcount/Contractors
                      </label>
                      <input
                        type="text"
                        id="headcount"
                        name="headcount"
                        value={formData.headcount}
                        onChange={handleInputChange}
                        placeholder="e.g. 5 employees, 2 contractors"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="systems" className="block text-base font-bold text-gray-800 mb-2">
                        Systems Used
                      </label>
                      <input
                        type="text"
                        id="systems"
                        name="systems"
                        value={formData.systems}
                        onChange={handleInputChange}
                        placeholder="e.g. QuickBooks, Xero, Excel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="cadence" className="block text-base font-bold text-gray-800 mb-2">
                        Preferred Cadence
                      </label>
                      <select
                        id="cadence"
                        name="cadence"
                        value={formData.cadence}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select cadence</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="annual">Annual</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-base font-bold text-gray-800 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your specific needs..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="text-base font-bold text-gray-800">
                      I agree to be contacted per the Privacy Policy. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & Alternatives */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">Dublin, Ireland</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <a href="tel:+353874905010" className="text-gray-600 hover:text-blue-600">
                      +353 87 490 5010
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <a href="mailto:info@finmount.ie" className="text-gray-600 hover:text-blue-600">
                      info@finmount.ie
                    </a>
                  </div>
                </div>
              </div>

              {/* Alternatives */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Alternatives</h3>
                
                <div className="space-y-4">
                  <a
                    href="tel:+353874905010"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Call us</span>
                  </a>
                  
                  <a
                    href="https://wa.me/353874905010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">WhatsApp Us</span>
                  </a>
                  
                  <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors w-full text-left">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Book a 20-minute discovery call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;