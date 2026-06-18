import React from 'react';
import { Award, BookOpen, User } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  qualifications: string[];
  experience: string;
  bio: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Binu Jose',
      role: 'Managing Director',
      qualifications: ['ACCA Certified', 'MBA Finance', 'Specialization Strategic Financial Advisory', 'Tax Planning & Business Growth'],
      experience: '15 years of experience',
      bio: 'Binu Jose is the Founder and Managing Director of Finmount, bringing over 15 years of experience in accounting, taxation, financial management, and business advisory. As an FCCA-qualified professional, he provides strategic guidance to startups, SMEs, contractors, and established businesses across Ireland. His expertise includes financial reporting, taxation, management accounting, VAT advisory, business structuring, cash flow management, budgeting, forecasting, and strategic financial planning.'
    },
    {
      name: 'Nimisha Biju',
      role: 'Financial Analyst',
      qualifications: ['Part-Qualified ACCA', 'QFA', 'MSc Accounting and Finance',  'B.Com', 'M.Com'],
      experience: 'Specialization Cash Flow Analysis, Financial Reporting & Business Compliance',
    {
      name: 'Edwin Thomson',
      role: 'Financial Analyst',
      qualifications: ['MSc Accounting and Finance Management'],
      experience: 'VAT Compliance, Income Tax & Financial Reporting',
    },
    {
      name: 'Sona Susan Thomas',
      role: 'Accounts Assistant',
      qualifications: ['ACCA Part Qualified', 'Msc.Accounting and finance management'],
      experience: 'Credit Control, Account Reconciliation & Accounts Support',
    },
    {
      name: 'Anna Mariya Saji',
      role: 'Accounts Assistant',
      qualifications: ['BCom','MSc Accounting and Finance','ACCA Part Qualified'],
      experience: 'Payroll Processing, Invoicing & Accounts Administration',
    },
    {
      name: 'Maxon Thankachan',
      role: 'Business Analyst',
      qualifications: [
        'B.Com Marketing',
        'M.A Accounting and Finance'
      ],
      experience: 'Business Research, Process Analysis & Operational Support',
    }
  ];

  return (
    
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our ACCA-qualified professionals provide expert financial guidance and personalized service for all your accounting needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Team member image */}
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                {member.name === 'Binu Jose' ? (
                  <img
                    src="/images/binu.jpeg"
                    alt="Binu Jose"
                    className="w-full h-full object-cover"
                  />
                ) : member.name === 'Nimisha Biju' ? (
                  <img
                    src="/images/nimisha3.jpeg"
                    alt="Nimisha Biju"
                    className="w-full h-full object-cover object-top"
                  />
                ) : member.name === 'Edwin Thomson' ? (
                  <img
                    src="/images/edwin.jpeg"
                    alt="Edwin Thomson"
                    className="w-full h-full object-cover"
                  />
                ) : member.name === 'Sona Susan Thomas' ? (
                  <img
                    src="/images/sona.png"
                    alt="Sona Susan Thomas"
                    className="w-full h-full object-cover"
                  />
                ) : member.name === 'Anna Mariya Saji' ? (
                  <img
                    src="/images/anna1.png"
                    alt="Anna Mariya Saji"
                    className="w-full h-full object-cover object-top"
                  />
                ) : member.name === 'Maxon Thankachan' ? (
                  <img
                    src="/images/maxon1.png" 
                    alt="Maxon Thankachan"
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User className="h-24 w-24 text-gray-400" />
                  </div>
                )}
              
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-200">{member.role}</p>
                </div>
              </div>

              {/* Member details */}
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {member.qualifications.map((qualification, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      <Award className="h-3 w-3 mr-1" />
                      {qualification}
                    </span>
                  ))}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {member.experience}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
                
                <div className="pt-4 transform opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a 
                    href={member.name === 'Binu Jose' ? '#' : 'tel:+353-0874905010'} 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    Connect with {member.name.split(' ')[0]} <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
