import { AboutSection } from '@/components/About';
import Footer from '@/components/Footer';
import MainSection from '@/components/Main/MainSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex flex-col flex-1 w-full">
        <MainSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
