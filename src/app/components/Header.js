import Image from "next/image"
import Link from "next/link"
import { FiMenu } from 'react-icons/fi'

const Header = () => {
  return (
    <div className=" p-8 bg-[#FFD700]">
       <div className="flex justify-between px-2">
        <Image 
        src='/logo2.png'
        width={150}
        height={150}
        alt="logo"
        />
        <Link
        href="/"
        className="md:hidden"
        >
        <FiMenu size={35}/>
        </Link>
        <Link href='/' className="hidden md:block font-bold border border-black p-2 hover:bg-black hover:text-white">ORDER NOW</Link>
        </div>
    </div>
  )
}

export default Header