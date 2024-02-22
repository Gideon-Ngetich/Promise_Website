import { React, useState } from 'react'
import TopNav from '../Components/Navbar'
import ImgCarousel from '../Components/Carousel'
import CustomerReview from '../Components/CustomerReview'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import axios from 'axios';
import video from '../assets/video.mp4'
import Footer from '../Components/Footer'
import image1 from '../assets/image-1.jpg'
import ReservationTable from '../Components/ReservationTable';


const Home = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [people, setPeople] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleBook = async () => {
        try {
            await axios.post('http://localhost:5500/api/reserve-table', { name, email, phone, people, date, time })
            console.log('Reservation successful');
        } catch (err) {
            console.log(err);
        }
    }

    const bgImageURL = 'https://image-tc.galaxy.tf/wijpeg-9vualzt3dbue0hi00ba4q49ub/chatwalhotelnyc-c-004-build-crop.jpg?width=1920';

    const gridImg1 = 'https://rakskitchen.net/wp-content/uploads/2013/11/10867983783_854a7fec8f_o.jpg'
    const gridImg2 = 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const gridImg3 = 'https://cdn.shopify.com/s/files/1/0108/5757/8558/files/Fizzy_Drinks_impact_on_skin_1024x1024.png?v=1614167247'
    const gridImg4 = 'https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.jpg?s=612x612&w=0&k=20&c=XLsAk571Z2kEe_x6TnXWSzsG95-2agp-TcYswQrKHuo='
    const gridImg5 = 'https://i.pinimg.com/736x/f0/4f/51/f04f51de57631fd10a51eb7ceaa18cb9.jpg'
    const gridImg6 = 'https://t3.ftcdn.net/jpg/01/76/33/14/360_F_176331484_nLHY9EoW0ETwPZaS9OBXPGbCJhT70GZe.jpg'

    const buttonLabels = ['Dinner', 'Starter', 'Lunch', 'Drinks', 'Dessert', 'Happy Hour'];

    return (
        <>
            <TopNav />
            <ImgCarousel />

            <div className='flex flex-col gap-10 justify-center items-center lg:flex-row mx-5 my-10'>
                <div className='flex flex-col w-full lg:w-1/2 justify-center items-center md:items-center'>
                    <p className='w-full text-center text-3xl lg:text-5xl text-yellow-500' style={{ fontFamily: 'satisfy' }}>African Restaurant</p>
                    <h1 className='text-white' style={{ fontFamily: 'oswald', fontSize: '50px' }}>WELCOME</h1>
                    <span className='flex flex-col justify-center items-center my-4 lg:w-3/4 xl:w-1/2 p-5'>
                        <p style={{ fontFamily: 'Signika', fontSize: '20px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sapiente harum sunt deleniti sequi sed maiores ipsum consequatur quisquam tempore, alias dicta quo quos facere fugit deserunt voluptates! Nesciunt, suscipit corporis fugiat quas voluptas magnam quisquam dignissimos ut doloribus cumque consequatur fugit facere cupiditate illum molestiae, dolorem modi eveniet molestias.</p>
                        <span className='flex flex-row justify-center p-5  items-center text-blue-500 hover:text-blue-900 transition-all'>
                            <a className='text-xl' href="">Our Story</a>
                            <MdOutlineArrowRightAlt className='text-3xl' />
                        </span>
                    </span>
                </div>
                <div className='flex justify-center items-center rounded-md'>
                    <img className='w-full h-full rounded-md hover:scroll-m-1' src="https://cdn.pixabay.com/photo/2021/10/10/17/57/african-cuisine-6697867_640.jpg" alt="" />
                </div>
            </div>

            <div style={{ backgroundImage: `url(${bgImageURL})` }} className='flex flex-col justify-center items-center w-full md:w-96 h-72 bg-blue-600 overflow-hidden'>
                <span style={{ fontFamily: 'Courgette', fontSize: '40px' }} className='text-white'>Discover</span>
                <span style={{ fontWeight: '800' }} className='text-3xl text-white'>PROMISE RESTAURANT</span>
            </div>

            <div className='flex flex-col lg:flex-row md:flex-col gap-8 my-10 mx-5 lg:m-20 xl:m-20'>
                <div>
                    <span className='flex justify-center items-center'>
                        <img className='w-full h-60 rounded-md md:w-3/4 lg:h-52 lg:w-full' src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" alt="" />
                    </span>
                    <span>
                        <span>
                            <h1 className='text-2xl w-full lg:text-xl md:text-2xl xl:text-2xl text-center font-semibold text-white my-6'>ROMANTIC RESTAURANT</h1>
                        </span>
                        <span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nulla praesentium itaque reprehenderit, iusto beatae mollitia, porro quae aspernatur temporibus enim deserunt corrupti odit ipsam, velit eius eum. Ipsa, facilis!</p>
                        </span>
                        <span className='flex justify-center items-center gap-3 m-10 hover:text-blue-500'>
                            <a href="">LEARN MORE</a>
                            <MdOutlineArrowRightAlt className='text-xl' />
                        </span>
                    </span>
                </div>


                <div>
                    <span className='flex justify-center items-center'>
                        <img className='w-screen h-60 rounded-md md:w-3/4 lg:h-52 lg:w-full' src="https://www.ndtv.com/cooks/images/fried%20ribs-620.jpg" alt="" />
                    </span>
                    <span>
                        <span>
                            <h1 className='text-2xl w-full lg:text-xl md:text-2xl xl:text-2xl  text-center font-semibold text-white my-6'>DELICIOUS FOOD</h1>
                        </span>
                        <span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nulla praesentium itaque reprehenderit, iusto beatae mollitia, porro quae aspernatur temporibus enim deserunt corrupti odit ipsam, velit eius eum. Ipsa, facilis!</p>
                        </span>
                        <span className='flex justify-center items-center gap-3 m-10 hover:text-blue-500'>
                            <a href="">LEARN MORE</a>
                            <MdOutlineArrowRightAlt className='text-xl' />
                        </span>
                    </span>
                </div>

                <div>
                    <span className='flex justify-center items-center'>
                        <img className='w-screen h-60 rounded-md md:w-3/4 lg:h-52 lg:w-full' src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" alt="" />
                    </span>
                    <span>
                        <span>
                            <h1 className='text-2xl w-full lg:text-xl md:text-2xl xl:text-2xl  text-center font-semibold text-white my-6'>PIZZA YOU LOVE</h1>
                        </span>
                        <span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nulla praesentium itaque reprehenderit, iusto beatae mollitia, porro quae aspernatur temporibus enim deserunt corrupti odit ipsam, velit eius eum. Ipsa, facilis!</p>
                        </span>
                        <span className='flex justify-center items-center gap-3 m-10 hover:text-blue-500'>
                            <a href="">LEARN MORE</a>
                            <MdOutlineArrowRightAlt className='text-xl' />
                        </span>
                    </span>
                </div>



            </div >

            {/* <div>


                <div className="xl:grid lg:grid md:grid grid-cols-3 grid-rows-2 flex flex-col gap-4 lg:m-10 m-0 p-5 overflow-hidden h-full">
                    <div className='row-span-2 overflow-hidden'>
                        <div className="flex justify-center items-center hover:scale-110 h-full bg-no-repeat ease-out duration-500" style={{ backgroundImage: `url(${gridImg1})` }}>
                            <a className=' bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-yellow-500' href="">LUNCH</a>
                        </div>
                    </div>

                    <div className='row-span-2 overflow-hidden'>
                        <div className="flex justify-center items-center hover:scale-110 h-full bg-no-repeat ease-out duration-500" style={{ backgroundImage: `url(${gridImg2})` }}>
                            <a className=' bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-yellow-500' href="">DRINKS</a>
                        </div>
                    </div>
                    <div className='overflow-hidden'>
                        <div className="flex justify-center items-center hover:scale-110 h-full bg-no-repeat ease-out duration-500" style={{ backgroundImage: `url(${gridImg3})` }}>
                            <a className=' bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-yellow-500' href="">LUNCH</a>
                        </div>
                    </div>
                    <div className="col-span-2 col-start-1 row-start-3 overflow-hidden">
                        <div className="flex justify-center items-center hover:scale-110 h-full bg-no-repeat ease-out duration-500" style={{ backgroundImage: `url(${gridImg4})` }}>
                            <a className=' bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-yellow-500' href="">LUNCH</a>
                        </div>
                    </div>
                    <div className="col-start-3 row-start-3 overflow-hidden">
                        <div className="flex justify-center items-center hover:scale-110 h-full bg-no-repeat ease-out duration-500" style={{ backgroundImage: `url(${gridImg5})` }}>
                            <a className=' bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-yellow-500' href="">LUNCH</a>
                        </div>
                    </div>
                    <div className="col-start-3 row-start-2 overflow-hidden">
                        <div className="flex justify-center items-center hover:scale-110 h-full bg-no-repeat ease-out duration-500" style={{ backgroundImage: `url(${gridImg6})` }}>
                            <a className=' bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-yellow-500' href="">LUNCH</a>
                        </div>
                    </div>
                </div>
            </div> */}
            < div >
                <div className="grid grid-cols-3 grid-rows-2 gap-4 m-10">
                    <div className="row-span-2 overflow-hidden">
                        <img className='h-full w-full transform transition-transform duration-500 hover:scale-110' src="https://rakskitchen.net/wp-content/uploads/2013/11/10867983783_854a7fec8f_o.jpg" alt="" />
                        <a className='relative -top-1/2 left-1/4 bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-red-600' href="">LUNCH</a>
                    </div>
                    <div className="row-span-2 overflow-hidden">
                        <img className='h-full w-full transform transition-transform duration-500 hover:scale-110' src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <a className='relative -top-1/2 left-1/4 bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-red-600' href="">DRINKS</a>
                    </div>
                    <div className='overflow-hidden'>
                        <img className='h-full w-full transform transition-transform duration-500 hover:scale-110' src="https://cdn.shopify.com/s/files/1/0108/5757/8558/files/Fizzy_Drinks_impact_on_skin_1024x1024.png?v=1614167247" alt="" />
                        <a className='relative -top-1/2 left-1/4 bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-red-600' href="">HAPPY HOUR</a>
                    </div>
                    <div className="col-span-2 col-start-1 row-start-3 overflow-hidden">
                        <img className='h-80 w-full transform transition-transform duration-500 hover:scale-110' src="https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.jpg?s=612x612&w=0&k=20&c=XLsAk571Z2kEe_x6TnXWSzsG95-2agp-TcYswQrKHuo=" alt="" />
                        <a className='relative -top-1/2 left-1/2 bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-red-600' href="">DINNER</a>
                    </div>
                    <div className="col-start-3 row-start-3 overflow-hidden">
                        <img className='h-80 w-full transform transition-transform duration-500 hover:scale-110' src="https://i.pinimg.com/736x/f0/4f/51/f04f51de57631fd10a51eb7ceaa18cb9.jpg" alt="" />
                        <a className='relative -top-1/2 left-1/4 bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-red-600' href="">STARTER</a>
                    </div>
                    <div className="col-start-3 row-start-2 overflow-hidden">
                        <img className='h-full w-full transform transition-transform duration-500 hover:scale-110' src="https://t3.ftcdn.net/jpg/01/76/33/14/360_F_176331484_nLHY9EoW0ETwPZaS9OBXPGbCJhT70GZe.jpg" alt="" />
                        <a className='relative -top-1/2 left-1/4 bg-gray-200 p-5 text-black text-xl font-semibold rounded-md transition-transform duration-1000 ease-in-out hover:bg-red-600' href="">DESSERT</a>
                    </div>
                </div>
            </div >





            <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center gap-10 w-screen lg:p-10 bg-slate-600 overflow-hidden'>
                <span className='w-full'>
                    <span className='flex flex-col justify-center items-center mb-10'>
                        <h2 style={{ fontFamily: 'Courgette' }} className='text-5xl text-yellow-500'>Discover</h2>
                        <h1 className='text-4xl text-white font-bold tracking-2'>Book Table</h1>
                    </span>
                    <span className='flex justify-center items-center py-10'>
                        <ReservationTable />
                    </span>
                </span>
                <span className='flex justify-center items-center w-screen'>
                    <img className='w-full h-full rounded-md' src="https://www.yummytoddlerfood.com/wp-content/uploads/2022/04/Homemade-Lunch-1-horiz.jpg" alt="" />
                </span>


            </div>

            <div>
                <span className='flex flex-col justify-center items-center mt-10 mb-5'>
                    <h2 style={{ fontFamily: 'Courgette' }} className='text-5xl text-red-500'>Customers Say</h2>
                    <h1 className='text-4xl text-white font-bold tracking-2'>REVIEW</h1>
                </span>
                <span>
                    <CustomerReview />
                </span>
            </div>

            <div className='h-auto'>
                <span className='flex flex-col justify-center items-center mt-10 mb-5'>
                    <h2 style={{ fontFamily: 'Courgette' }} className='text-5xl text-red-500'>Discover</h2>
                    <h1 className='text-4xl text-white font-bold tracking-2'>OUR VIDEO</h1>
                </span>
                <span className='w-full h-full flex justify-center'>
                    <iframe width="100" height="500" src="https://www.youtube.com/embed/DoQT5i9Iz84?si=uCXKzaBChUEuioeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
                </span>
            </div>

            <div className='h-auto'>
                <Footer />
            </div>
        </>
    )
}

export default Home