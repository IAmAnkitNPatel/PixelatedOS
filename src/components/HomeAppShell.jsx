export default function HomeAppShell ({appName}) {
  return (
    <div className="home-app-shell">
      <div className="shell-header">
        <div className="shell-header-title">{appName}</div>
        <div className="shell-header-buttons">
          <div className="shell-minimize-button">▼</div>
          <div className="shell-maximize-button">▣</div>
          <div className="shell-close-button">✖</div>
        </div>
      </div>
      <div className="shell-body"></div>
    </div>
  );
}