import React from 'react';
import { BadgeCheck, Truck, ShieldCheck, HeartHandshake } from 'lucide-react';

const benefits = [
    {
        icon: <BadgeCheck className="w-12 h-12 text-brand-green" />,
        title: 'Qualidade Premium',
        description: 'Materiais de alta tecnologia e acabamento impecável em cada detalhe.'
    },
    {
        icon: <ShieldCheck className="w-12 h-12 text-brand-green" />,
        title: 'Garantia Estendida',
        description: 'Tranquilidade total com nossa garantia de fábrica líder de mercado.'
    },
    {
        icon: <Truck className="w-12 h-12 text-brand-green" />,
        title: 'Entrega Própria',
        description: 'Logística cuidadosa e montagem especializada gratuita na região.'
    },
    {
        icon: <HeartHandshake className="w-12 h-12 text-brand-green" />,
        title: 'Atendimento Consultivo',
        description: 'Especialistas prontos para ajudar você a escolher o colchão ideal.'
    }
];

const Benefits = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-brand-dark">
                        POR QUE ESCOLHER A ANJOS?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center group"
                        >
                            <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 font-sans leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
