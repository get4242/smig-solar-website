import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-scroll';

const Packages = () => {
  const packages = [
    {
      name: "Package S",
      power: "3kW",
      price: "105,000",
      details: [
        "เหมาะสำหรับบ้านที่ใช้ไฟกลางวันน้อย",
        "ค่าไฟต่อเดือน 2,000 - 4,000 บาท",
        "ประหยัดค่าไฟได้ถึง 1,500 บาท/เดือน",
      ],
    },
    {
      name: "Package M",
      power: "5kW",
      price: "165,000",
      details: [
        "ขนาดที่นิยมที่สุดสำหรับบ้านพักอาศัย",
        "ค่าไฟต่อเดือน 4,000 - 7,000 บาท",
        "ประหยัดค่าไฟได้ถึง 2,500 บาท/เดือน",
      ],
    },
    {
      name: "Package L",
      power: "10kW",
      price: "280,000",
      details: [
        "เหมาะสำหรับบ้านหลังใหญ่, Home Office",
        "ค่าไฟต่อเดือน 7,000 บาทขึ้นไป",
        "ประหยัดค่าไฟได้ถึง 5,000 บาท/เดือน",
      ],
    },
  ];

  return (
    <section id="packages" className="bg-white py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900">แพ็คเกจยอดนิยม</h2>
        <p className="text-gray-600 mt-2">
          เลือกแพ็คเกจที่เหมาะสมกับการใช้งานของคุณ
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="bg-gray-50 rounded-lg shadow-lg p-8 flex flex-col border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-yellow-500">{pkg.name}</h3>
              <p className="text-xl text-gray-500">{pkg.power} Inverter</p>
            </div>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-blue-900">
                ฿{pkg.price}
              </span>
            </div>
            <ul className="space-y-4 text-gray-700 mb-8 flex-grow">
              {pkg.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <Link to="contact" smooth={true} duration={500} className="w-full text-center bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition duration-300 cursor-pointer">
              เลือกแพ็คเกจนี้
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-20">
        <h3 className="text-3xl font-bold text-blue-900 mb-8">
          อุปกรณ์ที่เราเลือกใช้
        </h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-yellow-500 mb-4">
              แผงโซลาร์เซลล์ Longi
            </h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>แบรนด์ชั้นนำระดับโลก (Tier 1)</li>
              <li>เทคโนโลยี N-Type TOPCon ประสิทธิภาพสูง</li>
              <li>รับประกันวัสดุ 15 ปี ประสิทธิภาพ 30 ปี</li>
              <li>ทนทานต่อทุกสภาพอากาศ</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-yellow-500 mb-4">
              PSI INVERTER
            </h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>เทคโนโลยีที่ผ่านมาตรฐานได้รับการรับรองจาก MEA, PEA</li>
              <li>Type II SPD ทั้งระบบ DC และ AC</li>
              <li>มีระบบ AFCI และ Smart PID recovery fuction</li>
              <li>รองรับกระแส DC ได้มากถึง 150%</li>
              <li>รองรับแบตเตอรี่และระบบ Hygrid</li>
            </ul>
          </div>
        </div>
         <Link to="contact" smooth={true} duration={500} className="mt-12 inline-block bg-yellow-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-yellow-600 transition duration-300 text-xl cursor-pointer">
          คำนวณแพ็คเกจที่เหมาะกับคุณ
        </Link>
      </div>
    </section>
  );
};

export default Packages;
