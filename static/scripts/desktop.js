// code for double clicking on "Home" icon to open "Home" and clicking "x" for closing "Home"
function homeIconDoubleClick() {
  const workspace = document.querySelector('.workspace');

  const newHomeContainerDiv =  document.createElement('div');
  newHomeContainerDiv.classList.add('home-container');
  
  const homeHeaderDiv = document.createElement('div');
  homeHeaderDiv.classList.add('home-header');

  const homeTitleSpan = document.createElement('span');
  homeTitleSpan.textContent = "Home";
  homeTitleSpan.classList.add('home-title')
  const closeButton = document.createElement('button');
  closeButton.textContent = "x";
  closeButton.classList.add('close-button')

  closeButton.addEventListener('click', ()=>{
    newHomeContainerDiv.remove();
  });

  homeHeaderDiv.append(homeTitleSpan, closeButton)
  newHomeContainerDiv.append(homeHeaderDiv)
  workspace.append(newHomeContainerDiv);
}

const homeIcon = document.querySelector('.home-icon')
homeIcon.addEventListener('dblclick', homeIconDoubleClick);