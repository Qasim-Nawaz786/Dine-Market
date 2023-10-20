import Image from "next/image"
import second from "@/app/accets/2nd.png"
import third from "@/app/accets/3rd.webp"
import forth from "@/app/accets/4th.webp"





const Promotion = () => {
    return (
        <section>

            <div className="mt-24 w-full ">
                <div className="text-center">
                    <h3 className="text-blue-700 font-bold text-left md:text-center">PROMOTION</h3>
                    <h2 className="text-4xl font-bold mt-2 text-slate-800 text-left md:text-center">Our Promotions Events</h2>

                </div>


                {/* Blocks Parrent */}
                <div className="w-screen">
                    <div className="mt-10 flex flex-col md:flex-row ">
                        {/* Left Side */}
                        <div className="space-y-7 ">
                            <div className="bg-gray-300 flex flex-row px-8 pt-6 w-[430px] md:w-[550px]">

                                <div className="flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold">GET UP TO 60%</h2>
                                    <h3 className="text-lg">For the summer season</h3>
                                </div>
                                <div className="pl-20 ">
                                    <Image className="" src={second} alt="Outfit" width={150} />
                                </div>
                            </div>
                            <div className="bg-gray-900 flex flex-row px-8 pt-12 justify-center w-[430px] md:w-[550px]  text-white">

                                <div className="flex flex-col items-center pb-16">
                                    <h2 className="text-3xl py-5 font-bold">GET 30% Off</h2>
                                    <h3 className="text-lg">USE PROMO CODE</h3>
                                    <h3 className="text-lg text-background bg-gray-600 px-12 font-bold font-sans rounded-xl py-1">DINEWEEKENDSALE</h3>
                                </div>

                            </div>
                        </div>


                        <div>
                            {/* Right Side */}
                            <div className="flex mt-6 md:mt-0 md:flex-row gap-y-4 items-center">
                                <div className="bg-pink-200  w-[200px] h-[385px] md:h-[530px] md:w-[320px] flex flex-col px-4 md:px-8 md:pt-12 md:ml-7 text-white">

                                    <div className="flex flex-col items-center pb-10  ">
                                        <h2 className="text-lg  font-bold pt-[78px] md:pt-[75px]">Flex Sweatshirt</h2>
                                        <h3 className="text-lg ">$100.00$75.00</h3>
                                        <Image src={third} alt="Man Swetar" height={450} width={235} />

                                    </div>

                                </div>
                                <div className="bg-gray-300 w-[200px] h-[380px] md:h-[530px] md:w-[320px] flex flex-col px-4 md:px-8 md:pt-12  ml-7 text-white">

                                    <div className="flex flex-col items-center pb-10 ">
                                        <h2 className="text-lg  font-bold pt-[44px] md:pt-[70px]">Flex Push Button Bomber</h2>
                                        <h3 className="text-lg">$225.00$190.00</h3>
                                        <Image src={forth} alt="Man Swetar" height={450} width={237} />

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default Promotion