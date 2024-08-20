import { motion,AnimatePresence} from "framer-motion"
import { Link } from "react-router-dom"

const ReponsiveMenu = ({open}) => {
  return (
    
      <AnimatePresence mode="wait">
        {
            open &&(
               <motion.div 
               initial={{poacity:0, y:-100}}
               animate= {{opacity:1,y:0}}
               exit={{opacity:0,y:-100}}
               transition={{duration:0.3}}
               
               className="absolute top-20 left-0 w-full h-screen z-20">
                <div className="text-xl font-semibold uppercase
                bg-primary text-white py-10 m-6 rounded-3xl">
                    <ul className="flex flex-col items-center gap-10">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menus">Menus</Link></li>
                        <li><Link to="/banner">Service</Link></li>
                        <li><Link to="/banner2">About Us</Link></li>
                    </ul>
                </div>
               </motion.div> 
            )
        }
      </AnimatePresence>

  )
}

export default ReponsiveMenu
