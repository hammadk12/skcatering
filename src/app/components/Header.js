import Image from "next/image"
import Link from "next/link"
import { FiMenu } from 'react-icons/fi'
import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6";

const Header = () => {
  return (
    <div className=" px-8 py-10 bg-[#FFD700]">
        <div className="flex justify-evenly items-center mb-8 ">

        <div className="flex space-x-2">
        <FaLocationDot size={20}/>
        <h2 className="font-bold">Ocala, FL</h2>
        </div>

        <div className="flex space-x-2">
        <FaPhoneAlt size={20}/>
        <h2 className="font-bold">407-929-0279</h2>
        </div>

        <div className="flex space-x-2">
        <Link href='/'><FaTiktok size={22}/></Link>
        <Link href='/'><FaInstagram size={22}/></Link>
        <Link href='/'><FaFacebook size={22}/></Link>
        </div>

        </div>


       <div className="flex justify-between items-center px-6 md:px-20 lg:px-44 font-bold">
        <Image 
        src='/logo2.png'
        width={200}
        height={150}
        alt="logo"
        />

        <Link
        href="/"
        className="md:hidden"
        >
        <FiMenu size={35}/>
        </Link>

    
        <Link href="/" className="text-xl hover:underline hidden md:block">Menu</Link>
        <Link href="/" className="text-xl hover:underline hidden md:block">Contact Us</Link>
        <Link href="/" className="text-xl hover:underline hidden md:block">Learn More</Link>
   
        <Link href='/' className="hidden md:block border border-black p-2 hover:bg-black hover:text-white">ORDER NOW</Link>
        </div>
    </div>
  )
}

export default Header