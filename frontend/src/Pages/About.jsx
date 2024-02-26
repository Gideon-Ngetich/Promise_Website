import React from 'react'
import Loader from '../Components/Loader'
import image from '../assets/image-1.jpg'

const About = () => {
  return (
    <>
      <Loader />
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio amet voluptate repudiandae, eligendi hic tempore aperiam facere accusamus quam?</p>
        <img src={image} alt="" className='w-64 h-64'/>
      </div>
    </>
    
  )
}

export default About