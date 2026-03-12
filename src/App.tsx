import { useEffect, useState, Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { CustomCursor } from './components/ui/CustomCursor';
import { ToastProvider } from './components/ui/Toast';
import { Marquee } from './components/ui/Marquee';

const About = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })));
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const TechStack = lazy(() => import('./components/sections/TechStack').then(m => ({ default: m.TechStack })));
const Writing = lazy(() => import('./components/sections/Writing').then(m => ({ default: m.Writing })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/layout/Footer').then(m => ({ default: m.Footer })));

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
          <Suspense fallback={<div className="min-h-screen bg-[#060606] flex items-center justify-center"><div className="w-[8px] h-[8px] rounded-full bg-theme-accent animate-pulse" /></div>}>
            <About />
            <Projects />
            <TechStack />
            <Writing />
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ToastProvider>
  );
}

export default App;