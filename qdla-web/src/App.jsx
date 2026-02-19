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
            <main className="min-h-screen w-full font-sans bg-[#0f0f0f]">
                <CustomCursor />
                <Preloader />
                <Navbar />
                <HeroZoom />
                <QuoteReveal />
                <ProcessStickyCards />
                <ZoomParallax images={images} />
                <HorizontalScroll />
                <FeatureGrid />
                <ParallaxText />
                <section className="py-24 md:py-40 bg-gray-50 px-6 z-40 relative border-t border-gray-100">
                    <div className="max-w-5xl mx-auto text-center">
                        <RevealOnScroll>
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 text-black">Ready to transform<br/>your ideas into reality?</h2>
                            <p className="text-xl md:text-2xl text-gray-500 mb-8 md:mb-12 font-medium">Join forward-thinking companies building with Qdla.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <MagneticButton className="px-8 md:px-12 py-4 md:py-6 bg-black text-white rounded-full font-bold text-lg md:text-xl hover:shadow-2xl hover:bg-neutral-800 transition-all w-full sm:w-auto">Start Your Project</MagneticButton>
                                <MagneticButton className="px-8 md:px-12 py-4 md:py-6 bg-white text-black border border-gray-200 rounded-full font-bold text-lg md:text-xl hover:bg-gray-50 hover:border-gray-300 transition-all w-full sm:w-auto">View Our Work</MagneticButton>
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
