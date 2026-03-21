import { homeExplorerData } from "./home_explorer_data.js";

const main = document.querySelector('.main');

// creating Home Explorer Div
const homeExplorer = document.createElement('div');
homeExplorer.classList.add('home-explorer')

// creating Home Explorer Header Div
const homeExplorerHeader = document.createElement('div');
homeExplorerHeader.classList.add('home-explorer-header');
// creating Action Control Div
const actionControl = document.createElement('div');
actionControl.classList.add('action-control');
// creating New Folder Button
const newFolder = document.createElement('button');
newFolder.innerText = "New Folder";
newFolder.classList.add('new-folder');
newFolder.addEventListener('click', ()=>{
  createNewFolder();
});
// adding New Folder Button in Action Control Div
actionControl.append(newFolder);
// adding Action Control Div in Home Explorer Header Div
homeExplorerHeader.append(actionControl);

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

function renderExplorer() {
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
        currentFolder = child;
        renderExplorer();
      });
    
      //adding everything on workspace
      workspace.append(item);
    });
  } else {
    workspace.textContent = "Empty";
  }
}

let currentFolder = homeExplorerData;
renderExplorer();

// Function to Create a New Folder
function createNewFolder() {
  // Condition if in Home Explore Drive we cannot create a new folder
  if (currentFolder === homeExplorerData) {
    alert("You cannot create a folder in the Root directory!");
    return;
  }

  // create a new folder
  //counting existing "New Folder"
  let newFolderCount = 0;

  currentFolder.children.forEach(child => {
    if (child.name.startsWith("New Folder")) {
      newFolderCount++;
    }
  });

  // creating a variable for new folder name with number
  let newFolderName = "New Folder";
  if (newFolderCount >= 1) {
    newFolderName = `New Folder ${newFolderCount + 1}`;
  }
  
  const newId = crypto.randomUUID();

  const newFolderData = {
      id: newId,
      type: "folder",
      name: newFolderName,
      children: []
    };
  // add newFolderData to current Folder children array
  currentFolder.children.push(newFolderData);

  //calling renderExplore again to update the page
  renderExplorer();

  //
  console.log(currentFolder);
}