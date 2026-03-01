import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import AnimatedLogo from '../ui/AnimatedLogo';
import spaceImg from '../../assets/hero/space2.png';
import portalHoleImg from '../../assets/hero/portalhole.png';

const HeroZoom = () => {
    const containerRef = useRef(null);
    const [isZooming, setIsZooming] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.02 && !isZooming) {
            setIsZooming(true);
        }
    });

    const coverScale = useTransform(scrollYProgress, [0, 1], [1, 5]); 
    const coverOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]); 
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const bgBlur = useTransform(scrollYProgress, [0, 1], ["3px", "0px"]);
    const titleScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const titleBlur = useTransform(scrollYProgress, [0, 0.3], ["10px", "0px"]);
    // Keep perfectly centered while scrolling
    const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); 

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
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none drop-shadow-2xl px-4 -mt-16 md:-mt-32"
                >
                    <AnimatedLogo isZooming={isZooming} className="text-white h-auto w-[50vw] md:w-[20vw] filter drop-shadow-lg" />
                </motion.div>

                <motion.div 
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
                >
                    <motion.div
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 2.2, duration: 1 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <span className="text-white/60 font-medium tracking-[0.3em] uppercase text-[10px] md:text-xs">
                            Scroll to Explore
                        </span>
                        <motion.div 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
                        />
                    </motion.div>
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
