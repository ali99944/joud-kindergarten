import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-black text-primary mb-4">خطوات طفلي</h2>
        <p className="text-text-muted mb-6 max-w-lg mx-auto">
          نساعدك في بناء مستقبل مشرق لطفلك من خلال برامج تعليمية تفاعلية ومبتكرة.
        </p>
        <div className="flex justify-center gap-6 text-sm font-medium text-text-muted">
          <a href="#" className="hover:text-primary">سياسة الخصوصية</a>
          <a href="#" className="hover:text-primary">الشروط والأحكام</a>
          <a href="#" className="hover:text-primary">اتصل بنا</a>
        </div>
        <p className="text-xs text-gray-400 mt-8">
          © 2025 خطوات طفلي. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}