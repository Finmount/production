import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppBubble: React.FC = () => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/353874905010', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 ${
        isPulsing ? 'animate-pulse' : ''
      } hover:scale-110`}
      title="WhatsApp Us"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppBubble;
