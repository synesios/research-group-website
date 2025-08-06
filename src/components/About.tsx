import React from 'react';

const About: React.FC = () => {
  const stats = [
    { number: '15+', label: 'Research Projects', description: 'Ongoing cutting-edge research projects' },
    { number: '50+', label: 'Publications', description: 'High-quality academic papers published' },
    { number: '20+', label: 'Team Members', description: 'Excellent researchers and students' },
    { number: '10+', label: 'Collaborations', description: 'Renowned research institutions worldwide' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We are a dynamic research team focused on exploring and innovating cutting-edge science and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We are committed to advancing the frontiers of integrated optics research, solving important real-world problems through innovative photonic technologies.
                Our research spans multiple cutting-edge fields, including integrated photonic devices, nonlinear photonics, photonic computing, and structured light.
              </p>
              <p>
                As a diverse research team, we encourage interdisciplinary collaboration and cultivate outstanding talents with innovative thinking and practical abilities.
                We believe that through continuous effort and innovation, we can make important contributions to the development of photonic technologies and human progress.
              </p>
              <p>
                We have established close collaborative relationships with many renowned research institutions worldwide,
                working together to advance integrated optics research and build a better future for photonic technologies.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Philosophy</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Innovation-Driven</h4>
                  <p className="text-gray-600">Innovation-centered, pursuing breakthrough research achievements</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Collaborative Excellence</h4>
                  <p className="text-gray-600">Promoting interdisciplinary collaboration for mutual development</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Social Responsibility</h4>
                  <p className="text-gray-600">Committed to solving social problems and serving human development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-hku-green text-white rounded-2xl p-6 mb-4">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-hku-gold font-medium">{stat.label}</div>
              </div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;