"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  CheckCircle2,
  Play,
  MapPin
} from 'lucide-react';
import Notification from '@/components/Notification';

const highlights = [
  {
    title: "Spacious banquet halls",
    desc: "Cinematic lighting, pillar-less layouts and dedicated planners for every celebration."
  },
  {
    title: "Luxurious rooms & suites",
    desc: "Handpicked linens, mood lighting and curated amenities across every category."
  },
  {
    title: "On-site catering & décor",
    desc: "Gourmet menus, floral styling and AV support handled by our in-house specialists."
  },
  {
    title: "Concierge assistance",
    desc: "24/7 team to manage airport transfers, local tours and last-minute requests."
  }
];

const suites = [
  {
    title: 'Executive Twin',
    price: '2,500',
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    flag: 'Popular',
    size: '42 m²',
    perks: ['Rain Shower', 'Work Lounge', 'City View']
  },
  {
    title: 'Luxury Suite',
    price: '4,500',
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    flag: 'Premium',
    size: '68 m²',
    perks: ['Marble Bath', 'Private Butler', 'Sky Terrace']
  },
  {
    title: 'Standard Room',
    price: '1,500',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    flag: 'Best Value',
    size: '34 m²',
    perks: ['Queen Bed', 'Smart Controls', 'In-room Dining']
  }
];

