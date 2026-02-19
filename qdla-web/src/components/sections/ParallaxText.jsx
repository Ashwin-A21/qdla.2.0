import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxText = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-white overflow-hidden flex flex-col justify-center gap-6 md:gap-10 z-40 relative border-t border-gray-100">
                <div className="relative w-full">
                <motion.div style={{ x: x1 }} className="whitespace-nowrap flex gap-4 md:gap-8">
                    <span className="text-[15vw] md:text-[12vw] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 leading-none">Design • Develop • Deploy •</span>
                    <span className="text-[15vw] md:text-[12vw] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 leading-none">Design • Develop • Deploy •</span>
                </motion.div>
            </div>
            <div className="relative w-full">
                <motion.div style={{ x: x2 }} className="whitespace-nowrap flex gap-4 md:gap-8">
                    <span className="text-[15vw] md:text-[12vw] font-black uppercase text-black leading-none drop-shadow-sm">Innovate • Scale • Succeed •</span>
                    <span className="text-[15vw] md:text-[12vw] font-black uppercase text-black leading-none drop-shadow-sm">Innovate • Scale • Succeed •</span>
                </motion.div>
            </div>
        </section>
    );
}

export default ParallaxText;
