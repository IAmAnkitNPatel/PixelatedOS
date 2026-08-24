export default function HomeAppShell (props) {

  const startX = props.initialPosition.x;
  const startY = props.initialPosition.y;

  console.log("homeappshell corrdinates", startX, startY);
  return (
    <div
      className="home-app-shell"
      style={{
        position: 'absolute',
        left: `${startX}px`,
        top: `${startY}px`
      }}
    >
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