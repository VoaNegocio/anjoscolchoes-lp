import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Helper for text color depending on background */}
                {/* Logo Image */}
                <a href="/" className="block">
                    <img
                        src="/logo/logo.webp"
                        alt="Anjos Colchões"
                        className="h-16 w-auto object-contain"
                        width="234"
                        height="64"
                    />
                </a>

                <a
                    href="https://wa.me/5547996974131"
                    className="bg-brand-green hover:bg-green-600 text-white font-heading font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                    <span>ORÇAMENTO</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
