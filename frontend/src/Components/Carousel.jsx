'use client';

import { Carousel } from 'flowbite-react';

function ImgCarousel() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <span className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"><span style={{fontFamily: 'Courgette', fontSize: '60px'}}>Welcome to</span> <br></br> <span className='text-7xl'>Promise Restaurant</span> </span>
      </div>
      <Carousel>
        <div className="h-full">
          <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/08/19/WU3203-ree-drummond-crispy-everything-chicken-cutlets_4x3.jpg.rend.hgtvcom.1280.960.suffix/1660928170362.jpeg" alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className="h-full">
          <img src="https://www.safefood.net/getmedia/94101697-3c3f-4fe1-8ae8-5b595d3814ba/medium-rare-steak.jpg?w=2000&h=1333&ext=.jpg&width=1360&resizemode=force" alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        <div className="h-full">
          <img src="https://redcliffelabs.com/myhealth/wp-content/uploads/2022/03/90.jpg" alt="Slide 3" className="w-full h-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
