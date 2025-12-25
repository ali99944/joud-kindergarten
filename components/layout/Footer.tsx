import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 py-14 border-t border-gray-100 bg-primary/8">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/logo.png"
            alt="خطوات طفلي"
            className="h-40 w-auto"
          />
        </div>

        {/* Title */}
        {/* <h2 className="text-xl font-black text-primary mb-6 relative underline decoration-wavy decoration-secondary/50 underline-offset-8">
          خطوات طفلي
        </h2> */}

        {/* Description */}
        <p className="text-text-muted mb-6 max-w-lg mx-auto leading-relaxed">
          نحن نلعب، نضحك، ونتعلم معًا كل يوم ❤️
         أنشطة ممتعة، ألعاب تعليمية، وقصص جميلة تساعد أطفالنا على الاكتشاف والنمو بسعادة.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 text-sm font-medium text-text-muted">
          <a href="#" className="hover:text-primary transition-colors">
            سياسة الخصوصية
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            الشروط والأحكام
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            اتصل بنا
          </a>
        </div>

        <div className="flex items-center justify-center mt-6 text-xs text-gray-400">
          <span className='flex items-center gap-1'>
            <span>رقم التسجيل الضريبي</span>
            <span className="font-semibold">7030083013</span>
          </span>
          <span className="mx-2">·</span>
          <span>© 2025 خطوات طفلي</span>
          <span className="mx-2">·</span>
          <span>جميع الحقوق محفوظة</span>
        </div>

      </div>
    </footer>
  );
}
