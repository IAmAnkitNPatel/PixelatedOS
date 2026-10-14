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
    // setNavigationHistory(prevNavigationHistory => [...prevNavigationHistory, currentRoom])
    // console.log("navigationHistory: ", navigationHistory);

    const updatedNavigationHistory = [...navigationHistory, currentRoom];
    setNavigationHistory(updatedNavigationHistory);

    console.log("navigationHistory: ", updatedNavigationHistory);
  };

  const handleBackButton = () =>{
    const currentRoomIndex = navigationHistory.indexOf(currentRoom)
    const previousRoomIndex = currentRoomIndex - 1;
    console.log("currentRoomIndex", currentRoomIndex);
    console.log("previousRoomIndex", previousRoomIndex);
    const previousRoom = navigationHistory[previousRoomIndex];
    console.log("previousRoom", previousRoom);
    console.log("navigationHistory", navigationHistory);
    // setCurrentRoom();
  }

  return(
    
    <div className="home-explorer">
      <HomeExplorerHeader
        currentRoom = {currentRoom}
        handlecurrentRoom = {handleCurrentRoom}
        setCurrentRoom ={setCurrentRoom}
        handleBackButton ={handleBackButton}
        // navigationHistory ={navigationHistory}
      />
      <HomeExplorerBody
        handleNavigationHistory = {handleNavigationHistory}
        handleCurrentRoom = {handleCurrentRoom}
        currentRoom = {currentRoom}
      />
    </div>
    
  );
}