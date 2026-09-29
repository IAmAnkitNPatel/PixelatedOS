import { homeExplorerData } from "../../../../Home_Explorer/home_explorer_data";
import { useState } from "react";

export default function HomeExplorerWorkspace() {
  console.log(homeExplorerData);
  // const currentRoom = homeExplorerData;

  const [currentRoom, setCurrentRoom] = useState(homeExplorerData);

  return(
    <div className="home-explorer-workspace">
      {/* {if(child) {
          <div>Empty</div>
        }} */
        currentRoom.children.length === 0 
        ? 
        <div>Empty</div> 
        :
        currentRoom.children.map((child) => (
        <div key={child.id}
          onDoubleClick={() => {
            console.log(child);
            setCurrentRoom(child);
          }}
        >{child.name}</div>
        
      ))
      }
      
    </div>
  );
}