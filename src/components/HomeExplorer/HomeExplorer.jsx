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

  const handleRoomDoubleClick = (room) =>{
    setCurrentRoom(room);
    handleNavigationHistory(room);
  }

  const [navigationHistory, setNavigationHistory] = useState([homeExplorerData]);
  // console.log("navigationHistory", navigationHistory);
  const handleNavigationHistory = (room) =>{
    // setNavigationHistory(prevNavigationHistory => [...prevNavigationHistory, currentRoom])
    // console.log("navigationHistory: ", navigationHistory);

    console.log("navigationHistory before splice: ", [...navigationHistory]);
    console.log("currentRoom", currentRoom);
    console.log("room", room);
    // const currentRoomIndex = navigationHistory.indexOf(currentRoom);
    const currentRoomIndex = navigationHistory.findIndex((room)=> room.id === currentRoom.id);
    console.log("currentRoomIndex", currentRoomIndex);
    navigationHistory.splice(currentRoomIndex+1);
    console.log("navigationHistory after splice: ", navigationHistory);
    const updatedNavigationHistory = [...navigationHistory, room];
    setNavigationHistory(updatedNavigationHistory);

    console.log("navigationHistory: ", updatedNavigationHistory);
  };

  const handleBackButton = () =>{
    const currentRoomIndex = navigationHistory.indexOf(currentRoom);
    const previousRoomIndex = currentRoomIndex - 1;
    if (previousRoomIndex>=0){
      console.log("currentRoomIndex", currentRoomIndex);
      console.log("previousRoomIndex", previousRoomIndex);
      const previousRoom = navigationHistory[previousRoomIndex];
      console.log("previousRoom", previousRoom);
      console.log("navigationHistory", navigationHistory);
      setCurrentRoom(previousRoom);  
    }
  }

  const handleForwardButton = ()=>{
    const currentRoomIndex = navigationHistory.indexOf(currentRoom);
    const forwardRoomIndex = currentRoomIndex + 1;

    const navigationHistoryLength = navigationHistory.length;
    console.log("navigationHistoryLength", navigationHistoryLength);
    if(forwardRoomIndex < navigationHistoryLength){
      const forwardRoom = navigationHistory[forwardRoomIndex];
      console.log("forwardRoomIndex", forwardRoomIndex);
      console.log("forwardRoom", forwardRoom);
      setCurrentRoom(forwardRoom);
    }
  }

  const [selectedObject, setSelectedObject] = useState();

  const handleSelectObject = (event, child) =>{
    // const selectedObject = event.target;
    // console.log("selectedObject", selectedObject);
    // console.log("event.target", event.target);
    // console.log("child", child);
    const selectedObject = child;
    setSelectedObject(selectedObject);
    console.log("selectedObject", selectedObject);
  };

  const handleDeleteButton = () =>{
    console.log("Delete: ", selectedObject);
  };

  return(
    
    <div className="home-explorer">
      <HomeExplorerHeader
        currentRoom = {currentRoom}
        handlecurrentRoom = {handleCurrentRoom}
        setCurrentRoom ={setCurrentRoom}
        handleBackButton ={handleBackButton}
        // navigationHistory ={navigationHistory}
        handleForwardButton = {handleForwardButton}
      />
      <HomeExplorerBody
        handleNavigationHistory = {handleNavigationHistory}
        handleCurrentRoom = {handleCurrentRoom}
        currentRoom = {currentRoom}
        handleRoomDoubleClick ={handleRoomDoubleClick}
        handleSelectObject ={handleSelectObject}
      />
    </div>
    
  );
}