import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section5 from  './Section5'
import Section6 from  './Section6'
import Section7 from  './Section7'

import Hero from "./Hero";

import Header from "./Header";
import Footer from "./Footer";
import WhatsappIcon from "./WhatsappIcon";
import Numbers from "./Numbers";
import "./app.css"



function App() {   
  
  return (
    <div className="App">
            
      
    <WhatsappIcon/>
    <Header/>
    <Hero/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Numbers/>

   

    <Footer/>
    </div>
  );
}

export default App;
