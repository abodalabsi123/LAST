import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import a from './image/hospital/a.jpg';
import b from './image/hospital/b.jpg';
import c from './image/hospital/c.jpg';
import d from './image/hospital/d.jpg';
import f from './image/hospital/f.jpg';



const Section3 = () => {
  const settings = {
    dots: true,          // Show navigation dots
    infinite: true,      // Enable infinite looping
    speed: 500,          // Transition speed in milliseconds
    slidesToShow: 5,     // Number of slides to show at once
    slidesToScroll: 1,   // Number of slides to scroll at a time
    autoplay: true,      // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval in milliseconds
    
    responsive: [
      {
        breakpoint: 1280, // Adjust this value based on your desired breakpoint
        settings: {
          slidesToShow: 5, // Number of slides to show at once on small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960, // Adjust this value based on your desired breakpoint
        settings: {
          slidesToShow: 2, // Number of slides to show at once on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Adjust this value based on your desired breakpoint
        settings: {
          className: "center",
          slidesToShow: 1, // Number of slides to show at once on large screens
          slidesToScroll: 1,
          centerMode: true, // Center the slides
          // centerPadding: '10px', // Adjust the padding as needed
          centerPadding: "80px",

        },
      },
    ],
    arrows: false, // Remove arrow buttons
   
  };

  return (
    <div className="py-2 ">
      <h2 className="md:text-3xl underline font-bold mb-4 p-1 flex justify-center sm:text-xl">
        MEDICAL SERVICES
      </h2>
      <Slider {...settings} >
        <div  className=''>
          <img className="w-200 h-30  " src={a} alt="Photo 1" />
          <h1 className="text-xl  font-bold flex justify-center ">SAKRA  Hospital</h1> 

        </div>
        <div>
          <img className="w-200 h-30" src={b} alt="Photo 2" />
          <h1 className="text-xl font-bold flex justify-center ">RAINBOW CHILDEREN  </h1> 

          
        </div>
        <div>
          <img className="w-200 h-30" src={f} alt="Photo 4" />
          <h1 className="text-xl font-bold flex justify-center ">HCG Canser Hospital</h1> 
        </div>
        <div>
          <img className="w-200 h-30" src={c} alt="Photo 3" />
          <h1 className="text-xl font-bold flex justify-center ">APOLLO Hospital</h1> 
        </div>
        <div>
          <img className="w-200 h-30" src={d} alt="Photo 1" />
          <h1 className="text-xl font-bold flex justify-center ">SAKRA Hospital</h1> 
        </div>
        
        <div>
          <img className="w-200 h-30" src={f} alt="Photo 4" />
          <h1 className="text-xl font-bold flex justify-center ">HCG Canser Hospital</h1> 
        </div>
        
      </Slider>
    </div>
  );
};

export default Section3;
