import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    // Smooth springs for the outer ring trailing effect
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(0, springConfig);
    const cursorYSpring = useSpring(0, springConfig);

    useEffect(() => {
        // Respect reduced motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) return;

        const manageMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            setMousePosition({ x: clientX, y: clientY });
            cursorXSpring.set(clientX);
            cursorYSpring.set(clientY);
        };

        const manageMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.pc') ||
                target.closest('.bc') ||
                target.closest('.pill') ||
                target.closest('.skill-block')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', manageMouseMove);
        window.addEventListener('mouseover', manageMouseOver);

        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
            window.removeEventListener('mouseover', manageMouseOver);
        };
    }, [cursorXSpring, cursorYSpring]);

    // Hide custom cursor on mobile or if reduced motion is preferred
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference translate-x-[-50%] translate-y-[-50%]"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    width: isHovered ? 16 : 10,
                    height: isHovered ? 16 : 10,
                    backgroundColor: isHovered ? '#ff5c3a' : '#c8f55a',
                }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
            />

            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-theme-accent/30 translate-x-[-50%] translate-y-[-50%]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    width: isHovered ? 60 : 38,
                    height: isHovered ? 60 : 38,
                    borderColor: isHovered ? 'rgba(255,92,58,0.3)' : 'rgba(200,245,90,0.3)',
                }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
            />
        </>
    );
};
