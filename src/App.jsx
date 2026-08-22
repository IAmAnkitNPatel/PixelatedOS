import './index.css';
import DesktopIcon from './components/DesktopIcons';
import HomeAppShell from './components/HomeAppShell';
import { useState } from 'react';

export default function App() {

  const handleOpenHomeExplorer = () => {
    alert("Opening Home Explorer!");
  };

  const [isOpen, SetIsOpen] = useState(false);


  return (
    <div className="desktop">
      <div className="workspace">
        <DesktopIcon
          name="Home Explorer"
          icon="🏠"
          // openApp={handleOpenHomeExplorer}
          openApp={() => SetIsOpen(true)}
        />

        {isOpen && (
          <HomeAppShell
            appName="Home Explorer"
            closeApp={() => SetIsOpen(false)}
          />
        )}
        
      </div>
    </div>
  );
}