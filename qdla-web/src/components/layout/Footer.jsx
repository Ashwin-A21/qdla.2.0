import React from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import QdlaLogo from '../ui/QdlaLogo';

const FooterLink = ({ href = '#', children }) => (
    <li>
        <a
            href={href}
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
                            <FooterLink>Twitter</FooterLink>
                            <FooterLink>LinkedIn</FooterLink>
                            <FooterLink>GitHub</FooterLink>
                            <FooterLink>Instagram</FooterLink>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 md:mb-6 text-sm text-white/60 uppercase tracking-widest">Contact</h4>
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
            <div className="border-t border-white/[0.06] pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-xs text-white/25 text-center md:text-left">
                <p>© {new Date().getFullYear()} Qdla. All rights reserved. Made with ♥ in Mangalore.</p>
                <div className="flex gap-6 md:gap-8">
                    <a href="#" className="hover:text-[#38b5e8] transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-[#38b5e8] transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
