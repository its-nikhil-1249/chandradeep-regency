"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ title, subtitle, bgImage, breadcrumb }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y, backgroundImage: `url('${bgImage}')` }}
                className="absolute inset-0 bg-cover bg-center z-0"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-primary/90 z-10" />

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 container mx-auto px-6 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Breadcrumb */}
                    {breadcrumb && (
                        <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium uppercase tracking-widest mb-6">
                            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                            <ChevronRight size={14} />
                            <span className="text-secondary">{breadcrumb}</span>
                        </div>
                    )}

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </motion.div>

            {/* Decorative Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent z-20" />
        </div>
    );
}
