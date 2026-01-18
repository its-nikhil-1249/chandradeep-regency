"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Calendar,
  Users,
  CreditCard,
  Check,
  ShieldCheck,
  Star,
  Info,
  Moon,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

// Mock data - replace with API
const rooms = [
  { id: "standard", name: "Standard Room", price: 1500 },
  { id: "executive", name: "Executive Twin", price: 2500 },
  { id: "suite", name: "Luxury Suite", price: 4500 },
];

function BookingForm() {
  const searchParams = useSearchParams();
  const preSelectedRoom = searchParams.get("room") || "standard";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      roomType: preSelectedRoom,
      guests: 2,
      checkIn: "",
      checkOut: "",
      name: "",
      phone: "",
      email: "",
    },
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  // Watch form values
  const selectedRoom = watch("roomType");
  const checkInDate = watch("checkIn");
  const checkOutDate = watch("checkOut");

  // Calculate pricing and nights
  useEffect(() => {
    if (selectedRoom && checkInDate && checkOutDate) {
      const room = rooms.find((r) => r.id === selectedRoom);
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);

      if (start >= end) {
        setTotalPrice(0);
        setNights(0);
        return;
      }

      const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setNights(diffDays);
      setTotalPrice(diffDays * (room?.price || 0));
    }
  }, [selectedRoom, checkInDate, checkOutDate]);

  // Submit
  const onSubmit = async (data) => {
    console.log("Booking Data:", data);
    setIsSuccess(true);
  };

  // Success Screen
  if (isSuccess) {
    return (
      <div className="bg-white/60 backdrop-blur-xl p-12 rounded-[2.5rem] shadow-2xl text-center max-w-xl mx-auto border border-gray-200 relative z-30 -mt-20 animate-fadeIn">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-scaleIn">
          <Check size={48} />
        </div>

        <h2 className="text-4xl font-serif font-bold text-primary mb-4">
          Booking Confirmed!
        </h2>
        <p className="text-muted mb-10 text-lg">
          Thank you for choosing <b>Hotel Chandradeep Regency</b>. A confirmation
          email has been sent to you.
        </p>

        <button
          onClick={() => setIsSuccess(false)}
          className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary transition-all shadow-lg"
        >
          Make another booking
        </button>
      </div>
    );
  }

  // Main Form UI
  return (
    <div className="container mx-auto px-6 -mt-20 relative z-30">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* FORM SECTION */}
        <div className="lg:col-span-2 bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-gray-200 relative overflow-hidden animate-fadeIn">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>

          <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
            <span className="bg-yellow-100 p-2 rounded-lg text-yellow-700">
              <Calendar size={24} />
            </span>
            Guest Details
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* ROOM SELECT */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1">
                Select Room
              </label>
              <div className="relative">
                <select
                  {...register("roomType")}
                  className="w-full px-6 py-4 rounded-xl bg-accent border-gray-200 focus:bg-white focus:border-yellow-500 text-gray-700 font-medium transition-all cursor-pointer appearance-none"
                >
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} — ₹{room.price.toLocaleString()}/night
                    </option>
                  ))}
                </select>

                <Star
                  size={16}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-600 fill-yellow-600"
                />
              </div>
            </div>

            {/* DATES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DateField
                label="Check-In"
                name="checkIn"
                register={register}
                errors={errors}
              />

              <DateField
                label="Check-Out"
                name="checkOut"
                register={register}
                errors={errors}
              />
            </div>

            {/* GUESTS */}
            <NumberField
              label="Number of Guests"
              name="guests"
              icon={<Users className="text-gray-400" />}
              register={register}
            />

            {/* DIVIDER */}
            <div className="h-px bg-gray-200 my-8"></div>

            {/* PERSONAL INFO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField
                label="Full Name"
                name="name"
                register={register}
                placeholder="John Doe"
              />
              <TextField
                label="Phone Number"
                name="phone"
                register={register}
                placeholder="+91 98765 43210"
              />
            </div>

            <TextField
              label="Email Address"
              name="email"
              type="email"
              register={register}
              placeholder="john@example.com"
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 mt-8 group"
            >
              <CreditCard size={20} />
              <span>Confirm Booking</span>
            </button>

            {/* FOOTNOTE */}
            <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
              <ShieldCheck size={14} className="text-green-500" /> Secure SSL
              Encryption.
            </p>
          </form>
        </div>

        {/* SUMMARY SECTION */}
        <div className="lg:col-span-1">
          <div className="bg-primary text-white p-8 rounded-[2.5rem] shadow-2xl sticky top-32 animate-slideUp">
            <h3 className="text-2xl font-serif font-bold mb-6 border-b border-white/20 pb-4">
              Booking Summary
            </h3>

            <div className="space-y-6">
              <SummaryRow
                label="Room Type"
                value={rooms.find((r) => r.id === selectedRoom)?.name}
              />

              <SummaryRow label="Check-In" value={checkInDate || "-"} />
              <SummaryRow label="Check-Out" value={checkOutDate || "-"} />

              {nights > 0 && (
                <SummaryRow
                  label="Nights"
                  value={
                    <span className="flex gap-1 items-center">
                      {nights} <Moon size={16} className="opacity-70" />
                    </span>
                  }
                />
              )}

              <div className="border-t border-white/10 pt-6 mt-6">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold">Total Amount</span>
                  <span className="font-bold text-3xl text-yellow-300">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-right">
                  *Includes all taxes
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white/10 p-4 rounded-xl text-sm text-gray-100 leading-relaxed">
              <p className="mb-2 font-bold text-white">Cancellation Policy:</p>
              Free cancellation up to 24 hours before check-in. Late
              cancellations incur one night’s charge.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------
   SMALLER REUSABLE COMPONENTS
------------------------------------- */

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-300">{label}</span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}

function DateField({ label, name, register, errors }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-primary ml-1">{label}</label>
      <input
        type="date"
        {...register(name, { required: true })}
        className="w-full px-6 py-4 rounded-xl bg-accent border-gray-200 focus:bg-white focus:border-yellow-500 transition-all outline-none font-medium text-gray-700"
        min={new Date().toISOString().split("T")[0]}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs ml-1">Required</span>
      )}
    </div>
  );
}

function TextField({ label, name, register, placeholder, type = "text" }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-primary ml-1">{label}</label>
      <input
        type={type}
        {...register(name, { required: true })}
        placeholder={placeholder}
        className="w-full px-6 py-4 rounded-xl bg-accent border-gray-200 focus:bg-white focus:border-yellow-500 transition-all outline-none"
      />
    </div>
  );
}

function NumberField({ label, name, register, icon }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-primary ml-1">{label}</label>
      <div className="relative">
        <span className="absolute left-6 top-1/2 -translate-y-1/2">
          {icon}
        </span>
        <input
          type="number"
          min="1"
          max="10"
          {...register(name, { required: true })}
          className="w-full pl-14 pr-6 py-4 rounded-xl bg-accent border-gray-200 focus:bg-white focus:border-yellow-500 transition-all outline-none font-medium"
        />
      </div>
    </div>
  );
}

/* PAGE WRAPPER */
export default function BookingPage() {
  return (
    <div className="bg-accent min-h-screen pb-20">
      <PageHeader
        title="Complete Your Reservation"
        subtitle="Secure your stay at Hotel Chandradeep Regency in just a few steps."
        bgImage="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=80"
        breadcrumb="Booking"
      />

      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <BookingForm />
      </Suspense>
    </div>
  );
}
