import { homeExplorerData } from "./home_explorer_data.js";

const main = document.querySelector('.main');

// creating Home Explorer Div
const homeExplorer = document.createElement('div');
homeExplorer.classList.add('home-explorer')

// creating Home Explorer Header Div
const homeExplorerHeader = document.createElement('div');
homeExplorerHeader.classList.add('home-explorer-header');

// creating Navigation Control Div
const navigationControl = document.createElement('div');
navigationControl.classList.add('navigation-control');
// creating Back Arrow Button
const backArrow = document.createElement('button');
backArrow.textContent = "←";
backArrow.classList.add('back-arrow');
backArrow.addEventListener('click', ()=>{
  navigationButton('back')
});
// creating Forward Arrow Button
const forwardArrow = document.createElement('button');
forwardArrow.textContent = "→";
forwardArrow.classList.add('forward-arrow');
forwardArrow.addEventListener('click', ()=>{
  navigationButton('forward')
});
// adding backArrow Button and forwardArrow Buttton in Navigation Control Div
navigationControl.append(backArrow, forwardArrow);

// creating Action Control Div
const actionControl = document.createElement('div');
actionControl.classList.add('action-control');
// creating New Room Button
const newRoom = document.createElement('button');
newRoom.textContent = "New Room";
newRoom.classList.add('new-room');
newRoom.addEventListener('click', ()=>{
  createNewRoom();
});
// adding New Room Button in Action Control Div
actionControl.append(newRoom);
// adding Navigation Control Div and  Action Control Div in Home Explorer Header Div
homeExplorerHeader.append(navigationControl, actionControl);

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

  if (currentRoom.children.length > 0) {
      currentRoom.children.forEach(child => {
        // creating div and adding data as item
        let item = document.createElement('div');
        item.classList.add('home-explorer-item', child.type);
        
        const itemName = document.createElement('div');
        itemName.classList.add('home-explorer-item-name');
        itemName.append(child.name);

        item.append(itemName);

        // adding double click event listner to the item Div for Entering the Room/item
        item.addEventListener('dblclick', ()=>{
          previousRoom = currentRoom;
          currentRoom = child;
          addNavigationHistory(); //NavigationHistory will update every time we doublecilck on a folder to open it 

          renderExplorer();
        });
        
        // adding single click event listner to item div for selecting the Room/item
        item.addEventListener('click', ()=>{
          // selectedObject = child;
          selectObject(child);
        });
        //adding everything on workspace
        workspace.append(item);
      });
  } else {
    workspace.textContent = "Empty";
  }
}

// Function to Create a New Room
function createNewRoom() {
  // Condition if in Home Explore Drive we cannot create a new room
  if (currentRoom === homeExplorerData) {
    alert("You cannot create a room in the Root directory!");
    return;
  }

  // create a new room

  // Ask for new room Name
  let newRoomName = prompt("Enter the Room Name: ");

  // if not Entered room name or pressed esc
  if (!newRoomName) {
    //counting existing "New Room"
    let newRoomCount = 0;

    currentRoom.children.forEach(child => {
      if (child.name.startsWith("New Room")) {
        newRoomCount++;
      }
    });

    // creating a variable for new room name with number
    newRoomName = "New Room";
    if (newRoomCount >= 1) {
      newRoomName = `New Room ${newRoomCount + 1}`;
    }
  }

  
  
  const newId = crypto.randomUUID();

  const newRoomData = {
      id: newId,
      type: "room",
      name: newRoomName,
      children: []
    };
  // add newRoomData to current Room children array
  currentRoom.children.push(newRoomData);

  //calling renderExplore again to update the page
  renderExplorer();
}

// Navigation History
let navigationHistory = [];
// Every time we Double Click to Enter a folder, everything after the Previous folder will get deleted and the current Folder we entered will get Added
function addNavigationHistory() {

  let previousRoomIndex = navigationHistory.indexOf(previousRoom);
  navigationHistory.splice(previousRoomIndex+1);
  navigationHistory.push(currentRoom);

  console.log(navigationHistory.map(room => room.name));
}

// Back Button(Left Arrow) and Forward Button(Right Arrow)
function navigationButton(direction) {
  let currentRoomIndex = navigationHistory.indexOf(currentRoom);
  if (direction === 'back') {
    if (currentRoomIndex-1 >= 0){
      let backwardElement = navigationHistory[currentRoomIndex-1];
      currentRoom = backwardElement;
      renderExplorer();
    }
    return

  } else if(direction === 'forward') {
    if (currentRoomIndex < navigationHistory.length-1) {
      let forwardElement = navigationHistory[currentRoomIndex+1];
      currentRoom = forwardElement;
      renderExplorer();
    }
    return
  }
}

// creating "selectedObject" variable
let selectedObject;
// creating "selectObject" Function
function selectObject(object) {
  selectedObject = object;
  console.log(`Selected Object : ${selectedObject.name}`);
  //add selectedObject = ""; if double click
  // also need to add deselect
}

// creating "deleteObject" funciton
function deleteObject() {
  if (!selectedObject) {
    alert("No Object Selected");
  }

  
}

// creating "copyObjectValue" variable
let copyObjectValue;
// creating "copyObject" function
function copyObject() {
  copyObjectValue = selectedObject;
}

// creating "cutObjectValue" variable
let cutObjectValue;
// creating "cutObject" function
function cutObject() {
  cutObjectValue = selectedObject;
}

// creating "pasteObject" function
function pasteObject() {

}



//main function calling starts from here
let currentRoom = homeExplorerData;
let previousRoom;
renderExplorer();
addNavigationHistory();



