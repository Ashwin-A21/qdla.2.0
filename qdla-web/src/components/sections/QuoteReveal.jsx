import React from 'react';
import { Quote } from 'lucide-react';

const QuoteReveal = () => {
    return (
        <section className="py-60 px-6 text-center bg-[#f7f7f5]">
            <div className="max-w-4xl mx-auto">
                <Quote className="mx-auto mb-12 opacity-10 w-12 h-12 text-black" />
                <h2 className="font-header text-3xl md:text-5xl uppercase leading-tight tracking-tight text-black">
                    "Minimalism is not the lack of something. It is the perfect amount of everything."
                </h2>
                <div className="mt-12 h-[1px] w-20 bg-black mx-auto"></div>
                <p className="mt-8 text-[10px] uppercase tracking-[0.4em] font-bold text-black font-body">Standard of Qdla</p>
            </div>
        </section>
    );
};

export default QuoteReveal;

