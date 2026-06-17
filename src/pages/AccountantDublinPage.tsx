import React, { useEffect } from 'react';

const AccountantDublinPage = () => {

  useEffect(() => {
    document.title =
      'Accountant Dublin | ACCA Accountants for SMEs & Contractors | Finmount';
  }, []);

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Accountant Dublin for SMEs, Contractors & Startups
          </h1>

          <p className="text-xl max-w-3xl">
            ACCA-qualified accountants providing bookkeeping,
            payroll, VAT returns, company formation, year-end
            accounts and business advisory services across Dublin.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Trusted Accountants in Dublin
          </h2>

          <p className="mb-6 text-gray-700 leading-8">
            Finmount provides professional accounting services
            for Irish businesses, contractors, startups and
            growing SMEs throughout Dublin.
          </p>

          <p className="mb-6 text-gray-700 leading-8">
            Our ACCA-qualified team supports clients with
            bookkeeping, payroll processing, VAT returns,
            year-end accounts, corporation tax compliance,
            CRO filings and strategic business advisory.
          </p>

          <p className="text-gray-700 leading-8">
            Whether you are launching a new company or scaling
            an established business, we help you stay compliant,
            improve cash flow and make better financial decisions.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Accounting Services in Dublin
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Bookkeeping</h3>
              <p>Cloud bookkeeping and monthly management reporting.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Payroll</h3>
              <p>PAYE, USC, PRSI and payroll compliance support.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">VAT Returns</h3>
              <p>Accurate VAT preparation and Revenue submissions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Year-End Accounts</h3>
              <p>Financial statements and statutory compliance.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Company Formation</h3>
              <p>Company registration and CRO support.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Business Advisory</h3>
              <p>Cash flow forecasting and growth planning.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Finmount */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Why Businesses Choose Finmount
          </h2>

          <ul className="space-y-4 text-lg">
            <li>✓ ACCA Qualified Team</li>
            <li>✓ 11+ Years Experience</li>
            <li>✓ 500+ Clients Supported</li>
            <li>✓ Nationwide Service</li>
            <li>✓ Cloud Accounting Specialists</li>
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
                Do you work with Dublin startups?
              </h3>
              <p>Yes, we support startups from company formation onwards.</p>
            </div>

            <div>
              <h3 className="font-bold">
                Can you manage payroll?
              </h3>
              <p>Yes, we provide payroll services for businesses of all sizes.</p>
            </div>

            <div>
              <h3 className="font-bold">
                Do you help with VAT returns?
              </h3>
              <p>Yes, we prepare and file VAT returns with Revenue.</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Need an Accountant in Dublin?
          </h2>

          <p className="mb-8">
            Speak with our team and receive a tailored quote.
          </p>

          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold">
            Get a tailored quote
          </button>

        </div>
      </section>

    </div>
  );
};

export default AccountantDublinPage;
