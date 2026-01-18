"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar, PhoneCall, Diamond } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Suites', href: '/rooms' },
        { name: 'Experiences', href: '/events' },
        { name: 'Amenities', href: '/amenities' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lux py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center gap-6">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center ${scrolled ? 'bg-primary-light/70 text-secondary' : 'bg-white/10 text-secondary'}`}>
                            <Diamond size={20} />
                        </div>
                        <div>
                            <p className={`text-xs tracking-[0.5rem] uppercase ${scrolled ? 'text-secondary/70' : 'text-white/70'}`}>Luxury Hotel</p>
                            <h1 className={`text-2xl md:text-3xl font-serif font-bold tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
                                Chandradeep <span className="text-secondary">Regency</span>
                            </h1>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`nav-link text-xs font-semibold tracking-[0.3rem] uppercase transition-colors ${scrolled ? 'text-primary/80 hover:text-primary' : 'text-white/80 hover:text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-5">
                        <div className={`text-xs uppercase tracking-[0.4rem] ${scrolled ? 'text-primary/70' : 'text-white/70'}`}>
                            <span className="block text-[10px] tracking-[0.6rem] mb-1">Reservations</span>
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <PhoneCall size={14} className="text-secondary" />
                                +91 98765 43210
                            </div>
                        </div>
                        <Link href="/booking" className="bg-gradient-gold text-primary px-8 py-3 rounded-full font-semibold text-xs tracking-[0.35rem] uppercase flex items-center gap-2 hover:shadow-glow transition-all">
                            <Calendar size={16} />
                            Reserve
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full glass-dark border-t border-white/10 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/90 font-medium nav-link uppercase tracking-[0.3rem] text-sm py-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="tel:+919876543210"
                                className="flex items-center gap-3 text-white/80 text-sm uppercase tracking-[0.4rem]"
                            >
                                <PhoneCall size={16} className="text-secondary" />
                                +91 98765 43210
                            </Link>
                            <Link
                                href="/booking"
                                className="bg-secondary text-primary px-6 py-3 rounded-full font-bold text-center mt-2 tracking-[0.4rem] uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                Reserve
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

