import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProcessCard = ({ i, title, desc, bg, progress, range, targetScale }) => {
    const scale = useTransform(progress, range, [1, targetScale]);
    // Adjusted offsets for mobile to prevent overlapping too much
    const topOffset = `calc(5vh + ${i * 40}px)`; 
    
    return (
        <div className="h-[80vh] md:h-screen flex items-center justify-center sticky top-0 px-4">
            <motion.div 
                style={{ scale, top: topOffset }}
                className={`relative flex flex-col justify-between p-6 md:p-10 h-[50vh] md:h-[500px] w-full max-w-[800px] rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl origin-top ${bg}`}
            >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mix-blend-overlay">{title}</h2>
                    <div className="flex justify-between items-end">
                        <p className="text-lg md:text-2xl font-medium text-white/90 max-w-sm leading-snug">{desc}</p>
                        <span className="text-6xl md:text-9xl font-black text-white/10 absolute bottom-4 right-6 md:right-8">0{i + 1}</span>
                    </div>
            </motion.div>
        </div>
    )
}

const ProcessStickyCards = () => {
        const container = useRef(null);
        const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });
        const features = [
        { title: "Strategy", desc: "We map out the digital terrain before writing a single line of code.", bg: "bg-gradient-to-br from-gray-900 to-gray-800" },
        { title: "Design", desc: "Pixels with purpose. We craft interfaces that feel inevitable.", bg: "bg-gradient-to-br from-blue-900 to-blue-800" },
        { title: "Engineering", desc: "Code that scales. Architecture that lasts. Performance that stuns.", bg: "bg-gradient-to-br from-indigo-900 to-purple-900" },
        { title: "Growth", desc: "Data-driven iteration. We ensure your product evolves with your users.", bg: "bg-gradient-to-br from-emerald-900 to-emerald-800" },
    ];

        return (
            <section ref={container} className="relative z-40 bg-black pt-10 md:pt-20 pb-20">
            <div className="sticky top-20 text-center mb-10 z-0">
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-2 md:mb-4">Our Process</h2>
                <p className="text-gray-400 text-sm md:text-base">Scroll to unfold</p>
            </div>
            {features.map((f, i) => {
                const targetScale = 1 - ( (features.length - i) * 0.05);
                return <ProcessCard key={i} i={i} {...f} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
            })}
            </section>
        )
}

export default ProcessStickyCards;
