import { homeExplorerData } from "./home_explorer_data.js";

const main = document.querySelector('.main');

// creating Home Explorer Div
const homeExplorer = document.createElement('div');
homeExplorer.classList.add('home-explorer')

// creating Home Explorer Header Div
const homeExplorerHeader = document.createElement('div');
homeExplorerHeader.classList.add('home-explorer-header');

// creating Home Explorer Body Div
const homeExplorerBody = document.createElement('div');
homeExplorerBody.classList.add('home-explorer-body');

// creating Home Explorer Sidebar Div
const homeExplorerSidebar = document.createElement('div');
homeExplorerSidebar.classList.add('home-explorer-sidebar');

// creating Home Explorer Workspace Div
const homeExplorerWorkspace = document.createElement('div');
homeExplorerWorkspace.classList.add('home-explorer-workspace');

// adding Sidebar and Workspace in Body Div
homeExplorerBody.append(homeExplorerSidebar, homeExplorerWorkspace);

// adding Header and Body in Home Explorer Div
homeExplorer.append(homeExplorerHeader, homeExplorerBody);

//adding Home Explorer in Main Div
main.append(homeExplorer);


// adding homeExplorerData on to the page

function renderExplorer(currentFolder) {
  const workspace = document.querySelector('.home-explorer-workspace');
  
  workspace.innerHTML = "";

  if (currentFolder.children.length > 0) {
      currentFolder.children.forEach(child => {
      // creating div and adding data as item
      let item = document.createElement('div');
      item.classList.add('home-explorer-item', child.type);
      
      const itemName = document.createElement('div');
      itemName.classList.add('home-explorer-item-name');
      itemName.append(child.name);

      item.append(itemName);

      // adding double click event listner to the item Div
      item.addEventListener('dblclick', ()=>{
        renderExplorer(child)
      });
    
      //adding everything on workspace
      workspace.append(item);
    });
  } else {
    workspace.textContent = "Empty";
  }
}

let currentFolder = homeExplorerData;
renderExplorer(currentFolder);