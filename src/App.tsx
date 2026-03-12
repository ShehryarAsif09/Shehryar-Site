import { useEffect, useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { TechStack } from './components/sections/TechStack';
import { Writing } from './components/sections/Writing';
import { Contact } from './components/sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import { ToastProvider } from './components/ui/Toast';
import { Marquee } from './components/ui/Marquee';

function App() {
  const [progressWidth, setProgressWidth] = useState(0);

  // Global scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = (scrollTotal / height) * 100;
      setProgressWidth(scroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ToastProvider>
      <div id="top" className="min-h-screen selection:bg-theme-accent selection:text-black font-mono bg-theme-bg text-theme-text overflow-x-hidden">

        {/* Progress Bar */}
        <div
          className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-theme-accent to-theme-accentDanger z-[10000] w-0 transition-[width] duration-75"
          style={{ width: `${progressWidth}%` }}
        />

        <CustomCursor />

        <header>
          <Navbar />
        </header>

        <main aria-label="Main Content">
          <Hero />
          <Marquee />
          <About />
          <Projects />
          <TechStack />
          <Writing />
          <Contact />
        </main>

        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;