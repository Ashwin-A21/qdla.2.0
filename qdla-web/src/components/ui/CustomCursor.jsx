import React, { useEffect, useContext } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CursorContext } from '../../context/CursorContext';

const CustomCursor = () => {
    const { cursorVariant } = useContext(CursorContext);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    const variants = {
        default: { width: 16, height: 16, mixBlendMode: "difference" },
        text: { width: 80, height: 80, mixBlendMode: "difference" },
        button: { width: 40, height: 40, mixBlendMode: "difference" }
    };

    return (
        <motion.div 
            className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[9999] hidden lg:block"
            style={{ 
                left: cursorXSpring, 
                top: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%"
            }}
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
};

export default CustomCursor;
