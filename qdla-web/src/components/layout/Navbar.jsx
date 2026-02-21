import React, { useState, useRef, useContext } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CursorContext } from '../../context/CursorContext';
import QdlaLogo from '../ui/QdlaLogo';

const NAV_LINKS = [
    { label: 'Services', id: 'services' },
    { label: 'Work',     id: 'work'     },
    { label: 'About',    id: 'about'    },
];

const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [isOpen, setIsOpen]     = useState(false);
    const { scrollY }              = useScroll();
    const lastYRef                 = useRef(0);
    const { setCursorVariant }     = useContext(CursorContext);

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
            {/* Always-dark pill */}
            <div className="pointer-events-auto bg-[#0f0f0f]/90 backdrop-blur-xl border border-white/[0.08]
                            rounded-full px-5 py-2.5 md:px-7 md:py-3 flex items-center gap-6 md:gap-10
                            shadow-[0_4px_30px_rgba(0,0,0,0.4)] w-full max-w-lg md:w-auto justify-between">

                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onMouseEnter={() => setCursorVariant("button")}
                    onMouseLeave={() => setCursorVariant("default")}
                >
                    <QdlaLogo className="h-5 md:h-6 w-auto text-white" />
                </div>

                {/* Desktop nav links */}
                <div className="hidden md:flex items-center gap-7">
                    {NAV_LINKS.map(({ label, id }) => (
                        <button
                            key={label}
                            onClick={() => scrollTo(id)}
                            className="text-sm font-semibold text-white/60 hover:text-white transition-colors relative group bg-transparent border-none cursor-pointer"
                            onMouseEnter={() => setCursorVariant("text")}
                            onMouseLeave={() => setCursorVariant("default")}
                        >
                            {label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#38b5e8] transition-all duration-300 group-hover:w-full rounded-full" />
                        </button>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white p-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
        </motion.nav>

        {/* Mobile full-screen dark menu */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden bg-[#0f0f0f]"
                >
                    <div className="flex flex-col gap-8 text-center">
                        {NAV_LINKS.map(({ label, id }) => (
                            <button
                                key={label}
                                className="text-4xl font-black tracking-tight text-white hover:text-[#38b5e8] transition-colors bg-transparent border-none cursor-pointer"
                                onClick={() => { scrollTo(id); setIsOpen(false); }}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
};

export default Navbar;
