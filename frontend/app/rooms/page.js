"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Wifi, Coffee, Star, Users, ArrowRight, Check, Maximize } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Notification from '@/components/Notification';

const initialRooms = [
    {
        id: 'standard',
        name: 'Standard Room',
        price: 1500,
        description: 'Comfortable room with all basic amenities for a pleasant stay. Ideal for budget travelers.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        amenities: ['WiFi', 'TV', 'AC', 'Room Service'],
        maxGuests: 2,
        flag: 'Best Value'
    },
    {
        id: 'executive',
        name: 'Executive Twin',
        price: 2500,
        description: 'Spacious room with twin beds, perfect for colleagues or friends. Includes work desk and mini-fridge.',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        amenities: ['WiFi', 'TV', 'AC', 'Room Service', 'Mini Fridge'],
        maxGuests: 2,
        flag: 'Popular'
    },
    {
        id: 'suite',
        name: 'Luxury Suite',
        price: 4500,
        description: 'Premium suite with separate living area and luxury bath fittings. The ultimate comfort experience.',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        amenities: ['WiFi', 'TV', 'AC', 'Room Service', 'Mini Fridge', 'Bathtub', 'View'],
        maxGuests: 4,
        flag: 'Premium'
    }
];

export default function RoomsPage() {
    const [rooms] = useState(initialRooms);

    return (
        <div className="bg-accent min-h-screen pb-20">
            <PageHeader
                title="Our Accommodations"
                subtitle="Choose from our range of comfortable and luxurious rooms designed to make your stay unforgettable."
                bgImage="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                breadcrumb="Rooms"
            />

            <div className="container mx-auto px-6 -mt-20 relative z-30">
                <div className="grid grid-cols-1 gap-12">
                    {rooms.map((room, index) => (
                        <div key={room.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 card-hover">
                            <div className="flex flex-col lg:flex-row h-full">

                                {/* Image Section with Overlay Style */}
                                <div className="lg:w-1/2 relative overflow-hidden h-80 lg:h-auto">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />

                                    {/* Flag / Badge */}
                                    {room.flag && (
                                        <div className="absolute top-6 left-6 z-20 bg-secondary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-lg">
                                            {room.flag}
                                        </div>
                                    )}

                                    {/* Price Tag Overlay */}
                                    <div className="absolute bottom-6 left-6 z-20 text-white">
                                        <div className="text-3xl font-serif font-bold">₹{room.price.toLocaleString()}</div>
                                        <div className="text-sm opacity-90">Per Night</div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-1/2 p-10 flex flex-col justify-center relative">
                                    {/* Decorative Background Icon */}
                                    <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
                                        <Star size={200} />
                                    </div>

                                    <h2 className="text-4xl font-serif font-bold mb-4 text-primary group-hover:text-secondary transition-colors">{room.name}</h2>
                                    <p className="text-muted mb-8 leading-relaxed text-lg">
                                        {room.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-10">
                                        {room.amenities.map((amenity, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                                <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                                    <Check size={12} />
                                                </div>
                                                {amenity}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6 mt-auto pt-6 border-t border-gray-100">
                                        <Link
                                            href={`/booking?room=${room.id}`}
                                            className="flex-1 bg-primary hover:bg-secondary text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-glow flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
                                        >
                                            Book Now
                                        </Link>
                                        <button className="w-14 h-14 rounded-xl border border-gray-200 flex items-center justify-center text-primary hover:border-secondary hover:text-secondary transition-all">
                                            <Maximize size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Notification />
        </div>
    );
}
