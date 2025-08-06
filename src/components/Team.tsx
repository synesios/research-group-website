import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Jianqi Hu',
      title: 'Research Group Leader',
      role: 'Assistant Professor',
      education: [
        'PhD in Photonics, École Polytechnique Fédérale de Lausanne (EPFL), 2021',
        'BSc in Electronic Engineering, University of Electronic Science and Technology of China, 2016'
      ],
      research: ['Integrated Optics', 'Nonlinear Photonics', 'Photonic Computing', 'Structured Light'],
      email: 'jqhu@hku.hk',
      publications: 15,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Dr. Wang',
      title: 'Senior Researcher',
      role: 'Postdoctoral Researcher',
      education: 'PhD in Cybersecurity, Chinese Academy of Sciences',
      research: ['Cybersecurity', 'Cryptography', 'Blockchain'],
      email: 'wang.dr@university.edu',
      publications: 28,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Engineer Liu',
      title: 'System Architect',
      role: 'Senior Engineer',
      education: 'Master in Software Engineering, Shanghai Jiao Tong University',
      research: ['Cloud Computing', 'Distributed Systems', 'Microservices'],
      email: 'liu.eng@university.edu',
      publications: 15,
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Chen (PhD Student)',
      title: 'PhD Student',
      role: 'PhD Student (3rd Year)',
      education: 'Master in Computer Science, HKU',
      research: ['Computer Vision', 'Image Processing', 'Pattern Recognition'],
      email: 'chen.phd@student.edu',
      publications: 8,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Zhao (Master Student)',
      title: 'Master Student',
      role: 'Master Student (2nd Year)',
      education: 'Bachelor in Computer Science, HKU',
      research: ['Internet of Things', 'Edge Computing', 'Sensor Networks'],
      email: 'zhao.ms@student.edu',
      publications: 3,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const categories = [
    { name: 'Professors', members: teamMembers.filter(m => m.role.includes('Professor')) },
    { name: 'Students', members: teamMembers.filter(m => m.role.includes('Student')) }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Team Members</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We have a diverse team composed of senior professors, excellent researchers, and promising students
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {teamMembers.filter(m => m.role.includes('Professor')).length}
            </div>
            <div className="text-gray-600">Professors</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {teamMembers.filter(m => m.role.includes('Researcher') || m.role.includes('Engineer')).length}
            </div>
            <div className="text-gray-600">Researchers/Engineers</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {teamMembers.filter(m => m.role.includes('Student')).length}
            </div>
            <div className="text-gray-600">Students</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {teamMembers.reduce((sum, member) => sum + member.publications, 0)}
            </div>
            <div className="text-gray-600">Total Publications</div>
          </div>
        </div>

        {/* Team Members by Category */}
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category.name}</h3>
            <div className={`grid gap-8 ${
              category.members.length === 1 
                ? 'justify-center' 
                : category.members.length === 2
                ? 'md:grid-cols-2 justify-center'
                : 'md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {category.members.map((member, index) => (
                 <div key={index} className={`card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                   category.members.length <= 2 ? 'max-w-md' : ''
                 }`}>
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1a4327&color=fff&size=150`;
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-hku-green font-medium mb-2">{member.title}</p>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">Education</h5>
                      {Array.isArray(member.education) ? (
                        <ul className="text-gray-600 text-sm space-y-1">
                          {member.education.map((edu, eduIndex) => (
                            <li key={eduIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-hku-green rounded-full mr-2 mt-2 flex-shrink-0"></div>
                              {edu}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 text-sm">{member.education}</p>
                      )}
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">Research Areas</h5>
                      <div className="flex flex-wrap gap-1">
                        {member.research.map((area, areaIndex) => (
                          <span key={areaIndex} className="bg-green-100 text-hku-green px-2 py-1 rounded text-xs">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Email section for students, publications for others */}
                    {category.name === 'Students' ? (
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm mb-2">Email</h5>
                        <p className="text-gray-600 text-sm">{member.email}</p>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">{member.publications}</div>
                          <div className="text-xs text-gray-600">Publications</div>
                        </div>
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-hku-green hover:text-hku-darkGreen transition-colors duration-200"
                          title="Send Email"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-hku-green to-hku-darkGreen rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            We are looking for talented and passionate researchers and students to join our team.
            If you are interested in cutting-edge technology research, please feel free to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-hku-gold text-hku-green hover:bg-yellow-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              Contact Us
            </a>
            <a href="mailto:recruitment@university.edu" className="border-2 border-hku-gold text-hku-gold hover:bg-hku-gold hover:text-hku-green font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              Send Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;