import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Clients from "../Components/Clients";
import Community from "../Components/Community";
import Experience from "../Components/Experience";
import HowToDesignFooter from "../Components/HowToDesignFooter";
import Help from "../Components/Help";
import Customers from "../Components/Customers";
import Marketing from "../Components/Marketing";
import Footer from "../Components/Footer";

export default function Home(){
  return(
    <>
    <Navbar/>
    <Hero/> 
    <Clients/> 
    <Community/> 
    <Experience/> 
    <Help/> 
    <HowToDesignFooter/> 
    <Customers/>
    <Marketing/>   
    <Footer/>   
    </>
  )
}