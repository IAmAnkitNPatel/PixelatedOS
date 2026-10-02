import HomeExplorerHeader from "./components/HomeExplorerHeader";
import HomeExplorerBody from "./components/HomeExplorerBody";
import { useState } from "react";
import { homeExplorerData } from "../../../Home_Explorer/home_explorer_data";

export default function HomeExplorer() {

  const [currentRoom, setCurrentRoom] = useState(homeExplorerData);

  const handleCurrentRoom = (room)=>{
    setCurrentRoom(room);
    console.log("currentRoom: ",currentRoom);
  };
  return(
    
    <div className="home-explorer">
      <HomeExplorerHeader
        
        handlecurrentRoom = {handleCurrentRoom}
      />
      <HomeExplorerBody/>
    </div>
    
  );
}