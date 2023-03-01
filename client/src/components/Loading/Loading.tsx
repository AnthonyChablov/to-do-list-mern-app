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
    <motion.div className="flex justify-center items-center"
      variants={loadingVariants}
      initial='initial'
      animate='animate'
    >
      <div className="flex-col pt-40">
        <ClipLoader 
          loading={loading} 
          size={70}
          color={'red'}
        />
        <p className="pt-2 text-lg ">Loading... </p>
      </div>
      
    </motion.div>
  )
}

export default Loading