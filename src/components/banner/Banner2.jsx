import {motion} from 'framer-motion'
import shoplocation from '../../assets/shoplocation.png'
const Banner2 = () => {
  return (
    <section >
        <div className="container ps-5 grid grid-cols-1 md:grid-cols-2
        space-y-6 md:space-y-0 py-14">

            <div className='flex flex-col justify-center items-center'>
                <div className='text-center md:text-left space-y-4
                lg:max-w-[400px]'>
                    <h1
                    // variants={Fadeup(0.5)}
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{once:true}}
                    className='text-3xl lg:text-6xl font-bold uppercase'>Our Location</h1>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Necessitatibus placeat 
                        at facere? Voluptatem, inventore! Voluptas reiciendis
                        accusantium sit consequatur, vel velit aspernatur
                        officia amet, consequuntur in a esse eius eaque?</p>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <motion.img
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:1 ,scale:1}}
                transition={{type : "spring", stiffness:100,delay:0.2}}
                viewport={{once:true}}
                src={shoplocation} alt="" 
                className='w-[300px] md:max-w-[400px] h-full
                object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default Banner2
