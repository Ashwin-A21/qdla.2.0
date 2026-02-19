import React, { useState, useRef, useContext } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CursorContext } from '../../context/CursorContext';
import QdlaLogo from '../ui/QdlaLogo';
import MagneticButton from '../ui/MagneticButton';

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();
    const lastYRef = useRef(0);
    const { setCursorVariant } = useContext(CursorContext);
    const [isOpen, setIsOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (y) => {
        const diff = y - lastYRef.current;
        if (Math.abs(diff) > 10) setIsHidden(diff > 0 && y > 100);
        lastYRef.current = y;
    });

    return (
        <>
        <motion.nav 
            variants={{ visible: { y: 0 }, hidden: { y: "-150%" } }}
            animate={isHidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
        >
            <div className="pointer-events-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-4 md:gap-8 shadow-2xl w-full max-w-lg md:w-auto justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onMouseEnter={() => setCursorVariant("button")} onMouseLeave={() => setCursorVariant("default")}>
                        <QdlaLogo className="h-5 md:h-6 w-auto text-white" />
                </div>

                <div className="hidden md:flex items-center gap-6">
                    {['Services', 'Work', 'About'].map((item) => (
                        <a 
                            key={item} 
                            href="#" 
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            onMouseEnter={() => setCursorVariant("text")}
                            onMouseLeave={() => setCursorVariant("default")}
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <MagneticButton className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-blue-500 hover:text-white transition-colors">
                        Get Started
                    </MagneticButton>
                </div>
                
                <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
        </motion.nav>

        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center md:hidden"
                >
                    <div className="flex flex-col gap-8 text-center">
                        {['Services', 'Work', 'About'].map((item) => (
                            <a key={item} href="#" className="text-4xl font-bold text-white hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>{item}</a>
                        ))}
                        <button className="mt-8 bg-white text-black px-8 py-4 rounded-full text-xl font-bold" onClick={() => setIsOpen(false)}>
                            Get Started
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
};

export default Navbar;
