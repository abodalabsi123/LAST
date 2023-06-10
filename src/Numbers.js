import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


    
    const NumberAnimation = ({ from, to, duration }) => {
      const { number } = useSpring({
        from: { number: from },
        to: { number: to },
        config: { duration: duration },
      });
    
      return (
        <div  className='mr-10' >
        <FontAwesomeIcon icon={faPlus} className='ml-1 text-xl font-bold text-white' />
        <animated.span className='text-xl font-bold text-white' >
          {number.interpolate((value) => Math.floor(value))}
        </animated.span>
      </div>
      );
    };
    
    const Numbers = () => {
      return (
        <div class="block bg-black   ">
          <h1 className='text-white text-xl font-bold underline flex justify-center p-4 '>LET'S NUMBERS TALK</h1>
          <div class="container   grid grid-cols-2  gap-5 md:grid-cols-4 py-8   ">

          <div >
            <NumberAnimation from={0} to={900} duration={3000}
            className='text-white text-xl font-bold'
            />
            <h2 className='text-white mr-10'>People</h2>
          </div>
          <div>
            <NumberAnimation from={0} to={30} duration={3000} />
            <h2 className='text-white mr-10 '>Countries</h2>
          </div>
          <div>
            <NumberAnimation from={0} to={100} duration={3000} />
            <h2 className='text-white mr-10 '>Distributors</h2>
          </div>
          <div>
            <NumberAnimation from={0} to={10000} duration={3000} />
            <h2 className='text-white mr-10 '>Dealers</h2>
          </div>
        </div>
            </div>
      );
    };
    

    
  
export default Numbers