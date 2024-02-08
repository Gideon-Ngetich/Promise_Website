import { React, useEffect, useState } from 'react'
import TopNav from '../Components/Navbar'
import bgImage from '../assets/image-1.jpg'
import Footer from '../Components/Footer.jsx'
import { FaCartPlus } from "react-icons/fa";
import axios from 'axios'


const Menu = () => {

  const [categories, setCategories] = useState([]);
  const [lunch, setLunch] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5500/api/food?food-category=Lunch')
      .then(
        response => {
          setFood(response.data)
        }
      )
      .catch(error => {
        console.log(err)
      })
  })

  useEffect(() => {
    axios.get('http://localhost:5500/api/food-category')
      .then(response => {
        const filteredCategories = response.data.filter(category => category.name !== 'Lunch');
        const lunchCategory = response.data.filter(category => category.name === 'Lunch');
        setCategories(filteredCategories);
        setLunch(lunchCategory)
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  // useEffect(() => {
  //   axios.get('http://localhost:5500/api/food-category')
  //     .then(response => {
  //       const filteredCategories = response.data.filter(category => category.name === 'Lunch');
  //       setLunch(filteredCategories);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching categories:', error);
  //     });
  // }, []);
  const langingBackground = bgImage;
  return (
    <>
      <TopNav />
      <div className='bg-cover h-96 w-screen  flex justify-center items-center' style={{ backgroundImage: `url(${langingBackground})` }}>
        <p className='text-7xl font-extrabold text-white'>Savor Menu</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 justify-between p-2 lg:p-7 gap-10'>
        {categories.map(category => (
          <div key={category._id}>
            <h2 className='text-4xl text-yellow-500 font-bold'>{category.name}</h2>
            {category.foods.map(food => (
              <div key={food._id} className='flex justify-between items-center gap-1'>
                <span className='text-xl text-white'>{food.name}</span>
                <span>.......................................</span>
                <span className='text-white text-lg lg:text-xl'>KSH {food.price}</span>
                <button className='w-9 h-9 flex justify-center items-center text-center'>
                  <FaCartPlus className='text-2xl text-center text-yellow-500 hover:text-yellow-600 ease-in-out duration-500' />
                </button>
              </div>
            ))}
          </div>
        ))}



      </div>

      <div className='bg-cover h-96 w-full flex justify-center items-center' style={{ backgroundImage: `url(${langingBackground})` }}>
        <p className='text-7xl font-extrabold text-white'>Lunch</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-between p-1 my-5 lg:p-7 xl:p-5 gap-10'>
        {lunch.map(category => (
          <span key={category._id}>
            <span className='grid grid-cols-1 lg:grid-cols-2  gap-5'>
              <span className='flex items-center justify-center'>
                <img className='w-36 h-36 rounded-md' src={langingBackground} alt="" />
              </span>
              {category.foods.map(food => (
                <span className='w-full'>
                  <span className='flex justify-between items-center gap-4 w-full my-4 lg:w-3/4 xl:w-3/4 p-1 lg:p-0 xl:p-0'>
                    <span className='text-white text-lg'>{food.name}</span>
                    <span>...........................................</span>
                    <span className='text-white text-lg'>KSH {food.price}</span>
                  </span>
                  <span className='flex justify-center items-center'>
                    <button className='w-28 h-10 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 ease-in duration-300'>Add To Cart</button>
                  </span>
                </span>
              ))}

            </span>

          </span>
        ))}
      </div>

      <div className='bg-cover h-96 w-full flex justify-center items-center' style={{ backgroundImage: `url(${langingBackground})` }}>
        <p className='text-7xl font-extrabold text-white'>Dinner</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-between p-1 my-5 lg:p-7 xl:p-7 gap-10'>
        <span>
          <span className='flex flex-col justify-center items-center lg:flex-row xl:flex-row gap-5'>
            <span className='flex items-center justify-center'>
              <img className='w-36 h-36 rounded-md' src={langingBackground} alt="" />
            </span>
            <span className='flex justify-between items-center gap-5 w-full m-4 lg:w-3/4 xl:w-3/4 p-3 lg:p-0 xl:p-0'>
              <span className='text-white text-xl'>Rice Beef</span>
              <span>...........................................</span>
              <span className='text-white text-xl'>KSH 130</span>
            </span>
          </span>

          <span className='flex justify-center items-center'>
            <button className='w-28 h-10 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 ease-in duration-300'>Add To Cart</button>
          </span>
        </span>
      </div>


      <div>
        <Footer />
      </div>
    </>

  )
}

export default Menu