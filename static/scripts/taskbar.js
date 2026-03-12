export function addAppToTaskbar (event, homeContainer) { 
  const taskbarAppSpan = document.createElement('span');
  taskbarAppSpan.classList.add('taskbar-app');

  //change this from home-icon to whatever app is clicked
  const homeIcon = event.target.closest('.home-icon')
  const iconImage = homeIcon.querySelector('.icon-image');

  const iconImageCopy = iconImage.cloneNode(true);
  iconImageCopy.classList.remove('icon-image');
  
  taskbarAppSpan.append(iconImageCopy);

  const taskbarMiddleSection = document.querySelector('.taskbar-middle-section');

  taskbarMiddleSection.append(taskbarAppSpan);

  // taskbarAppHover(homeContainer, taskbarAppSpan)
  return taskbarAppSpan;
}

// function taskbarAppHover (homeContainer, taskbarAppSpan) {
//   const homeContainerCopy = homeContainer.cloneNode(true);
//   homeContainerCopy.classList.remove('home-container')
//   const taskbarHomeContainerDiv = document.createElement('div');
//   taskbarHomeContainerDiv.append(homeContainerCopy);
//   taskbarHomeContainerDiv.classList.add('taskbar-home-container');

//   taskbarAppSpan.append(taskbarHomeContainerDiv);
  

// }

// function syncTaskbarIcon (homeIcon) {
//   const iconTitle =  homeIcon.querySelector('.icon-name');
//   const taskbar = document.query
// }