import HomeExplorerHeader from "./components/HomeExplorerHeader";
import HomeExplorerBody from "./components/HomeExplorerBody";
import { useState } from "react";
import { homeExplorerData } from "../../../Home_Explorer/home_explorer_data";

export default function HomeExplorer() {

  const [currentRoom, setCurrentRoom] = useState(homeExplorerData);

  const handleCurrentRoom = (room)=>{
    setCurrentRoom(room);
    console.log("currentRoom: ",currentRoom);
    // handleNavigationHistory(currentRoom);
    // console.log("After");
  };

  const [navigationHistory, setNavigationHistory] = useState([]);

  const handleNavigationHistory = (currentRoom) =>{
    setNavigationHistory(prevNavigationHistory => [...prevNavigationHistory, currentRoom])

    console.log("navigationHistory: ", navigationHistory);
  };

  return(
    
    <div className="home-explorer">
      <HomeExplorerHeader
        currentRoom = {currentRoom}
        handlecurrentRoom = {handleCurrentRoom}
        setCurrentRoom ={setCurrentRoom}
      />
      <HomeExplorerBody
        handleNavigationHistory = {handleNavigationHistory}
      />
    </div>
    
  );
}