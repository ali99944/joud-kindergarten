import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/966500000000" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 animate-bounce-slow flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}