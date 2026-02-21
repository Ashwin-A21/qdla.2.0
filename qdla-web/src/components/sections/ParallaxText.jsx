import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxText = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
    const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

    return (
        <section ref={containerRef}
            className="py-16 md:py-24 bg-[#f7f7f5] overflow-hidden flex flex-col justify-center gap-4 md:gap-6 z-40 relative border-t border-black/5">
            <div className="relative w-full">
                <motion.div style={{ x: x1 }} className="whitespace-nowrap flex gap-4 md:gap-8">
                    {[0, 1].map(i => (
                        <span key={i} className="text-[15vw] md:text-[12vw] font-black uppercase leading-none select-none"
                            style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(15,15,15,0.12)' }}>
                            Design • Develop • Deploy •&nbsp;
                        </span>
                    ))}
                </motion.div>
            </div>
            <div className="relative w-full">
                <motion.div style={{ x: x2 }} className="whitespace-nowrap flex gap-4 md:gap-8">
                    {[0, 1].map(i => (
                        <span key={i} className="text-[15vw] md:text-[12vw] font-black uppercase text-[#0f0f0f] leading-none select-none">
                            Innovate • Scale • Succeed •&nbsp;
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ParallaxText;
