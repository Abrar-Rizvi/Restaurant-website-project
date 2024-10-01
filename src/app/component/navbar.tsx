import image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faArrowRight, faPhone, faFaceBook, faBars } from '@fortawesome/free-solid-svg-icons';



export default function Navbar(){

    const items = [
        { name: "Deals", href: "#" },
        { name: "Pulao Deals", href: "#" },
        { name: "Beaf Biryani", href: "#" },
        { name: "Beaf Nalli Biryani", href: "#" },
        { name: "Beef Pulao", href: "#" },
        { name: "Deserts", href: "#" },
        { name: "Extras", href: "#" },

    ]
    return(
        <nav className="hidden md:block ">
        <ul className=" flex justify-center space-x-6">
            {items.map((item, index) => {
                return <li key={index} className="">
                    <Link href={item.href} className="border border-b-green-50 rounded-sm p-1 cursor-pointer text-white font-bold text-xl hover:text-yellow-100">{item.name}</Link>
                </li>
            })}
        </ul>
        </nav>
    )
}