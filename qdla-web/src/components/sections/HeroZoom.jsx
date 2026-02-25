import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import QdlaLogo from '../ui/QdlaLogo';
import spaceImg from '../../assets/hero/space2.png';
import portalHoleImg from '../../assets/hero/portal-hole.png';

const HeroZoom = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const coverScale = useTransform(scrollYProgress, [0, 1], [1, 5]); 
    const coverOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]); 
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const bgBlur = useTransform(scrollYProgress, [0, 1], ["3px", "0px"]);
    const titleScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const titleBlur = useTransform(scrollYProgress, [0, 0.3], ["10px", "0px"]);
    // Start slightly lower (10%) and move to slightly higher (-10%)
    const titleY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]); 

    return (
        <div ref={containerRef} className="relative h-[200vh] md:h-[250vh] w-full bg-[#0f0f0f]">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0f0f0f]">
                <motion.div 
                    style={{ scale: bgScale, filter: useTransform(bgBlur, (v) => `blur(${v})`) }}
                    className="absolute inset-0 z-0"
                >
                    <img src={spaceImg} alt="Background" className="w-full h-full object-cover opacity-90" />
                    <div className="absolute inset-0 bg-noise opacity-20" />
                </motion.div>

                <motion.div 
                    style={{ scale: titleScale, opacity: titleOpacity, filter: useTransform(titleBlur, (v) => `blur(${v})`), y: titleY }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none drop-shadow-2xl px-4 mt-20 md:mt-32"
                >
                    <QdlaLogo className="text-white h-auto w-[50vw] md:w-[20vw] filter drop-shadow-lg" />
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 2.2 }}
                        className="text-white/80 mt-6 font-medium tracking-widest uppercase text-xs md:text-sm"
                    >
                        Scroll to Explore
                    </motion.p>
                </motion.div>

                <motion.div 
                    style={{ scale: coverScale, opacity: coverOpacity }}
                    className="absolute inset-0 z-20 pointer-events-none origin-center"
                >
                    <div className="w-full h-full relative">
                        <img src={portalHoleImg} alt="Cover" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black opacity-30" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroZoom;
