"use client";
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export default function EventsPage() {
    return (
        <div className="bg-accent min-h-screen pb-20">
            <PageHeader
                title="Weddings & Events"
                subtitle="Create timeless memories in our elegant banquet halls and lush green lawns. The perfect venue for your special day."
                bgImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                breadcrumb="Events"
            />

            <div className="container mx-auto px-6 -mt-20 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Banquet Hall */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 card-hover"
                    >
                        <div className="relative h-80 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1519225448526-722609330238?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Banquet Hall"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-6 left-6 z-20">
                                <h3 className="text-3xl font-serif font-bold text-white mb-1">Grand Banquet Hall</h3>
                                <p className="text-white/80 font-medium tracking-wide uppercase text-sm">Indoor Luxury • 500 Guests</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-muted mb-6 leading-relaxed text-lg">
                                Our fully air-conditioned banquet hall is designed for elegance and comfort.
                                With modern lighting, premium sound systems, and exquisite decor options.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Capacity: 200 - 500 Guests',
                                    'Centralized Air Conditioning',
                                    'Attached Dining Area',
                                    'Premium Sound System'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0"><Check size={14} /></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-4 border border-primary/20 text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all uppercase tracking-wider text-sm">
                                View Details
                            </button>
                        </div>
                    </motion.div>

                    {/* Lawn */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 card-hover"
                    >
                        <div className="relative h-80 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Event Lawn"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-6 left-6 z-20">
                                <h3 className="text-3xl font-serif font-bold text-white mb-1">Open Air Lawn</h3>
                                <p className="text-white/80 font-medium tracking-wide uppercase text-sm">Outdoor Grandeur • 1500 Guests</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-muted mb-6 leading-relaxed text-lg">
                                Celebrate in our spacious lush green lawn.
                                Perfect for large gatherings, outdoor parties, and grand wedding ceremonies where nature meets luxury.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Capacity: 500 - 1500 Guests',
                                    'Customizable Stage Setup',
                                    'Separate Buffet Area',
                                    'Decorative Lighting'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0"><Check size={14} /></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-4 border border-primary/20 text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all uppercase tracking-wider text-sm">
                                View Details
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Inquiry Section */}
                <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>

                    <div className="text-center mb-12 relative z-10">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Get in Touch</span>
                        <h2 className="text-4xl font-serif font-bold mt-3 mb-4 text-primary">Plan Your Event With Us</h2>
                        <p className="text-muted max-w-xl mx-auto">Fill out the form below and our event manager will contact you shortly.</p>
                    </div>

                    <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        {['Your Name', 'Phone Number', 'Email Address'].map((label, i) => (
                            <div key={i} className="space-y-2">
                                <label className="text-sm font-bold text-primary ml-1">{label}</label>
                                <input type={label.includes('Email') ? 'email' : 'text'} className="w-full px-6 py-4 rounded-xl bg-accent border-transparent focus:bg-white focus:border-secondary focus:ring-0 transition-all outline-none" placeholder={label} />
                            </div>
                        ))}

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary ml-1">Event Type</label>
                            <div className="relative">
                                <select className="w-full px-6 py-4 rounded-xl bg-accent border-transparent focus:bg-white focus:border-secondary focus:ring-0 transition-all outline-none appearance-none cursor-pointer">
                                    <option>Wedding</option>
                                    <option>Reception</option>
                                    <option>Birthday Party</option>
                                    <option>Corporate Event</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    <ArrowRight size={16} className="rotate-90" />
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 space-y-2">
                            <label className="text-sm font-bold text-primary ml-1">Message / Requirements</label>
                            <textarea rows="4" className="w-full px-6 py-4 rounded-xl bg-accent border-transparent focus:bg-white focus:border-secondary focus:ring-0 transition-all outline-none resize-none" placeholder="Tell us about your event requirements..."></textarea>
                        </div>

                        <div className="md:col-span-2 text-center mt-6">
                            <button type="submit" className="bg-primary hover:bg-secondary text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-1">
                                Send Inquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
