import Hero from "../component/about/herosection";
import Header from "../component/Header";
import Navbar from "../component/navbar";

export default function About(){
    return(
       <div>
         <Header />
         <Hero name="About Us" />
       </div>
    )
}