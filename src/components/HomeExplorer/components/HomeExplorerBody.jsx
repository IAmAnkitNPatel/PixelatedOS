import HomeExplorerSidebar from "./HomeExplorerSidebar";
import HomeExplorerWorkspace from "./HomeExplorerWorkspace";

export default function HomeExplorerBody() {
  return(
    <div className="home-explorer-body">
      <HomeExplorerSidebar/>
      <HomeExplorerWorkspace/>
    </div>
  );
}