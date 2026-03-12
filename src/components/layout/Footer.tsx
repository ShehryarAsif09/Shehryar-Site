import React from 'react';

export const Footer = () => {
    return (
        <footer id="footer-section" className="bg-[#040404] border-t border-[#141414] relative overflow-hidden">
            {/* Ghost text */}
            <div
                className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 font-syne font-extrabold text-[clamp(56px,11vw,172px)] text-transparent whitespace-nowrap pointer-events-none tracking-[-0.04em] z-0 select-none"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,.018)' }}
                aria-hidden="true"
            >
                SHEHRYAR ASIF
            </div>

            {/* Main footer grid */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-[56px] py-[72px] px-[24px] md:px-[64px] relative z-10 text-left">

                {/* Brand */}
                <div>
                    <div className="font-syne font-extrabold text-[30px] text-theme-text mb-[14px] tracking-[-0.5px]">
                        SA<span className="text-theme-accent">.</span>
                    </div>
                    <p className="text-[12px] text-[#333] leading-[1.9] max-w-[260px] mb-[26px]">
                        Shehryar Asif — Full-stack developer and founder from Faisalabad, Pakistan. Building platforms that compound over years.
                    </p>
                    <div className="inline-flex items-center gap-[8px] border border-theme-accent/20 px-[16px] py-[7px] text-[10px] tracking-[0.12em] uppercase text-[#888] mb-[24px]">
                        <div className="w-[7px] h-[7px] rounded-full bg-theme-accent animate-pulse"></div>
                        Open to opportunities
                    </div>
                    <div className="flex gap-[12px] mt-[16px]">
                        <a
                            href="mailto:shehryarasif27@gmail.com"
                            className="text-[#333] text-[12px] leading-[1.5] border border-theme-border px-[14px] py-[8px] transition-all hover:border-theme-accent/30 hover:text-theme-accent"
                            aria-label="Email Shehryar Asif"
                        >
                            Email
                        </a>
                        <a
                            href="https://linkedin.com/in/shehryarasif09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#333] text-[12px] leading-[1.5] border border-theme-border px-[14px] py-[8px] transition-all hover:border-theme-accent/30 hover:text-theme-accent"
                            aria-label="Shehryar Asif LinkedIn Profile"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Ventures */}
                <div>
                    <h2 className="text-[10px] tracking-[0.18em] uppercase text-[#222] mb-[18px]">Ventures</h2>
                    <div className="flex flex-col gap-[12px]">
                        <a href="https://publixion.com" target="_blank" rel="noopener noreferrer" className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent">Publixion</a>
                        <a href="https://myfitnessleap.com" target="_blank" rel="noopener noreferrer" className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent">MyFitnessLeap</a>
                        <a href="https://aitoolslibrary.online" target="_blank" rel="noopener noreferrer" className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent">AI Tools Library</a>
                        <a href="https://chromewebstore.google.com/detail/arcade-hub/cmclgehgmipfbnbiknaldecmncefchek" target="_blank" rel="noopener noreferrer" className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent">Arcade Hub ↗</a>
                        <span className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent cursor-not-allowed hidden md:block">NeuroStack</span>
                        <span className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent cursor-not-allowed hidden md:block">Lumina</span>
                        <span className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent cursor-not-allowed hidden md:block">Capitalyst</span>

                    </div>
                </div>

                {/* Navigate */}
                <nav aria-label="Footer Navigation">
                    <h2 className="text-[10px] tracking-[0.18em] uppercase text-[#222] mb-[18px]">Navigate</h2>
                    <ul className="flex flex-col gap-[12px] list-none">
                        <li><a href="#about" className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent">About</a></li>
                        <li><a href="#projects" className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent">Ventures</a></li>
                        <li><a href="#techstack" className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent">Stack</a></li>
                        <li><a href="#blog" className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent">Writing</a></li>
                        <li><a href="#contact" className="text-[#333] no-underline text-[12px] leading-[1.5] transition-colors hover:text-theme-accent">Contact</a></li>
                        <li><a href="#top" className="text-theme-accent no-underline text-[12px] leading-[1.5] mt-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-accent">Back to top ↑</a></li>
                    </ul>
                </nav>

                {/* Status panel */}
                <div>
                    <h2 className="text-[10px] tracking-[0.18em] uppercase text-[#222] mb-[18px]">Status</h2>
                    <div className="flex flex-col gap-[16px]">
                        <div>
                            <div className="text-[10px] text-[#444] tracking-[0.08em] uppercase mb-[4px]">Location</div>
                            <div className="text-[12px] text-[#666]">Faisalabad, Pakistan</div>
                        </div>
                        <div>
                            <div className="text-[10px] text-[#444] tracking-[0.08em] uppercase mb-[4px]">Domain</div>
                            <div className="text-[12px] text-[#666]">shehryarasif.me</div>
                        </div>
                        <div>
                        </div>
                        <div>
                            <div className="text-[10px] text-[#444] tracking-[0.08em] uppercase mb-[4px]">Primary Focus</div>
                            <div className="text-[12px] text-theme-accent">Publixion</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="border-t border-[#111] py-[22px] px-[24px] md:px-[64px] flex items-center justify-between flex-wrap gap-[12px] relative z-10">
                <p className="text-[11px] text-[#1e1e1e]">© {new Date().getFullYear()} Shehryar Asif. All rights reserved.</p>
                <p className="text-[11px] text-[#1e1e1e]">Built with intent. Deployed at shehryarasif.me</p>
            </div>
        </footer>
    );
};
