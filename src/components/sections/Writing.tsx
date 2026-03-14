import { useState, useEffect } from 'react';
import { Reveal } from '../ui/Animations';

const posts = [
    {
        id: 1,
        tag: 'Strategy',
        date: 'Mar 2026',
        title: "Why I'm building platforms before AI makes them obsolete",
        excerpt: "The window to own user bases at low cost is closing. Here's the thesis behind building across 7 verticals simultaneously.",
        readTime: '6 min read',
        content: `
The window is closing. Not dramatically — quietly. Every month that passes, the cost of acquiring users via organic search, social, and content compounds in one direction: up.

I started building platforms in 2022 with a simple observation: most digital verticals are still wide open, traffic is still cheap relative to where it's going, and the infrastructure to run multiple platforms simultaneously is now accessible to a solo operator with a laptop and a clear head.

## The Thesis

AI will commoditize content creation, customer support, basic coding, and most task-based digital work within this decade. That's not a threat — it's the setup. The people who will win are the ones who own the distribution channels before the content flood hits.

When everyone can generate infinite content, the scarce resource isn't content. It's the audience that reads it.

## Why 7 Verticals Simultaneously

It sounds chaotic. It isn't. Each platform targets a different user base — fitness, publishing, AI tools, real estate, SaaS productivity — but they share the same underlying infrastructure: the same SEO playbook, the same automation systems, the same monetization logic.

The marginal cost of launching platform #5 is a fraction of platform #1.

## The Compounding Effect

User bases compound. A platform with 10,000 monthly visitors today, growing at 15% monthly, has 162,000 monthly visitors in 18 months. The platform you build today is not the platform you'll monetize — it's the platform you'll own when everyone else wishes they'd started earlier.

That's the bet. Build now. Own the audience. Let AI handle the rest.
        `
    },
    {
        id: 2,
        tag: 'Publishing',
        date: 'Feb 2026',
        title: "Automating a full publishing pipeline with GitHub Actions",
        excerpt: "From manuscript to social post to Paddle checkout in a single automated flow. The full Publixion stack, explained.",
        readTime: '8 min read',
        content: `
Publixion produces 15 books, 30 guides, and 10 reports every month. No team. No agency. A Node.js pipeline and a GitHub Actions cron job.

Here's the exact stack.

## The Content Layer

Each publication starts as a structured prompt fed into a generation pipeline. The output goes through a 15-principle framework — no em dashes, story-driven openings, embedded frameworks, premium nonfiction tone. The result is a \`docx\` file built with Node.js using the \`docx\` library, complete with chapter challenges and a 30-day implementation plan.

## The Metadata Layer

Every book gets full Amazon KDP metadata generated in the same pipeline: HTML description, BISAC codes, category paths, keyword strategy, and pricing. All saved as a JSON catalog entry.

## The Distribution Layer

This is where GitHub Actions does the heavy lifting. A \`queue.json\` file holds the publishing schedule. A cron job fires 4 times daily and posts to LinkedIn, Facebook, and Instagram via their respective APIs. Image assets live in the repo. One \`generate_all.js\` script handles the batch.

## The Payment Layer

Paddle as Merchant of Record handles global payments, VAT, and compliance. From Pakistan, this is the only viable path to accepting cards from 150+ countries without a US entity.

## The Result

The entire pipeline from manuscript to live social campaign runs without me touching it. That's the point. Automation isn't laziness — it's leverage.
        `
    },
    {
        id: 3,
        tag: 'Chrome Extensions',
        date: 'Jan 2026',
        title: "How I built Arcade Hub: 12 mini games inside a Chrome extension tab",
        excerpt: "Pong VS AI, favorites, score tracking — all running inside a tiny Chrome tab. How I designed, built, and shipped Arcade Hub with Manifest V3.",
        readTime: '5 min read',
        content: `
Arcade Hub started from one question: what if you could play a real game inside a Chrome extension without opening a new tab, installing anything, or leaving your workflow?

12 games later, it's live on the Chrome Web Store.

## The Constraint That Shaped Everything

Chrome extensions run in a sandboxed popup — small, fast, no persistent state by default. That constraint forced every design decision. Games had to be self-contained, load instantly, and feel polished in a ~400px viewport.

## The Tech Stack

Built on Manifest V3 — the current Chrome extension standard. Pure JavaScript, no heavy frameworks. Each game is a self-contained module. The scoring system uses \`chrome.storage.local\` to persist personal bests across sessions. Favorites are stored the same way.

## Pong VS AI

The flagship game. The AI opponent uses a simple tracking algorithm with intentional imperfection — it misses occasionally so the game stays winnable. The "BEST: 11" you see in the UI is your personal high score, persisted between sessions.

## The Store Submission

This is the part nobody talks about. Google's review process for Manifest V3 extensions is thorough. Expect 3–7 days. Your \`manifest.json\` permissions need to be minimal and justified — request only what you use. Broad host permissions will get you flagged.

## What's Next

More games, a leaderboard system, and potentially a multiplayer mode via WebSockets. The extension proves the concept: useful, delightful micro-experiences that live in the browser.
        `
    },
    {
        id: 4,
        tag: 'Operations',
        date: 'Dec 2025',
        title: "The payment stack problem for founders in Pakistan",
        excerpt: "Stripe doesn't support Pakistan. Here's how I set up Paddle as MoR to accept global payments from day one.",
        readTime: '7 min read',
        content: `
Stripe doesn't support Pakistan. PayPal is unreliable for business use. Payoneer has withdrawal limits and no checkout product. If you're a Pakistani founder trying to sell software or digital products globally, you've hit this wall.

Here's exactly how I solved it.

## What Merchant of Record Means

A Merchant of Record (MoR) is a company that legally sells your product on your behalf. They handle payment processing, VAT collection, chargebacks, and compliance across every country. You get a revenue share. The customer sees the MoR on their card statement, not you.

For founders in unsupported countries, this is the entire game.

## Why Paddle

Paddle operates as MoR in 200+ countries. They handle EU VAT, US sales tax, and everything else automatically. Their checkout converts well. Their API is clean. And critically — they pay out to Pakistani bank accounts via Payoneer or direct wire.

Gumroad is the entry point (simpler setup, higher fees). Lemon Squeezy is the middle ground. Paddle is the destination once you have consistent revenue.

## The Setup

1. Apply to Paddle — approval takes 2–5 business days. Be specific about your product category.
2. Create your products in the Paddle dashboard with pricing in USD.
3. Embed the Paddle.js checkout on your site — one script tag and a button attribute.
4. Configure webhooks to fulfill orders automatically.

## The Banking Layer

Pair Paddle with a Payoneer account for receiving funds. Payoneer issues a USD virtual account number — use this as your payout destination in Paddle. Transfer to your local bank from Payoneer as needed.

It's not as clean as Stripe. But it works, it's legal, and it scales.
        `
    }
];

