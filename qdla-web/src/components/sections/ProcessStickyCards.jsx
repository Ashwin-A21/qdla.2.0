import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const serviceCategories = [
    {
        id: 'web', number: '01', category: 'Web Development & Design', tagline: 'Pixel-perfect. Performance-first.',
        accent: '#38b5e8',
        cardCls: 'bg-white border border-[#38b5e8]/20 hover:shadow-[0_12px_60px_rgba(56,181,232,0.10)]',
        tagBg: 'bg-[#f0f9ff]', tagText: 'text-[#38b5e8]', tagBorder: 'border-[#38b5e8]/20',
        icon: (<svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="8" width="40" height="28" rx="3"/><path d="M16 44h16M24 36v8"/><path d="M4 28h40"/><path d="M14 20l4 4-4 4M22 24h8" strokeLinecap="round"/></svg>),
        services: [
            { name: 'Full Stack Web Development', desc: 'Front-end experience + back-end logic & database management — end to end.', tag: 'Frontend · Backend · DB' },
            { name: 'Web Design', desc: 'Layout, UI/UX, and visual aesthetics. Every pixel intentional.', tag: 'UI · UX · Visual' },
            { name: 'Website Services', desc: 'Maintenance, deployment, and optimisation to keep your site sharp.', tag: 'Deploy · Maintain · SEO' },
        ],
    },
    {
        id: 'design', number: '02', category: 'Creative & Visual Design', tagline: 'Concepts that captivate. Visuals that convert.',
        accent: '#8b5cf6',
        cardCls: 'bg-white border border-purple-200/60 hover:shadow-[0_12px_60px_rgba(139,92,246,0.10)]',
        tagBg: 'bg-[#faf5ff]', tagText: 'text-purple-600', tagBorder: 'border-purple-200',
        icon: (<svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth="1.5"><path d="M24 4C13 4 4 13 4 24s9 20 20 20c4 0 6-2 6-6 0-1.5-.5-3-1.5-4.5C27.5 32 28 31 28 30c0-3.3 2.7-6 6-6h4c4.4 0 6-2.7 6-6C44 13 35 4 24 4Z"/><circle cx="14" cy="24" r="2" fill="currentColor"/><circle cx="18" cy="15" r="2" fill="currentColor"/><circle cx="30" cy="13" r="2" fill="currentColor"/><circle cx="36" cy="21" r="2" fill="currentColor"/></svg>),
        services: [
            { name: 'Graphic Design', desc: 'Visual content for print and digital — brochures to full brand kits.', tag: 'Print · Digital · Brand' },
            { name: 'Digital Design', desc: 'Interfaces, icons, and elements that feel alive and intuitive.', tag: 'Icons · UI · Motion' },
            { name: 'Social Media Content', desc: 'Engaging posts, stories, and graphics for every platform.', tag: 'Posts · Stories · Reels' },
        ],
    },
    {
        id: 'marketing', number: '03', category: 'Marketing & Branding', tagline: 'Stories that stick. Strategies that scale.',
        accent: '#f97316',
        cardCls: 'bg-white border border-orange-200/60 hover:shadow-[0_12px_60px_rgba(249,115,22,0.10)]',
        tagBg: 'bg-[#fff7ed]', tagText: 'text-orange-600', tagBorder: 'border-orange-200',
        icon: (<svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth="1.5"><path d="M8 36V20l16-12 16 12v16" strokeLinejoin="round"/><rect x="18" y="26" width="12" height="10"/><circle cx="24" cy="10" r="2" fill="currentColor"/></svg>),
        services: [
            { name: 'Digital Marketing', desc: 'SEO, PPC, email campaigns, and analytics to grow your reach online.', tag: 'SEO · PPC · Campaigns' },
            { name: 'Brand Marketing', desc: 'Cohesive identity and narrative that builds long-term brand equity.', tag: 'Identity · Strategy · Equity' },
        ],
    },
];

const ServiceItem = ({ name, desc, tag, accent, tagBg, tagText, tagBorder, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        className="group p-5 rounded-2xl border border-black/[0.05] bg-gray-50/70
                   hover:bg-white hover:border-black/10 hover:shadow-sm transition-all duration-300 cursor-default"
    >
        <div className="flex items-start gap-3">
            <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
            <div>
                <h4 className="text-[#0f0f0f] font-semibold text-[15px] mb-1">{name}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-2">{desc}</p>
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${tagBg} ${tagText} ${tagBorder}`}>{tag}</span>
            </div>
        </div>
    </motion.div>
);

const CategoryCard = ({ cat, i, scrollYProgress }) => {
    const range  = [i / serviceCategories.length, (i + 1) / serviceCategories.length];
    const scale  = useTransform(scrollYProgress, range, [1, 0.97]);
    const opacity = useTransform(scrollYProgress, range, [1, 0.9]);
    return (
        <motion.div style={{ scale, opacity }} className="sticky top-24 mb-10 last:mb-0">
            <div className={`relative rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-sm transition-shadow duration-300 ${cat.cardCls}`}>
                <span className="absolute -bottom-6 -right-2 text-[120px] md:text-[160px] font-black leading-none select-none pointer-events-none"
                    style={{ color: `${cat.accent}08` }}>{cat.number}</span>
                <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-40"
                    style={{ background: `linear-gradient(to right, ${cat.accent}, transparent)` }} />
                <div className="flex flex-col md:flex-row md:items-start gap-5 mb-8">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border"
                        style={{ backgroundColor: `${cat.accent}12`, borderColor: `${cat.accent}25`, color: cat.accent }}>
                        {cat.icon}
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: cat.accent }}>{cat.number}</span>
                            <span className="text-black/20 text-xs">—</span>
                            <span className="text-black/30 text-xs uppercase tracking-widest">Service Category</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-[#0f0f0f] tracking-tight">{cat.category}</h3>
                        <p className="text-gray-400 mt-1 text-sm italic font-medium">{cat.tagline}</p>
                    </div>
                </div>
                <div className="h-px mb-8 rounded-full" style={{ background: `linear-gradient(to right, ${cat.accent}30, transparent)` }} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {cat.services.map((s, idx) => (
                        <ServiceItem key={s.name} {...s}
                            accent={cat.accent} tagBg={cat.tagBg} tagText={cat.tagText} tagBorder={cat.tagBorder} index={idx} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ProcessStickyCards = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });
    return (
        <section ref={container} className="relative z-40 bg-[#f7f7f5] pt-16 md:pt-28 pb-24">
            <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(15,15,15,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="relative z-10 text-center px-6 mb-16 md:mb-24">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#38b5e8] mb-4 px-4 py-1.5 rounded-full border border-[#38b5e8]/25 bg-[#38b5e8]/6">
                        What We Do
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black text-[#0f0f0f] tracking-tighter leading-none mb-4">
                        Our <span className="text-[#38b5e8]">Services</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        From concept to conversion — every touchpoint of your digital presence.
                    </p>
                </motion.div>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-8 h-px max-w-xs mx-auto origin-left"
                    style={{ background: 'linear-gradient(to right, transparent, #38b5e8, transparent)' }} />
            </div>
            <div className="relative z-10 px-4 md:px-8 lg:px-16 xl:px-24 max-w-6xl mx-auto space-y-8">
                {serviceCategories.map((cat, i) => (
                    <CategoryCard key={cat.id} cat={cat} i={i} scrollYProgress={scrollYProgress} />
                ))}
            </div>
        </section>
    );
};

export default ProcessStickyCards;
