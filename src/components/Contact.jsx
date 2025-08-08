import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { gapi } from 'gapi-script';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    lineId: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const VITE_API_URL = import.meta.env.VITE_API_URL;

    if (!VITE_API_URL) {
        console.error("VITE_API_URL is not defined in .env");
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
    }

    try {
        const response = await axios.post(VITE_API_URL, formData);
        console.log(response.data);
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', lineId: '', email: '', message: '' });
    } catch (error) {
        console.error("There was an error submitting the form:", error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-blue-900 text-white py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-4">สนใจติดตั้งโซลาร์เซลล์?</h2>
        <p className="text-blue-200 mb-8">
          กรอกข้อมูลเพื่อให้ทีมงานของเราติดต่อกลับโดยเร็วที่สุด
        </p>
        <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl text-left">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="ชื่อ-นามสกุล"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="เบอร์โทรศัพท์"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="lineId"
              value={formData.lineId}
              onChange={handleChange}
              placeholder="Line ID"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="อีเมล"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="รายละเอียดเพิ่มเติม (เช่น ขนาดการใช้ไฟ, ที่อยู่ติดตั้ง)"
              rows="4"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-500 text-blue-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition duration-300 disabled:bg-gray-400"
          >
            {isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อมูล'}
          </button>
          {submitStatus === 'success' && (
            <p className="text-green-600 mt-4 text-center">ส่งข้อมูลสำเร็จ! ขอบคุณที่ให้ความสนใจครับ</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 mt-4 text-center">เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
