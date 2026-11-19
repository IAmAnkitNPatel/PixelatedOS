import { homeExplorerData } from "../../../../Home_Explorer/home_explorer_data";

export default function HomeExplorerSidebar() {

  const handleSidebarChildrenToggle =()=>{

  };

  const handleExpand = (room)=>{
    room.children.map((child, index)=>(
      <div key={index}>{child.name}</div>
    ))
    
  }

  return(
    <div className="home-explorer-sidebar">
      <div>{homeExplorerData.name}</div>

      {/* {homeExplorerData.children.map((child, index) => (
      <div key={index}>{child.name}</div>  
    ))} */}
    </div>
  );
}