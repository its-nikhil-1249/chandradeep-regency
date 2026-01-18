"use client";

import { Wifi, Coffee, Car, Shield, Wind, Tv, Utensils, Accessibility } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function AmenitiesPage() {
    const amenities = [
        { icon: <Wifi size={32} />, title: "Free High-Speed WiFi", description: "Stay connected with our complimentary high-speed internet access available throughout the hotel." },
        { icon: <Wind size={32} />, title: "Air Conditioning", description: "All our rooms and banquet halls are fully air-conditioned for your comfort." },
        { icon: <Utensils size={32} />, title: "Restaurant", description: "Enjoy delicious Veg and Non-Veg delicacies at our in-house multi-cuisine restaurant." },
        { icon: <Car size={32} />, title: "Free Parking", description: "Ample parking space available for guests with 24/7 security surveillance." },
        { icon: <Shield size={32} />, title: "24/7 Security", description: "CCTV surveillance and round-the-clock security personnel to ensure your safety." },
        { icon: <Tv size={32} />, title: "Smart TV", description: "Entertainment at your fingertips with smart TVs in every room." },
        { icon: <Coffee size={32} />, title: "Room Service", description: "Prompt room service available to cater to your needs at any time." },
        { icon: <Accessibility size={32} />, title: "Elevator Access", description: "Modern elevators providing easy access to all floors for elderly and disabled guests." },
    ];

    return (
        <div className="bg-accent min-h-screen pb-20">
            <PageHeader
                title="Hotel Amenities"
                subtitle="We have upgraded our facilities to provide you with a superior and comfortable experience."
                bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                breadcrumb="Amenities"
            />

            <div className="container mx-auto px-6 -mt-20 relative z-30">

                {/* Section intro */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        World-Class Amenities
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto mt-3 text-base leading-relaxed">
                        Designed to give you an unforgettable stay filled with comfort, luxury, and convenience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-card hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center group hover:-translate-y-2 hover:scale-[1.02]"
                        >
                            {/* Icon Container */}
                            <div className="
                                w-20 h-20 mx-auto 
                                bg-gradient-to-br from-primary/10 to-secondary/10 
                                backdrop-blur-sm 
                                rounded-2xl 
                                flex items-center justify-center text-primary 
                                mb-6 
                                group-hover:bg-primary group-hover:text-white 
                                transition-all duration-300 shadow-inner
                                group-hover:scale-110 group-hover:rotate-3
                            ">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted text-base leading-relaxed tracking-wide">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
