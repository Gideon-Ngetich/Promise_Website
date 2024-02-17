import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import {PORT, mongoDBURL} from './Config.js'
import { Reservation, User } from "./Models/Schema.js"
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


app.post('/api/reserve-table', async (req,res) => {
    try{
        if(!req.body.name || !req.body.email || !req.body.date || !req.body.phone || !req.body.time || !req.body.people){
            return res.status(400).send({message: 'All fields required'});
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
        res.status(201).json({message: 'Reservaton successful'})
    } catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})



app.get('/api/reserve-table', async (req, res) => {
    try{
        const reservations = await Reservation.find()

        res.status(200).json(reservations)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

app.post('/api/User/Standard', async (req,res) => {
  try{
      if(!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.phoneNumber || !req.body.password){
          return res.status(400).send({message: 'All fields required'});
      }

      const newReservation = new User({
          firstName: req.body.firstName,
          lastName:req.body.lastName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          password: req.body.password,         
      })

      await newReservation.save();
      res.status(201).json({message: 'Reservaton successful'})
  } catch(error){
      console.log(error.message);
      res.status(500).send({message: error.message});
  }
})