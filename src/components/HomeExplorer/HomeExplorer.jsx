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

  const handleDeleteButton1 = () =>{
    if(!selectedObject){
      alert("No Object Selected!!!");
      return;
    }
    console.log("Delete: ", selectedObject);
    let newArray = [...currentRoom.children]
    console.log("newArray before .filter", newArray);
    newArray = newArray.filter((room)=>
      room.id !== selectedObject.id
    );
    console.log("newArray after .filter", newArray);

    // setCurrentRoom((currentRoom)=>({
    //   ...currentRoom,
    //   children: newArray
    // }));
    // const key = selectedObject;
    let dataCurrentRoom = homeExplorerData;
    let currentRoomData = (currentRoom) => {

    }

    let node = homeExplorerData;
    const key = currentRoom;

    const findRoom = (node, key) =>{
      if (node.id === key.id){
        return node;
      }
      
      if(node.children && node.children.length > 0){
        // node = node.children;
        for (const child of node.children) {
          const found = findRoom(child, key);
          if(found) {
            return found;
          }
        }
      } 
    }
    const currentRoomInData = findRoom(node, key);
    // console.log("delObj", delObj);
    console.log("found findCurrentRoom" ,currentRoomInData);

    /*
    const updatedFindCurrentRoom = findCurrentRoom.children.filter((child)=>{
      return child.id !== selectedObject.id
    });
  
    console.log("updatedFindCurrentRoom", updatedFindCurrentRoom);

    findCurrentRoom.children = updatedFindCurrentRoom;
*/
    const updatedCurrentRoomTree ={
      ...currentRoomInData,
      children: currentRoomInData.children.filter((child)=> {
        return child.id !== selectedObject.id
      })
    }
    // findCurrentRoom = updatedCurrentRoomTree;
    console.log("updatedCurrentRoomTree", updatedCurrentRoomTree)
    
    setCurrentRoom(updatedCurrentRoomTree);
    console.log("homeExplorerData", homeExplorerData);
    // findCurrentRoom ={...prev,
    //   children: updatedFindCurrentRoom 
    // };

    // console.log("homeExplorerData", homeExplorerData);
    // setCurrentRoom(currentRoom);
    setSelectedObject(null);
  };

  const handleDeleteButton = () =>{
    if(!selectedObject){
      alert("No Object Selected!!!");
      return;
    }
    console.log("Delete: ", selectedObject);

    const findRoomInData = (node, key) =>{
      if (node.id === key.id){
        return node;
      }

      if(node.children && node.children.length > 0){
        // node = node.children;
        for (const child of node.children) {
          const found = findRoom(child, key);
          if(found) {
            return found;
          }
        }
      } 
    }
    const currentRoomInData = findRoomInData(homeExplorerData, currentRoom);

    console.log("found currentRoomInData" ,currentRoomInData);

    
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

        handleDeleteButton = {handleDeleteButton}
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