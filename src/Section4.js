import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import photo1 from './image/photo1.jpeg';
import photo2 from './image/photo2.jpeg';
import photo3 from './image/photo3.jpeg';
import photo4 from './image/photo4.jpeg';
import photo5 from './image/photo5.jpeg';
import './Section4.css'


const  Section4 = () => {
    return (
        <div className="py-8  ">
        <h2 className="text-2xl font-bold mb-4">Photo Section</h2>
        <Carousel showThumbs={true} >
          <div>
            <img  src={photo1} alt="Photo 1" />
          </div>
          <div>
            <img  src={photo2} alt="Photo 2" />
          </div>
          <div>
            <img  src={photo3} alt="Photo 3" />
          </div>
          <div>
            <img  src={photo4} alt="Photo 4" />
          </div>
          <div>
            <img  src={photo5} alt="Photo 5" />
          </div>
        </Carousel>
      </div>
    );
  };
 
  export default Section4;


  