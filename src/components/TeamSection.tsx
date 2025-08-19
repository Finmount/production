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
      role: 'Director',
      qualifications: ['ACCA Certified', 'MBA Finance'],
      experience: '11 years of experience',
      bio: 'Binu leads our team with extensive experience in accounting and financial management, specializing in advisory services for SMEs and growth companies.'
    },
    {
      name: 'Nimisha Biju',
      role: 'Junior Accountant',
      qualifications: ['ACCA Certified', 'MSc Accounting and Finance'],
      experience: 'Specialized in financial reporting',
      bio: 'Nimisha focuses on delivering high-quality financial reporting and bookkeeping services with a detail-oriented approach.'
    },
    {
      name: 'Archana C Vinod',
      role: 'Junior Accountant',
      qualifications: ['ACCA Certified', 'MSc Accounting and Finance'],
      experience: 'Specialized in tax compliance',
      bio: 'Archana excels in tax compliance and financial analysis, ensuring clients receive accurate and timely financial information.'
    },
    {
      name: 'Edwin Thomson',
      role: 'Senior Accountant',
      qualifications: ['MSc Accounting and Finance'],
      experience: 'Specialized in bookkeeping',
      bio: 'Edwin brings expertise in bookkeeping systems and processes, helping clients maintain accurate financial records and streamline their accounting workflows.'
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
                    src="/images/Nimisha.jpeg" 
                    alt="Nimisha Biju" 
                    className="w-full h-full object-cover"
                  />
                ) : member.name === 'Archana C Vinod' ? (
                  <img 
                    src="/images/Archana.jpeg" 
                    alt="Archana C Vinod" 
                    className="w-full h-full object-cover"
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
