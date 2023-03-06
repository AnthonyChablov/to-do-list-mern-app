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

const nameVariants = {
  initial:{
    opacity:0,
  },
  animate:{
    opacity: 1,
    transition:{
      type: 'tween',
      ease: 'easeInOut',
      duration: .75,
      when: '',
    }
  }
}

const Header = ({userFirstName}:IHeader) => {
  
  return (
    <div className="font-semi-bold font-sans text-left ">
      <motion.h1 className="text-2xl md:text-4xl pt-2 pb-1 flex"
        variants={headerVariants}
        initial={'initial'}
        animate={'animate'}
      >Hey, 
        <motion.p
          variants={nameVariants}
          initial={'initial'}
          animate={'animate'}
        >{'\xa0'+ `${userFirstName === undefined ? '' : userFirstName + '.'}`}</motion.p>
      </motion.h1>
      <motion.p className=" text-gray-600 text-md md:text-xl pt-1 pb-2 dark:text-gray-100"
         variants={headerVariants}
         initial={'initial'}
         animate={'animate'}
      >
        Here are your tasks for today.
      </motion.p>
    </div>
  )
}

export default Header