// Markdown-lite renderer — handles ## headers, **bold**, and paragraphs
function renderContent(raw: string) {
    return raw.trim().split('\n\n').map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith('## ')) {
            return (
                <h3 key={i} className="font-syne font-bold text-[20px] text-theme-text mt-[40px] mb-[16px] leading-[1.2]">
                    {trimmed.replace('## ', '')}
                </h3>
            );
        }
        // Bold inline
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} className="text-theme-text font-normal">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
        return (
            <p key={i} className="text-[14px] text-theme-textMuted leading-[1.95] mb-[0]">
                {parts}
            </p>
        );
    });
}

const Modal = ({ post, onClose }: { post: any, onClose: () => void }) => {
    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handler);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        // Backdrop
        <div
            className="fixed inset-0 z-[2000] flex items-start justify-center"
            style={{ background: 'rgba(4,4,4,0.92)', backdropFilter: 'blur(12px)' }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            {/* Panel */}
            <div
                className="relative w-full max-w-[720px] mx-[16px] mt-[60px] mb-[60px] bg-[#0d0d0d] border border-[#1e1e1e] overflow-y-auto"
                style={{ maxHeight: 'calc(100vh - 120px)' }}
            >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: 'linear-gradient(to right, #c8f55a, transparent)' }} />

                {/* Header */}
                <div className="sticky top-0 z-10 bg-[#0d0d0d] border-b border-[#1a1a1a] px-[40px] py-[20px] flex items-center justify-between">
                    <div className="flex items-center gap-[16px]">
                        <span className="text-[10px] tracking-[0.15em] uppercase text-theme-accent">{post.tag}</span>
                        <span className="text-theme-textDim">·</span>
                        <span className="text-[11px] text-theme-textMuted">{post.date}</span>
                        <span className="text-theme-textDim">·</span>
                        <span className="text-[11px] text-theme-textMuted">{post.readTime}</span>
                    </div>
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="w-[32px] h-[32px] border border-[#1e1e1e] flex items-center justify-center text-[#444] hover:border-theme-accent hover:text-theme-accent transition-all text-[18px] leading-none"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                {/* Content */}
                <div className="px-[40px] py-[48px]">
                    <h2 className="font-syne font-bold text-[28px] leading-[1.15] text-theme-text mb-[40px] tracking-[-0.02em]">
                        {post.title}
                    </h2>
                    <div className="flex flex-col gap-[20px]">
                        {renderContent(post.content)}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="border-t border-[#1a1a1a] px-[40px] py-[32px] flex items-center justify-between">
                    <p className="text-[12px] text-theme-textDim">Written by Shehryar Asif</p>
                    <button
                        onClick={onClose}
                        className="text-[11px] tracking-[0.1em] uppercase text-theme-textMuted hover:text-theme-accent transition-colors"
                    >
                        ← Back to writing
                    </button>
                </div>
            </div>
        </div>
    );
};

