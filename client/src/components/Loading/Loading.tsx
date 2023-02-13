import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  let [loading, setLoading] = useState(true);

  return (
    <div className="flex justify-center items-center">
      <div className="flex-col pt-40">
        <ClipLoader 
          loading={loading} 
          size={70}
          color={'red'}
        />
        <p className="pt-2 text-lg ">Loading... </p>
      </div>
      
    </div>
  )
}

export default Loading