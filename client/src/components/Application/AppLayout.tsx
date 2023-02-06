import Header from "./Header/Header";
import Card from "./Card/Card";
import Toolbar from "./Toolbar/Toolbar";

const AppLayout = () => {
  return (
    <div className=" h-screen px-7 pt-5">
      <div className="">
        <Header/>
      </div>
      
      {/* 
        TODO 

        Make API call and retrieve all TODOS
        
        Create Card component responsioble for displaying the data, 
        
        Create Tool bar with: 
        1. Clickable button that display Modal
        2. Modal contains Form with PARAMS that POSTS to DB with newly created TODO 
      */}

    </div>
  )
}

export default AppLayout