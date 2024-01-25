import React from 'react'
import TopNav from '../Components/Navbar'
import ImgCarousel from '../Components/Carousel'
import { MdOutlineArrowRightAlt } from "react-icons/md";



const Home = () => {
    return (
        <>
            <TopNav />
            <ImgCarousel />

            <div className='flex flex-col gap-10 lg:flex-row mx-5 my-10 md:justify-center md:items-center sm:justify-center sm:items-center'>
                <div className='flex flex-col w-1/2 justify-center items-center '>
                    <h2 style={{fontFamily: 'satisfy', fontSize: '40px'}}>African Restaurant</h2>
                    <h1 style={{fontFamily: 'oswald', fontSize:'50px'}}>WELCOME</h1>
                    <span className='my-4'>
                        <p style={{fontFamily:'Signika', fontSize:'20px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sapiente harum sunt deleniti sequi sed maiores ipsum consequatur quisquam tempore, alias dicta quo quos facere fugit deserunt voluptates! Nesciunt, suscipit corporis fugiat quas voluptas magnam quisquam dignissimos ut doloribus cumque consequatur fugit facere cupiditate illum molestiae, dolorem modi eveniet molestias.</p>
                    </span>
                    <span className='flex flex-row justify-center items-center text-blue-500 hover:text-blue-900 transition-all'>
                        <a className='text-xl ' href="">Our Story</a>
                        <MdOutlineArrowRightAlt className='text-3xl' />
                    </span>
                </div>
                <div className='flex justify-center items-center rounded-md'>
                    <img className='w-full h-full rounded-md' src="https://cdn.pixabay.com/photo/2021/10/10/17/57/african-cuisine-6697867_640.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Home