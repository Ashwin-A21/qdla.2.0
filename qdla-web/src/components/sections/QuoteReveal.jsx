import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const QuoteReveal = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });
    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0]);
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 1.2]);
    const quote = "If ever you seek the digital frontier, do not hesitate to build. Innovation is at four; but quality is welcome at any time.";
    const words = quote.split(" ");

    return (
        <section ref={containerRef} className="h-[120vh] md:h-[150vh] bg-black flex items-center justify-center relative z-30 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none animate-pulse" />
                <div className="sticky top-0 h-screen flex items-center justify-center w-full px-6">
                <motion.p 
                    style={{ opacity, scale }}
                    className="relative text-3xl md:text-6xl lg:text-7xl font-bold text-center w-full md:w-3/4 text-white leading-tight z-10"
                >
                    {words.map((word, i) => {
                        const start = i / words.length * 0.5;
                        const end = start + 0.1;
                        const wordOpacity = useTransform(scrollYProgress, [0, start, end], [0.1, 0.1, 1]);
                        return (
                            <motion.span key={i} style={{ opacity: wordOpacity }} className="inline-block mr-2 md:mr-3">
                                {word}
                            </motion.span>
                        )
                    })}
                </motion.p>
                </div>
        </section>
    );
}

export default QuoteReveal;
