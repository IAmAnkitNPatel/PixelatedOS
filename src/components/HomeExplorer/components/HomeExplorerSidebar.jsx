import { homeExplorerData } from "../../../../Home_Explorer/home_explorer_data";
import { Children, useState } from "react";

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

  

  const renderSidebarItems1 = (children)=>{
    isRoomIdInExpandList = children || expandList.includes(homeExplorerData.id);
    console.log("children", children);
    return (
      <div>
        <span onClick={()=>{
          // isRoomIdInExpandList = expandList.includes(homeExplorerData.id)
          !children ?
          handleSetExpandList(homeExplorerData.id)
          :
          (children.map((child)=>{
            handleSetExpandList(child.id);
          }));

          console.log("expandList", expandList);
          console.log("isRoomIdInExpandList", isRoomIdInExpandList);
          
          

          !children ?
          renderSidebarItems(homeExplorerData.children)
          :
          (children.map((child)=>{
            renderSidebarItems(child.children);
          }));

        }}>{!isRoomIdInExpandList ? "▶" : "▼"}</span>
        <span>
          {
            // !children?
            homeExplorerData.name
            // :
            
          }
        </span>
      </div>
      
    )
  };

  // const [isRoomIdInExpandList, setIsRoomIdInExpandList] = useState(null);
  let isRoomIdInExpandList;

  const handleSetExpandList1 = (roomId)=>{
    
    // const roomIdIndex = expandList.indexOf(roomId);

    // isRoomIdInExpandList = expandList.includes(roomId)
    
    // console.log("isRoomIdInExpandList", isRoomIdInExpandList);

    // setIsRoomIdInExpandList(expandList.includes(roomId));

    console.log("isRoomIdInExpandList", isRoomIdInExpandList);

    if(!isRoomIdInExpandList){
      setExpandList(prev => [...prev, roomId]);
      // console.log("expandList", expandList);
    }

    
  };

  const renderSidebarItems = () =>{
    return (
      <div>
      {<span>"▶"</span>}
        <span></span>
      </div>
    )
  }

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