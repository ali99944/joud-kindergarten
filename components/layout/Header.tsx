import Link from 'next/link';
import { Menu, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary/8">
      <div className="w-full py-4 px-4 md:px-12 max-w-7xl mx-auto flex justify-between items-center z-50 relative">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <span className="text-2xl font-black text-text-main tracking-tight">خطوات طفلي</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8 font-semibold text-text-muted">
        <Link href="#" className="hover:text-primary transition-colors">من نحن</Link>
        <Link href="#" className="hover:text-primary transition-colors">مميزاتنا</Link>
        <Link href="#" className="hover:text-primary transition-colors">تواصل معنا</Link>
        <Link href="#" className="hover:text-primary transition-colors">المدربين</Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/1234567890" // Replace with actual number
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold hover:bg-accent/80 transition-colors"
        >
          <span>تواصل معنا</span>
          <MessageCircle size={20} />
        </a>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-text-main">
          <Menu size={28} />
        </button>
      </div>
    </div>
    </header>
  );
}