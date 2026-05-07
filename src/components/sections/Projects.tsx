import { useState } from 'react';
import { Reveal } from '../ui/Animations';
import { Modal } from '../ui/Modal';

const projects = [
    {
        id: 'publixion',
        num: '001',
        status: { text: 'Active — Primary', type: 'primary' },
        title: 'Publixion',
        description: 'Global digital publishing platform. Fully automated pipeline producing 15 books, 30 guides, 10 reports/month. Social publishing to LinkedIn/Facebook/Instagram via GitHub Actions. Paddle as Merchant of Record.',
        tags: ['Node.js', 'GitHub Actions', 'Paddle MoR', 'Amazon KDP', 'REST APIs'],
        link: 'https://publixion.com',
        image: null,
        className: 'md:col-span-2 bg-[#0a1200] border-theme-accent/10 hover:bg-[#0d1600] hover:border-theme-accent/30',
    },
    {
        id: 'arcadehub',
        num: '002',
        status: { text: 'Chrome Web Store — Live', type: 'ext' },
        title: 'Arcade Hub',
        description: 'Chrome extension built and published to the Chrome Web Store. A hub experience for browser users, shipped from scratch with the Extensions API.',
        tags: ['JavaScript', 'Manifest V3', '12+ Games', 'Chrome Web Store'],
        link: 'https://chromewebstore.google.com/detail/arcade-hub/cmclgehgmipfbnbiknaldecmncefchek',
        image: null,
        className: 'bg-[#00080a] border-[#5cc8ff]/10 hover:border-[#5cc8ff]/30',
    },
    {
        id: 'myfitnessleap',
        num: '003',
        status: { text: 'Active', type: 'primary' },
        title: 'MyFitnessLeap',
        description: 'AdSense-approved fitness blog with broader vertical ambitions. Built for compounding SEO traffic at scale.',
        tags: ['SEO', 'AdSense', 'Content'],
        link: 'https://myfitnessleap.com',
        image: null,
        className: 'bg-[#0d0d0d] border-[#1a1a1a] hover:bg-[#111] hover:border-theme-accent/20',
    },
    {
        id: 'aitools',
        num: '004',
        status: { text: 'Active', type: 'primary' },
        title: 'AI Tools Library',
        description: 'Curated AI tool directory capturing inbound search traffic from people discovering AI workflows and tooling.',
        tags: ['Programmatic SEO', 'Directory'],
        link: 'https://aitoolslibrary.online',
        image: null,
        className: 'bg-[#0d0d0d] border-[#1a1a1a] hover:bg-[#111] hover:border-theme-accent/20',
    },
    {
        id: 'nuraskin',
        num: '005',
        status: { text: 'Archived', type: 'archived' },
        title: 'NuraSkin',
        description: 'SEO-focused skincare content brand that validated the content-to-commerce playbook.',
        tags: ['SEO', 'E-commerce', 'Content Brand'],
        link: 'https://nuraskin.shop',
        image: null,
        className: 'bg-[#0d0d0d] border-[#1a1a1a] hover:bg-[#111] hover:border-theme-accent/20',
    },
    {
        id: 'astrazen',
        num: '006',
        status: { text: 'Status — Inactive', type: 'archived' },
        title: 'AstraZen',
        description: 'Marketing and growth services agency. Built digital growth systems for high-impact performance marketing. This project is currently no longer operational.',
        tags: ['Marketing', 'Services', 'Systems'],
        link: '#',
        image: null,
        className: 'bg-[#0d0d0d] border-[#1a1a1a] hover:bg-[#111] hover:border-[#333]/20 grayscale-[0.8]',
    },
    {
        id: 'neurostack',
        num: '007',
        status: { text: 'Coming Soon', type: 'dev' },
        title: 'NeuroStack',
        description: 'AI SaaS holding company housing CourseMorph, Resumind, and PromptNest — targeting productivity and career verticals.',
        tags: ['React', 'Node.js', 'LLMs'],
        link: '#',
        image: null,
        isComingSoon: true,
        className: 'bg-[#0d0d0d] border-[#1a1a1a] hover:bg-[#111] hover:border-theme-accent/20',
    },
    {
        id: 'Capitalyst',
        num: '008',
        status: { text: 'Coming Soon', type: 'dev' },
        title: 'Capitalyst',
        description: 'Full-stack fintech SaaS combining professional-grade financial engines, portfolio analytics, and automated wealth management workflows.',
        tags: ['Next.js', 'Fintech', 'SaaS'],
        link: '#',
        image: null,
        isComingSoon: true,
        className: 'bg-[#0d0d0d] border-[#1a1a1a] hover:bg-[#111] hover:border-theme-accent/20',
    },
    
    {
        id: 'Lumina',
        num: '009',
        status: { text: 'Coming Soon', type: 'dev' },
        title: 'Lumina',
        description: 'AI-powered outcome generation platform. Describe a problem and get a pitch deck or actionable roadmap in seconds.',
        tags: ['React', 'Workers', 'Groq'],
        link: '#',
        image: null,
        isComingSoon: true,
        className: 'bg-[#0d0d0d] border-[#1a1a1a] hover:bg-[#111] hover:border-theme-accent/20',
    }.
    {
    id: 'toolzip',
    num: '010',
    status: { text: 'Active — Growing', type: 'primary' },
    title: 'ToolZip',
    description: '75-tool free utility site across text, developer, converter, and calculator verticals. 107 indexed pages, 98 performance / 100 SEO score. Automated blog pipeline via Groq + GSC API pushes keyword-targeted articles to GitHub on cron. 20+ DA60 backlinks from launch. AdSense monetization roadmap active.',
    tags: ['75 Tools', 'Cloudflare Pages', 'GSC API', 'Groq', 'SEO', 'AdSense Pipeline'],
    link: 'https://toolzip.online',
    image: null,
    className: 'bg-[#0a0d00] border-theme-accent/10 hover:bg-[#0d1100] hover:border-theme-accent/30',
}
];

