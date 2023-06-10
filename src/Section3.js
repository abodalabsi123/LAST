import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo1 from './image/photo1.jpeg';
import photo2 from './image/photo2.jpeg';
import photo3 from './image/photo3.jpeg';
import photo4 from './image/photo4.jpeg';


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
        Membership & Certification
      </h2>
      <Slider {...settings} >
        <div >
          <img className="w-50 h-80 " src={photo1} alt="Photo 1" />
        </div>
        <div>
          <img className="w-50 h-80" src={photo2} alt="Photo 2" />
        </div>
        <div>
          <img className="w-50 h-80" src={photo3} alt="Photo 3" />
        </div>
        <div>
          <img className="w-50 h-80" src={photo1} alt="Photo 1" />
        </div>
        <div>
          <img className="w-50 h-80" src={photo4} alt="Photo 4" />
        </div>
        <div>
          <img className="w-50 h-80" src={photo2} alt="Photo 2" />
        </div>
        {/* <div>
          <img className="w-50 h-80" src={photo5} alt="Photo 5" />
        </div> */}
      </Slider>
    </div>
  );
};

export default Section3;
