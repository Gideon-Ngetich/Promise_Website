import {React, useEffect, useState} from 'react'
import axios from 'axios'
import Loader from '../Components/Loader';

const Menu = () => {

  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if(loading){
       return <Loader />
    }

  const [reservations, setReservations] = useState([]);


  useEffect(() => {
    const fetchReservations = async () => {
      try{
        const response = await axios.get('http://localhost:5500/api/reserve-table');
      setReservations(response.data);
      } catch(error){
        console.log("Error fetching data",error);
      }   
   }

    fetchReservations();
  }, [])

  return (
      

    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Number of Guests</th>
            <th>Date</th>
            <th>Time</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation.name}</td>
              <td>{reservation.phone}</td>
              <td>{reservation.people}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Menu