import React from 'react'
import last from './image/last.png';
function Header() {
  return (
    <nav className=  "  bg-black text-white  flex justify-evenly p-5 md:justify-between" >
    <ul className="flex m-1 justify-between gap-3 ">
      <li className=" "><a href="/" className="text-white hover:text-gray-400">الرئيسية</a></li>
      {/* <li className=" "><a href="/about" className="text-white hover:text-gray-400">من نحن</a></li> */}
      <li className=""><a href="/services" className="text-white hover:text-gray-400">الخدمات</a></li>
      <li className="ml-2"><a href="/contact" className="text-white hover:text-gray-400">تواصل</a></li>
    </ul>
      <img src={last} alt="" class=" h-14   w-200 " />
   
     
  
  </nav>
  )
}

export default Header