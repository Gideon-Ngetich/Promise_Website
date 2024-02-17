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

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export const User = mongoose.model('Users/Standard', userSchema);

