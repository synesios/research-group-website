import React from 'react';

const Research: React.FC = () => {
  const researchAreas = [
    {
      title: 'Integrated Optics',
      description: 'Research on integrated photonic devices and circuits for advanced optical systems',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      projects: ['Silicon Photonic Devices', 'Photonic Integrated Circuits', 'On-chip Optical Interconnects'],
      color: 'from-hku-lightGreen to-hku-green',
      backgroundImage: '/integrated-optics.jpg'
    },
    {
      title: 'Nonlinear Photonics',
      description: 'Investigation of nonlinear optical phenomena for frequency conversion and signal processing',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      projects: ['Frequency Comb Generation', 'Optical Parametric Processes', 'Nonlinear Waveguides'],
      color: 'from-hku-green to-hku-darkGreen',
      backgroundImage: '/nonlinear-photonics.jpg'
    },
    {
      title: 'Photonic Computing',
      description: 'Development of optical computing systems and photonic neural networks for AI applications',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      projects: ['Optical Neural Networks', 'Photonic Matrix Multiplication', 'All-optical Signal Processing'],
      color: 'from-green-600 to-hku-green',
      backgroundImage: '/photonic-computing.png'
    },
    {
      title: 'Structured Light',
      description: 'Research on complex light fields with tailored properties for advanced optical applications',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      projects: ['Orbital Angular Momentum Beams', 'Vector Beam Generation', 'Optical Vortices and Singularities'],
      color: 'from-green-500 to-hku-lightGreen',
      backgroundImage: '/structured-light.png'
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Research Areas</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We focus on research in multiple cutting-edge technology fields, committed to driving technological innovation and industrial development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Section */}
              <div 
                className="h-48 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${area.backgroundImage})`
                }}
              ></div>
              
              {/* Content Section */}
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center text-white mr-3`}>
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{area.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Projects:</h4>
                  <ul className="space-y-1">
                    {area.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Research</h3>
            <p className="text-gray-600 mb-6">
              We welcome scholars and students interested in cutting-edge technology research to join our team and explore the infinite possibilities of technology together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
              <a href="#publications" className="btn-secondary">
                View Research Results
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;