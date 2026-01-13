/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0a192f',     // Deep Navy Blue
                    light: '#F4F4F4',    // Off-white background
                    green: '#25D366',    // WhatsApp original
                    gray: '#1A1A1A',     // Dark text
                    bronze: '#341C08',   // Accents
                }
            },
            fontFamily: {
                sans: ['Lato', 'sans-serif'],          // Body
                heading: ['Poppins', 'sans-serif'],    // H1, H2
                subtitle: ['Montserrat', 'sans-serif'], // Subtitles
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to right, rgba(10, 25, 47, 0.95), rgba(10, 25, 47, 0.7))',
            }
        },
    },
    plugins: [],
}
