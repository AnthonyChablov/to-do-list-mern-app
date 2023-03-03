import { useState } from "react";
import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";

const loadingVariants = {
  initial:{
    opacity:0
  },
  animate:{
    opacity: 1,
    transition:{
      type:'tween',
      ease:'easeInOut',
      duration: 0.2,
      when: ''
    }
  },
}

const Loading = () => {
  let [loading, setLoading] = useState(true);

  return (
    <div className="flex justify-center items-center dark:bg-zinc-800 h-screen" >
      <motion.div className="flex-col  "
        variants={loadingVariants}
        initial='initial'
        animate='animate'
      >
        <ClipLoader 
          loading={loading} 
          size={70}
          color={'red'}
        />
        <p className="pt-2 text-lg dark:text-gray-100">Loading... </p>
      </motion.div>
    </div>
  )
}

export default Loading