import { Apps } from "../config/apps";
import TaskbarHoverPreview from "./TaskbarHoverPreview";
import { useState } from "react";

export default function TaskbarApps({appId, appInstances}) {
  // console.log("opened App", app);
  // console.log("", app.icon)
  // console.log(Apps);
  // const found = Apps.find(a => a.id === app.id); this is for array
  // const found
  // console.log("found : ", found);
  console.log("appId", appId)
  console.log("appInstances ", appInstances);
  const appData = Apps[appId];
  // console.log("found" ,found);
  // console.log(found.icon);



  const [isHovered, setIsHovered] = useState(false);

  return(
    <div className="taskbar-app-container"
      onMouseEnter={()=> {setIsHovered(true)}}
      onMouseLeave={()=> {setIsHovered(false)}}
    >
      <div className="taskbar-app-icon"
      >
        {appData.icon}
      </div>
      {isHovered &&(
        <div className="taskbar-app-instances-container">
        {appInstances.map((instance)=>(
          <div 
            key={instance.id}
            className="taskbar-app-instance">
              <TaskbarHoverPreview
                appId={instance.id}
                appInstance={instance}
              />
          </div>
        ))}
      </div>

      )}
      
    </div>
  )
}