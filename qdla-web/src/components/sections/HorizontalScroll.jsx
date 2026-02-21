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
import ashPortfolioImg from '../../assets/ash_portfolio.png';
import kreaticaImg from '../../assets/kreatica_interiors.png';
import inlandImg from '../../assets/inland_actm.png';
import oceanZoneImg from '../../assets/oceanzone_ksa.png';

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

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white text-[#0f0f0f] z-40 border-t border-black/[0.05]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-6 md:left-20 z-10">
                    <RevealOnScroll>
                        <h2 className="text-3xl md:text-6xl font-extrabold mb-2 md:mb-4 tracking-tight text-[#0f0f0f]">Selected Works</h2>
                        <p className="text-gray-400 text-base md:text-lg">Scroll to explore</p>
                    </RevealOnScroll>
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
                                className="block relative h-[50vh] md:h-[60vh] w-[85vw] md:w-[40vw] shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-neutral-900 group cursor-pointer transition-colors"
                                onMouseEnter={() => setCursorVariant("text")}
                                onMouseLeave={() => setCursorVariant("default")}
                            >
                                <img src={card.src} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                    <p className="text-xs md:text-sm font-semibold tracking-wider text-[#38b5e8] mb-2 uppercase translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{card.category}</p>
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-white text-xl md:text-4xl font-bold leading-tight max-w-[80%]">{card.title}</h3>
                                        <div className="bg-white/10 p-3 md:p-4 rounded-full backdrop-blur-md group-hover:bg-white text-white group-hover:text-black transition-all group-hover:rotate-45 duration-500">
                                            <MoveUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </CardWrapper>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;
