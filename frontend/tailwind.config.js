/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#05070F', // Obsidian
                    light: '#111735',
                    lighter: '#1F2547',
                },
                secondary: {
                    DEFAULT: '#E0B973', // Brushed Gold
                    light: '#F5E3C3',
                    dark: '#B3833F',
                },
                accent: '#F7F3ED',
                muted: '#8B8F98',
                cream: '#F0E6D9',
                ink: '#1B1F2B',
            },
            fontFamily: {
                sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
                serif: ['var(--font-poppins)', 'Poppins', 'serif'],
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'glow': '0 0 20px rgba(212, 175, 55, 0.15)',
                'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'shine': 'shine 3s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shine: {
                    '0%': { backgroundPosition: '200% center' },
                    '100%': { backgroundPosition: '-200% center' },
                }
            }
        },
    },
    plugins: [],
}
