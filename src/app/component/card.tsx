import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faArrowRight, faPhone, faFaceB, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';




export default function Card() {
    const items = [
        { name: "Beaf Biryani", price: "250", href: "/images/card1.jpg.jpg" },
        { name: "Nalli BiryaniI", price: "350", href: "/images/card2.jpg" },
        { name: "Chiken Biryani", price: "450", href: "/images/card3.jpg" },
        { name: "Kabab Biryani", price: "620", href: "/images/card4.jpg.jpg" },

        { name: "Fish Grill", price: "950", href: "/images/grill.fish.jpg" },
        { name: "Spicy Burger", price: "860", href: "/images/burger.jpg" },
        { name: "Reshmi Kabab", price: "880", href: "/images/re.kabab.jpg" },
        { name: "Spicy Tikka", price: "620", href: "/images/tikka.jpg" },

        { name: "Fish Grill", price: "950", href: "/images/grill.fish.jpg" },
        { name: "Spicy Burger", price: "860", href: "/images/burger.jpg" },
        { name: "Reshmi Kabab", price: "880", href: "/images/re.kabab.jpg" },
        { name: "Spicy Tikka", price: "620", href: "/images/tikka.jpg" },

    ]
    return (
        // This is main container which contains all cards
        <div className=" relative text-white bg-gradient-to-r from-green-600 to-gray-500 w-screen  min-h-4  flex flex-col items-center justify-center mt-10 mb-10  px-5 py-5 md:mx-auto    md:w-5/6">
            <div className='flex justify-start w-full border mb-5 '>
                <FontAwesomeIcon icon={faFireFlameCurved} className='w-5 mr-1' />
                <h1 className='text-2xl font-bold'>Popular Items</h1>
            </div >


            {/* This div contains after heading */}
            <div className='  flex flex-col justify-center items-center  min-h-full flex-wrap w-full md:flex md:flex-row md:justify-center  '>

                {items.map((item, index) => {
                    // Now this return card of width of 20% and contain all thing like image, name and price
                    return <div key={index} className="  shadow-2xl  min-h-full rounded-md  p-2 w-full  md:w-1/3 h-[400px] transition-transform duration-300 hover:scale-110 my-10">

                        {/* This div contains only image */}
                        <div className="h-[300px] flex flex-col justify-between  ">
                            <img className=" w-full h-full object-cover  " src={item.href} alt="biryani pic" />

                        </div>
                        {/* This div contains item name and price */}
                        <div className="flex justify-between  w-full">
                            <span className="font-medium  text-xl border p-x-1">{item.name}</span>



                            <span className="font-medium  text-xl ">Rs.{item.price}</span>

                        </div>
                        <button className='w-full border mt-5 hover:bg-slate-800 font-bold'>Place Order</button>
                    </div>
                })}
            </div>

        </div>
    )
}