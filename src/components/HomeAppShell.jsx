export default function HomeAppShell (props) {
  return (
    <div className="home-app-shell">
      <div className="shell-header">
        <div className="shell-header-title">{props.appName}</div>
        <div className="shell-header-buttons">
          <div className="shell-minimize-button">▼</div>
          <div className="shell-maximize-button">▣</div>
          <div className="shell-close-button"
            onClick={props.closeApp}
          >✖</div>
        </div>
      </div>
      <div className="shell-body"></div>
    </div>
  );
}