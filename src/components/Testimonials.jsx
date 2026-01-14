import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const reviews = [
    {
        name: 'Maria Silva',
        text: 'Atendimento excelente! As vendedoras foram muito atenciosas e me ajudaram a escolher o colchão ideal. Minhas dores nas costas melhoraram muito.',
        date: 'Há 2 semanas'
    },
    {
        name: 'João Santos',
        text: 'Qualidade impressionante. O produto chegou no prazo combinado e a montagem foi super rápida. Recomendo a todos de Balneário Camboriú.',
        date: 'Há 1 mês'
    },
    {
        name: 'Ana Costa',
        text: 'Loja linda e com muitas opções. Comprei um sofá retrátil e um colchão king size. O conforto é inigualável.',
        date: 'Há 3 dias'
    },
    {
        name: 'Carlos Oliveira',
        text: 'Melhor investimento que fiz para minha saúde. O colchão magnético realmente faz diferença no dia a dia.',
        date: 'Há 1 semana'
    },
    {
        name: 'Fernanda Lima',
        text: 'Sofás lindos e muito confortáveis. O atendimento pós-venda também foi impecável. Voltarei a comprar.',
        date: 'Há 2 meses'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero_background.webp"
                    alt="Background"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                        O QUE NOSSOS CLIENTES DIZEM
                    </h2>
                    <div className="flex justify-center items-center gap-2">
                        <span className="font-bold text-xl">4.9</span>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                        </div>
                        <span className="text-gray-500 text-sm">(Google Reviews)</span>
                    </div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Carousel Track */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {reviews.map((review, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-lg mx-auto transform transition-all hover:scale-105">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green font-bold text-2xl">
                                                {review.name[0]}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-brand-dark">{review.name}</h3>
                                                <div className="flex text-yellow-400 text-sm">
                                                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 font-sans text-lg leading-relaxed mb-6 italic">
                                            "{review.text}"
                                        </p>
                                        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{review.date}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        aria-label="Depoimento anterior"
                        className="absolute top-1/2 left-0 -translate-y-1/2 -ml-8 md:-ml-12 bg-white p-3 rounded-full shadow-lg text-brand-dark hover:text-brand-green hover:scale-110 transition-all z-10 hidden md:block"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        aria-label="Próximo depoimento"
                        className="absolute top-1/2 right-0 -translate-y-1/2 -mr-8 md:-mr-12 bg-white p-3 rounded-full shadow-lg text-brand-dark hover:text-brand-green hover:scale-110 transition-all z-10 hidden md:block"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-4 mt-8">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                aria-label={`Ir para depoimento ${i + 1}`}
                                className={`w-3 h-3 box-content p-2 rounded-full transition-all bg-clip-content ${i === currentIndex ? 'bg-brand-green scale-150' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-12">
                        <a
                            href="https://wa.me/5547996974131?text=Olá, vi os depoimentos e gostaria de atendimento."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all text-lg animate-pulse"
                        >
                            Inicie seu Atendimento via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
