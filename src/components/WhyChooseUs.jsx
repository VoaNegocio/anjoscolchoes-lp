import React from 'react';
import { Trophy, Medal, Home, Lightbulb, ChevronRight } from 'lucide-react';
import sofaLiving from '../assets/sofa.webp'; // Need a good image here, using sofa placeholder for now but will swap to a better one if available

const features = [
    {
        icon: <Trophy className="w-8 h-8 text-white" />,
        title: 'Experiência Comprovada',
        description: 'Anos no mercado de móveis e colchões.'
    },
    {
        icon: <Medal className="w-8 h-8 text-white" />,
        title: 'Marcas Renomadas',
        description: 'Trabalhamos com os melhores fabricantes.'
    },
    {
        icon: <Home className="w-8 h-8 text-white" />,
        title: 'Opções para Cada Espaço',
        description: 'Do quarto compacto à sala espaçosa.'
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-white" />,
        title: 'Tecnologias Inovadoras',
        description: 'Nos colchões e no design dos sofás.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
                        Na Anjos Colchões e Sofás Você Encontra:
                    </h2>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
                    <p className="text-gray-500 font-sans">
                        Invista no seu conforto completo. Seu corpo e sua casa merecem!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Column - Image with Background Shape */}
                    <div className="relative">
                        {/* Dark Blue Background Shape */}
                        <div className="absolute top-4 -right-4 w-full h-full bg-brand-dark rounded-3xl -z-10 transform translate-x-8 translate-y-8 hidden md:block"></div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/sofa/sofa-living.webp"
                                alt="Sala de Estar Confortável"
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>

                    {/* Right Column - Features List */}
                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 font-sans">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="pt-8">
                            <a
                                href="https://wa.me/5547996974131?text=Olá, gostaria de saber mais sobre a Anjos Colchões."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all inline-flex items-center gap-2 uppercase tracking-wide text-sm"
                            >
                                <span className="mr-2">Inicie seu Atendimento via WhatsApp</span>
                                <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6 filter brightness-0 invert" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
