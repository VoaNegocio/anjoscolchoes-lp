import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div>
                        <img src="/logo/logo.webp" alt="Anjos Colchões" className="h-16 mb-6 object-contain bg-white/10 p-2 rounded-lg" width="263" height="72" />
                        <p className="text-gray-400 mb-6 font-sans">
                            Especialistas em proporcionar o melhor sono e conforto para sua vida.
                            Tecnologia, design e saúde em um só lugar.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-green transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-green transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Contact */}
                    <div>
                        <h3 className="text-xl font-heading font-bold mb-6">Contato</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-brand-green mt-1 shrink-0" size={20} />
                                <span className="text-gray-300">
                                    Esq - 3ª Avenida, R. 2400, 1130<br />
                                    Centro, Balneário Camboriú - SC<br />
                                    CEP: 88330-096
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-brand-green shrink-0" size={20} />
                                <span className="text-gray-300">(47) 99697-4131</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-brand-green shrink-0" size={20} />
                                <span className="text-gray-300">contato@anjoscolchoesbc.com.br</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Map */}
                    <div>
                        <h3 className="text-xl font-heading font-bold mb-6">Localização</h3>
                        <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden relative">
                            {/* Embed Placeholder */}
                            <iframe
                                title="Mapa da localização da loja Anjos Colchões"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7110.109992784201!2d-48.633856!3d-26.99681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b60eacc5e173%3A0x696df3c72f67e95!2sAnjos%20Colch%C3%B5es%20e%20Sof%C3%A1s%20-%20Balne%C3%A1rio.!5e0!3m2!1spt-BR!2sus!4v1768327981995!5m2!1spt-BR!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2026 Anjos Colchões Balneário Camboriú. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