export const Writing = () => {
    const [activePost, setActivePost] = useState<any>(null);

    return (
        <>
            <section id="blog" className="py-[120px] px-[24px] md:px-[64px] bg-[#060606]" aria-labelledby="writing-title">
                <Reveal>
                    <div className="slabel">04 — Writing</div>
                    <h2 id="writing-title" className="stitle">
                        Thinking<br />
                        out <em>loud.</em>
                    </h2>
                </Reveal>

                <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#1a1a1a] border border-[#1a1a1a] mt-[64px]">
                    {posts.map((post) => (
                        <button
                            key={post.id}
                            onClick={() => setActivePost(post)}
                            className="text-left group bg-[#0d0d0d] p-[40px] border border-[#1a1a1a] transition-all hover:bg-[#111] hover:border-[rgba(200,245,90,0.2)] w-full cursor-none"
                        >
                            <div className="flex items-center justify-between mb-[18px]">
                                <span className="text-[10px] tracking-[0.15em] uppercase text-theme-accent">{post.tag}</span>
                                <div className="flex items-center gap-[12px]">
                                    <span className="text-[11px] text-theme-textDim">{post.readTime}</span>
                                    <span className="text-[11px] text-theme-textDim">{post.date}</span>
                                </div>
                            </div>

                            <h3 className="font-syne font-bold text-[18px] text-theme-text leading-[1.3] mb-[13px] transition-colors group-hover:text-theme-accent text-left">
                                {post.title}
                            </h3>

                            <p className="text-[12px] text-theme-textMuted leading-[1.8] mb-[26px] text-left">
                                {post.excerpt}
                            </p>

                            <div className="text-[11px] tracking-[0.1em] uppercase text-theme-textDim flex items-center gap-[8px] transition-all group-hover:text-theme-accent group-hover:gap-[14px]">
                                Read more <span>→</span>
                            </div>
                        </button>
                    ))}
                </Reveal>
            </section>

            {/* MODAL */}
            {activePost && (
                <Modal post={activePost} onClose={() => setActivePost(null)} />
            )}
        </>
    );
};
