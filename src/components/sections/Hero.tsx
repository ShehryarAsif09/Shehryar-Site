import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedCounter } from '../ui/Animations';

export const Hero = () => {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Native smooth parallax
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 300]);

    useEffect(() => {
        // Respect reduced motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) return;

        const handleMouseMove = (e: MouseEvent) => {
            // Calculate offset from center for the ghost text
            const xMap = (e.clientX / window.innerWidth - 0.5) * 22;
            const yMap = (e.clientY / window.innerHeight - 0.5) * 10;
            setMousePosition({ x: xMap, y: yMap });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="min-h-screen flex flex-col justify-end px-[24px] pb-[64px] md:px-[64px] md:pb-[90px] relative overflow-hidden z-[1]"
            aria-label="Introduction"
        >
            {/* Background gradients */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse 55% 50% at 78% 50%, rgba(200,245,90,0.04), transparent 70%), radial-gradient(ellipse 35% 55% at 18% 80%, rgba(255,92,58,0.025), transparent 60%)'
            }} />

            {/* Interactive Ghost Text */}
            <motion.div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-syne font-extrabold text-[clamp(50px,18vw,140px)] md:text-[clamp(90px,16vw,230px)] text-transparent whitespace-nowrap tracking-[-0.04em] pointer-events-none select-none"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,.03)' }}
                animate={{
                    x: `calc(-50% + ${mousePosition.x}px)`,
                    y: `calc(-50% + ${mousePosition.y}px)`,
                }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.1 }}
            >
                SHEHRYAR
            </motion.div>

            {/* Dot grid decoration */}
            <div
                className="absolute top-[88px] left-[64px] grid grid-cols-9 gap-[14px] opacity-10 pointer-events-none"
                aria-hidden="true"
            >
                {Array.from({ length: 54 }).map((_, i) => (
                    <div key={i} className="w-[3px] h-[3px] rounded-full bg-theme-accent" />
                ))}
            </div>



            <motion.div
                className="inline-flex items-center gap-[10px] text-[11px] tracking-[0.15em] uppercase text-theme-accent mb-[24px]"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="w-[28px] h-[1px] bg-theme-accent block" />
                Founder & Entrepreneur &nbsp;·&nbsp; Developer &nbsp;·&nbsp; Publisher
            </motion.div>

            <motion.h1
                className="font-syne font-extrabold text-[clamp(38px,9vw,70px)] md:text-[clamp(46px,6.2vw,90px)] leading-[0.95] tracking-[-0.035em] mb-[32px] md:max-w-[60%]"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Building<br />
                platforms <em className="not-italic font-serif font-normal text-theme-accent">before</em><br />
                the wave hits.
            </motion.h1>

            <motion.div
                className="flex flex-col md:flex-row items-start md:items-end justify-between gap-[40px] md:max-w-[62%]"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <p className="max-w-[360px] text-theme-textMuted text-[13px] leading-[1.9]">
                    I'm <strong className="text-theme-text font-normal">Shehryar Asif</strong> — developer and founder from Pakistan. I build platforms at scale, ship Chrome extensions, publish books globally, and write code across the full stack.
                </p>
                <div className="flex gap-[36px] shrink-0">
                    <div className="text-right">
                        <span className="font-syne text-[36px] font-extrabold text-theme-accent block leading-[1]">
                            <AnimatedCounter to={7} />
                        </span>
                        <span className="text-[10px] text-theme-textMuted tracking-[0.1em] uppercase">Platforms</span>
                    </div>
                    <div className="text-right">
                        <span className="font-syne text-[36px] font-extrabold text-theme-text block leading-[1]">
                            <AnimatedCounter to={20} suffix="+" />
                        </span>
                        <span className="text-[10px] text-theme-textMuted tracking-[0.1em] uppercase">Tech Skills</span>
                    </div>
                </div>
            </motion.div>

            <div className="absolute right-[64px] bottom-[90px] [writing-mode:vertical-rl] text-[10px] tracking-[0.2em] uppercase text-theme-textDim flex items-center gap-[10px]">
                Scroll
                <span className="block w-[1px] h-[48px] bg-gradient-to-b from-theme-textDim to-transparent" />
            </div>
        </section>
    );
};
