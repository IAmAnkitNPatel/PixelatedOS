import { addAppToTaskbar } from "./taskbar.js";


// code for double clicking on "Home" icon to open "Home" and clicking "x" for closing "Home"
function homeIconDoubleClick(e) {
  
  const workspace = document.querySelector('.workspace');

  const newHomeContainerDiv =  document.createElement('div');
  newHomeContainerDiv.classList.add('home-container');
  
  const homeHeaderDiv = document.createElement('div');
  homeHeaderDiv.classList.add('home-header');

  const homeTitleSpan = document.createElement('span');
  homeTitleSpan.textContent = "Home";
  homeTitleSpan.classList.add('home-title');

  const headerButtonSpan = document.createElement('span');
  headerButtonSpan.classList.add('header-button-span');

  const minimizeButton = document.createElement('button');
  minimizeButton.textContent = "▼";
  minimizeButton.classList.add('minimize-button');

  const maximizeButton = document.createElement('button');
  maximizeButton.textContent = "▣";
  maximizeButton.classList.add('maximize-button');

  const closeButton = document.createElement('button');
  closeButton.textContent = "✖";
  closeButton.classList.add('close-button');

  const taskbarAppSpan = addAppToTaskbar(e, newHomeContainerDiv);

  closeButton.addEventListener('click', ()=>{
    newHomeContainerDiv.remove();
    taskbarAppSpan.remove();
  });

  headerButtonSpan.append(minimizeButton, maximizeButton, closeButton);
  homeHeaderDiv.append(homeTitleSpan, headerButtonSpan);
  newHomeContainerDiv.append(homeHeaderDiv);
  workspace.append(newHomeContainerDiv);

  //
  homeHeaderDiv.addEventListener('mousedown', moveHome);
  newHomeContainerDiv.addEventListener('click', bringOnTop);

  bringOnTop(newHomeContainerDiv);

  maximizeButton.addEventListener('click', maximize);
  minimizeButton.addEventListener('click', ()=>{
    minimize(newHomeContainerDiv);
  });

  
  taskbarAppSpan.addEventListener('click', ()=>{
    minimize(newHomeContainerDiv);
  });

}

const homeIcon = document.querySelector('.home-icon')
homeIcon.addEventListener('dblclick', homeIconDoubleClick);

//code for moving "Home" across desktop

function moveHome(e) {
  
    //e is event

  const homeContainer = e.target.closest('.home-container')
  if (e.target.classList.contains('close-button') || homeContainer.classList.contains('maximize')) {
    return;
  }

  


  //Pos of Cursor on Home = mouse position - home position
  let cursorPosOnHomeXaxis = e.clientX - homeContainer.offsetLeft;
  let cursorPosOnHomeYaxis = e.clientY - homeContainer.offsetTop;



  function onMouseMove(e) {
    homeContainer.style.left = (e.clientX - cursorPosOnHomeXaxis) + 'px';
    homeContainer.style.top = (e.clientY - cursorPosOnHomeYaxis) + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  function onMouseUp(e) {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mouseup', onMouseUp);

  
}

// Z-index to put element on top
let highestZIndex = 100

function bringOnTop(e) {
  const homeContainer = (e.target) ? e.target.closest('.home-container') : e;
  highestZIndex++;
  homeContainer.style.zIndex = highestZIndex; 
}

// Maximize Button
function maximize(e) {
  const homeContainer = e.target.closest('.home-container')
  if (!homeContainer.classList.contains('maximize')) {
    homeContainer.classList.add('maximize');
  } else {
    homeContainer.classList.remove('maximize');
  }
}

// Minimize Button
function minimize(homeContainer){
  if (!homeContainer.classList.contains('minimize')) {
    homeContainer.classList.add('minimize');
  } else {
    bringOnTop(homeContainer);
    homeContainer.classList.remove('minimize');
  }
}