export const Projects = () => {
    const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; title: string; message: string }>({
        isOpen: false,
        title: '',
        message: '',
    });

    const handleProjectClick = (e: React.MouseEvent, pkg: any) => {
        if (pkg.isComingSoon || pkg.id === 'astrazen') {
            e.preventDefault();
            const message = pkg.id === 'astrazen'
                ? 'This service is currently reaching its end of life and is no longer operational.'
                : 'This platform is currently under heavy development. Stay tuned, Coming soon.';

            setModalConfig({
                isOpen: true,
                title: pkg.title,
                message: message
            });
        }
    };

    return (
        <section id="projects" className="py-[120px] px-[24px] md:px-[64px] bg-[#060606]" aria-labelledby="ventures-title">
            <Reveal className="flex items-end justify-between mb-[60px] flex-wrap gap-[24px]">
                <div>
                    <div className="slabel">02 — Ventures</div>
                    <h2 id="ventures-title" className="stitle">
                        Platforms I've<br />
                        <em>built</em> & own.
                    </h2>
                </div>
                <p className="max-w-[260px] text-theme-textMuted text-[12px] leading-[1.9]">
                    Each vertical targeted deliberately. Together they compound.
                </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#1a1a1a] border border-[#1a1a1a]">
                {projects.map((pkg, i) => {
                    let dotColor = '';
                    switch (pkg.status.type) {
                        case 'primary': dotColor = 'bg-theme-accent text-theme-accent'; break;
                        case 'ext': dotColor = 'bg-theme-accentBlue text-theme-accentBlue'; break;
                        case 'dev': dotColor = 'bg-theme-accentWarning text-theme-accentWarning'; break;
                        case 'archived': dotColor = 'bg-theme-textDim text-theme-textDim'; break;
                    }

                    return (
                        <Reveal
                            key={pkg.id}
                            delay={i * 0.1}
                            className={`flex flex-col min-h-[320px] p-[36px] relative overflow-hidden transition-all group no-underline border ${pkg.className}`}
                        >
                            {/* Background Image if exists */}
                            {pkg.image && (
                                <div className="absolute inset-0 z-0 opacity-10 grayscale group-hover:opacity-20 transition-opacity">
                                    <img src={pkg.image} alt="" className="w-full h-full object-cover" />
                                </div>
                            )}

                            {/* Outer Link Wrapper functionality injected manually to maintain structural styling */}
                            <a
                                href={pkg.link}
                                target={(pkg.link !== '#' && !pkg.isComingSoon) ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10"
                                aria-label={`View ${pkg.title} project`}
                                onClick={(e) => handleProjectClick(e, pkg)}
                            />

                            <div className="relative z-20 pointer-events-none">
                                <div className="text-[10px] tracking-[0.2em] text-theme-textDim mb-[26px]">{pkg.num}</div>
                                <div className={`inline-flex items-center gap-[6px] text-[10px] tracking-[0.1em] uppercase mb-[10px] ${dotColor}`}>
                                    <span className={`w-[6px] h-[6px] rounded-full shrink-0 ${['archived', 'dev'].includes(pkg.status.type) ? '' : 'animate-pulse'} bg-current`} />
                                    {pkg.status.text}
                                </div>
                                <h3 className="font-syne font-bold text-[20px] md:text-[28px] text-theme-text my-[10px] leading-[1.15]">
                                    {pkg.title}
                                </h3>
                                <p className="text-[12px] text-theme-textMuted leading-[1.8] flex-1 mb-[22px]">
                                    {pkg.description}
                                </p>

                                <div className="flex flex-wrap gap-[7px] mt-auto">
                                    {pkg.tags.map(tag => (
                                        <span key={tag} className="text-[9px] tracking-[0.07em] uppercase text-theme-textDim border border-theme-border px-[9px] py-[3px] transition-colors group-hover:border-theme-accent/20 group-hover:text-theme-accent/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Arrow Icon */}
                            <div className="absolute top-[28px] right-[28px] text-[15px] text-theme-textDim opacity-0 -translate-x-[6px] translate-y-[6px] transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-theme-accent pointer-events-none z-20">
                                ↗
                            </div>
                        </Reveal>
                    );
                })}
            </div>

            <Modal
                isOpen={modalConfig.isOpen}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                title={modalConfig.title}
                message={modalConfig.message}
            />
        </section>
    );
};
