import Link from "next/link"
import logo from "@/app/accets/Logo.png"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"



function Header() {
    return (

        <div>
            <div className="flex justify-between items-center py-6 px-10">
                <Link href={"/"}>
                <Image className="w-40 pr-6" src={logo} alt="Logo Website" />
                </Link>

                
                <ul className="flex gap-x-10">
                    <li className="text-lg">
                        <Link href={"/category/female"}>
                            Female
                        </Link>
                    </li>
                    <li className="text-lg">
                        <Link href={"/category/male"}>
                            Male
                        </Link>
                    </li>
                    <li className="text-lg">
                        <Link href={"/category/kids"}>
                            Kids
                        </Link>
                    </li>
                    <li className="text-lg">
                        <Link href={"/category/sports"}>
                            sports
                        </Link>
                    </li>
                    <li className="text-lg">
                        <Link href={"/product"}>
                            AllProducts
                        </Link>
                    </li>
                </ul>
                
                    <div className="sm:pl-6">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center ">
                    <div className="relative">
                    <ShoppingCart/>
                    <div className="bg-red-500 w-4 h-4 rounded-full absolute -top-2 -right-2">
                        <h2 className="text-white text-sm ml-1 ">0</h2>
                    </div>
                    </div>
                   
                    </div>
                    </div>
            </div>

        </div>
    )
}

export default Header