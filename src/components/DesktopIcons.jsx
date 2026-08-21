export default function DesktopIcon({ name, icon, openApp }) {
  return (
    <div className="home-icon" onDoubleClick={openApp}>
      <div className="icon-image">{icon}</div>
      <div className="icon-name">{name}</div>
    </div>
  );
}