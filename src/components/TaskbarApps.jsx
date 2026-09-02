import { Apps } from "../config/apps";

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
  return(
    <div className="taskbar-app-container">
      <div className="taskbar-app-icon">
        {appData.icon}
      </div>
      <div className="taskbar-app-instances-container">
        {appInstances.map((instance)=>(
          <div className="taskbar-app-instance"></div>
        ))}
      </div>

    </div>
  )
}