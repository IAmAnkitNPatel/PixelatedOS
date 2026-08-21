import './index.css';
import DesktopIcon from './components/DesktopIcons';
import HomeAppShell from './components/HomeAppShell';

export default function App() {

  const handleOpenHomeExplorer = () => {
    alert("Opening Home Explorer!");
  };

  return (
    <div className="desktop">
      <div className="workspace">
        <DesktopIcon
          name="Home Explorer"
          icon="🏠"
          openApp={handleOpenHomeExplorer}
          // openApp={HomeAppShell}
        />

        <HomeAppShell appName="Home Explorer"/>
      </div>
    </div>
  );
}