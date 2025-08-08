import React from 'react';

const Chatbot = () => {
  const openChatbot = () => {
    // Replace with your actual chatbot link or function
    window.open('https://www.facebook.com/SMIGThailand', '_blank' );
  };

  return (
    <div 
      className="fixed bottom-5 right-5 z-50 cursor-pointer"
      onClick={openChatbot}
    >
      <div className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="white" 
          className="w-8 h-8"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" 
          />
        </svg>
      </div>
    </div>
   );
};

export default Chatbot;
