import React from 'react';
import { motion } from 'framer-motion';
import sofaImg from '../assets/sofa.png';
import { ChevronRight } from 'lucide-react';

const sofaCategories = [
    {
        title: 'Sofás Retráteis e Reclináveis',
        subtitle: 'Conforto absoluto para seu home theater',
        image: '/sofa/sofa-cama.jpg',
        items: ['Molas Ensacadas', 'Tecido Suede', 'Abertura 1.80m'],
        description: 'Perfeito para maratonar séries e relaxar com a família. Tecnologia de conforto e durabilidade.',
        link: '#'
    },
    {
        title: 'Sofás de Living',
        subtitle: 'Elegância para receber bem',
        image: '/sofa/sofa-living.jpg',
        items: ['Design Moderno', 'Acabamento Premium', 'Várias Cores'],
        description: 'Sofisticação e design que transformam sua sala de estar em um ambiente convidador.',
        link: '#'
    },
    {
        title: 'Poltronas',
        subtitle: 'O complemento perfeito',
        image: '/sofa/sofacama2.jpg',
        items: ['Giratória', 'Opções de Couro', 'Design Clássico'],
        description: 'Toque de charme e conforto individual para leitura ou descanso.',
        link: '#'
    }
];

const SofaSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-4">
                        SOFÁS E ESTOFADOS
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans">
                        Design, conforto e sofisticação para sua sala
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                    {sofaCategories.map((cat, index) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group h-[500px] w-full md:w-[31%] perspective-1000 cursor-pointer"
                        >
                            {/* Inner Container - Flip Logic */}
                            <div className="relative w-full h-full transition-all duration-700 transform preserve-3d group-hover:rotate-y-180">

                                {/* Front Face */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <h3 className="text-2xl font-heading font-bold text-white mb-2">{cat.title}</h3>
                                        <p className="text-white/80 font-subtitle text-sm mb-4">{cat.subtitle}</p>
                                        <div className="flex items-center text-brand-green font-bold text-xs uppercase tracking-widest">
                                            <span className="mr-2">Ver Modelos</span>
                                            <ChevronRight size={14} />
                                        </div>
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-xl bg-brand-dark rotate-y-180 flex flex-col items-center justify-center p-8 text-center border-b-4 border-brand-green">
                                    <h3 className="text-xl font-heading font-bold text-white mb-4">{cat.title}</h3>
                                    <div className="w-12 h-1 bg-brand-green mb-6 rounded-full"></div>

                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                        {cat.description}
                                    </p>

                                    <ul className="text-left space-y-2 mb-8 w-full pl-4">
                                        {cat.items.map(item => (
                                            <li key={item} className="text-gray-400 text-sm flex items-center">
                                                <span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={`https://wa.me/5547996974131?text=Olá, tenho interesse em ${cat.title}. Gostaria de ver o catálogo.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all w-full text-sm inline-block"
                                    >
                                        Chamar no WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SofaSection;
