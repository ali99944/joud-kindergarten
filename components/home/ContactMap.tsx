import React from 'react';
import { Phone, MapPin, QrCode, ArrowLeft } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-20 pb-32">
      <div className="max-w-5xl mx-auto px-4 md:px-12">
        
        {/* Main Card */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-soft border border-gray-200  relative overflow-hidden">
            {/* Background Decor - Like the Hero circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-50 rounded-full blur-2xl opacity-60"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                
                {/* Info Side */}
                <div className="text-right">
                    <h2 className="text-3xl font-black text-[#2D3436] mb-8">تواصل معنا</h2>
                    
                    <div className="space-y-6">
                        {/* Phone Item */}
                        <a href="https://wa.me/966500000000" className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                            <div className="w-12 h-12 bg-[#6C5CE7]/10 text-[#6C5CE7] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-bold">الهاتف / واتساب</p>
                                <p className="text-xl font-bold text-[#2D3436] dir-ltr text-right">+966 50 000 0000</p>
                            </div>
                        </a>

                        {/* Location Item */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                             <div className="w-12 h-12 bg-[#FF7675]/10 text-[#FF7675] rounded-full flex items-center justify-center">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-bold">الموقع</p>
                                <p className="text-lg font-bold text-[#2D3436]">الرياض، حي النرجس</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary/80 cursor-pointer transition-colors">
                            فتح في الخرائط
                            <ArrowLeft size={16} />
                        </button>
                    </div>
                </div>

                {/* QR Side */}
                <div className="flex flex-col items-center justify-end  rounded-[2.5rem] ">
                    {/* Replace with your actual QR image */}
                    <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/966500000000" 
                        alt="Scan QR" 
                        className="w-80 h-80 mix-blend-multiply"
                    />
                </div>

            </div>
        </div>

      </div>
    </section>
  );
}