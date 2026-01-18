const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Room } = require('./models');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/hotel_chandradeep', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => console.log(err));

const rooms = [
    {
        name: 'Standard Room',
        type: 'Standard',
        price: 1500,
        description: 'Comfortable room with all basic amenities for a pleasant stay.',
        amenities: ['WiFi', 'TV', 'AC', 'Room Service'],
        images: ['/images/standard.jpg'],
        maxGuests: 2,
        count: 10
    },
    {
        name: 'Executive Twin',
        type: 'Executive',
        price: 2500,
        description: 'Spacious room with twin beds, perfect for colleagues or friends.',
        amenities: ['WiFi', 'TV', 'AC', 'Room Service', 'Mini Fridge'],
        images: ['/images/executive.jpg'],
        maxGuests: 2,
        count: 5
    },
    {
        name: 'Luxury Suite',
        type: 'Suite',
        price: 4500,
        description: 'Premium suite with separate living area and luxury bath fittings.',
        amenities: ['WiFi', 'TV', 'AC', 'Room Service', 'Mini Fridge', 'Bathtub', 'View'],
        images: ['/images/suite.jpg'],
        maxGuests: 4,
        count: 2
    }
];

const seedDB = async () => {
    await Room.deleteMany({});
    await Room.insertMany(rooms);
    console.log('Database Seeded');
    mongoose.connection.close();
};

seedDB();
