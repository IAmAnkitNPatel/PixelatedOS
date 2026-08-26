import { useState, useEffect } from 'react';

export default function HomeAppShell (props) {
  
  const startX = props.initialPosition.x;
  const startY = props.initialPosition.y;

  // console.log("homeappshell corrdinates", startX, startY);

  const [position, setPosition] = useState(props.initialPosition);

  const [isDragging, setIsDragging] = useState(false);
  
  const [dragOffset, setDragOffset] = useState({
    x: 0,
    y: 0
  });

  const handleMouseDown = (e)=>{
    setIsDragging(true);

    console.log("setIsDragging = ", isDragging);

    // offset is basically distance between the cursor and topleft position of HomeAppShell
    // Offset is the pixel distance between the mouse cursor and the top-left corner of the window at the moment of click

    console.log("coordinates")
    console.log(e.clientX);
    console.log(e.clientY);
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;

    setDragOffset({
      x: offsetX,
      y: offsetY
    });
  };

  useEffect(()=> {
    const handleMouseMove = (e)=>{
      if(!isDragging) return;

      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
    
    const handleMouseUp = ()=>{
      setIsDragging(false);
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);


  return (
    <div
      className="home-app-shell"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      <div
        className="shell-header" 
        onMouseDown={handleMouseDown}
      >
        <div className="shell-header-title">{props.appName}</div>
        <div className="shell-header-buttons">
          <div className="shell-minimize-button">▼</div>
          <div className="shell-maximize-button">▣</div>
          <div className="shell-close-button"
            onClick={props.closeApp}
            onMouseDown={(e)=> e.stopPropagation()}
          >✖</div>
        </div>
      </div>
      <div className="shell-body"></div>
    </div>
  );
}