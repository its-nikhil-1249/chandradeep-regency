"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import Link from 'next/link';

export default function Notification() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000); // Show after 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 50 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 50, x: 50 }}
                    className="fixed bottom-6 right-6 z-50 max-w-sm w-full"
                >
                    <div className="bg-white/90 backdrop-blur-md border border-secondary/20 p-4 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-primary transition-colors"
                        >
                            <X size={16} />
                        </button>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                                <Gift size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary mb-1">Special Offer!</h4>
                                <p className="text-sm text-muted mb-3">Get 15% off on direct bookings. Use code <span className="font-bold text-secondary">WELCOME15</span></p>
                                <Link href="/booking" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors border-b border-primary hover:border-secondary pb-0.5">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
