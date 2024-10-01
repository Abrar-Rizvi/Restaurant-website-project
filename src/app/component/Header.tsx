"use client"


// import image from "next/image"
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


      

    //Header Funtion returns from here
    return (
        //    This is Header and set backgrpund image in Header
        <header className="bg-cover bg-center  w-full h-[400px]" style={{ backgroundImage: "url('/images/header.avif')" }}>

            {/* Here is logo div*/}
            <div className="  flex justify-between items-center bg-black bg-opacity-40 px-8  ">
                <div className="w-[70px] h-[70px] rounded-full md:w-[100px] md:h-[100px]">
                    {/* Image has been set to div */}

                    <img className="w-full h-full rounded-full" src="/images/matka.jpg" alt="" />
                </div>

                {/* This is navbar */}

                <nav className="hidden md:block ">
                <ul className=" flex justify-center space-x-6">
                    {items.map((item, index) => {
                        return <li key={index} className="">
                            <Link href={item.href} className="border border-b-green-50 rounded-sm p-1 cursor-pointer text-white font-bold text-xl hover:text-yellow-100">{item.name}</Link>
                        </li>
                    })}
                </ul>
                </nav>
                <FontAwesomeIcon icon={faBars}   className="w-5 text-white md:hidden" />

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