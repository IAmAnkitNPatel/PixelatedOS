import { homeExplorerData } from "../../../../Home_Explorer/home_explorer_data";
import { useState } from "react";

export default function HomeExplorerSidebar() {

  const [expandList, setExpandList] = useState([]);

  const handleSidebarChildrenToggle =()=>{

  };

  console.log("homeExplorerData", homeExplorerData);
  const handleExpand = ( event)=>{
    // console.log("handleExpand");
    // if(room===homeExplorerData){
    //   return <div>{room.name}</div>
    // }
    // room.children.map((child, index)=>(
    //   <div key={index}>{child.name}</div>
    // ))

    console.log(event.target.innerText);
    console.log(event.target.nextElementSibling)
    if(event.target.innerText===">"){
      event.target.innerText = "🔽"
    } else if(event.target.innerText==="🔽"){
      event.target.innerText = ">"
    }
    
  }

  const renderSidebarItems = ()=>{
    return (
      <div>
        <span onClick={()=>{
          // remove if already have it
          setExpandList(prev => [...prev, homeExplorerData.id]);
          console.log("expandList", expandList);
        }}>{"▶"}</span>
        <span>{homeExplorerData.name}</span>
      </div>
    )
  };

  return(
    <div className="home-explorer-sidebar">
      {renderSidebarItems()}

      {/* <div> */}
        {/* <span onClick={()=>{ */}
          {/* handleExpand( event); */}
        {/* }}>{">"}</span> */}
        {/* <span>{homeExplorerData.name}</span> */}
        {/* {handleExpand(homeExplorerData)} */}
        {/* {handleExpand(homeExplorerData.children)} */}
      {/* </div> */}

      {/* {homeExplorerData.children.map((child, index) => (
      <div key={index}>{child.name}</div>  
    ))} */}
    </div>
  );
}