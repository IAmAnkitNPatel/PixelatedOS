let hoverTimeout;

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

  taskbarAppSpan.addEventListener('mouseenter', ()=>{
    clearTimeout(hoverTimeout);
    taskbarAppHoverAdd(homeContainer, taskbarAppSpan)
  });
  taskbarAppSpan.addEventListener('mouseleave', ()=>{
    hoverTimeout - setTimeout(()=>{
      taskbarAppHoverRemove(taskbarAppSpan);
    }, 100);
  });
  return taskbarAppSpan;
}

function taskbarAppHoverAdd (homeContainer, taskbarAppSpan) {
  const homeContainerCopy  = homeContainer.cloneNode(true);
  homeContainerCopy.classList.add('taskbar-app-hover');
  taskbarAppSpan.append(homeContainerCopy);
}

function taskbarAppHoverRemove (taskbarAppSpan) {
  const appHover = taskbarAppSpan.querySelector('.taskbar-app-hover');
  appHover.remove();
}