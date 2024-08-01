import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"
import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6";


const Header = () => {
  return (
    <div className="px-6 py-8 md:px-8 md:py-10 bg-[#FFD700]">
        <div className="flex justify-evenly items-center md:mb-8">

        <div className="flex space-x-2">
        <FaLocationDot size={20} className="hidden md:block"/>
        <h2 className="font-bold hidden md:block">Ocala, FL</h2>
        </div>

        <div className="flex space-x-2">
        <FaPhoneAlt size={20} className="hidden md:block"/>
        <h2 className="font-bold hidden md:block">407-929-0279</h2>
        </div>

        <div className="flex space-x-2">
        <Link href='/'><FaTiktok size={22} className="hidden md:block"/></Link>
        <Link href='/'><FaInstagram size={22} className="hidden md:block"/></Link>
        <Link href='/'><FaFacebook size={22} className="hidden md:block"/></Link>
        </div>

        </div>


       <div className="flex justify-between items-center font-bold mx-2 lg:mx-72">
        <Image 
        src='/logo2.png'
        width={150}
        height={150}
        alt="logo"
        />

        <Menu />

    
        <Link href="/" className="text-xl hover:underline hidden md:block">Menu</Link>
        <Link href="/" className="text-xl hover:underline hidden md:block">Contact Us</Link>
        <Link href="/" className="text-xl hover:underline hidden md:block">Learn More</Link>
   
        <Link href='/' className="hidden md:block border border-black p-2 hover:bg-black hover:text-white">ORDER NOW</Link>
        </div>
    </div>
  )
}

export default Header