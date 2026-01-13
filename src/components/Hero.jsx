import React from 'react';
import heroBg from '../assets/hero_background.png'; // Generated image

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Anjos Colchões Bedroom"
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                />
                {/* Gradient Overlay - Deep Blue to transparent */}
                <div className="absolute inset-0 bg-hero-gradient"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6">
                    <h2 className="text-brand-green font-subtitle font-bold tracking-widest text-sm uppercase animate-fade-in-up">
                        Bem-vindo à Anjos Colchões
                    </h2>
                    <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                        DORMIR BEM É <br />
                        <span className="text-brand-green">VIVER MELHOR</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl font-sans max-w-lg">
                        Descubra a tecnologia e o conforto que transformam suas noites de sono em qualidade de vida.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/5547996974131?text=Olá, gostaria de solicitar um orçamento."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-green hover:bg-green-600 text-white font-heading font-bold py-4 px-8 rounded-full text-center transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/20"
                        >
                            SOLICITAR ORÇAMENTO
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
