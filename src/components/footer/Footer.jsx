import { FaLeaf } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-primary/10 py-8 ">
        <div className="container  flex-col md:flex-row flex justify-evenly  items-center">
            <div>
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                    <p className="text-primary">Fruit</p>
                    <p className="text-secondary ju">Store</p>
                    <FaLeaf className="text-green-500 "/>
                </div>
            </div>

            <div className="text-3xl flex items-center gap-10 mt-5
            text-gray-700 ">
                <IoLogoFacebook />
                <BsInstagram />
                <AiFillTwitterCircle />
            </div>
        </div>
    </footer>
  )
}

export default Footer
