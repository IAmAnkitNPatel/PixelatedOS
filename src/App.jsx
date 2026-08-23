import './index.css';
import DesktopIcon from './components/DesktopIcons';
import HomeAppShell from './components/HomeAppShell';
import { useState } from 'react';

export default function App() {

  

  // const [isOpen, setIsOpen] = useState(false);

  const [openApps, setOpenApps] = useState([]);

  const handleOpenHomeExplorer = () => {
    // alert("Opening Home Explorer!");

    const newInstance = {
      id: crypto.randomUUID(),
      appName: 'Home Explorer'
    };
    setOpenApps((prev) => [...prev, newInstance]);
  };

  const handleCloseHomeExplorer = (idToClose) => {
    setOpenApps((prev) => prev.filter((app) => app.id !== idToClose));
  };




  return (
    <div className="desktop">
      <div className="workspace">
        <DesktopIcon
          name="Home Explorer"
          icon="🏠"
          openApp={handleOpenHomeExplorer}
          // openApp={() => setIsOpen(true)}
        />

        {/* {isOpen && (
          <HomeAppShell
            appName="Home Explorer"
            closeApp={() => setIsOpen(false)}
          />
        )} */}

        {openApps.map((app) => (
          <HomeAppShell
            key={app.id}
            appName={app.appName}
            closeApp={() => handleCloseHomeExplorer(app.id)}
          />
        ))}
        
      </div>
    </div>
  );
}