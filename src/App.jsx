import './index.css';
import DesktopIcon from './components/DesktopIcons';
import HomeAppShell from './components/HomeAppShell';
import { useState } from 'react';

export default function App() {
  

  // const [isOpen, setIsOpen] = useState(false);

  const [openApps, setOpenApps] = useState([]);

  const handleOpenHomeExplorer = () => {
    // alert("Opening Home Explorer!");

    const offset = (openApps.length % 10)*25;

    
    console.log(100 + offset)
    const newInstance = {
      id: crypto.randomUUID(),
      appName: 'Home Explorer',
      initialPosition: {
        x: 100 + offset, 
        y: 100 + offset
      }
    };
    setOpenApps((prev) => [...prev, newInstance]);
  };

  const handleCloseHomeExplorer = (idToClose) => {
    setOpenApps((prev) => prev.filter((app) => app.id !== idToClose));
  };




  return (
    <>
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
              initialPosition={app.initialPosition}
            />
          ))}
          
        </div>
      </div>
      <div className='taskbar'>
        <div className="taskbar-left-section"></div>
        <div className="taskbar-middle-section"></div>
        <div className="taskbar-right-section"></div>

      </div>
    </>
  );
}