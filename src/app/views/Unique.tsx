
import Image from "next/image"
import seven from "@/app/accets/7th.png"
import Uniquelist from "@/app/component/ui/Uniquelist"
import Link from "next/link"



const Unique = () => {
    return (
        <section>

            <div className="md:mt-60 mt-32 mb-60">
                {/* Heading */}
                <div className="  flex md:pl-[700px]  ">
                    <h1 className="md:text-5xl text-5xl  font-bold text-slate-800 mt-6 max-w-screen-md">Unique and Authentic Vintage Designer Jewellery</h1>
                </div>
                <div className="flex flex-col md:flex-row">
                    {/* Left Side */}
                    <div className="flex mt-20 relative">
                        <h1 className="text-gray-200 -z-10 absolute text-[90px] md:text-[100px] font-extrabold">Different from others</h1>
                        <div>
                            {/* import the props in Uniquelist Root */}
                            <Uniquelist title="Using Good Quality Materials" paragraph="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />


                            <Uniquelist title="Modern Fashion Design" paragraph="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />
                        </div>

                        {/* right */}
                        <div className="px-20">
                            <Uniquelist title="100% Handmade Products" paragraph="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />

                            <Uniquelist title="Discount for Bulk Order" paragraph="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />


                        </div>
                    </div>


                    {/* Right Side */}
                    <div className="mt-20 flex">
                        <div className=" bg-slate-200 w-[350px] h-[350px] object-cover">
                            {/* left */}
                            <Image src={seven} alt="picture" width={400} />

                        </div>
                        <div className="w-[250px] ml-10 pt-14">
                            {/* right */}
                            <p className="text-justify text-slate-700 text-md  ">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention
                                to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                           <Link href={"/product"}> <button className=" hover:scale-105 hover:duration-300  flex animate-pulse bg-gray-800 px-5 gap-x-3 font-semibold items-center shadow-inner  py-3 mt-5 text-white">See All Product</button></Link>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
}

export default Unique