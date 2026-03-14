import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Reveal } from '../ui/Animations';

const SkillBar = ({ label, level, percentage }: { label: string, level: string, percentage: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    return (
        <div className="mb-[16px] last:mb-0" ref={ref}>
            <div className="flex justify-between mb-[6px]">
                <span className="text-[12px] text-theme-text/90">{label}</span>
                <span className={`text-[10px] ${level === 'Intermediate' || level === 'Learning' ? 'text-theme-textMuted' : 'text-theme-accent'}`}>{level}</span>
            </div>
            <div
                className="h-[2px] bg-[#1a1a1a] mt-[10px]"
                role="progressbar"
                aria-valuenow={parseInt(percentage)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${label} proficiency`}
            >
                <div
                    className="h-[2px] bg-gradient-to-r from-theme-accent to-[#8bc34a] transition-[width] duration-1000 ease-out"
                    style={{ width: isInView ? percentage : '0%' }}
                />
            </div>
        </div>
    );
};

export const TechStack = () => {
    return (
        <section id="techstack" className="py-[120px] px-[24px] md:px-[64px]" aria-labelledby="stack-title">
            <Reveal>
                <div className="slabel">03 — Stack</div>
                <h2 id="stack-title" className="stitle">
                    Real skills.<br />
                    <em>Real</em> depth.
                </h2>
                <p className="text-theme-textMuted text-[13px] leading-[1.85] max-w-[520px] mb-[72px]">
                    Not AI buzzwords — languages, frameworks, and systems I've actually shipped production code in.
                </p>
            </Reveal>

            {/* Grid of skill categories */}
            <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#1a1a1a] border border-[#1a1a1a] mb-[1px]">

                {/* Languages */}
                <div className="bg-[#0d0d0d] p-[28px] transition-transform hover:-translate-y-[3px] hover:bg-[#101000] border border-transparent hover:border-theme-accent/25">
                    <h3 className="text-[10px] tracking-[0.18em] uppercase text-theme-accent mb-[16px] pb-[10px] border-b border-[#1a1a1a]">Languages</h3>
                    <SkillBar label="JavaScript / ES2024" level="Expert" percentage="95%" />
                    <SkillBar label="TypeScript" level="Advanced" percentage="85%" />
                    <SkillBar label="Python" level="Advanced" percentage="82%" />
                    <SkillBar label="C++" level="Intermediate" percentage="65%" />
                    <SkillBar label="C#" level="Intermediate" percentage="60%" />
                </div>

                {/* Frontend & Mobile */}
                <div className="bg-[#0d0d0d] p-[28px] transition-transform hover:-translate-y-[3px] hover:bg-[#101000] border border-transparent hover:border-theme-accent/25">
                    <h3 className="text-[10px] tracking-[0.18em] uppercase text-theme-accent mb-[16px] pb-[10px] border-b border-[#1a1a1a]">Frontend & Mobile</h3>
                    <SkillBar label="React" level="Expert" percentage="92%" />
                    <SkillBar label="Next.js" level="Advanced" percentage="88%" />
                    <SkillBar label="Flutter" level="Advanced" percentage="80%" />
                    <SkillBar label="React Native" level="Intermediate" percentage="72%" />
                    <SkillBar label="Chrome Extensions" level="Shipped" percentage="85%" />
                </div>

                {/* Backend & Cloud */}
                <div className="bg-[#0d0d0d] p-[28px] transition-transform hover:-translate-y-[3px] hover:bg-[#101000] border border-transparent hover:border-theme-accent/25">
                    <h3 className="text-[10px] tracking-[0.18em] uppercase text-theme-accent mb-[16px] pb-[10px] border-b border-[#1a1a1a]">Backend & Cloud</h3>
                    <SkillBar label="Node.js" level="Expert" percentage="90%" />
                    <SkillBar label="REST APIs" level="Expert" percentage="93%" />
                    <SkillBar label="PostgreSQL / MongoDB" level="Advanced" percentage="82%" />
                    <SkillBar label="Cloud Architecture" level="Intermediate" percentage="70%" />
                    <SkillBar label="GitHub Actions (CI/CD)" level="Advanced" percentage="88%" />
                </div>

                {/* Growth & Business */}
                <div className="bg-[#0d0d0d] p-[28px] transition-transform hover:-translate-y-[3px] hover:bg-[#101000] border border-transparent hover:border-theme-accent/25">
                    <h3 className="text-[10px] tracking-[0.18em] uppercase text-theme-accent mb-[16px] pb-[10px] border-b border-[#1a1a1a]">Growth & Business</h3>
                    <SkillBar label="SEO / Programmatic SEO" level="Expert" percentage="90%" />
                    <SkillBar label="E-commerce / Publishing" level="Expert" percentage="92%" />
                    <SkillBar label="Marketing & Growth" level="Advanced" percentage="85%" />
                    <SkillBar label="Data Science" level="Learning" percentage="45%" />
                    <SkillBar label="UI/UX & Design" level="Advanced" percentage="80%" />
                </div>

            </Reveal>

            {/* Infra row */}
            <Reveal className="flex flex-wrap gap-[1px] bg-[#1a1a1a] border border-[#1a1a1a] border-t-0" aria-label="Infrastructure Expertise Tools">
                {[
                    { icon: '▲', name: 'Vercel' },
                    { icon: '🔶', name: 'Cloudflare' },
                    { icon: '🔥', name: 'Firebase' },
                    { icon: '🐙', name: 'GitHub Actions' },
                    { icon: '💳', name: 'Paddle MoR' },
                    { icon: '📦', name: 'Docker / CI' },
                    { icon: '🔍', name: 'Google GSC / Analytics' },
                    { icon: '⚡', name: 'Vibe Coding' },
                ].map((infra) => (
                    <div key={infra.name} className="bg-[#0d0d0d] py-[18px] px-[24px] flex items-center gap-[12px] flex-1 min-w-[160px] transition-colors hover:bg-[#101000]">
                        <span className="text-theme-accent text-[16px]">{infra.icon}</span>
                        <span className="text-[12px] text-theme-textMuted">{infra.name}</span>
                    </div>
                ))}
            </Reveal>
        </section>
    );
};
