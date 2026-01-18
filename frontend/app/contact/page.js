"use client";
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export default function ContactPage() {
    return (
        <div className="bg-accent min-h-screen pb-20">
            <PageHeader
                title="Contact Us"
                subtitle="We'd love to hear from you. Reach out to us for bookings, events, or any queries."
                bgImage="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                breadcrumb="Contact"
            />

            <div className="container mx-auto px-6 -mt-20 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-10 pt-10">
                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group bg-white p-6 rounded-2xl shadow-soft hover:shadow-card transition-all">
                                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-inner">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary text-xl mb-1">Visit Us</h3>
                                    <p className="text-muted">Near Datta Mandir, Deopur,<br />Dhule, Maharashtra 424002</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group bg-white p-6 rounded-2xl shadow-soft hover:shadow-card transition-all">
                                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-inner">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary text-xl mb-1">Call Us</h3>
                                    <p className="text-muted">+91 98765 43210</p>
                                    <p className="text-muted">+91 12345 67890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group bg-white p-6 rounded-2xl shadow-soft hover:shadow-card transition-all">
                                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-inner">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary text-xl mb-1">Email Us</h3>
                                    <p className="text-muted">info@hotelchandradeep.com</p>
                                    <p className="text-muted">bookings@hotelchandradeep.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-2 rounded-3xl shadow-soft">
                            <div className="bg-gray-100 rounded-2xl h-80 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.9696884699!2d74.774!3d20.904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5f2c4f4f4f4%3A0x4f4f4f4f4f4f4f4f!2sHotel%20Chandradeep%20Regency!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-8 relative z-10">Send us a Message</h2>
                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary ml-1">Name</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-xl bg-accent border-transparent focus:bg-white focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary ml-1">Phone</label>
                                    <input type="tel" className="w-full px-6 py-4 rounded-xl bg-accent border-transparent focus:bg-white focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="Your Phone" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary ml-1">Email</label>
                                <input type="email" className="w-full px-6 py-4 rounded-xl bg-accent border-transparent focus:bg-white focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="Your Email" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary ml-1">Message</label>
                                <textarea rows="5" className="w-full px-6 py-4 rounded-xl bg-accent border-transparent focus:bg-white focus:border-secondary focus:ring-0 transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary hover:bg-secondary text-white px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-glow flex items-center justify-center gap-3 group">
                                Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
