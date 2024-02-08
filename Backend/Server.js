import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import { PORT, mongoDBURL } from './Config.js'
import { Reservation, Category, Food } from "./Models/Schema.js"
import bodyParser from "body-parser"

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`app running on ${PORT}`);
})

app.get('/', (request, response) => {
    // console.log(request);
    return response.status(234).send("Welcome to my app");
})

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
    })
    .catch((error) => {
        console.log(error);
    })


app.post('/api/reserve-table', async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.date || !req.body.phone || !req.body.time || !req.body.people) {
            return res.status(400).send({ message: 'All fields required' });
        }

        const newReservation = new Reservation({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            people: req.body.people,
            time: req.body.time,
            date: req.body.date

        })

        await newReservation.save();
        res.status(201).json({ message: 'Reservaton successful' })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})



app.get('/api/reserve-table', async (req, res) => {
    try {
        const reservations = await Reservation.find()

        res.status(200).json(reservations)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

//Create category and save it to the db
app.post('/api/food-category', async (req, res) => {
    try {
        const category = new Category({ name: req.body.name });
        await category.save();
        res.status(201).json({ message: 'Category creaated successfully', category });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

//Add a food to a category
app.post('/api/food', async (req, res) => {
    try {
        const category = await Category.findById(req.body.categoryId);
        if (!category) return res.status(404).json({ message: 'Category not found' });

        const food = new Food({
            name: req.body.name,
            price: req.body.price,
            category: category._id
        })
        await food.save();

        category.foods.push(food);
        await category.save();

        res.status(201).json({ message: 'Food added successfully' });
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

// Get all categories
app.get('/api/food-category', async (req, res) => {
    try {
        const categories = await Category.find().populate('foods');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all foods
app.get('/api/food', async (req, res) => {
    try {
        const foods = await Food.find().populate('category');
        res.json(foods);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});