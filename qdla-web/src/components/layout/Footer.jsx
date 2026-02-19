import React from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import QdlaLogo from '../ui/QdlaLogo';

const Footer = () => (
    <footer className="bg-black text-white pt-20 md:pt-32 pb-8 md:pb-12 z-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <QdlaLogo className="w-[100vw] md:w-[80vw] h-auto text-white" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-24">
                <RevealOnScroll>
                    <div className="flex items-center gap-2 mb-6 md:mb-8">
                        <QdlaLogo className="h-8 md:h-10 w-auto text-white" />
                    </div>
                    <p className="text-gray-400 max-w-sm text-lg md:text-xl leading-relaxed font-light">
                        Crafting digital experiences that merge technical excellence with artistic vision.
                    </p>
                </RevealOnScroll>
                <div className="grid grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <h4 className="font-bold mb-4 md:mb-8 text-base md:text-lg text-white">Company</h4>
                        <ul className="space-y-2 md:space-y-4 text-sm md:text-base text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors block py-1 hover:translate-x-2 transition-transform duration-300">About</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors block py-1 hover:translate-x-2 transition-transform duration-300">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors block py-1 hover:translate-x-2 transition-transform duration-300">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors block py-1 hover:translate-x-2 transition-transform duration-300">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 md:mb-8 text-base md:text-lg text-white">Social</h4>
                        <ul className="space-y-2 md:space-y-4 text-sm md:text-base text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors block py-1 hover:translate-x-2 transition-transform duration-300">Twitter</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors block py-1 hover:translate-x-2 transition-transform duration-300">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors block py-1 hover:translate-x-2 transition-transform duration-300">GitHub</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors block py-1 hover:translate-x-2 transition-transform duration-300">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500 text-center md:text-left">
                <p>© 2024 Qdla Inc. All rights reserved.</p>
                <div className="flex gap-6 md:gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
