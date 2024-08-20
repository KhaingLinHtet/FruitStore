import heroImg from '../../assets/kindpng_1215621.png'
import leafpng from '../../assets/kindpng_842556.png'
import {motion} from "framer-motion"
import {FadeRight} from '../../components/utility/animation'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <section>
    <div className="container grid grid-cols-1
    md:grid-cols-2 min-h-[550px] relative">
        <div className="flex flex-col justify-center
        py-14 md:py-14 relative z-10 ">
            <div className="text-center md:text:left space-y-3 lg:max-w-[400px]">
                <motion.h1
                variants={FadeRight(0.6)}
                initial = "hidden"
                animate = "visible"
                className="text-5xl lg:text-6xl font-bold
                leading-relaxed xl:leading-loose font-averia">Healthy
                <br />
                Fresh <span className="text-primary">Fruit</span></motion.h1>
                <motion.p
                 variants={FadeRight(1.2)}
                 initial = "hidden"
                 animate = "visible"
                className="text-gray-800">
                    Order Now For Our Healthy Life
                </motion.p>
                <motion.p
                 variants={FadeRight(1.5)}
                 initial = "hidden"
                 animate = "visible"
                >
                    Healthy and yummy food for fresh morning.
                    Enjoy daily with fresh food.
                    Let Start a day with our fresh food !
                </motion.p>
                <motion.div
                 variants={FadeRight(2)}
                 initial = "hidden"
                 animate = "visible"
                className="flex justify-center
                    md: p-2">
                        
                    <button className=" primary-btn"><Link to="/menus">Order Now</Link> </button>
                </motion.div>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <motion.img
             initial={{opacity:0 ,x:200 ,rotate:75}}
             animate={{opacity:1,x:0,rotate:0}}
             transition={{duration:1 ,delay:1}}
            src={heroImg} alt="" className="w-[300px]
            md:w-[450px] drop-shadow" />
        </div>
        {/* leaf section */}
        <div className='absolute top-14 md:top-15 right-1/2
             blur-sm opacity-100 rotate-[40deg]'>
            <motion.img
           initial={{opacity:0 ,y:-100 ,rotate:75}}
           animate={{opacity:1,x:0,rotate:0}}
           transition={{duration:1 ,delay:1.5}}
            src={leafpng} alt=""
             className='w-full md:max-w-[300px]'/>
        </div>
    </div>
   </section>
  )
}

export default Home
