import { useState } from 'react';
import { Reveal } from '../ui/Animations';
import { useToast } from '../ui/Toast';

export const Contact = () => {
    const { showToast } = useToast();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [buttonState, setButtonState] = useState<'idle' | 'error' | 'success'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setButtonState('error');
            setTimeout(() => setButtonState('idle'), 2500);
            return;
        }

        // Attempt mailto action as intended by static version
        const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
        window.location.href = `mailto:shehryarasif27@gmail.com?subject=${subject}&body=${body}`;

        setButtonState('success');
        showToast("Message sent! I'll be in touch.");

        setTimeout(() => {
            setButtonState('idle');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3800);
    };

    return (
        <section id="contact" className="py-[120px] px-[24px] md:px-[64px] relative overflow-hidden" aria-labelledby="contact-title">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 65% 45% at 50% 100%, rgba(200,245,90,0.035), transparent)' }}
                aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start relative z-10 w-full">
                <Reveal>
                    <div className="slabel">05 — Contact</div>
                    <h2 id="contact-title" className="stitle">
                        Let's build<br />
                        something <em>real.</em>
                    </h2>
                    <p className="text-[#444] text-[13px] leading-[1.9] mb-[36px]">
                        Investor, partner, client, or fellow builder. If you see the same wave, I want to hear from you.
                    </p>

                    <div className="flex flex-col gap-[14px]">
                        <a
                            href="mailto:shehryarasif27@gmail.com"
                            className="group flex flex-row items-center gap-[16px] text-[#444] no-underline text-[12px] p-[16px] border border-[#1a1a1a] transition-all hover:border-theme-accent/25 hover:text-theme-text"
                        >
                            <span className="text-theme-accent text-[16px] shrink-0">✉</span>
                            <div>
                                <div className="text-[10px] tracking-[0.1em] uppercase text-theme-accent mb-[3px]">Email</div>
                                shehryarasif27@gmail.com
                            </div>
                        </a>
                        <a
                            href="https://linkedin.com/in/shehryarasif09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-row items-center gap-[16px] text-[#444] no-underline text-[12px] p-[16px] border border-[#1a1a1a] transition-all hover:border-theme-accent/25 hover:text-theme-text"
                        >
                            <span className="text-theme-accent text-[16px] shrink-0 font-bold">in</span>
                            <div>
                                <div className="text-[10px] tracking-[0.1em] uppercase text-theme-accent mb-[3px]">LinkedIn</div>
                                linkedin.com/in/shehryarasif09
                            </div>
                        </a>
                        <a
                            href="https://chromewebstore.google.com/detail/arcade-hub/cmclgehgmipfbnbiknaldecmncefchek"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-row items-center gap-[16px] text-[#444] no-underline text-[12px] p-[16px] border border-[#1a1a1a] transition-all hover:border-theme-accent/25 hover:text-theme-text"
                        >
                            <span className="text-[#5cc8ff] text-[16px] shrink-0">⬡</span>
                            <div>
                                <div className="text-[10px] tracking-[0.1em] uppercase text-[#5cc8ff] mb-[3px]">Chrome Extension</div>
                                Arcade Hub — Web Store
                            </div>
                        </a>
                    </div>
                </Reveal>

                {/* Form Container */}
                <Reveal delay={0.2} className="bg-[#0d0d0d] border border-[#1a1a1a] p-[32px] md:p-[48px] relative overflow-hidden">
                    {/* Top trim border */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-theme-accent to-transparent" />

                    <h3 className="font-syne font-bold text-[19px] text-theme-text mb-[28px]">Send a Message</h3>

                    <form onSubmit={handleSend} className="flex flex-col gap-[18px]" noValidate aria-live="polite">

                        <div>
                            <label className="block text-[10px] tracking-[0.15em] uppercase text-[#444] mb-[8px]" htmlFor="name">Name <span className="text-theme-accentDanger ml-1" aria-hidden="true">*</span></label>
                            <input
                                className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-theme-text p-[14px_18px] font-mono text-[12px] outline-none transition-colors focus:border-theme-accent focus:bg-[#0f0f0f] placeholder:text-[#2a2a2a]"
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                aria-required="true"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] tracking-[0.15em] uppercase text-[#444] mb-[8px]" htmlFor="email">Email <span className="text-theme-accentDanger ml-1" aria-hidden="true">*</span></label>
                            <input
                                className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-theme-text p-[14px_18px] font-mono text-[12px] outline-none transition-colors focus:border-theme-accent focus:bg-[#0f0f0f] placeholder:text-[#2a2a2a]"
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                aria-required="true"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] tracking-[0.15em] uppercase text-[#444] mb-[8px]" htmlFor="subject">Subject</label>
                            <input
                                className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-theme-text p-[14px_18px] font-mono text-[12px] outline-none transition-colors focus:border-theme-accent focus:bg-[#0f0f0f] placeholder:text-[#2a2a2a]"
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Collab, investment, hiring..."
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] tracking-[0.15em] uppercase text-[#444] mb-[8px]" htmlFor="message">Message <span className="text-theme-accentDanger ml-1" aria-hidden="true">*</span></label>
                            <textarea
                                className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-theme-text p-[14px_18px] font-mono text-[12px] outline-none transition-colors focus:border-theme-accent focus:bg-[#0f0f0f] placeholder:text-[#2a2a2a]"
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                aria-required="true"
                                placeholder="What's on your mind?"
                                style={{ resize: 'vertical' }}
                            />
                        </div>

                        <button
                            type="submit"
                            className={`self-start mt-[10px] text-black border-none px-[28px] py-[13px] font-mono text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-accent ${buttonState === 'error'
                                ? 'bg-theme-accentDanger hover:bg-theme-accentDanger/80'
                                : buttonState === 'success' ? 'bg-theme-text' : 'bg-theme-accent hover:bg-theme-text'
                                }`}
                        >
                            {buttonState === 'error' && 'Fill in required fields *'}
                            {buttonState === 'success' && 'Redirecting to mail...'}
                            {buttonState === 'idle' && 'Send Message →'}
                        </button>
                        <div className="sr-only" aria-live="polite">
                            {buttonState === 'error' && 'Please fill in your name, email, and message.'}
                            {buttonState === 'success' && 'Redirecting to your mail client.'}
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
};
