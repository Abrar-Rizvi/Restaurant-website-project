
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faYoutube, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';


export default function Footer() {
    type Link = {
        name: string;
        href: string;
    }



    const links: Link[] = [
        { name: "About Resturant", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Our Story", href: "#" },
        { name: "Authentic Recipes", href: "#" },
        { name: "Quality Ingredients", href: "#" },
        { name: "Our Chefs", href: "#" },
        { name: "Commitment to Excellence", href: "#" },
        { name: "Customer Reviews", href: "#" },



    ]


    // section2 popular courses
    const links2: Link[] = [
        { name: "Biryani", href: "#" },
        { name: "Butter Chicken", href: "#" },
        { name: "Paneer Tikka", href: "#" },
        { name: "Samosa", href: "#" },
        { name: "Dal Makhni", href: "#" },
        { name: "Aloo Gobi", href: "#" },
        { name: "Qorma", href: "#" },
        { name: "Malai Boty", href: "#" },



    ]
    // section3 contact
    type Contact = {
        detail: string;
    }
    const contact: Contact[] = [
        { detail: "UK: 03122770572" },
        { detail: "US: 03111234567" },
        { detail: "AUS: 03446789075" },
        // { detail: "info@biryani.com" }
    ]





    return (
        <footer className=" w-screen   h-[400px] ">



            <div className='  md:flex md:justify-evenly md:items-start bg-gradient-to-r from-green-500 to-slate-700 p-10'>
                {/* section 1 */}
                <div className=' font-bold mt-10 '>

                    <h3 className='mb-4  pl-7 text-2xl text-white underline cursor-pointer '>About Us</h3>
                    <ul className='space-y-1  ' >
                        {links.map((link, index) => {
                            return <li key={index} className='flex items-center'>

                                <span className='mr-2 text-white'>{'>'}</span>
                                <a href={link.href} className="text-white hover:text-black font-medium">{link.name}</a>

                            </li>
                        })}




                    </ul>
                </div>
                {/* section 2 */}
                <div className='font-bold mt-10  '>
                    <h3 className='mb-4  pl-7 text-2xl underline text-white cursor-pointer '>Dishes</h3>
                    <ul className='space-y-1'>
                        {links2.map((link, index) => {
                            return <li key={index} className='flex items-center'>
                                <span className='mr-2 text-white'>{'>'}</span>
                                <Link href={link.href} className="text-white hover:text-black font-medium">{link.name}</Link>



                            </li>
                        })}



                    </ul>



                </div>
                {/* section 3 */}
                <div className=' font-bold  text-white mt-10 '>
                    <h3 className='mb-4  pl-7 underline text-2xl cursor-pointer'>Contact Now</h3>
                    <ul>
                        {contact.map((con, index) => {
                            return <li key={index} className="text-white hover:text-black font-medium flex items-center  space-y-5">
                                <span className='mr-2 text-whitek'> <FontAwesomeIcon icon={faPhone} className='w-5' /></span>
                                <Link href="#">{con.detail}</Link>

                            </li>
                        })}


                    </ul>




                </div>
            </div>
            <div className='w-full min-h-[75px] bg-gradient-to-r from-green-800 to-slate-900  flex justify-center'>
                <div className='flex justify-center items-center gap-x-2'>
                    <FontAwesomeIcon icon={faFacebook} className='w-10 h-10 text-white cursor-pointer ' />
                    <FontAwesomeIcon icon={faYoutube} className='w-10 h-10 text-white  cursor-pointer' />
                    <FontAwesomeIcon icon={faInstagram} className='w-10 h-10 text-white  cursor-pointer' />
                    <FontAwesomeIcon icon={faTwitter} className='w-10 h-10 text-white  cursor-pointer' />
                    <FontAwesomeIcon icon={faTiktok} className='w-10 h-10 text-white cursor-pointer' />
                </div>
                <div></div>
            </div>
        </footer>
    )
}