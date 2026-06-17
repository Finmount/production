import React, { useEffect } from 'react';

const UmbrellaCompanyIrelandPage = () => {

  useEffect(() => {
    document.title =
      'Umbrella Company Ireland | Contractor Payroll Services | Finmount';

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Professional umbrella company services in Ireland for contractors, consultants and temporary workers. PAYE payroll, tax compliance and contractor support.'
      );
    }
  }, []);

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-6">
            Umbrella Company Ireland
          </h1>

          <p className="text-xl max-w-3xl">
            Fast, compliant umbrella company solutions for contractors,
            consultants, engineers, healthcare professionals and temporary workers across Ireland.
          </p>

        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Irish Umbrella Company Services
          </h2>

          <p className="mb-6 text-gray-700 leading-8">
            Finmount provides professional umbrella company services
            for contractors who want a simple way to work without
            setting up a limited company.
          </p>

          <p className="mb-6 text-gray-700 leading-8">
            We manage payroll, PAYE, USC, PRSI, payslips,
            Revenue compliance and contractor administration
            so you can focus on your assignments.
          </p>

          <p className="text-gray-700 leading-8">
            Whether you are starting a new contract or moving
            from another provider, our team can help you get
            set up quickly and compliantly.
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
              <h3 className="font-bold mb-3">Same-Day Setup</h3>
              <p>Fast onboarding once required documents are received.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Payroll Processing</h3>
              <p>Weekly, fortnightly or monthly payroll management.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">PAYE Compliance</h3>
              <p>PAYE, USC and PRSI calculations handled correctly.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Payslips & Reports</h3>
              <p>Clear payslips and contractor reporting.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Contract Review</h3>
              <p>Guidance on contracts and compliance requirements.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Dedicated Support</h3>
              <p>Direct access to experienced accounting professionals.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Why Choose Finmount
          </h2>

          <ul className="space-y-4 text-lg">
            <li>✓ Fast Contractor Onboarding</li>
            <li>✓ PAYE, USC & PRSI Managed</li>
            <li>✓ Revenue Compliant Processes</li>
            <li>✓ Dedicated Contractor Support</li>
            <li>✓ Nationwide Irish Service</li>
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
                What is an umbrella company?
              </h3>
              <p>
                An umbrella company employs contractors and manages payroll,
                tax deductions and compliance on their behalf.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                How quickly can I join?
              </h3>
              <p>
                Most contractors can be onboarded the same day once documents are provided.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Do I need my own limited company?
              </h3>
              <p>
                No. An umbrella company allows you to work without setting up a limited company.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Looking for an Umbrella Company in Ireland?
          </h2>

          <p className="mb-8">
            Speak with our team and receive a tailored quote today.
          </p>

          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold">
            Get a tailored quote
          </button>

        </div>
      </section>

    </div>
  );
};

export default UmbrellaCompanyIrelandPage;
