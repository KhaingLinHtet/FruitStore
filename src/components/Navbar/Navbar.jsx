import { FaLeaf } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import ReponsiveMenu from "./ReponsiveMenu";
import { useState } from "react";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
const NavbarMenu=[
    {
        id:1,
        title:"Home",
        link:"/"
    },
    {
        id:2,
        title:"Menus",
        link:"/menus"
    },
    {
        id:3,
        title:"Service",
        link:"/banner"
    },
    {
        id:4,
        title:"About Us",
        link:"/banner2"
    },
]
const Navbar = () => {
   const [open,setOpen]=useState(false);
  return (
    <nav >
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5,delay:0.5}}
        className="container flex justify-between text-center py-4 md:pt-4 ">
            {/* logo section */}
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <p className="text-primary">Fruit</p>
                <p className="text-secondary">Store</p>
                <FaLeaf className="text-green-500"/>
            </div>
            {/* Menu section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-gray-600">
                    {NavbarMenu.map((menu)=>(
                        <li key={menu.id} className="text-xl">
                            {/* <a href={menu.link}
                            className="inline-block py-1 px-3
                            hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold">
                             className="inline-block py-1 px-3
                            hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold">
                            {menu.title}</a> */}
                            <Link to={menu.link} className="inline-block py-1 px-3
                            hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold">{menu.title}</Link>
                        </li>
                    ))}
                <button className="text-2xl hover:bg-primary
                 hover:text-white rounded-full p-2 duration-200">
                        <FaCartArrowDown />
                </button>
                </ul>
                
            </div>

            {/* Hamburger section */}
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
            <RxHamburgerMenu  className="text-4xl"/>
            </div>

        </motion.div>
        <ReponsiveMenu open={open}/>
    </nav>
  )
}

export default Navbar
