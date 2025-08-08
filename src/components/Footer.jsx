import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-blue-200 py-8 px-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} SMART INFINITY GLOBAL (SMIG). All Rights Reserved.</p>
        <p className="text-sm mt-2">
          ผู้นำด้านพลังงานแสงอาทิตย์ครบวงจรในประเทศไทย
        </p>
      </div>
    </footer>
  );
};

export default Footer;
