import React from 'react';
import campusImage from '../assets/centennial-campus.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative text-white h-[700px]" style={{backgroundImage: `url(${campusImage})`, backgroundSize: 'cover', backgroundPosition: 'center 40%', backgroundRepeat: 'no-repeat'}}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32 lg:pt-56 lg:pb-48">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Innovative Research
            <span className="block text-hku-gold">Leading the Future</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 mt-20 text-green-100 max-w-3xl mx-auto leading-relaxed">
            The University of Hong Kong Hu Jianqi Research Group is dedicated to cutting-edge scientific research, driving technological innovation, cultivating outstanding talents, and contributing to social development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#research"
              className="bg-hku-gold text-hku-green hover:bg-yellow-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Research
            </a>
            <a
              href="#publications"
              className="border-2 border-hku-gold text-hku-gold hover:bg-hku-gold hover:text-hku-green font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Publications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;