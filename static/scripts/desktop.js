// code for double clicking on "Home" icon to open "Home" and clicking "x" for closing "Home"
function homeIconDoubleClick() {
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

  closeButton.addEventListener('click', ()=>{
    newHomeContainerDiv.remove();
  });

  headerButtonSpan.append(minimizeButton, maximizeButton, closeButton);
  homeHeaderDiv.append(homeTitleSpan, headerButtonSpan);
  newHomeContainerDiv.append(homeHeaderDiv);
  workspace.append(newHomeContainerDiv);

  //
  homeHeaderDiv.addEventListener('mousedown', moveHome);
  newHomeContainerDiv.addEventListener('click', bringOnTop);

  bringOnTop(newHomeContainerDiv);
}

const homeIcon = document.querySelector('.home-icon')
homeIcon.addEventListener('dblclick', homeIconDoubleClick);

//code for moving "Home" across desktop

function moveHome(e) {

  //e is event
  if (e.target.classList.contains('close-button')) {
    return;
  }

  const homeContainer = e.target.closest('.home-container')

  
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