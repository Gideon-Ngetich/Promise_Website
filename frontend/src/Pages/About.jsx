import React, { useEffect, useRef, useState } from "react";
import "./styles.css"; // Import Tailwind CSS styles
import VideoComponent from "./VideoComponent"; // Import your video component
import TopNav from "../Components/Navbar";

const App = () => {
  const navRef = useRef(null);
  const bottomRef = useRef(null);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navBottom = navRef.current.getBoundingClientRect().bottom;
      const bottomTop = bottomRef.current.getBoundingClientRect().top;
      const videoTop = videoRef.current.getBoundingClientRect().top;

      if (window.scrollY > navBottom) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }

      if (bottomTop <= window.innerHeight / 2) {
        bottomRef.current.classList.add("extended");
      } else {
        bottomRef.current.classList.remove("extended");
      }

      if (videoTop <= window.innerHeight && videoTop >= 0) {
        setShowVideo(true);
      } else {
        setShowVideo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgImg =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <>
      <TopNav />
      <div className="max-w-screen-lg mx-auto px-4">
        <div
          className="bg-cover h-80 md:h-96 lg:h-120 xl:h-160 w-full flex justify-center items-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">
            About Us
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center py-10">
          <span
            style={{ fontFamily: "satisfy" }}
            className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-500"
          >
            African Restaurant
          </span>
          <span
            style={{ fontFamily: "oswald" }}
            className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-3"
          >
            OUR STORY
          </span>
          <p className="px-2 md:px-10 lg:px-20 xl:px-40 py-5 md:py-10 text-sm md:text-base lg:text-lg xl:text-xl">
            Fusce at risus eget mi auctor pulvinar. Suspendisse maximus
            venenatis pretium. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Aliquam purus purus,
            lacinia a scelerisque in, luctus vel felis. Donec odio diam,
            dignissim a efficitur at, efficitur et est. Pellentesque semper est
            ut pulvinar ullamcorper. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nulla et leo
            accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed
            luctus mattis.
          </p>
        </div>

        <div className="h-96 my-10 mx-5 w-full bg-slate-500 relative">
          <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover"></video>
        </div>

       <div ref={bottomRef} style={{ overflowY: 'hidden' }}>
                <div className="grid grid-cols-2 gap-10">
  {/* First grid */}
  <div className="flex justify-center items-center">
    <img className="w-80 md:w-96 lg:w-104 xl:w-120 h-80 md:h-96 lg:h-104 xl:h-120 rounded-md" src={bgImg} alt="Romantic"/>
  </div>
  <div className="flex flex-col justify-center items-center text-center md:pr-5 lg:pr-0 xl:pr-0 md:text-left lg:text-left xl:text-left md:pl-0 lg:pl-0 xl:pl-0">
    <span style={{ fontFamily: 'satisfy' }} className="text-yellow-500 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Romantic</span>
    <span style={{ fontFamily: 'oswald' }} className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Restaurant</span>
    <p className="text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-5 lg:mt-7 xl:mt-10">
      Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla quis suscipit nisl.
    </p>
  </div>

  {/* Second grid */}
  <div className="flex flex-col justify-center items-center text-center md:pl-5 lg:pl-0 xl:pl-0">
    <span style={{ fontFamily: 'satisfy' }} className="text-yellow-500 text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">Delicious</span>
    <span style={{ fontFamily: 'oswald' }} className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Recipes</span>
    <p className="text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-5 lg:mt-7 xl:mt-10">
      Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla quis suscipit nisl.
    </p>
  </div>
  <div className="flex justify-center items-center">
    <img className="w-80 md:w-96 lg:w-104 xl:w-120 h-80 md:h-96 lg:h-104 xl:h-120 rounded-md" src={bgImg} alt="Delicious"/>
  </div>
</div>

        </div>
      </div>
    </>
  );
};

export default App;