const stats = [
  { value: "48", label: "Curated Suites" },
  { value: "1,200+", label: "Guests Hosted / yr" },
  { value: "24/7", label: "Concierge Team" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1505691723518-36a3a5d85c5c?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1567016432779-3a9b1e0d6b6e?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1551882547-ff9a0f50ca73?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb210cc?auto=format&fit=crop&w=1000&q=80"
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-cream text-ink">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501117716987-c8e1ecb210cc?auto=format&fit=crop&w=2000&q=80"
            alt="Grand lobby with chandeliers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b0c05]/90 via-[#2e1509]/80 to-[#4a210d]/60" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')] opacity-20" />
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-6 pt-32 pb-24 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <div className="flex flex-wrap justify-center items-center gap-3 text-secondary mb-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-secondary" fill="currentColor" strokeWidth={1.5} />
                ))}
                <span className="text-xs uppercase tracking-[0.4rem] text-white/80 whitespace-nowrap">
                  Dhule’s Premier Luxury Hotel & Event Venue
                </span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-6"
              >
                Hotel Chandradeep
                <span className="block text-secondary">Regency</span>
              </motion.h1>
              <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.4rem] text-secondary mb-6">
                <MapPin size={18} className="text-secondary" />
                Dhule, Maharashtra
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-3xl"
              >
                Experience unparalleled luxury and hospitality. Perfect for celebrations, corporate events,
                and memorable stays in the heart of Dhule.
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <Link
                  href="/booking"
                  className="btn-gold flex items-center gap-3"
                >
                  Book Your Stay
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/events"
                  className="btn-gold flex items-center gap-3"
                >
                  Plan an Event
                  <Play size={16} />
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-6">
                    <p className="text-3xl font-serif font-bold text-secondary">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.35rem] text-white/70 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Highlights */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501117716987-c8e1ecb210cc?auto=format&fit=crop&w=1600&q=60')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.45rem] text-secondary mb-4">Luxury stays & events</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight mb-6">
              Crafted for weddings, corporate galas and destination escapes.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Chandradeep Regency combines graceful interiors with intuitive service. From pillar-less banquet halls
              to mood-lit suites, every space is designed to feel refined yet warm.
            </p>
            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="rounded-[36px] overflow-hidden shadow-card border border-cream">
              <img
                src="https://images.unsplash.com/photo-1501117716987-c8e1ecb210cc?auto=format&fit=crop&w=1400&q=80"
                alt="Lobby"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition" />
            </div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-3xl border border-cream px-8 py-6 max-w-sm shadow-card">
              <p className="text-xs uppercase tracking-[0.35rem] text-muted">Signature Venue</p>
              <p className="text-2xl font-serif font-bold text-primary mt-2">Regency Ballroom</p>
              <p className="text-sm text-muted mt-1">800-guest capacity · bespoke décor · acoustic-ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/mirrored-squares.png')] opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.45rem] text-secondary mb-3">Rooms & Suites</p>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Residences with curated comforts.</h2>
            <p className="text-muted">
              Choose from executive rooms to sky suites layered with plush linens, artisanal lighting and intuitive tech.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suites.map((suite) => (
              <div key={suite.title} className="bg-white rounded-[28px] shadow-card border border-cream overflow-hidden flex flex-col">
                <div className="relative h-52">
                  <img src={suite.img} alt={suite.title} className="w-full h-full object-cover" />
                  <span className="absolute top-5 left-5 bg-white text-primary px-4 py-1 rounded-full text-[11px] tracking-[0.3rem] uppercase">
                    {suite.flag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">{suite.title}</h3>
                  <p className="text-muted text-sm mb-4">Sized at {suite.size} with amenities curated for modern stays.</p>
                <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3rem] text-muted">Starts from</p>
                      <p className="text-2xl font-bold text-primary">₹{suite.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3rem] text-muted">
                    {suite.perks.map((perk) => (
                      <span key={perk} className="pill border border-cream bg-cream/60">{perk}</span>
                    ))}
                  </div>
                  <Link
                    href={`/booking?room=${suite.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn-gold w-full justify-center mt-8"
                  >
                    Book Suite
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/rooms" className="btn-gold">
              See all rooms
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.45rem] text-secondary mb-3">Gallery</p>
            <h2 className="text-4xl font-serif font-bold text-primary">Scenes from Chandradeep Regency.</h2>
            <p className="text-muted mt-4">
              Lobby vignettes, suites, banquet settings and curated décor captured across our four wings.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-3xl overflow-hidden shadow-soft"
              >
                <img src={image} alt="Gallery" className="w-full h-44 md:h-56 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.45rem] text-secondary mb-3">Contact & Location</p>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Host your next stay or celebration.</h2>
            <p className="text-muted mb-6">
              Call or write to our concierge desk for bookings, banquets and curated experiences at Chandradeep Regency.
            </p>
            <ul className="space-y-4 text-primary font-semibold">
              <li>Phone: <span className="text-muted font-normal">+91 98765 43210</span></li>
              <li>Email: <span className="text-muted font-normal">info@chandradeepregency.com</span></li>
              <li>Address: <span className="text-muted font-normal">Near Datta Mandir, Deopur, Dhule, Maharashtra</span></li>
            </ul>
          </div>
          <form className="bg-white rounded-[32px] shadow-card border border-cream p-8 space-y-5">
            <div>
              <label className="text-sm text-muted uppercase tracking-[0.3rem]">Name</label>
              <input className="mt-2 w-full border border-cream rounded-2xl px-4 py-3 focus:outline-none focus:border-secondary bg-cream/40" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-muted uppercase tracking-[0.3rem]">Email</label>
              <input className="mt-2 w-full border border-cream rounded-2xl px-4 py-3 focus:outline-none focus:border-secondary bg-cream/40" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-muted uppercase tracking-[0.3rem]">Message</label>
              <textarea className="mt-2 w-full border border-cream rounded-2xl px-4 py-3 focus:outline-none focus:border-secondary bg-cream/40" rows={4} placeholder="Tell us about your stay or event." />
            </div>
            <button type="button" className="w-full bg-primary text-white py-4 rounded-2xl font-semibold text-xs tracking-[0.4rem] uppercase hover:bg-primary-light transition">
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-secondary uppercase tracking-[0.5rem] text-xs mb-4">Dhule Coordinates</p>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Heritage core, minutes from everything.</h2>
            <p className="text-muted mb-8">
              Nestled near Datta Mandir, our address keeps you close to the textile markets, corporate parks and wedding venues.
              Airport transfers and regional escapes are arranged by our concierge desk.
            </p>
            <div className="space-y-4">
              {[
                { label: "Address", value: "Near Datta Mandir, Deopur, Dhule 424002" },
                { label: "Concierge", value: "+91 98765 43210" },
                { label: "Email", value: "hello@chandradeepregency.com" },
              ].map((detail) => (
                <div key={detail.label} className="flex gap-4">
                  <span className="text-xs uppercase tracking-[0.4rem] text-muted w-32">{detail.label}</span>
                  <p className="text-primary font-semibold">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] overflow-hidden shadow-card border border-cream">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.9696884699!2d74.774!3d20.904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5f2c4f4f4f4%3A0x4f4f4f4f4f4f4f4f!2sHotel%20Chandradeep%20Regency!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary opacity-90" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Design your arrival with our concierge.</h2>
          <p className="text-white/75 max-w-3xl mx-auto mb-10">Share your celebration, boardroom agenda or romantic escape. We’ll craft a personalized stay blueprint within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="bg-gradient-gold text-primary px-10 py-4 rounded-full font-semibold text-xs tracking-[0.35rem] uppercase">Plan Stay</Link>
            <Link href="/contact" className="border border-white/30 text-white px-10 py-4 rounded-full font-semibold text-xs tracking-[0.35rem] uppercase">Contact Concierge</Link>
          </div>
        </div>
      </section>

      <Notification />
    </div>
  );
}
