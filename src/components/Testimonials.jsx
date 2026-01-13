import React from 'react';
import { Star } from 'lucide-react';

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
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
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

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark">{review.name}</h4>
                                    <div className="flex text-yellow-400 text-xs">
                                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={12} />)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4">
                                "{review.text}"
                            </p>
                            <span className="text-gray-400 text-xs font-bold">{review.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
