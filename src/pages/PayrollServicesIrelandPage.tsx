import React, { useEffect } from 'react';

const PayrollServicesIrelandPage = () => {

  useEffect(() => {
    document.title =
      'Payroll Services Ireland | Outsourced Payroll Solutions | Finmount';
  }, []);

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Payroll Services Ireland for SMEs & Growing Businesses
          </h1>

          <p className="text-xl max-w-3xl">
            Fully managed payroll services including PAYE, USC, PRSI,
            employee onboarding, payslips and Revenue compliance
            support for businesses across Ireland.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Professional Payroll Services Across Ireland
          </h2>

          <p className="mb-6 text-gray-700 leading-8">
            Finmount provides reliable payroll services for SMEs,
            startups, contractors and growing businesses throughout
            Ireland.
          </p>

          <p className="mb-6 text-gray-700 leading-8">
            Our payroll specialists ensure employees are paid accurately
            and on time while maintaining full compliance with Revenue
            requirements and PAYE Modernisation regulations.
          </p>

          <p className="text-gray-700 leading-8">
            From employee setup to monthly payroll processing and
            statutory reporting, we handle the entire payroll function
            so you can focus on running your business.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Payroll Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Payroll Processing</h3>
              <p>Weekly, fortnightly and monthly payroll management.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">PAYE Modernisation</h3>
              <p>Full Revenue compliance and payroll submissions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Employee Setup</h3>
              <p>New employee registration and onboarding support.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Payslips & Reporting</h3>
              <p>Employee payslips and employer payroll reports.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Revenue Compliance</h3>
              <p>Accurate submissions and payroll compliance checks.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Payroll Advisory</h3>
              <p>Expert support for payroll and employment matters.</p>
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
            <li>✓ Payroll Compliance Experts</li>
            <li>✓ 11+ Years Experience</li>
            <li>✓ Nationwide Service</li>
            <li>✓ Dedicated Support Team</li>
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
                How much does payroll outsourcing cost?
              </h3>
              <p>
                Costs vary depending on employee numbers and payroll frequency.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Can you process weekly payroll?
              </h3>
              <p>
                Yes, we support weekly, fortnightly and monthly payroll cycles.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Can you manage Revenue submissions?
              </h3>
              <p>
                Yes, we handle payroll submissions and Revenue compliance.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Do you support small businesses?
              </h3>
              <p>
                Yes, we work with startups, SMEs and growing companies.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Need Payroll Services in Ireland?
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

export default PayrollServicesIrelandPage;
