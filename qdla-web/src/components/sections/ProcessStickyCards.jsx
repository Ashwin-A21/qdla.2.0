import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
    {
        number: '01',
        title: 'Website Development & Design',
        description: 'We design and develop responsive, high-performance websites that blend modern aesthetics with intuitive user experience, helping your brand stand out across all devices.',
        tags: ['UI/UX', 'Frontend', 'Backend', 'SEO'],
        accent: '#0ea5e9',
        bg: '#bae6fd',
        border: 'rgba(14,165,233,0.45)',
    },
    {
        number: '02',
        title: 'Social Media Management',
        description: 'From strategy and content creation to analytics and optimization, we manage your social presence to increase engagement, strengthen brand identity, and deliver measurable growth.',
        tags: ['Strategy', 'Content', 'Analytics', 'Growth'],
        accent: '#7c3aed',
        bg: '#ddd6fe',
        border: 'rgba(124,58,237,0.45)',
    },
    {
        number: '03',
        title: 'Photography',
        description: 'Professional photography that captures your brand, products, and moments with creativity, precision, and strong visual storytelling.',
        tags: ['Brand', 'Product', 'Editorial', 'Events'],
        accent: '#d97706',
        bg: '#fde68a',
        border: 'rgba(217,119,6,0.45)',
    },
    {
        number: '04',
        title: 'Graphic Design',
        description: 'Impactful design solutions including branding, marketing creatives, and digital assets crafted to communicate your message clearly and elevate your visual identity.',
        tags: ['Branding', 'Print', 'Digital', 'Identity'],
        accent: '#db2777',
        bg: '#fbcfe8',
        border: 'rgba(219,39,119,0.45)',
    },
    {
        number: '05',
        title: 'Video Production',
        description: 'Complete video production services covering concept development, filming, editing, and delivery to create engaging content for marketing, storytelling, and social platforms.',
        tags: ['Concept', 'Filming', 'Editing', 'Social'],
        accent: '#dc2626',
        bg: '#fecaca',
        border: 'rgba(220,38,38,0.45)',
    },
    {
        number: '06',
        title: 'Digital Marketing',
        description: 'Data-driven campaigns across SEO, PPC, email, and performance channels to grow your reach, drive qualified traffic, and convert audiences into loyal customers.',
        tags: ['SEO', 'PPC', 'Email', 'Performance'],
        accent: '#059669',
        bg: '#a7f3d0',
        border: 'rgba(5,150,105,0.45)',
    },
    {
        number: '07',
        title: 'Brand Strategy',
        description: 'Cohesive brand identity and narrative built from research and positioning — creating a distinctive presence that resonates with your audience and builds lasting equity.',
        tags: ['Positioning', 'Identity', 'Voice', 'Equity'],
        accent: '#ea580c',
        bg: '#fed7aa',
        border: 'rgba(234,88,12,0.45)',
    },
];

const CARD_OFFSET = 14; // px gap between stacked cards

const ServiceCard = ({ service, index, total, scrollYProgress }) => {
    const start = index / total;
    const end   = (index + 1) / total;
    const scale   = useTransform(scrollYProgress, [start, end], [1, 1 - (total - index - 1) * 0.005]);
    const y       = useTransform(scrollYProgress, [start, end], [0, -(total - index - 1) * CARD_OFFSET]);

    return (
        <motion.div
            style={{
                scale,
                y,
                top: `${80 + index * CARD_OFFSET}px`,
                zIndex: index + 1,
            }}
            className="sticky w-full"
        >
            <div
                className="relative bg-white rounded-[2rem] overflow-hidden
                            shadow-[0_2px_24px_rgba(0,0,0,0.07)] transition-shadow duration-500
                            hover:shadow-[0_8px_48px_rgba(0,0,0,0.12)]
                            flex flex-col md:flex-row min-h-[200px] md:min-h-[200px]"
                style={{ border: `1px solid ${service.border}` }}
            >
                {/* Colored left accent strip */}
                <div
                    className="hidden md:flex flex-col items-center justify-between pt-10 pb-10 px-5 flex-shrink-0 min-w-[88px]"
                    style={{ backgroundColor: service.bg, borderRight: `1px solid ${service.border}` }}
                >
                    <span
                        className="font-body text-[9px] font-black tracking-[0.5em] uppercase select-none"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: service.accent, opacity: 0.6 }}
                    >
                        Service
                    </span>
                    <span className="font-header text-3xl font-black select-none" style={{ color: service.accent, opacity: 0.25 }}>
                        {service.number}
                    </span>
                </div>

                {/* Main content */}
                <div className="flex-1 p-7 md:p-10 flex flex-col justify-between gap-5">
                    {/* Mobile number badge */}
                    <span
                        className="font-body md:hidden self-start text-[10px] font-black tracking-[0.4em] uppercase px-3 py-1 rounded-full"
                        style={{ color: service.accent, backgroundColor: service.bg }}
                    >
                        {service.number}
                    </span>

                    <div>
                        {/* Colored top line */}
                        <div className="w-10 h-[3px] rounded-full mb-5" style={{ backgroundColor: service.accent }} />
                        <h3 className="font-header text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#0f0f0f] leading-tight mb-3">
                            {service.title}
                        </h3>
                        <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
                            {service.description}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {service.tags.map(tag => (
                            <span
                                key={tag}
                                className="font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                style={{ color: service.accent, backgroundColor: service.bg, border: `1px solid ${service.border}` }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Ghost watermark number */}
                <div
                    className="font-header absolute right-5 bottom-0 text-[110px] md:text-[140px] font-black leading-none select-none pointer-events-none"
                    style={{ color: service.accent, opacity: 0.04 }}
                >
                    {service.number}
                </div>
            </div>
        </motion.div>
    );
};

const ProcessStickyCards = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    // Remove artificial min height to resolve excessive whitespace issue. 
    // The native stack flow provides adequate scroll spacing.

    return (
        <section ref={container} className="relative z-40 bg-[#f7f7f5] pb-24">
            <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(15,15,15,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            {/* Section header */}
            <div className="relative z-10 text-center px-6 pt-16 md:pt-24 pb-4 md:pb-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <span className="font-body inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#38b5e8] mb-4
                                     px-4 py-1.5 rounded-full border border-[#38b5e8]/25 bg-[#38b5e8]/6">
                        What We Do
                    </span>
                    <h2 className="font-header text-5xl md:text-8xl font-black uppercase text-[#0f0f0f] tracking-tighter leading-none mb-6">
                        Our <span className="text-[#38b5e8]">Services</span>
                    </h2>
                    <p className="font-body text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        From concept to launch — every service your brand needs to grow.
                    </p>
                </motion.div>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-8 h-px max-w-xs mx-auto"
                    style={{ background: 'linear-gradient(to right, transparent, #38b5e8, transparent)' }}
                />
            </div>

            {/* Sticky cards */}
            <div className="relative z-10 px-4 md:px-10 lg:px-20 xl:px-32 max-w-5xl mx-auto pb-16">
                {services.map((service, i) => (
                    <ServiceCard
                        key={service.number}
                        service={service}
                        index={i}
                        total={services.length}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProcessStickyCards;
