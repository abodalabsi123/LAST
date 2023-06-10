import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import a from './image/commers/a.jpg';
import aa from './image/commers/aa.jpg';

import bb from './image/commers/bb.jpg';
import c from './image/commers/c.jpg';
import cc from './image/commers/cc.jpg';
import d from './image/commers/d.jpg';
import f from './image/commers/f.jpg';

import h from './image/commers/h.jpg';

import m from './image/commers/m.jpg';
import z from './image/commers/z.jpg';
import y from './image/commers/y.jpg';
import t from './image/commers/t.jpg';
import q from './image/commers/q.jpg';
import w from './image/commers/w.jpg';
import n from './image/commers/n.jpg';
import o from './image/commers/o.jpg';




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
    <div className="py-3  ">
      <h2 className="md:text-3xl underline font-bold mb-4 p-1 flex justify-center sm:text-xl">
        GLOBAL EXPORT AND IMPORT 
      </h2>
      <Slider {...settings} >
        <div >
          <img className="w-200 h-30 " src={a} alt="Photo 1" />
          <h1 className="text-xl font-bold flex justify-center ">  جميع انواع الحديد </h1> 

        </div>
        <div >
          <img className="w-200 h-30 " src={aa} alt="Photo 1" />
          <h1 className="text-xl font-bold flex justify-center "> الزهور الهولندية</h1> 

        </div>
       
        <div>
          <img className="w-200 h-30" src={c} alt="Photo 3" />
          <h1 className="text-xl font-bold flex justify-center ">اجود انواع القمح</h1> 

        </div>
        <div>
          <img className="w-200 h-30" src={cc} alt="Photo 3" />
          <h1 className="text-xl font-bold flex justify-center "> جميع انواع الملابس</h1> 

        </div>
        <div>
          <img className="w-200 h-30" src={d} alt="Photo 1" />
          <h1 className="text-xl font-bold flex justify-center ">جميع الاجهزة الالكترونية</h1> 

        </div>
        <div>
          <img className="w-200 h-30" src={f} alt="Photo 4" />
          <h1 className="text-xl font-bold flex justify-center "> جميع انواع التلفونات</h1> 

        </div>
      
        <div>
          <img className="w-200 h-30" src={h} alt="Photo 2" />
          <h1 className="text-xl font-bold flex justify-center ">افضل انواع البطاريات</h1> 


        </div>
        <div>
          <img className="w-200 h-30" src={m} alt="Photo 2" />
          <h1 className="text-xl font-bold flex justify-center ">اجود البهارات  الهندية</h1> 

        </div>
        <div>
          <img className="w-200 h-30" src={n} alt="Photo 2" />
          <h1 className="text-xl font-bold flex justify-center ">افضل انواع السيارات </h1> 


        </div>
        <div>
          <img className="w-200 h-30" src={bb} alt="Photo 2" />
          <h1 className="text-xl font-bold flex justify-center "> الزيوت الاندونيسي</h1> 


        </div>
     
      
       
      </Slider>
      <Slider {...settings} >
      <div>
          <img className="w-200 h-30" src={q} alt="Photo 2" />
          <h1 className="text-xl font-bold flex justify-center ">تصدير الادوية</h1> 

        </div>
        <div>
          <img className="w-200 h-30" src={w} alt="Photo 2" />
          <h1 className="text-xl font-bold flex justify-center ">تصدير الرخام  والسرميك  </h1> 

        </div>
        <div>
          <img className="w-200 h-30" src={z} alt="Photo 2" />
          <h1 className="text-xl font-bold flex justify-center "> منتجات رقائق الالمنيوم</h1> 

        </div>
  
        <div>
          <img className="w-200 h-30" src={y} alt="Photo 2" />
          <h1 className="text-xl font-bold flex justify-center ">تصدير جميع انواع الحبوب</h1> 

        </div>
       
        <div>
          <img className="w-200 h-30" src={t} alt="Photo 2" />
          <h1 className="text-xl font-bold flex justify-center ">تصدير اجود انواع الارز </h1> 
          
 

        </div>
        <div>
          <img className="w-200 h-30" src={o} alt="Photo 2" />
          <h1 className="text-xl font-bold flex justify-center ">تصديرالمكائن الصناعية </h1> 

        </div>
      </Slider>
    </div>
  );
};

export default Section3;
