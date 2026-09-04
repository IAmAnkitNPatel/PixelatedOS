import HomeAppShell from "./HomeAppShell";

export default function TaskbarHoverPreview({appInstance}){
  console.log("preview of", appInstance);
  return(
    <HomeAppShell
      id={appInstance.id}
      appInstance={appInstance}
      isPreview={true}
    />
  )
}