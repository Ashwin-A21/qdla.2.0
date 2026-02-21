import React, { useRef, useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';
import { CursorContext } from '../../context/CursorContext';

function ZoomParallax({ images }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });
    const scales = [
        useTransform(scrollYProgress, [0, 1], [1, 4]),
        useTransform(scrollYProgress, [0, 1], [1, 5]),
        useTransform(scrollYProgress, [0, 1], [1, 6]),
        useTransform(scrollYProgress, [0, 1], [1, 5]),
        useTransform(scrollYProgress, [0, 1], [1, 6]),
        useTransform(scrollYProgress, [0, 1], [1, 8]),
        useTransform(scrollYProgress, [0, 1], [1, 9])
    ];
    const rotations = [
        useTransform(scrollYProgress, [0, 1], [0, 0]),
        useTransform(scrollYProgress, [0, 1], [0, -25]),
        useTransform(scrollYProgress, [0, 1], [0, 25]),
        useTransform(scrollYProgress, [0, 1], [0, -15]),
        useTransform(scrollYProgress, [0, 1], [0, 15]),
        useTransform(scrollYProgress, [0, 1], [0, -30]),
        useTransform(scrollYProgress, [0, 1], [0, 30])
    ];
    const { setCursorVariant } = useContext(CursorContext);

    return (
        <div ref={container} className="relative h-[300vh] w-full bg-white z-40">
            <div className="sticky top-0 h-screen overflow-hidden bg-black">
                {images.map(({ src, alt }, index) => {
                    return (
                        <motion.div
                            key={index}
                            style={{ scale: scales[index], rotate: rotations[index] }}
                            className={cn(
                                "absolute top-0 flex h-full w-full items-center justify-center",
                                "items-center justify-center",
                                // Center image sits on top of others
                                index === 0 ? "z-10" : "z-0",
                                // Desktop Positioning (md+)
                                index === 1 && "md:[&>div]:!-top-[30vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[30vh] md:[&>div]:!w-[35vw]",
                                index === 2 && "md:[&>div]:!-top-[10vh] md:[&>div]:!-left-[25vw] md:[&>div]:!h-[45vh] md:[&>div]:!w-[20vw]",
                                index === 3 && "md:[&>div]:!left-[27.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[25vw]",
                                index === 4 && "md:[&>div]:!top-[27.5vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[20vw]",
                                index === 5 && "md:[&>div]:!top-[27.5vh] md:[&>div]:!-left-[22.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[30vw]",
                                index === 6 && "md:[&>div]:!top-[22.5vh] md:[&>div]:!left-[25vw] md:[&>div]:!h-[15vh] md:[&>div]:!w-[15vw]",
                                // Mobile Positioning (Centered/Safe Area)
                                index === 1 && "[&>div]:-top-[20vh] [&>div]:left-[10vw] [&>div]:w-[40vw] [&>div]:h-[20vh]",
                                index === 2 && "[&>div]:top-[10vh] [&>div]:-left-[20vw] [&>div]:w-[35vw] [&>div]:h-[25vh]",
                                index === 3 && "[&>div]:top-[25vh] [&>div]:left-[20vw] [&>div]:w-[30vw] [&>div]:h-[20vh]",
                                index === 4 && "[&>div]:-top-[10vh] [&>div]:-left-[15vw] [&>div]:w-[25vw] [&>div]:h-[15vh]",
                                index === 5 && "[&>div]:top-[5vh] [&>div]:left-[25vw] [&>div]:w-[35vw] [&>div]:h-[20vh]",
                                index === 6 && "[&>div]:top-[30vh] [&>div]:-left-[10vw] [&>div]:w-[30vw] [&>div]:h-[15vh]"
                            )}
                        >
                            <div 
                                className="relative h-[25vh] w-[35vw] md:w-[25vw] overflow-hidden shadow-2xl group bg-neutral-900"
                                onMouseEnter={() => setCursorVariant("text")}
                                onMouseLeave={() => setCursorVariant("default")}
                            >
                                <img src={src || '/placeholder.svg'} alt={alt} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>
                        </motion.div>
                    );
                })}
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                    <motion.h2 
                        className="text-white text-4xl md:text-8xl font-bold tracking-tighter mix-blend-difference px-4 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        We See Details.
                    </motion.h2>
                </div>
            </div>
        </div>
    );
}

export default ZoomParallax;
