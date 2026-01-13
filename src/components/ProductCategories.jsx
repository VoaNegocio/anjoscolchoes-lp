import React from 'react';
import { motion } from 'framer-motion';
import mattressImg from '../assets/mattress.webp';
import sofaImg from '../assets/sofa.webp';
import { ChevronRight } from 'lucide-react';

const categories = [
    {
        title: 'Colchões Infantis',
        subtitle: 'Tecnologia para crianças',
        image: '/colchao/colchaoinfantil.webp',
        items: ['Infantis', 'Casal', 'Queen & King', 'Ortopédicos'],
        description: 'Para o crescimento saudável dos pequenos',
        link: '#'
    },
    {
        title: 'Colchões para Jovens e Adultos Ativos',
        subtitle: 'Conforto para adultos',
        image: '/colchao/camaadultofuncional.webp',
        items: ['Retráteis', 'Reclináveis', 'Sofá-Cama', 'Living'],
        description: 'Tecnologia para recuperação e conforto',
        link: '#'
    },
    {
        title: 'Colchões de Casal',
        subtitle: 'Conforto para casais',
        image: '/colchao/colchao1.webp',
        items: ['Retráteis', 'Reclináveis', 'Sofá-Cama', 'Living'],
        description: 'Para o sono e a recuperação',
        link: '#'
    },
    {
        title: 'Colchões Ortopédicos e Geriátricos',
        subtitle: 'Conforto para pessoas com necessidades específicas',
        image: '/colchao/colchao2.webp',
        items: ['Retráteis', 'Reclináveis', 'Sofá-Cama', 'Living'],
        description: 'Suporte extra para necessidades específicas..',
        link: '#'
    },

    {
        title: 'Linha Hoteleira',
        subtitle: 'Conforto para hoteis e estabelecimentos',
        image: '/colchaocasal2.webp',
        items: ['Retráteis', 'Reclináveis', 'Sofá-Cama', 'Living'],
        description: 'Durabilidade e conforto para estabelecimentos.',
        link: '#'
    },

];

const ProductCategories = () => {
    return (
        <section className="py-24 bg-brand-light">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-4">
                        Descubra Nossa Coleção Completa para o Seu Bem-Estar
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans">
                        Passe o mouse para descobrir os detalhes de cada linha.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group h-[500px] w-full md:w-[31%] perspective-1000 cursor-pointer"
                        >
                            {/* Inner Container - Handling the Flip */}
                            <div className="relative w-full h-full transition-all duration-700 transform preserve-3d group-hover:rotate-y-180">

                                {/* Front Face */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-2xl">
                                    {/* Image */}
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>

                                    {/* Front Content */}
                                    <div className="absolute bottom-0 left-0 p-10 w-full">
                                        <h3 className="text-4xl font-heading font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">{cat.title}</h3>
                                        <p className="text-white/80 font-subtitle text-lg">{cat.subtitle}</p>
                                        <div className="mt-4 flex items-center text-brand-green font-bold text-sm uppercase tracking-widest animate-pulse">
                                            <span className="mr-2">Ver Detalhes</span>
                                            <ChevronRight size={16} />
                                        </div>
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-2xl bg-brand-dark rotate-y-180 flex flex-col items-center justify-center p-10 text-center border-4 border-brand-green/20">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">{cat.title}</h3>
                                    <div className="w-16 h-1 bg-brand-green mb-6 rounded-full"></div>

                                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                        {cat.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 justify-center mb-8">
                                        {cat.items.map(item => (
                                            <span key={item} className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-semibold border border-white/5">
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={`https://wa.me/5547996974131?text=Olá, tenho interesse em ${cat.title}. Gostaria de ver o catálogo.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all w-full max-w-xs inline-block"
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

export default ProductCategories;
