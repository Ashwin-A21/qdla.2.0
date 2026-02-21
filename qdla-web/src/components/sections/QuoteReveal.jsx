import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const QuoteReveal = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end end"] });
    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0]);
    const scale   = useTransform(scrollYProgress, [0.5, 1], [1, 1.05]);
    const quote   = "QDLA - Born in Mangalore, we craft world-class digital experiences to serve brands across the globe.";
    const words   = quote.split(" ");

    return (
        <section ref={containerRef}
            className="h-[120vh] md:h-[150vh] bg-white flex items-center justify-center relative z-30 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[#38b5e8]/8 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{ backgroundImage: 'linear-gradient(#38b5e8 1px, transparent 1px), linear-gradient(90deg, #38b5e8 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            <div className="sticky top-0 h-screen flex items-center justify-center w-full px-6">
                <motion.p style={{ opacity, scale }}
                    className="relative text-3xl md:text-6xl lg:text-7xl font-display font-medium text-center w-full md:w-4/5 text-[#0f0f0f] leading-tight z-10">
                    {words.map((word, i) => {
                        const start = i / words.length * 0.5;
                        const end   = start + 0.1;
                        const wordOpacity = useTransform(scrollYProgress, [0, start, end], [0.1, 0.1, 1]);
                        return (
                            <motion.span key={i} style={{ opacity: wordOpacity }} className="inline-block mr-2 md:mr-3">{word}</motion.span>
                        );
                    })}
                </motion.p>
            </div>
        </section>
    );
};

export default QuoteReveal;
