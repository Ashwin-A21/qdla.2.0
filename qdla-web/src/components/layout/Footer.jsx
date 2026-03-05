import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import QdlaLogo from '../ui/QdlaLogo';

const FooterLink = ({ href = '#', children, ...props }) => (
    <li>
        <a
            href={href}
            {...props}
            className="group flex items-center gap-1.5 py-1 text-white/40 hover:text-[#38b5e8] transition-colors duration-300"
        >
            <span className="inline-block w-0 group-hover:w-3 h-px bg-[#38b5e8] transition-all duration-300 origin-left" />
            {children}
        </a>
    </li>
);

const Footer = () => (
    <footer className="bg-[#060606] text-white pt-20 md:pt-32 pb-8 md:pb-12 z-40 relative overflow-hidden border-t border-white/[0.05]">
        {/* watermark logo */}
        <div className="absolute top-0 right-0 opacity-[0.025] pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <QdlaLogo className="w-[100vw] md:w-[80vw] h-auto text-white" />
        </div>
        {/* top ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[1px] bg-gradient-to-r from-transparent via-[#38b5e8]/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-24">
                <RevealOnScroll>
                    <div className="flex items-center gap-2 mb-6 md:mb-8">
                        <QdlaLogo className="h-8 md:h-10 w-auto text-white" />
                    </div>
                    <p className="text-white/30 max-w-sm text-base md:text-lg leading-relaxed font-light mb-6">
                        Born in Mangalore — crafting world-class digital experiences for brands across the globe.
                    </p>
                    {/* accent tag */}
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#38b5e8] px-3 py-1 rounded-full border border-[#38b5e8]/20 bg-[#38b5e8]/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38b5e8] animate-pulse" />
                        Available for Projects
                    </span>
                </RevealOnScroll>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    <div>
                        <h4 className="font-bold mb-4 md:mb-6 text-sm text-white/60 uppercase tracking-widest">Company</h4>
                        <ul className="space-y-1">
                            <FooterLink>About</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Contact</FooterLink>
                            <FooterLink>Blog</FooterLink>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 md:mb-6 text-sm text-white/60 uppercase tracking-widest">Social</h4>
                        <ul className="space-y-1">
                            <FooterLink href="https://x.com/QDLA_in" target="_blank" rel="noopener noreferrer">Twitter</FooterLink>
                            <FooterLink href="https://www.linkedin.com/company/qdla-in/" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
                            <FooterLink href="https://github.com/QDLA" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
                            <FooterLink href="https://www.instagram.com/qdla.in/" target="_blank" rel="noopener noreferrer">Instagram</FooterLink>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 md:mb-6 text-sm text-white/60 uppercase tracking-widest">Email</h4>
                        <ul className="space-y-1">
                            <FooterLink href="mailto:info@qdla.in">info@qdla.in</FooterLink>
                            <FooterLink href="mailto:sales@qdla.in">sales@qdla.in</FooterLink>
                            <FooterLink href="mailto:raj@qdla.in">raj@qdla.in</FooterLink>
                            <FooterLink href="mailto:shahir@qdla.in">shahir@qdla.in</FooterLink>
                        </ul>
                    </div>
                </div>
            </div>

            {/* bottom bar */}
            <div className="border-t border-white/[0.06] pt-8 md:pt-10 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 text-xs text-white/40 text-center lg:text-left">
                <p className="flex-shrink-0 text-white/25">© {new Date().getFullYear()} Qdla. All rights reserved. Made with <a href="https://ash-ecru.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#38b5e8] transition-colors">♥</a> in Mangalore.</p>
                <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-4 font-medium tracking-wide">
                    <div className="flex items-center gap-4 md:gap-6">
                        <a href="tel:+919945507345" className="group flex items-center gap-2 hover:-translate-y-0.5 transition-transform duration-300">
                            <span className="text-[#38b5e8]/80 group-hover:text-[#38b5e8] font-bold tracking-[0.2em] text-[9px] uppercase transition-colors">Shahir</span>
                            <span className="text-white/40 group-hover:text-white/90 text-xs tracking-wide transition-colors whitespace-nowrap">+91 99455 07345</span>
                        </a>
                        <span className="w-1 h-1 rounded-full bg-white/10 hidden sm:block"></span>
                        <a href="tel:+919353021184" className="group flex items-center gap-2 hover:-translate-y-0.5 transition-transform duration-300">
                            <span className="text-[#38b5e8]/80 group-hover:text-[#38b5e8] font-bold tracking-[0.2em] text-[9px] uppercase transition-colors">Raj B</span>
                            <span className="text-white/40 group-hover:text-white/90 text-xs tracking-wide transition-colors whitespace-nowrap">+91 93530 21184</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-6 text-white/25">
                        <span className="w-px h-3 bg-white/10 hidden lg:block"></span>
                        <a href="#" className="hover:text-white/60 transition-colors whitespace-nowrap">Privacy Policy</a>
                        <a href="#" className="hover:text-white/60 transition-colors whitespace-nowrap">Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
