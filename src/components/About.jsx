import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const About = () => {
  const features = [
    "ประสบการณ์ยาวนานกว่า 35 ปีในวงการ",
    "ทีมงานวิศวกรและผู้เชี่ยวชาญมืออาชีพ",
    "ใช้อุปกรณ์คุณภาพสูงที่ได้มาตรฐานสากล",
    "บริการครบวงจรตั้งแต่ให้คำปรึกษาจนถึงติดตั้ง",
    "รับประกันผลงานและการดูแลหลังการขาย"
  ];

  return (
    <section id="about" className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1624397843314-a7a7a1dab533?q=80&w=1964&auto=format&fit=crop" 
            alt="ทีมงานติดตั้งโซลาร์เซลล์" 
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            ทำไมต้องเลือก SMIG?
          </h2>
          <p className="text-gray-600 mb-8">
            เราคือ SMART INFINITY GLOBAL (SMIG ) ผู้นำด้านพลังงานแสงอาทิตย์ครบวงจรในประเทศไทย ด้วยความมุ่งมั่นที่จะส่งมอบโซลูชันพลังงานสะอาดที่ดีที่สุดให้กับลูกค้าทุกกลุ่ม ไม่ว่าจะเป็นบ้านพักอาศัย, ภาคธุรกิจ, หรือโรงงานอุตสาหกรรม
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
