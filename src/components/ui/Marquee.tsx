import React from 'react';

const items = [
    'Shehryar Asif', 'React', 'Next.js', 'TypeScript', 'Flutter', 'React Native',
    'Node.js', 'Python', 'C++', 'C#', 'Chrome Extensions', 'Full-Stack', 'SEO',
    'Cloud', 'Data Science', 'E-commerce', 'Publishing', 'Vibe Coding',
    'PostgreSQL', 'MongoDB', 'Firebase', 'UI/UX Design', 'Marketing',
    'Arcade Hub', 'Publixion'
];

export const Marquee = () => {
    // We duplicate the items array so it can scroll seamlessly
    const marqueeItems = [...items, ...items];

    // Using raw CSS animation here is significantly more performant than Framer Motion for simple infinite loops
    return (
        <div
            className="overflow-hidden border-y border-theme-border py-[13px] bg-theme-surface w-full"
            aria-hidden="true" // Decorative
        >
            <div
                className="flex w-max animate-marquee hover:[animation-play-state:paused] pointer-events-auto"
            >
                {marqueeItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-[24px] px-[24px] text-[10px] tracking-[0.18em] uppercase text-[#333] whitespace-nowrap"
                    >
                        <span className="w-[4px] h-[4px] rounded-full bg-theme-accent shrink-0" />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};
