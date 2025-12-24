import FloatingWhatsApp from '@/components/ui/FloatingWhatsapp';
import './globals.css';

export const metadata = {
  title: 'خطوات طفلي',
  description: 'مستقبل أفضل لأطفالك',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* dir="rtl" is crucial for Arabic Layout */
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}