import React from 'react'


import Image from 'next/image'
import Heroimage from "@/app/accets/hero_image.webp"
import { ShoppingCart } from "lucide-react"
import hero1 from "@/app/accets/hero1.webp"
import hero2 from "@/app/accets/hero2.webp"
import hero3 from "@/app/accets/hero3.webp"
import hero4 from "@/app/accets/hero4.webp"
import { Badge } from '../../../@/ui/badge'
import { Button } from '../../../@/ui/button'
import Link from 'next/link'




function Hero() {
    return (
        <section>
            <div className='flex flex-col lg:flex-row gap-y-10 mt-10'>
                {/* Left div */}
                <div className='flex-1 mt-28'>
                    <Badge className='px-4 py-2 rounded-lg  bg-blue-100 text-blue-700 font-bold w-28'>Save 70%</Badge>
                    <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl mt-10 " >
                        An Industrial Take on Streetwear
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 ">
                        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                    </p>
                    <div >
                        <Link href={'/product'}>
                    <Button className='mt-6 bg-gray-800 px-6 py-7 flex text-white hover:scale-105' >
                    <ShoppingCart className=' mr-3'/>
                        Start Shopping
                        </Button>
                        </Link>
                    </div>
                    <div className='flex gap-x-8 mt-20'>
                        <Image src={hero1} alt='Bazzar image'/>
                        <Image src={hero2} alt='Bazzar image'/>
                        <Image src={hero3} alt='Bazzar image'/>
                        <Image src={hero4} alt='Bazzar image'/>
                    </div>



                </div>
                {/* Right div */}
                <div className='flex-1 relative flex items-center justify-center'>
                    <div className='bg-pink-100 absolute w-[550px] h-[550px] rounded-full -z-10'></div>
                    <Image src={Heroimage} alt='Hero Section image ' height={700}/>
                </div>
            </div>
        </section>
    )
}

export default Hero