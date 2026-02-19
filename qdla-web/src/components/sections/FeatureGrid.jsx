import React, { useState, useContext } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Code2, Rocket, Layers, Cpu, Globe, ArrowRightCircle } from 'lucide-react';
import { CursorContext } from '../../context/CursorContext';
import RevealOnScroll from '../ui/RevealOnScroll';

const FeatureCard = ({ icon: Icon, title, desc }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
    const { setCursorVariant } = useContext(CursorContext);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div 
            className="group relative p-6 md:p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-transparent transition-all duration-300 overflow-hidden hover:shadow-2xl"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
                style={{ background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 80%)` }}
            />
            
            <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center mb-4 md:mb-6 text-black group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon size={24} strokeWidth={1.5} className="group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-black group-hover:text-blue-600 transition-colors">{title}</h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">{desc}</p>
            </div>
        </div>
    );
}

const FeatureGrid = () => (
     <section className="py-20 md:py-32 px-6 bg-white z-40 relative">
        <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:mb-24">
                <RevealOnScroll>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 md:mb-8 text-black leading-tight">Built for scale,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">designed for humans.</span></h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">We don't just write code; we architect solutions. Our stack is optimized for speed, SEO, and user retention.</p>
                </RevealOnScroll>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <FeatureCard icon={Code2} title="Clean Architecture" desc="We utilize modern frameworks like Next.js and React to build maintainable, scalable codebases." />
                <FeatureCard icon={Rocket} title="Performance First" desc="Optimized Web Vitals from day one. We ensure your application loads instantly." />
                <FeatureCard icon={Layers} title="Full-Stack Solutions" desc="From database design to frontend animations, we handle the entire lifecycle." />
                <FeatureCard icon={Cpu} title="AI Integration" desc="Leverage the power of LLMs and generative AI to automate workflows." />
                <FeatureCard icon={Globe} title="Global CDN" desc="Deploying to the edge ensures your users have low-latency access." />
                <FeatureCard icon={ArrowRightCircle} title="Rapid Deployment" desc="CI/CD pipelines set up for automated testing and deployment." />
            </div>
        </div>
    </section>
);

export default FeatureGrid;
