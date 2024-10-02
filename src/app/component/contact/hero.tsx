

export default function Herocontact() {
    return (
        <>
            {/* <div className="w-full min-h-full md:h-[200px] md:w-2/5 md:mx-auto " >


       </div> */}
            <div style={{ backgroundImage: "url('/images/bir.jpg')" }} className="  text-white w-screen min-h-screen bg-cover bg-center  flex flex-col justify-start items-center">
                <h1 className=" text-5xl font-bold bg-black inline-block mt-10">Contact Us</h1>
                {/* <div className="bg-green-600 "> */}
                {/* Forms */}
                <form action="" className="   w-full   md:w-1/3  md:h-[200px] mt-16 ">
                    {/* most outer div inside of form */}
                    <div className="border border-white bg-black bg-opacity-40">
                        <h3 className="text-4xl mb-5">SEND US A MESSAGE</h3>
                        <div >
                            <label htmlFor="name"></label>
                            <input type="text" id="name" placeholder="NAME" className="bg-transparent border w-full h-8 mb-10" />

                            <br />
                            <label htmlFor="email"></label>
                            <input type="email" id="email" placeholder="EMAIL" className="bg-transparent border w-full h-8 mb-10" />

                            <br />
                            <label htmlFor="phone"></label>
                            <input type="phone" id="phone" placeholder="PHONE NO." className="bg-transparent border w-full h-8 mb-10" />

                            <br />
                            <label htmlFor="box"></label>
                            <textarea name="" id="box" placeholder="MESSAGE" cols={10} className="bg-transparent border w-full h-8 mb-10"></textarea>
                            <button type="submit" className="w-full h-10 text-xl font-bold" style={{ backgroundColor: "black", }}>SUBMIT</button>
                        </div>
                    </div>
                </form>
                {/* </div> */}
            </div>





        </>

    )
}