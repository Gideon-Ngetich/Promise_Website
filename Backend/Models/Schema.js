import mongoose from "mongoose";

const reservationSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        people: {
            type: Number,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        }
    },
    {
        timestamp: true,
    }
)



export const Reservation = mongoose.model('Reservatioin', reservationSchema);
