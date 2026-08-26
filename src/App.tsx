import { HeroSection } from './components/HeroSection';
import { MarqueeScroller } from './components/MarqueeScroller';

export default function App() {
  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <HeroSection />
      <MarqueeScroller />
    </main>
  );
}
