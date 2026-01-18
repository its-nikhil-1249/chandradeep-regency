const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }, // Standard, Twin, Suite, etc.
    price: { type: Number, required: true },
    description: { type: String },
    amenities: [String],
    images: [String],
    maxGuests: { type: Number, required: true },
    count: { type: Number, default: 1 } // Number of rooms of this type
});

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional if guest checkout
    guestName: { type: String, required: true },
    guestEmail: { type: String, required: true },
    guestPhone: { type: String, required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    guests: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'Pending', enum: ['Pending', 'Confirmed', 'Cancelled'] },
    paymentId: { type: String }
}, { timestamps: true });

const InquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    type: { type: String, enum: ['General', 'Event', 'Wedding'], default: 'General' },
    message: { type: String, required: true },
    date: { type: Date } // For event date
}, { timestamps: true });

module.exports = {
    Room: mongoose.model('Room', RoomSchema),
    Booking: mongoose.model('Booking', BookingSchema),
    Inquiry: mongoose.model('Inquiry', InquirySchema)
};
