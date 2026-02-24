import React, { useRef, useContext, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MoveUpRight, ArrowLeft, LayoutGrid } from 'lucide-react';
import { CursorContext } from '../../context/CursorContext';
import RevealOnScroll from '../ui/RevealOnScroll';

import smaeccanImg from '../../assets/smaeccan.png';
import irumfoodsImg from '../../assets/irumfoods.png';
import haninchickenImg from '../../assets/haninchicken.png';
import fmstudioImg from '../../assets/fmstudio.png';
import luxaviaImg from '../../assets/luxavia.png';
import krochetcraftImg from '../../assets/krochetcraft.png';
import burger82Img from '../../assets/burger82.png';
import carrtelvintageImg from '../../assets/carrtelvintage.png';
import koheehausImg from '../../assets/koheehaus.png';
import ashPortfolioImg from '../../assets/ash_portfolio.png';
import kreaticaImg from '../../assets/kreatica_interiors.png';
import inlandImg from '../../assets/inland_actm.png';
import oceanZoneImg from '../../assets/oceanzone_ksa.png';

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
    const { setCursorVariant } = useContext(CursorContext);
    const [showAll, setShowAll] = useState(false);

    const cards = [
        { 
            title: "Smaeccan", 
            category: "Luxury Non-Alcoholic Wines", 
            src: smaeccanImg,
            description: "Crafted through meticulous traditional winemaking",
            link: "https://smacchen.store/" 
        },
        { 
            title: "Irum Foods", 
            category: "Organic Farm-to-Table", 
            src: irumfoodsImg,
            description: "Natural products delivered directly to your doorstep",
            link: "https://www.irumfoods.in/" 
        },
        { 
            title: "Hanin Chicken", 
            category: "Premium Poultry Brand", 
            src: haninchickenImg,
            description: "Fresh & Tender - Quality you can taste",
            link: "#" 
        },
        { 
            title: "FM Studio", 
            category: "Luxury Salon & Academy", 
            src: fmstudioImg,
            description: "Makeup, Hair, Nails & Aesthetics Experts",
            link: "#"
        },
        { 
            title: "Luxavia", 
            category: "High-End Fashion", 
            src: luxaviaImg,
            description: "Eleganace by Haneen - Premium Scarves",
            link: "#" 
        },
        { 
            title: "Krochet Craft", 
            category: "Artisanal Handmade Goods", 
            src: krochetcraftImg,
            description: "Bespoke handcrafted crochet designs",
            link: "#" 
        },
        {
            title: "Burger82",
            category: "Gourmet Burger Brand",
            src: burger82Img,
            description: "Authentic flavors & bold visual identity",
            link: "#"
        },
        {
            title: "Carrtel Vintage",
            category: "Exclusive Vintage Apparel",
            src: carrtelvintageImg,
            description: "First vintage store in Mangalore",
            link: "#"
        },
        {
            title: "Koheehaus",
            category: "Specialty Coffee Roasters",
            src: koheehausImg,
            description: "Slow Monday Coffee Club - Brewing Culture",
            link: "#"
        },
        {
            title: "Ashwin A. Portfolio",
            category: "Personal Portfolio Website",
            src: ashPortfolioImg,
            description: "Versatile Full-Stack Developer - Clean & Modern",
            link: "https://ash-ecru.vercel.app/"
        },
        {
            title: "Kreatica Interiors",
            category: "Luxury Interior Design",
            src: kreaticaImg,
            description: "Where Spaces Meet Soul - Bespoke Interiors",
            link: "https://www.kreaticainterior.in/"
        },
        {
            title: "Inland ACTM",
            category: "Architecture & Construction",
            src: inlandImg,
            description: "INLAND ARCHITECTS, CONSTRUCTION & TRADING MATERIALS",
            link: "https://www.inlandactm.com/"
        },
        {
            title: "Ocean Zone KSA",
            category: "Marine Services & Solutions",
            src: oceanZoneImg,
            description: "Leading Marine Services Provider in Saudi Arabia",
            link: "https://oceanzoneksa.com/"
        },
    ];

    const handleViewAll = () => {
        setShowAll(true);
        setTimeout(() => {
            if (targetRef.current) {
                window.scrollTo({ top: targetRef.current.offsetTop, behavior: 'smooth' });
            }
        }, 100);
    };

    const handleBack = () => {
        setShowAll(false);
        setTimeout(() => {
            if (targetRef.current) {
                window.scrollTo({ top: targetRef.current.offsetTop, behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <section ref={targetRef} className={`relative ${showAll ? 'min-h-screen py-32' : 'h-[300vh]'} bg-white z-40 border-t border-black/[0.05] transition-colors duration-700`}>
            <AnimatePresence mode="wait">
                {!showAll ? (
                    <motion.div 
                        key="horizontal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="sticky top-0 flex h-screen items-center overflow-hidden"
                    >
                        <div className="absolute top-10 left-6 md:left-20 right-6 md:right-20 z-20 flex justify-between items-end pointer-events-none">
                            <RevealOnScroll className="pointer-events-auto">
                                <h2 className="text-4xl md:text-7xl font-header font-black uppercase tracking-tighter mb-2 text-[#0f0f0f]">Selected Works</h2>
                                <p className="text-black/40 text-xs md:text-md font-body font-bold uppercase tracking-widest">Scroll to explore</p>
                            </RevealOnScroll>
                            <button 
                                onClick={handleViewAll}
                                className="pointer-events-auto flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#0f0f0f] text-white rounded-full font-body text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#38b5e8] transition-all duration-300 shadow-xl hover:scale-105"
                            >
                                <LayoutGrid size={16} className="md:w-5 md:h-5"/> 
                                <span className="hidden md:inline">View All</span>
                            </button>
                        </div>
                        <motion.div style={{ x }} className="flex gap-4 md:gap-8 px-6 md:px-20 pt-20 md:pt-0">
                            {cards.map((card, i) => {
                                const isLink = card.link && card.link !== "#";
                                const CardWrapper = isLink ? 'a' : 'div';
                                const wrapperProps = isLink ? {
                                    href: card.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                } : {};

                                return (
                                    <CardWrapper 
                                        key={i}
                                        {...wrapperProps}
                                        className="block relative h-[50vh] md:h-[60vh] w-[85vw] md:w-[40vw] shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-neutral-900 group cursor-pointer shadow-2xl"
                                        onMouseEnter={() => setCursorVariant("text")}
                                        onMouseLeave={() => setCursorVariant("default")}
                                    >
                                        <img src={card.src} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-[1.03]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                                        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full z-10">
                                            <p className="text-[10px] md:text-xs font-body font-bold tracking-[0.2em] text-[#38b5e8] mb-3 uppercase transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1]">{card.category}</p>
                                            <div className="flex justify-between items-end gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]">
                                                <h3 className="text-white text-3xl md:text-5xl font-header font-black leading-none tracking-tighter uppercase drop-shadow-md">{card.title}</h3>
                                                <div className="bg-white/10 text-white p-4 rounded-full backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all group-hover:rotate-45 duration-700 shadow-lg flex-shrink-0 scale-90 group-hover:scale-100">
                                                    <MoveUpRight size={22} strokeWidth={2.5} />
                                                </div>
                                            </div>
                                        </div>
                                    </CardWrapper>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="px-6 md:px-20 max-w-[1800px] mx-auto pt-10"
                    >
                        <div className="flex justify-between items-end mb-16">
                            <RevealOnScroll>
                                <h2 className="text-4xl md:text-7xl font-header font-black uppercase tracking-tighter mb-2 text-[#0f0f0f]">Selected Works</h2>
                                <p className="text-black/40 text-xs md:text-md font-body font-bold uppercase tracking-widest">All Projects Directory</p>
                            </RevealOnScroll>
                            <button 
                                onClick={handleBack}
                                className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#0f0f0f] text-white rounded-full font-body text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#38b5e8] transition-all duration-300 shadow-xl hover:scale-105"
                            >
                                <ArrowLeft size={16} className="md:w-5 md:h-5"/> 
                                <span className="hidden md:inline">Back</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px] lg:auto-rows-[350px] grid-flow-dense mt-8">
                            {cards.map((card, idx) => {
                                const isLink = card.link && card.link !== "#";
                                const CardWrapper = isLink ? 'a' : 'div';
                                const wrapperProps = isLink ? {
                                    href: card.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                } : {};

                                const spanClasses = (() => {
                                    switch (idx) {
                                        case 0: return "col-span-1 md:col-span-2 md:row-span-2";
                                        case 1: return "col-span-1 md:col-span-1 md:row-span-1";
                                        case 2: return "col-span-1 md:col-span-1 md:row-span-1";
                                        case 3: return "col-span-1 md:col-span-2 md:row-span-1";
                                        case 4: return "col-span-1 md:col-span-1 md:row-span-2";
                                        case 5: return "col-span-1 md:col-span-1 md:row-span-1";
                                        case 6: return "col-span-1 md:col-span-2 md:row-span-2";
                                        case 7: return "col-span-1 md:col-span-1 md:row-span-1";
                                        case 8: return "col-span-1 md:col-span-2 md:row-span-1";
                                        case 9: return "col-span-1 md:col-span-1 md:row-span-1";
                                        case 10: return "col-span-1 md:col-span-1 md:row-span-2";
                                        case 11: return "col-span-1 md:col-span-1 md:row-span-1";
                                        case 12: return "col-span-1 md:col-span-2 md:row-span-2";
                                        default: return "col-span-1 md:col-span-1 md:row-span-1";
                                    }
                                })();

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                                        transition={{ 
                                            duration: 0.8, 
                                            delay: Math.min(idx * 0.05, 0.6),
                                            ease: [0.22, 1, 0.36, 1] 
                                        }}
                                        className={`${spanClasses} h-full w-full`}
                                    >
                                        <CardWrapper 
                                            {...wrapperProps}
                                            className="block relative w-full h-full overflow-hidden rounded-[1.5rem] bg-neutral-900 group cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_48px_rgba(56,181,232,0.15)] transition-shadow duration-700"
                                            onMouseEnter={() => setCursorVariant("text")}
                                            onMouseLeave={() => setCursorVariant("default")}
                                        >
                                            <img src={card.src} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] ease-[0.22,1,0.36,1] group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                                            
                                            {/* Top Tag */}
                                            <div className="absolute top-6 left-6 z-10 transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-y-1">
                                                <span className="bg-white/10 backdrop-blur-md text-white/90 text-[10px] font-body font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/20 shadow-sm">
                                                    {card.category}
                                                </span>
                                            </div>

                                            {/* Bottom Content */}
                                            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10 flex flex-col justify-end h-full">
                                                <div className="flex justify-between items-end gap-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]">
                                                    <div className="max-w-[85%]">
                                                        <h3 className="text-white text-2xl md:text-4xl font-header font-black leading-none tracking-tighter uppercase mb-3 drop-shadow-md">{card.title}</h3>
                                                        <div className="overflow-hidden">
                                                            <p className="text-white/80 text-xs font-body font-medium leading-relaxed transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1] delay-75 line-clamp-2">
                                                                {card.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white text-black p-4 rounded-full group-hover:bg-[#38b5e8] group-hover:text-white transition-all group-hover:rotate-45 duration-700 shadow-xl flex-shrink-0 scale-90 group-hover:scale-100">
                                                        <MoveUpRight size={22} strokeWidth={2.5} />
                                                    </div>
                                                </div>
                                            </div>
                                        </CardWrapper>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HorizontalScroll;
