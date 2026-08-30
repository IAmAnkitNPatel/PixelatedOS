export default function DesktopIcon(props) {
  return (
    <div className="home-icon" onDoubleClick={props.openApp}>
      <div className="icon-image">{props.app.icon}</div>
      <div className="icon-name">{props.app.name}</div>
    </div>
  );
}