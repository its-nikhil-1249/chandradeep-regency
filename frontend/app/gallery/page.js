"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/PageHeader';

const images = [
    { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Exterior' },
    { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Rooms' },
    { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Rooms' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Restaurant' },
    { src: 'https://images.unsplash.com/photo-1519225448526-722609330238?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Exterior' },
    { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Rooms' },
];

export default function GalleryPage() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Exterior', 'Rooms', 'Events', 'Restaurant', 'Interior'];

    const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

    return (
        <div className="bg-accent min-h-screen pb-20">
            <PageHeader
                title="Photo Gallery"
                subtitle="Take a visual tour of Hotel Chandradeep Regency and experience the luxury that awaits you."
                bgImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                breadcrumb="Gallery"
            />

            <div className="container mx-auto px-6 -mt-10 relative z-30">
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 bg-white p-4 rounded-full shadow-lg max-w-4xl mx-auto">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${filter === cat ? 'bg-secondary text-white shadow-glow' : 'text-gray-500 hover:bg-gray-50 hover:text-primary'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    <AnimatePresence>
                        {filteredImages.map((img, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                key={index}
                                className="break-inside-avoid rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all group relative cursor-pointer card-hover"
                            >
                                <img
                                    src={img.src}
                                    alt={img.category}
                                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-primary font-bold text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                                        View
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
