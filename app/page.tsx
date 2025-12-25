import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import VisionSection from '@/components/home/VisionSection';
import Facilities from '@/components/home/Facilities';
import ContactMap from '@/components/home/ContactMap';
import ContactForm from '@/components/home/ContactForm';
import AboutUs from '@/components/home/About';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF9FF] overflow-x-hidden " dir="rtl">
      <Header />
      <Hero />
      <AboutUs />
      <Features />
      <VisionSection />
      <Facilities />
      <div id="contact">
        <ContactMap />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}