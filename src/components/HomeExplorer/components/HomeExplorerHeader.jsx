import { homeExplorerData } from "../../../../Home_Explorer/home_explorer_data";
import { useState } from "react";

export default function HomeExplorerHeader(props) {

  // const [navigationHistory, addNavigationHistory] = useState()

  const handleNewRoomButtonClick = () => {

    let newRoomName = prompt("Enter New Room Name: ");

    if(newRoomName){
      newRoomName = newRoomName.trim();
    }
    let newRoomCount = 0;

    if(!newRoomName){
      newRoomName = "New Room";
      console.log("props.currentRoom.children", props.currentRoom.children);
      props.currentRoom.children.forEach((child) =>{
        if(child.name.startsWith("New Room")){
          newRoomCount++;
        }
      });
      console.log("newRoomCount", newRoomCount)
      if(newRoomCount>=1){
        newRoomName = `New Room ${newRoomCount+1}`;
      }
    }

    const newRoom = {
      id: crypto.randomUUID(),
      type: "room",
      name: newRoomName,
      children: []
    };

    // const existingChildren = props.currentRoom.children;
    // const updatedChildren = [...existingChildren, newRoom]
    // const updatedRoom = {
    //   ...(props.currentRoom),
    //   children: updatedChildren
    // }

    const newArray =  [...props.currentRoom.children, newRoom]
    // console.log(newArray);
    // props.currentRoom.children = newArray;

    const newCurrentRoom = {...props.currentRoom};
    newCurrentRoom.children.push(newRoom);
    // console.log(newCurrentRoom);
    props.setCurrentRoom(newCurrentRoom);
    console.log("homeExplorerData-: ", homeExplorerData);
  };

  // const handleBackButton = () =>{
  //   const currentRoomIndex = props.navigationHistory.indexOf(props.currentRoom)
  //   const previousRoomIndex = currentRoomIndex - 1;
  //   console.log("currentRoomIndex", currentRoomIndex);
  //   console.log("previousRoomIndex", previousRoomIndex);
  // }

  console.log(props);
  return(
    <div className="home-explorer-header">
      <button className="back-arrow-button"
        onClick={()=> props.handleBackButton()}
      >←</button>
      <button className="forward-arrow-button"
        onClick={()=> props.handleForwardButton()}
      >→</button>
      <div className="navigation-history">Navigation History:</div>
      
      <button className="new-room-button"
        onClick={()=>{
          // const newRoom = {
          //   id: "random",
          //   type: "room",
          //   name: "new room",
          //   children: []
          // };
          // props.currentRoom.children.push(newRoom);

          handleNewRoomButtonClick();
        }}
      >New Room</button>
      <button className="delete-button">Delete</button>
      <button className="copy-button">Copy</button>
      <button className="cut-button">Cut</button>
      <button className="paste-button">Paste</button>
      <button className="rename-button">Rename</button>

      {/* <button onClick={}></> */}
    </div>
  );
}