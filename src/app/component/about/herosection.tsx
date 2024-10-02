import Image from "next/image"
interface Name {
    name: string
}
export default function Hero({ name }: Name) {
    return (
        <div className=" w-full p-20   text-white">
            <h1 className=" bg-gradient-to-r from-green-400 to-slate-900 text-3xl font-bold ">{name}</h1>
            <div className="w-full flex flex-col-reverse mt-5 md:flex md:flex-row justify-center">
                {/* left div */}
                <div className="">
                    <p className="md:w-3/5 text-base mt-5">Welcome to <span className="text-xl font-bold text-amber-950">Biryani Bliss</span>, where the rich flavors of traditional biryani meet the convenience of modern dining. Established in 2012, Biryani Bliss is a premier destination for biryani lovers around the globe. Our restaurant offers a unique, one-on-one dining experience, ensuring each guest enjoys a personalized and unforgettable meal.

                        Our platform is dedicated to providing a holistic approach to biryani, ensuring a seamless and enriching culinary journey for food enthusiasts of all ages. Come savor the excellence of our biryani, crafted with passion and served with love.</p>
                    <h2 className="text-xl font-bold mt-5">Our Test</h2>
                    <p className="md:w-3/5 text-base mt-5">At Biryani Bliss, we cater to the culinary cravings of diverse age groups, including Children, Adults, and Professionals. Our team of highly skilled and dedicated chefs ensures that every meal is prepared smoothly, timely, and efficiently, leading to the continuous satisfaction of our guests</p>
                    <h2 className="text-xl font-bold mt-5">Achievements</h2>
                    <p className="text-base mt-5">Alhamdulillah! Biryani Bliss has emerged as a leading restaurant, launching over 23 unique biryani dishes in less than 2 years. Our commitment to sheer hard work and culinary excellence has resulted in exponential growth, boasting a full-time team of over 100 chefs and satisfied customers from more than 35 countries.</p>
                    <h2 className="text-xl font-bold mt-5">Mission and Objective</h2>
                    <p className="text-base mt-5">Our mission at Biryani Bliss is to provide an unparalleled culinary experience with our exquisite biryani. By investing in the finest ingredients, innovative cooking techniques, and a passionate team of chefs, we aim to achieve extraordinary satisfaction for our guests. We are dedicated to creating a dining experience that delights the senses and brings joy to every meal.</p>
                    <h2 className="text-xl font-bold mt-5">Our Team</h2>
                    <p className="mt-5 text-base">Dedicated to crafting culinary masterpieces, our team at Biryani Bliss comprises experienced chefs with a passion for biryani. Each chef brings a wealth of expertise and creativity to the kitchen, ensuring every dish is a work of art. Different teams work independently under the guidance of our head chef to enhance the overall dining experience for our guests.</p>

                </div>

                {/* right div for image */}
                <div className="  w-full h-[200px] md:min-w-[400px] md:h-[400px]">
                    <Image className="w-full h-full object-cover" src="/images/bir.jpg" alt="pic" width={500} height={500} />
                </div>
            </div>
        </div>

    )
}