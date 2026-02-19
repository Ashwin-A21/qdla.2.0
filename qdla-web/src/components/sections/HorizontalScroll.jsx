import React, { useRef, useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
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

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
    const { setCursorVariant } = useContext(CursorContext);

    const cards = [
        { 
            title: "Smaeccan", 
            category: "Luxury Non-Alcoholic Wines", 
            src: smaeccanImg,
            description: "Crafted through meticulous traditional winemaking" 
        },
        { 
            title: "Irum Foods", 
            category: "Organic Farm-to-Table", 
            src: irumfoodsImg,
            description: "Natural products delivered directly to your doorstep" 
        },
        { 
            title: "Hanin Chicken", 
            category: "Premium Poultry Brand", 
            src: haninchickenImg,
            description: "Fresh & Tender - Quality you can taste" 
        },
        { 
            title: "FM Studio", 
            category: "Luxury Salon & Academy", 
            src: fmstudioImg,
            description: "Makeup, Hair, Nails & Aesthetics Experts"
        },
        { 
            title: "Luxavia", 
            category: "High-End Fashion", 
            src: luxaviaImg,
            description: "Eleganace by Haneen - Premium Scarves" 
        },
        { 
            title: "Krochet Craft", 
            category: "Artisanal Handmade Goods", 
            src: krochetcraftImg,
            description: "Bespoke handcrafted crochet designs" 
        },
        {
            title: "Burger82",
            category: "Gourmet Burger Brand",
            src: burger82Img,
            description: "Authentic flavors & bold visual identity"
        },
        {
            title: "Carrtel Vintage",
            category: "Exclusive Vintage Apparel",
            src: carrtelvintageImg,
            description: "First vintage store in Mangalore"
        },
        {
            title: "Koheehaus",
            category: "Specialty Coffee Roasters",
            src: koheehausImg,
            description: "Slow Monday Coffee Club - Brewing Culture"
        },
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a] text-white z-40">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-6 md:left-20 z-10">
                    <RevealOnScroll>
                        <h2 className="text-3xl md:text-6xl font-extrabold mb-2 md:mb-4 tracking-tight">Selected Works</h2>
                        <p className="text-gray-400 text-base md:text-lg">Drag to explore</p>
                    </RevealOnScroll>
                </div>
                <motion.div style={{ x }} className="flex gap-4 md:gap-8 px-6 md:px-20 pt-20 md:pt-0">
                    {cards.map((card, i) => (
                        <div 
                            key={i} 
                            className="relative h-[50vh] md:h-[60vh] w-[85vw] md:w-[40vw] shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-neutral-900 group cursor-pointer border border-white/5 hover:border-white/20 transition-colors"
                            onMouseEnter={() => setCursorVariant("text")}
                            onMouseLeave={() => setCursorVariant("default")}
                        >
                            <img src={card.src} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                <p className="text-xs md:text-sm font-semibold tracking-wider text-blue-400 mb-2 uppercase translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{card.category}</p>
                                <div className="flex justify-between items-end">
                                    <h3 className="text-xl md:text-4xl font-bold leading-tight max-w-[80%]">{card.title}</h3>
                                    <div className="bg-white/10 p-3 md:p-4 rounded-full backdrop-blur-md group-hover:bg-white text-black transition-all group-hover:rotate-45 duration-500">
                                        <MoveUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;
