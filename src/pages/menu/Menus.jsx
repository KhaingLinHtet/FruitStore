import Fruit1 from "../../assets/apple.png"
import Fruit2 from "../../assets/orange.png"
import Fruit3 from "../../assets/mango.png"
import Fruit4 from "../../assets/pineapple.png"
import Fruit5 from "../../assets/banana.png"
import Fruit6 from "../../assets/strawberry.png"
import Fruit7 from "../../assets/kiwi.png"
import Fruit8 from "../../assets/cherry.png"
import {motion} from  "framer-motion"
import {FadeLeft} from "../../components/utility/animation"
const MenusData =[
    {
        id:1,
        title: "Apple",
        link: "/",
        price: "$2",
        img: Fruit1,
        delay:0.3 ,
    },
    {
        id:2,
        title: "Orange",
        link: "/",
        price: "$1.5",
        img: Fruit2,
        delay:0.6 ,
    },
    {
        id:3,
        title: "Mango",
        link: "/",
        price: "$2",
        img: Fruit3,
        delay:0.9 ,
    },
    {
        id:4,
        title: "Pineapple",
        link: "/",
        price: "$5",
        img: Fruit4,
        delay:1.2 ,
    },
    {
        id:5,
        title: "Banana",
        link: "/",
        price: "$0.5",
        img: Fruit5,
        delay:0.3 ,
    },
    {
        id:6,
        title: "Strawberry",
        link: "/",
        price: "$1.7",
        img: Fruit6,
        delay:0.3 ,
    },
    {
        id:7,
        title: "Kiwi",
        link: "/",
        price: "$2",
        img: Fruit7,
        delay:0.3 ,
    },
    {
        id:8,
        title: "Cherry",
        link: "/",
        price: "$2",
        img: Fruit8,
        delay:0.3 ,
    },
]

const Menus = () => {
  return (
    <section>
        <div className="container ps-8 pt-12 pb-20">
            <motion.h1
            initial={{opacity:0, x:-200}}
            whileInView={{opacity:1 ,x:0}}
            transition={{duration:1, delay:0.3}}

            className="text-2xl font-bold text-left pb-10 uppercase">
                Our Menu
            </motion.h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                { MenusData.map((menu)=>(
                        <motion.div
                        variants={FadeLeft(menu.delay)}
                        initial="hidden"
                        whileInView={"visible"}
                        whileHover={{scale:1.1}}
                        key={menu} className="bg-white rounded-3xl px-4 py-2
                        shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row
                        justify-around items-center">
                            <img src={menu.img} className="w-[60px] mb-4 scale-110
                            transform-translate-y-6" alt="" />
                            <div>
                                <h1 className="text-lg font-semibold">{menu.title}</h1>
                                <p className="text-lg font-semibold text-secondary">{menu.price}</p>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </div>
    </section>
  )
}

export default Menus
