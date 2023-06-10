import React from 'react'
import alhya3 from './image/alhya3.png';


function Footer() {
  return (
<footer class="block bg-black  " >
    <h1 className='text-white text-xl font-bold underline flex justify-center p-4 '>GET IN TOUCH WITH US</h1>
  <div class="container  grid grid-cols-1 md:grid-cols-4 py-8">
    <section class="p-3 md:col-span-1 ">
      <div class="">
        <h2 class=" text-white font-bold underline">For Commercial & logistic Inquiry</h2>
      </div>
      <div class="  text-white p-1.5">
        <ul class="list">
          <li><a href="#">Contact Number: +918264424934</a></li>
          <li><a href="#">Contact Number: +917087164327</a></li>
          <li><a href="#">Email us: groupalhaya97@gmail.com</a></li>
        </ul>
      </div>
    </section>
     <section class="p-3 md:col-span-1">
      <div class="">
        <h2 class=" text-white font-bold underline">Head Office India </h2>
      </div>
      <div class="collapsible__content  text-white">
        <ul class="list">
         <li><a href="#">Contact Number: +917087164327</a></li>
          <li><a href="#">Email us: groupalhaya97@gmail.com</a></li>
          
        </ul>
      </div>
    </section>
   
    <section class="p-3 md:col-span-1"> 
      <div class="">
        <h2 class=" text-white font-bold underline">Customer Care</h2>
      </div>
      <div class="  text-white">
        <ul class="list">
          <li><a href="#"> India: +918264424934</a></li>
          <li><a href="#"> Sudia: +966549985262 </a></li>
          <li><a href="#"> Yemen: +967777743546 </a></li>
          
        </ul>
      </div>
    </section> 
    <section class="p-3 md:col-span-1"> 
      <div class="">
        <h2 class=" text-white font-bold underline">ِLOCATION</h2>
      </div>
      <div class="  text-white">
        <ul class="list">
          <li><a href="#">Office No.1, Premal Jyot, Ashok, X, Rd Number 3, Ashok Nagar, Kandivali East, Mumbai, Maharashtra 400101</a></li>
   
          
        </ul>
      </div>
    </section> 
    <div class="  ">
     <img src={alhya3} alt="" class=" " />
    </div>
  </div>
</footer>

  )
}

export default Footer