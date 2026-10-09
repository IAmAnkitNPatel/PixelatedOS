import HomeExplorerSidebar from "./HomeExplorerSidebar";
import HomeExplorerWorkspace from "./HomeExplorerWorkspace";

export default function HomeExplorerBody(props) {
  return(
    <div className="home-explorer-body">
      <HomeExplorerSidebar/>
      <HomeExplorerWorkspace
        handleNavigationHistory = {props.handleNavigationHistory}
      />
    </div>
  );
}