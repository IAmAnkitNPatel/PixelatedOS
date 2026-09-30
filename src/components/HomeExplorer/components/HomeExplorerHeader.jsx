export default function HomeExplorerHeader() {
  return(
    <div className="home-explorer-header">
      <button className="back-arrow-button">←</button>
      <button className="forward-arrow-button">→</button>
      <div className="navigation-history">Navigation History:</div>
      
      <button className="new-room-button">New Room</button>
      <button className="delete-button">Delete</button>
      <button className="copy-button">Copy</button>
      <button className="cut-button">Cut</button>
      <button className="paste-button">Paste</button>
      <button className="rename-button">Rename</button>
    </div>
  );
}