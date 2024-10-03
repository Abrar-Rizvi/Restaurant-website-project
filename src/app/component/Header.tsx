"use client"


// import image from "next/image"
import Image from "next/image";
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


export default function Header() {

    const items = [
        { name: "Home", href: "/" },
        { name: "About US", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Beaf Nalli Biryani", href: "/beafnallibiryani" },
        { name: "Beef Pulao", href: "/beafpulao" },
        { name: "Deserts", href: "/deserts" },
        { name: "Extras", href: "extras" },

    ]

    const [isVisible, setIsVisible] = useState(false)

    const handleVisibiltyHamburger = () => {
        setIsVisible(!isVisible)
        console.log("Hamburger clicked, isVisible:", !isVisible); // Debugging log
     
        
    }




    //Header Funtion returns from here
    return (
        //    This is Header and set backgrpund image in Header
        <header className="bg-cover bg-center  w-full h-[400px] " style={{ backgroundImage: "url('/images/header.avif')" }}>

            {/* Here is logo div*/}
            <div className="  relative flex justify-between items-center bg-black bg-opacity-40 px-8  ">
                <div className="w-[70px] h-[70px] rounded-full md:w-[100px] md:h-[100px]">
                    {/* Image has been set to div */}

                    <Image className="w-full h-full rounded-full" src="/images/matka.jpg" alt="pic" width={500} height={500} />

                </div >

                {/* This is navbar */}

              
               {/* <nav className={`relative md:flex md:justify-center ${isVisible ? 'flex flex-col space-y-4' : 'hidden md:flex '}`}> */}
               <nav className={`  absolute top-0 left-0 w-3/5 md:w-4/5 md:static md:flex md:justify-center transition-transform duration-5000 transform ${isVisible ? 'translate-x-0 flex flex-col space-y-4 z-50' : '-translate-x-full  md:flex'} md:translate-x-0`}>

                    <ul className=" bg-black md:bg-transparent flex flex-col space-y-4  md:flex-row md:justify-between md:space-x-3 md:space-y-0 md:w-[87%]">
                        {items.map((item, index) => {
                            return <li key={index} className="p-1 bg-black  border border-b-green-50" >
                                <Link href={item.href} className=" rounded-sm p-1 cursor-pointer text-white font-bold  hover:text-yellow-100">{item.name}</Link>
                            </li>
                        })}
                    </ul>
                </nav>
             
                <button>
                <FontAwesomeIcon icon={faBars} onClick={handleVisibiltyHamburger} className="w-5 text-white md:hidden block cursor-pointer" />
                </button>

            </div>
            <div className="bg-black bg-opacity-70 rounded w-1/2 p-5 mx-auto mt-10 text-center animate-bounce ">
                <p className="text-white text-3xl hover:text-yellow-200 ">    Welcome to</p>
                <div className="text-white">
                    <span className="font-bold text-3xl md:4xl hover:text-yellow-200 ">Grand</span> <br />
                    <span className="font-bold text-4xl md: 7xl hover:text-yellow-200 ">Resturant</span>
                </div>
            </div>
        </header>



    )
}