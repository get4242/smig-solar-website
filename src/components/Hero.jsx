import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509390636459-491451da4294?q=80&w=2070&auto=format&fit=crop' )" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6 py-32 md:py-48 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          เปลี่ยนพลังงานแสงอาทิตย์ให้เป็นอนาคต
        </h1>
        <p className="text-lg md:text-xl mb-8">
          ผู้นำด้านพลังงานแสงอาทิตย์ครบวงจรในไทย ด้วยประสบการณ์กว่า 35 ปี
        </p>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500}
          className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition duration-300 cursor-pointer"
        >
          ปรึกษาฟรี
        </Link>
      </div>
    </section>
  );
};

export default Hero;
