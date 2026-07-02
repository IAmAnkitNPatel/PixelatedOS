let hoverTimeout;

export function addAppToTaskbar (event, homeContainer) { 

  // this code was for a single app instance and single icon
  // Also was trying to add multiple app instance in this code
  // commented this code out because things are not working
  // below this code I am rewriting a new code for multiple app instances and single icon
/* 
  // getting taskbar-middle-section
  const taskbarMiddleSection = document.querySelector('.taskbar-middle-section');

  // creating "iconExists" bool variable to check if icon already exixts
  let iconExists = false;
  // checking the taskbarMiddleSection for the homeExplorer icon
    // Array.from(taskbarMiddleSection.children).forEach(element => {
    //   // if condition to check if homeExplorer icon Exists
    //   if (element.getAttribute('name')=== 'home-explorer'){
    //     console.log("home-explorer");
    //   }
    // });
  //better alternative using .find
  Array.from(taskbarMiddleSection.children).find(element => {
    // if condition to check if homeExplorer icon Exists
    if (element.getAttribute('name')=== 'home-explorer'){
      console.log("home-explorer icon exists");
      iconExists = true;

      // getting the home-explorer icon from taskbar
      const taskbarAppSpan = taskbarMiddleSection.querySelector('[name = "home-explorer"]');
      console.log(taskbarAppSpan);

      
    }
    
  });

  // console.log(taskbarMiddleSection);
  
  const taskbarAppSpan = document.createElement('span');
  taskbarAppSpan.classList.add('taskbar-app');

  if(iconExists === false) {
    console.log("homeExplorer icon doesnt exists");
    // 

    //change this from home-icon to whatever app is clicked
    const homeIcon = event.target.closest('.home-icon')
    const iconImage = homeIcon.querySelector('.icon-image');

    const iconImageCopy = iconImage.cloneNode(true);
    iconImageCopy.classList.remove('icon-image');
    
    taskbarAppSpan.append(iconImageCopy);

    

    // giving name = 'home-explorer' attribute to the taskbarAppSpan
    // we will need to connect it so that the name is given of a the specifice app
    taskbarAppSpan.setAttribute('name', 'home-explorer');
    
    

    taskbarMiddleSection.append(taskbarAppSpan);

    taskbarAppSpan.addEventListener('mouseenter', ()=>{
      clearTimeout(hoverTimeout);
      taskbarAppHoverAdd(homeContainer, taskbarAppSpan)
    });
    taskbarAppSpan.addEventListener('mouseleave', ()=>{
      hoverTimeout = setTimeout(()=>{
        taskbarAppHoverRemove(taskbarAppSpan);
      }, 100);
    });
    return taskbarAppSpan;
  }
*/

// new code

// will need to create this seperately for each individual app

  console.log(homeContainer);
  // creating appName container and putting 'name' attribute value of homeContainer in it
  const appName = homeContainer.getAttribute('name');
  console.log(appName);
  
// getting taskbar-middle-section
  const taskbarMiddleSection = document.querySelector('.taskbar-middle-section');
  
  Array.from(taskbarMiddleSection.children).find(
    element => {
      if(element.getAttribute('name')===appName) {
        console.log("Home Explorer Icon Exists");
      }
    }
  )
  // if condition to check if this app icon exists in taskbar
  // if()
  
  const taskbarAppSpan = document.createElement('span');
  taskbarAppSpan.classList.add('taskbar-app');

  const homeIcon = event.target.closest('.home-icon')
  const iconImage = homeIcon.querySelector('.icon-image');

  const iconImageCopy = iconImage.cloneNode(true);
  iconImageCopy.classList.remove('icon-image');
  
  taskbarAppSpan.append(iconImageCopy);

  // giving name = 'home-explorer' attribute to the taskbarAppSpan
  // we will need to connect it so that the name is given of a the specifice app
  taskbarAppSpan.setAttribute('name', 'home-explorer');

  taskbarMiddleSection.append(taskbarAppSpan);
  // up to here it will be if block

  // Below Section is about STORING hover preview of app instance
  // creating a new span for hover app instances
  const hoverPreviewSpan = document.createElement('span');
  hoverPreviewSpan.classList.add('hoverPreviewSpan'); // putting this class for example
  // for now putting hoverPreviewSpan in taskbarAppSpan
  taskbarAppSpan.append(hoverPreviewSpan);
}

function taskbarAppHoverAdd (homeContainer, taskbarAppSpan) {
  if (taskbarAppSpan.querySelector('.taskbar-app-hover')) return;
  const homeContainerCopy  = homeContainer.cloneNode(true);
  homeContainerCopy.classList.add('taskbar-app-hover');
  taskbarAppSpan.append(homeContainerCopy);
}

function taskbarAppHoverRemove (taskbarAppSpan) {
  const appHover = taskbarAppSpan.querySelector('.taskbar-app-hover');
  appHover.remove();
}