import { AnimatedCounter, Reveal } from '../ui/Animations';

export const About = () => {
    return (
        <section id="about" className="py-[120px] px-[24px] md:px-[64px]" aria-label="About Me">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[88px] items-start">
                <Reveal direction="left">
                    <div className="slabel">01 — About</div>
                    <h2 className="stitle">
                        Not building a startup.<br />
                        Building an <em>empire.</em>
                    </h2>
                    <p className="text-[#555] text-[14px] leading-[1.95] mb-[36px]">
                        I'm <strong className="text-theme-text font-normal">Shehryar Asif</strong>, a full-stack developer and founder from Faisalabad, Pakistan. I build production-grade software across web, mobile, cloud, and browser environments — then I turn those skills into platforms that generate compounding revenue.
                        <br /><br />
                        My core thesis: <strong className="text-theme-accent font-normal">own user bases across every valuable vertical before AI makes them impossible to build cheaply.</strong> I automate everything that doesn't require judgment, and I think in decades.
                    </p>

                    <div className="flex flex-wrap gap-[8px] mb-[40px]" aria-label="Key Skills summary">
                        {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Flutter', 'React Native', 'Node.js', 'Python', 'C++', 'C#', 'Full-Stack', 'Chrome Extensions', 'SEO', 'Cloud Architecture', 'Data Science', 'Digital Publishing'].map(skill => (
                            <div key={skill} className="pill">{skill}</div>
                        ))}
                    </div>

                    {/* Counters */}
                    <div className="grid grid-cols-3 gap-[1px] bg-[#1a1a1a] border border-[#1a1a1a] mb-[44px]">
                        <div className="bg-[#0d0d0d] p-[20px] md:p-[28px] text-center border border-transparent transition-colors hover:border-theme-accent/25 relative overflow-hidden group">
                            <span className="font-syne text-[30px] font-extrabold text-theme-accent block leading-[1]">
                                <AnimatedCounter to={7} suffix="+" />
                            </span>
                            <span className="text-[10px] text-[#444] tracking-[0.1em] uppercase">Platforms</span>
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-theme-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                        <div className="bg-[#0d0d0d] p-[20px] md:p-[28px] text-center border border-transparent transition-colors hover:border-theme-accent/25 relative overflow-hidden group">
                            <span className="font-syne text-[30px] font-extrabold text-theme-text block leading-[1]">
                                <AnimatedCounter to={55} suffix="+" />
                            </span>
                            <span className="text-[10px] text-[#444] tracking-[0.1em] uppercase">Pubs/month</span>
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-theme-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                        <div className="bg-[#0d0d0d] p-[20px] md:p-[28px] text-center border border-transparent transition-colors hover:border-theme-accent/25 relative overflow-hidden group">
                            <span className="font-syne text-[30px] font-extrabold text-theme-text block leading-[1]">
                                <AnimatedCounter to={3} suffix="yr" />
                            </span>
                            <span className="text-[10px] text-[#444] tracking-[0.1em] uppercase">Building</span>
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-theme-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-[28px]">
                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-theme-accent to-transparent" />
                        <div className="flex flex-col gap-[26px]">

                            <div className="relative">
                                <div className="absolute -left-[32px] top-[4px] w-[9px] h-[9px] bg-[#080808] border border-theme-accent rounded-full" />
                                <span className="text-[10px] tracking-[0.1em] text-theme-accent uppercase">2022</span>
                                <h3 className="font-syne text-[13px] font-bold text-theme-text my-[3px]">AstraZen — Marketing Director</h3>
                                <p className="text-[12px] text-[#444] leading-[1.6]">Services startup. Built digital growth systems from scratch.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[32px] top-[4px] w-[9px] h-[9px] bg-[#080808] border border-theme-accent rounded-full" />
                                <span className="text-[10px] tracking-[0.1em] text-theme-accent uppercase">2023</span>
                                <h3 className="font-syne text-[13px] font-bold text-theme-text my-[3px]">NuraSkin — CEO</h3>
                                <p className="text-[12px] text-[#444] leading-[1.6]">SEO-focused skincare brand. Proved content-to-commerce model.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[32px] top-[4px] w-[9px] h-[9px] bg-[#080808] border border-theme-accent rounded-full" />
                                <span className="text-[10px] tracking-[0.1em] text-theme-accent uppercase">2024</span>
                                <h3 className="font-syne text-[13px] font-bold text-theme-text my-[3px]">NeuroStack + Arcade Hub Extension</h3>
                                <p className="text-[12px] text-[#444] leading-[1.6]">AI SaaS holding company. Built and shipped Arcade Hub to Chrome Web Store.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[32px] top-[4px] w-[9px] h-[9px] bg-theme-accent border border-theme-accent rounded-full" />
                                <span className="text-[10px] tracking-[0.1em] text-theme-accent uppercase">2025 — Present</span>
                                <h3 className="font-syne text-[13px] font-bold text-theme-accent my-[3px]">Publixion — Primary Focus</h3>
                                <p className="text-[12px] text-[#555] leading-[1.6]">Global digital publishing platform. Automated pipeline. Paddle MoR. Global revenue.</p>
                            </div>

                        </div>
                    </div>
                </Reveal>


            </div>
        </section>
    );
};
