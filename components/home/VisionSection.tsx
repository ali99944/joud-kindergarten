import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';

export default function VisionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col gap-32">
        
        {/* --- Part 1: Care (Orange Theme) - Matches Left Side of Hero --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          
          {/* Image Side (Clone of Hero Image Style) */}
          <div className="flex justify-center lg:justify-start relative">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Orange Circle Background */}
              <div className="absolute inset-0 bg-primary rounded-full translate-y-2  opacity-90"></div>
              {/* Image Mask */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-transparent z-10">
                <img 
                  src="/images/students/boy-2.png" 
                  alt="Teaching kids" 
                  className="w-full h-100 object-contain "
                />
              </div>
            </div>
             {/* Doodle Arrow */}
             <div className="absolute -bottom-10 left-20 hidden lg:block w-24 opacity-60 transform rotate-100 w-48">
               <img src="/images/icons/arrow.png" alt="arrow" className="w-full h-auto" />
            </div>
          </div>

          {/* Text Side */}
          <div className="text-right max-md:text-center">

            <div className="flex items-center gap-4 text-3xl md:text-4xl font-black text-[#2D3436] mb-6 ">
              <span>نهتم بتعليم</span> 
              <span className="text-primary relative  underline decoration-wavy decoration-secondary/50">
                براعمنا الصغار
              </span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              نولي اهتماماً خاصاً بالسنوات الأولى للطفل، حيث نوفر بيئة دافئة وآمنة تساعدهم على النمو واكتشاف العالم من حولهم.
            </p>
          </div>
        </div>

        {/* --- Part 2: Creative Generation (Yellow Theme) - Matches Right Side of Hero --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          
          {/* Text Side (First on Mobile) */}
          <div className="text-right order-2 lg:order-1">
            <div className="flex items-center gap-4 text-3xl md:text-4xl font-black text-[#2D3436] mb-6 ">
              <span>هدفنا إنشاء</span>
              <span className="text-primary relative underline decoration-wavy decoration-secondary/50 underline-offset-10">
                جيل مبدع
              </span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              لا نكتفي بالتلقين، بل نفتح آفاق الخيال للأطفال من خلال الفنون والبناء وحل المشكلات، لنصنع جيلاً قادراً على الابتكار.
            </p>
          </div>

          {/* Image Side */}
          <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Yellow Circle Background */}
              <div className="absolute inset-0 bg-secondary rounded-full translate-y-8  opacity-90"></div>
              {/* Image Mask */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent z-10 overflow-hidden">
                <img 
                  src="/images/students/girl-2.png" 
                  alt="Creative kids" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
             {/* Doodle Arrow Flipped */}
             <div className="absolute -bottom-10 -left-10 hidden lg:block w-24 opacity-60 transform -scale-x-100 rotate-12">
               <img src="/images/icons/arrow.png" alt="arrow" className="w-full -rotate-135" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}