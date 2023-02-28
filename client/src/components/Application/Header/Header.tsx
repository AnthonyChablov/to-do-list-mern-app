import { motion, Variants } from "framer-motion"

interface IHeader{
  userFirstName: String | undefined
}

/* Framer Motion config */
const headerVariants = {
  initial:{
    opacity:0,
  },
  animate:{
    opacity: 1,
    transition:{
      type: 'tween',
      ease: 'easeInOut',
      duration: 1.25,
      when: '',
    }
  }
}

const Header = ({userFirstName}:IHeader) => {
  
  return (
    <motion.div className="font-semi-bold font-sans text-left"
      variants={headerVariants}
      initial={'initial'}
      animate={'animate'}
    >
        <h1 className="text-2xl md:text-4xl pt-2 pb-1">Hey, {userFirstName}.</h1>
        <p className=" text-gray-600 text-md md:text-xl pt-1 pb-2">Here are your tasks for today.</p>
    </motion.div>
  )
}

export default Header