import { homeExplorerData } from "../../../../Home_Explorer/home_explorer_data";

export default function HomeExplorerHeader(props) {

  console.log(props);
  return(
    <div className="home-explorer-header">
      <button className="back-arrow-button">←</button>
      <button className="forward-arrow-button">→</button>
      <div className="navigation-history">Navigation History:</div>
      
      <button className="new-room-button"
        onClick={()=>{
          const newRoom = {
            id: "drive-c",
            type: "room",
            name: "new room",
            children: []
          };
          props.currentRoom.children.append(newRoom);
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