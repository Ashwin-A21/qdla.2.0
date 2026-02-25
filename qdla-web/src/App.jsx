import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { CursorProvider } from './context/CursorContext';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import Navbar from './components/layout/Navbar';
import HeroZoom from './components/sections/HeroZoom';
import QuoteReveal from './components/sections/QuoteReveal';
import ProcessStickyCards from './components/sections/ProcessStickyCards';
import ZoomParallax from './components/sections/ZoomParallax';
import HorizontalScroll from './components/sections/HorizontalScroll';
import FeatureGrid from './components/sections/FeatureGrid';
import ParallaxText from './components/sections/ParallaxText';
import Footer from './components/layout/Footer';
import MagneticButton from './components/ui/MagneticButton';
import RevealOnScroll from './components/ui/RevealOnScroll';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true
        });
        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    const images = [
        { src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1280&q=80', alt: 'Fashion & Lifestyle' },
        { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1280&q=80', alt: 'Culinary Arts' },
        { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1280&q=80', alt: 'Beauty & Wellness' },
        { src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1280&q=80', alt: 'Social Media Marketing' },
        { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1280&q=80', alt: 'Brand Identity Design' },
        { src: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=1280&q=80', alt: 'Handcrafted Art' },
        { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1280&q=80', alt: 'Creative Collaboration' },
    ];

    return (
        <CursorProvider>
            <main className="min-h-screen w-full font-sans bg-[#f7f7f5]">
                <CustomCursor />
                <Preloader />
                <Navbar />
                <div id="home"><HeroZoom /></div>
                <QuoteReveal />
                <div id="services"><ProcessStickyCards /></div>
                <ZoomParallax images={images} />
                <div id="work"><HorizontalScroll /></div>
                <div id="about"><FeatureGrid /></div>
                <ParallaxText />
                {/* CTA — dark, full-bleed */}
                <section className="relative z-40 bg-[#0a0a0a] overflow-hidden px-6 py-24 md:py-40">
                    {/* Noise texture */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: '256px 256px' }} />
                    {/* Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] rounded-full blur-[120px] pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse, rgba(56,181,232,0.15) 0%, transparent 70%)' }} />

                    <div className="relative z-10 max-w-6xl mx-auto">
                        <RevealOnScroll>
                            <p className="text-xs font-bold tracking-[0.35em] uppercase text-[#38b5e8] mb-8">
                                Let's Build Together
                            </p>
                            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none mb-8 md:mb-12"
                                style={{ fontVariantNumeric: 'tabular-nums' }}>
                                Start your<br />
                                <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.25)', color: 'transparent' }}>
                                    next project.
                                </span>
                            </h2>
                            <div className="h-px w-full bg-white/[0.08] mb-10" />
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                <p className="text-white/40 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                                    Forward-thinking brands choose Qdla to design, build, and scale their digital presence.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                                    <MagneticButton 
                                        onClick={() => window.open('https://wa.me/919945507345?text=Hello%20I%20just%20reviewed%20your%20website%20and%20would%20like%20to%20enquire%20about%20your%20services', '_blank')}
                                        className="px-8 py-4 bg-white text-[#0a0a0a] rounded-full font-bold text-base hover:bg-[#38b5e8] hover:text-white transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(56,181,232,0.3)]"
                                    >
                                        Start a Project
                                    </MagneticButton>
                                    <MagneticButton className="px-8 py-4 bg-transparent text-white/60 border border-white/10 rounded-full font-bold text-base hover:text-white hover:border-white/30 transition-colors">
                                        hello@qdla.in
                                    </MagneticButton>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </section>

                <Footer />
            </main>
        </CursorProvider>
    );
}

export default App;
