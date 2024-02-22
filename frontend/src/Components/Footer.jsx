import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row xl:flex-row py-10 px-10 items-start justify-between border-t-2 mt-10 w-screen overflow-hidden'>
                <div className='w-96 h-full flex flex-col justify-center items-start  '>
                    <span className='flex justify-center items-center pl-10'>
                        <h3 className='text-3xl font-bold text-white text-center'>Get in touch</h3>
                    </span>
                    <div className='flex h-full flex-col justify-start items-start'>


                        <p className='flex gap-3 justify-center items-center m-3 text-lg'><CiLocationOn className='text-3xl' /> 1234 Street Name, City Name, United States</p>
                        <p className='flex gap-3 justify-center items-center m-3 text-lg'><FaPhoneAlt className='text-2xl' /> +1234567890</p>
                        <p className='flex gap-3 justify-center items-center m-3 text-lg'><CiMail className='text-2xl' />savor@restaurant.com</p>
                    </div>
                </div>
                <div className='w-96 h-full flex flex-col justify-center items-center '>

                    <span className='flex justify-center items-center'>
                        <h3 className='text-3xl font-bold text-white'>Opening hours</h3>
                    </span>
                    <div className='flex flex-col justify-start items-center '>
                        <p className='flex gap-3 justify-start items-center m-3 text-lg'>Monday - Friday: 8am - 8pm</p>
                        <p className='flex gap-3 justify-start items-center m-3 text-lg'>Saturday: 9am - 7pm</p>
                        <p className='flex gap-3 justify-start items-center m-3 text-lg'>Sunday: 9am - 8pm</p>
                    </div>

                </div>

                <div className='w-96 flex flex-col justify-center items-center h-full'>
                    <span className='flex justify-center items-center'>
                        <h3 className='text-3xl font-bold text-white'>Follow</h3>
                    </span>
                    <div className='flex flex-col justify-start items-start'>
                        <p className='flex gap-3 justify-start items-center m-3 text-lg'><FaFacebook /> Facebook</p>
                        <p className='flex gap-3 justify-start items-center m-3 text-lg'><FaTwitter />Twitter</p>
                        <p className='flex gap-3 justify-start items-center m-3 text-lg'><FaInstagram />Instagram</p>
                    </div>

                </div>
                <div className='w-96 flex flex-col justify-center items-center'>
                    <span>
                        <h3 className='text-3xl font-bold text-white'>Links</h3>
                    </span>
                    <div className='flex flex-col justify-start items-center h-full'>
                        <p className='flex gap-3 justify-start items-center m-2 text-lg'>Home</p>
                        <p className='flex gap-3 justify-start items-center m-2 text-lg'>About</p>
                        <p className='flex gap-3 justify-start items-center m-2 text-lg'>Services</p>
                        <p className='flex gap-3 justify-start items-center m-2 text-lg'>Projects</p>
                        <p className='flex gap-3 justify-start items-center m-2 text-lg'>Contact</p>
                    </div>

                </div>
            </div>
            <div>
                <div className='flex justify-center items-center bg-black p-5'>
                    <p className='text-white text-lg'>© 2021 Savor Restaurant. All rights reserved.</p>
                </div>
            </div>

        </>
    )
}

export default Footer