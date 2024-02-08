import mongoose from "mongoose";

//Reservation Schema
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

//Food Category Schema
const foodCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    foods: [{type: mongoose.Schema.Types.ObjectId, ref: 'Food'}]
});

export const Category = mongoose.model('Food Category', foodCategorySchema);

//Food Schema
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category: {type: mongoose.Schema.Types.ObjectId, ref:'Category'}
})

export const Food = mongoose.model('Food', foodSchema);