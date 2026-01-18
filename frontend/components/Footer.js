import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowUpRight, ArrowRight } from 'lucide-react';

const socials = [
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
];

const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Suites', href: '/rooms' },
    { label: 'Banquets', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
];

const contact = [
    { Icon: MapPin, text: "Near Datta Mandir, Deopur, Dhule 424002" },
    { Icon: Phone, text: "+91 98765 43210" },
    { Icon: Mail, text: "hello@chandradeepregency.com" },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-24 pb-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#F5E3C3,transparent_60%)] pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.5rem] text-secondary/70">Chandradeep Regency</p>
                        <h3 className="text-4xl font-serif font-bold leading-tight">Hospitality crafted with poetry.</h3>
                        <p className="text-white/70 leading-relaxed">
                            Luxury suites, avant-garde dining and bespoke celebrations in the heart of Dhule.
                        </p>
                        <div className="flex gap-3">
                            {socials.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-primary hover:bg-secondary transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.4rem] text-secondary mb-6">Explore</h4>
                        <div className="space-y-4">
                            {quickLinks.map(({ label, href }) => (
                                <Link key={label} href={href} className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors group text-sm uppercase tracking-[0.3rem]">
                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.4rem] text-secondary mb-6">Concierge</h4>
                        <div className="space-y-5">
                            {contact.map(({ Icon, text }) => (
                                <div key={text} className="flex items-start gap-4 text-white/70">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <Icon size={18} />
                                    </div>
                                    <p className="text-sm leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-white/5 rounded-[32px] p-8 border border-white/10">
                        <p className="text-xs uppercase tracking-[0.4rem] text-secondary mb-4">Private List</p>
                        <h4 className="text-2xl font-serif font-semibold mb-4">Receive curated offers & launch invitations.</h4>
                        <p className="text-white/70 text-sm mb-6">Two emails a month. Only signature experiences and seasonal menus.</p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-transparent border border-white/20 rounded-full px-5 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-secondary"
                            />
                            <button type="submit" className="w-full bg-gradient-gold text-primary rounded-full py-3 text-xs uppercase tracking-[0.4rem] font-semibold flex items-center justify-center gap-2">
                                Join List
                                <ArrowUpRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
                    <p>&copy; {new Date().getFullYear()} Chandradeep Regency. All rights reserved.</p>
                    <div className="flex gap-6 text-xs uppercase tracking-[0.4rem]">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
