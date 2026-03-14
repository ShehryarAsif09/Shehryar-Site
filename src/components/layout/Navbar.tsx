import { useState, useEffect } from 'react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Ventures', href: '#projects' },
    { name: 'Stack', href: '#techstack' },
    { name: 'Writing', href: '#blog' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled ? 'py-[18px] bg-theme-bg/80 backdrop-blur-md border-b border-theme-accent/10' : 'py-[32px] bg-transparent'
                }`}
            role="navigation"
            aria-label="Main Navigation"
        >
            <div className="max-w-screen-2xl mx-auto px-[24px] md:px-[64px] flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#top"
                    className="font-syne font-extrabold text-[20px] tracking-[-0.04em] no-underline group flex items-center gap-[10px]"
                >
                    <div className="w-[32px] h-[32px] bg-theme-accent text-black flex items-center justify-center text-[12px] group-hover:bg-theme-text transition-colors">
                        SA
                    </div>
                </a>
                <div className="hidden md:flex items-center gap-[40px]">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[11px] tracking-[0.15em] uppercase text-theme-textMuted hover:text-theme-accent transition-colors no-underline font-medium"
                        >
                            {link.name}
                        </a>
                    ))}

                </div>

                {/* Mobile Trigger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-[6px] z-[1100] relative"
                    aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={mobileMenuOpen}
                >
                    <span className={`w-[24px] h-[1px] bg-theme-text transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`w-[24px] h-[1px] bg-theme-text transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`w-[24px] h-[1px] bg-theme-text transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-[#060606] z-[1050] transition-all duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-[40px] px-[40px]">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            className={`text-[32px] font-syne font-extrabold tracking-[-0.03em] transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'
                                }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}

                </div>

                {/* Mobile Bottom Info */}
                <div className="absolute bottom-[40px] left-0 right-0 px-[40px] flex justify-between items-end">
                    <div className="text-[10px] tracking-[0.15em] uppercase text-theme-textDim">Faisalabad, PK</div>
                    <div className="text-[10px] tracking-[0.15em] uppercase text-theme-textDim">© 2026</div>
                </div>
            </div>
        </nav>
    );
};