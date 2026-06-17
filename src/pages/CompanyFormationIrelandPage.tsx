import React, { useEffect } from 'react';

const CompanyFormationIrelandPage = () => {

  useEffect(() => {
    document.title =
      'Company Formation Ireland | Register a Company in Ireland | Finmount';
  }, []);

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Company Formation Ireland
          </h1>

          <p className="text-xl max-w-3xl">
            Start your Irish company with confidence. We handle company registration,
            CRO filings, tax registrations and compliance requirements so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Register a Company in Ireland
          </h2>

          <p className="mb-6 text-gray-700 leading-8">
            Finmount helps entrepreneurs, startups and international businesses
            establish companies in Ireland quickly and efficiently.
          </p>

          <p className="mb-6 text-gray-700 leading-8">
            Our team guides you through every stage of company formation,
            ensuring all CRO and Revenue requirements are completed correctly.
          </p>

          <p className="text-gray-700 leading-8">
            Whether you're launching a startup, expanding into Ireland,
            or setting up a contractor business, we can help you get started.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            What's Included
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Company Registration</h3>
              <p>Preparation and filing of incorporation documents.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">CRO Compliance</h3>
              <p>Support with annual returns and statutory obligations.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Tax Registration</h3>
              <p>Corporation Tax, VAT and employer registrations.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Director Guidance</h3>
              <p>Advice on company structure and responsibilities.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Company Secretarial</h3>
              <p>Statutory registers and company records support.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Ongoing Support</h3>
              <p>Accounting, payroll and tax services after setup.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Finmount */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Why Choose Finmount
          </h2>

          <ul className="space-y-4 text-lg">
            <li>✓ ACCA Qualified Team</li>
            <li>✓ Fast Company Registration</li>
            <li>✓ CRO & Revenue Expertise</li>
            <li>✓ Startup-Friendly Support</li>
            <li>✓ Ongoing Business Advice</li>
          </ul>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-bold">
                How long does company formation take?
              </h3>
              <p>
                Most Irish companies can be incorporated within a few working days.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Do I need a company secretary?
              </h3>
              <p>
                Most Irish companies require a company secretary unless exempt.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Can you register for VAT?
              </h3>
              <p>
                Yes, we assist with VAT and Revenue registrations.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Do you support startups?
              </h3>
              <p>
                Yes, startups are one of our core client groups.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Company?
          </h2>

          <p className="mb-8">
            Speak with our team and receive a tailored quote.
          </p>

          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold">
            Get a Tailored Quote
          </button>

        </div>
      </section>

    </div>
  );
};

export default CompanyFormationIrelandPage;
