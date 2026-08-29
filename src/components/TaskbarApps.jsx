export default function TaskbarApps(app) {
  console.log("opened App", app);
  return(
    <div className="taskbar-app-container">
      <div className="taskbar-app-icon">
        
      </div>
      <div className="taskbar-app-instance"></div>
    </div>
  )
}