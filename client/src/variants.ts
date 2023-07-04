import { Variants } from "framer-motion"

/* framer-motion config */
export const buttonVariants : Variants={
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{
            type: 'tween',
            ease: 'easeInOut',
            duration: .375,
            when: '',
        }
    },
}
  
export const noTaskVariants : Variants={
    initial:{
        y:-12,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            type: 'tween',
            ease: 'easeInOut',
            duration: .40,
            when: '',
        }
    },
}

