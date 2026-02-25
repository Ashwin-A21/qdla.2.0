import React, { useContext } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Palette, Code2, ShoppingBag, Smartphone, Zap, Layers } from 'lucide-react';
import { CursorContext } from '../../context/CursorContext';
import RevealOnScroll from '../ui/RevealOnScroll';

const FeatureCard = ({ icon: Icon, title, desc, delay = 0 }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const { setCursorVariant } = useContext(CursorContext);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative p-6 md:p-8 rounded-3xl border border-black/[0.06] bg-white
                        hover:border-[#38b5e8]/30 hover:shadow-[0_8px_40px_rgba(56,181,232,0.10)]
                        transition-all duration-300 overflow-hidden cursor-default"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}
        >
            <motion.div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 hidden md:block transition duration-300"
                style={{ background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(56,181,232,0.08), transparent 80%)` }} />
            <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5
                               bg-[#f0f9ff] border border-[#38b5e8]/15 text-[#38b5e8]
                               group-hover:bg-[#38b5e8] group-hover:text-white group-hover:border-transparent
                               group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                    <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#0f0f0f] group-hover:text-[#38b5e8] transition-colors duration-300">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 origin-left"
                style={{ background: 'linear-gradient(to right, #38b5e8, #8b5cf6)' }} />
        </motion.div>
    );
};

const features = [
    { icon: Palette,      title: 'UI/UX & Brand Design',   desc: 'Crafting stunning, human-centric interfaces and brand identities that leave a lasting impression.' },
    { icon: Code2,        title: 'Custom Web Development', desc: 'Building scalable, high-performance web applications tailored specifically to your business needs.' },
    { icon: ShoppingBag,  title: 'E-Commerce Solutions',   desc: 'Designing seamless, conversion-optimized shopping experiences that turn visitors into loyal customers.' },
    { icon: Smartphone,   title: 'Mobile-First Experiences',desc: 'Ensuring your digital presence is strictly responsive, engaging, and optimized across all devices.' },
    { icon: Zap,          title: 'Performance & SEO',      desc: 'Enhancing website speed, web vitals, and accessibility to maximize your organic reach and retention.' },
    { icon: Layers,       title: 'Digital Strategy',       desc: 'From initial concept modeling to long-term ecosystem maintenance, we cover the full digital lifecycle.' },
];

const FeatureGrid = () => (
    <section className="py-20 md:py-32 px-6 bg-[#f7f7f5] z-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(15,15,15,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16 md:mb-24">
                <RevealOnScroll>
                    <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#38b5e8] mb-4
                                     px-4 py-1.5 rounded-full border border-[#38b5e8]/25 bg-[#38b5e8]/6">
                        Our Capabilities
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5 text-[#0f0f0f] leading-tight">
                        Expertise that drives{' '}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(135deg, #38b5e8, #6366f1)' }}>
                            digital excellence.
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
                        We blend striking aesthetics with robust engineering to create premium digital products that elevate your brand and engage your audience.
                    </p>
                </RevealOnScroll>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {features.map((f, i) => <FeatureCard key={f.title} {...f} delay={i * 0.08} />)}
            </div>
        </div>
    </section>
);

export default FeatureGrid;
