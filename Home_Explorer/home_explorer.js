import { homeExplorerData } from "./home_explorer_data.js";

const main = document.querySelector('.main');

// creating Home Explorer Div
const homeExplorer = document.createElement('div');
homeExplorer.classList.add('home-explorer');
// adding 'click' eventListner for "deselectObject" to "homeExplorer"
homeExplorer.addEventListener('click', ()=>{
  deselectObejct();
});

// creating Home Explorer Header Div
const homeExplorerHeader = document.createElement('div');
homeExplorerHeader.classList.add('home-explorer-header');

// creating Navigation Div for "navigationControl" and "showNavigationHistory"
const navigation = document.createElement("div");
navigation.classList.add('navigation');

// creating Navigation Control Div
const navigationControl = document.createElement('div');
navigationControl.classList.add('navigation-control');
// creating Back Arrow Button
const backArrow = document.createElement('button');
backArrow.textContent = "←";
backArrow.classList.add('back-arrow');
backArrow.addEventListener('click', ()=>{
  // sending "event" to function for "event.stopPropagation()"
  navigationButton('back', event)
});
// creating Forward Arrow Button
const forwardArrow = document.createElement('button');
forwardArrow.textContent = "→";
forwardArrow.classList.add('forward-arrow');
forwardArrow.addEventListener('click', ()=>{
  // sending "event" to function for "event.stopPropagation()"
  navigationButton('forward', event)
});
// adding backArrow Button and forwardArrow Buttton in Navigation Control Div
navigationControl.append(backArrow, forwardArrow);

// creating Show Navigation History Div
const showNavigationHistory = document.createElement('div');
showNavigationHistory.classList.add('show-navigation-history');

// adding "Navigation Control Div" and "Show Navigaiton History Div" in "Navigaiton Div"
navigation.append(navigationControl, showNavigationHistory);

// creating Action Control Div
const actionControl = document.createElement('div');
actionControl.classList.add('action-control');

// creating New Room Button
const newRoom = document.createElement('button');
newRoom.textContent = "New Room";
newRoom.classList.add('new-room-button');
newRoom.addEventListener('click', ()=>{
  createNewRoom(event);
});

// creating Delete Object Button
const deleteObject = document.createElement('button');
deleteObject.textContent = "Delete";
deleteObject.classList.add('delete-object-button');
deleteObject.addEventListener('click', ()=>{
  deleteSelectedObject(event);
});

// creating Copy Object Button
const copy = document.createElement('button');
copy.textContent = "Copy";
copy.classList.add('copy-button');
copy.addEventListener('click', ()=>{
  copySelectedObject(event);
});

// creating Cut Object Button
const cut = document.createElement('button');
cut.textContent = "Cut";
cut.classList.add('cut-button');
cut.addEventListener('click', ()=>{
  cutSelectedObject(event);
});

// creating Paste Button
const paste = document.createElement('button');
paste.textContent = "Paste";
paste.classList.add('paste-button');
paste.addEventListener('click', ()=>{
  pasteObject(event);
});

// creating Rename Button
const rename = document.createElement('button');
rename.textContent = "Rename";
rename.classList.add('rename-button');
rename.addEventListener('click', ()=>{
  renameObject(event);
});

// adding "New Room Button", "Delete Object Button", "Copy Object Button", "Cut Object Button", "Paste Object Button", "Rename Button" in Action Control Div
actionControl.append(newRoom, deleteObject, copy, cut, paste, rename);
// adding Navigation Control Div and  Action Control Div in Home Explorer Header Div
homeExplorerHeader.append(navigation, actionControl);

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


// creating renderExplorer() function
// adding homeExplorerData on to the page
function renderExplorer() {

  // calling "renderSidebar" at the top so that it shows first on the page
  renderSidebar();

  // calling "renderWorkspace" to display workspace
  renderWorkspace();
}

// creating renderWorkspace() function
function renderWorkspace() {

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
        item.addEventListener('dblclick', (event)=>{
          // calling event.stopPropagation() to keep click to the buttton and not pass it up to the Parent
          // Prevent the click event from bubbling up to the parent container
          // Put event.stopPropagation(); in single click and commented out the event.stopPropagation(); in double click because we want to stop single click of deselect function
          // event.stopPropagation();
          previousRoom = currentRoom;
          currentRoom = child;
          // console.log(`currentRoom ${JSON.stringify(currentRoom)}`);
          addNavigationHistory(); //NavigationHistory will update every time we doublecilck on a folder to open it 

          renderWorkspace();
        });
        
        // adding single click event listner to item div for selecting the Room/item
        item.addEventListener('click', (event)=>{
          // calling event.stopPropagation() to keep click to the buttton and not pass it up to the Parent
          // Prevent the click event from bubbling up to the parent container
          // Put event.stopPropagation(); in single click and commented out the event.stopPropagation(); in double click because we want to stop single click of deselect function
          event.stopPropagation();

          // selectedObject = child;
          selectObject(child);
        });
        //adding everything on workspace
        workspace.append(item);
      });
  } else {
    workspace.textContent = "Empty";
  }

  // calling createShowNavigationHistory
  createShowNavigationHistory();
}

// Function to Create a New Room
function createNewRoom(event) {
  // calling event.stopPropagation() to keep click to the buttton and not pass it up to the Parent
  // Prevent the click event from bubbling up to the parent container
  event.stopPropagation();

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

  //calling renderWorkspace again to update the page
  renderWorkspace();
}

// Navigation History
let navigationHistory = [];
// Every time we Double Click to Enter a folder, everything after the Previous folder will get deleted and the current Folder we entered will get Added
function addNavigationHistory() {

  let previousRoomIndex = navigationHistory.indexOf(previousRoom);
  navigationHistory.splice(previousRoomIndex+1);
  navigationHistory.push(currentRoom);

  // console.log(navigationHistory.map(room => room.name));
}

// Back Button(Left Arrow) and Forward Button(Right Arrow)
function navigationButton(direction, event) {

  // calling event.stopPropagation() to keep click to the buttton and not pass it up to the Parent
  // Prevent the click event from bubbling up to the parent container
  event.stopPropagation();

  // console.log(event);
  let currentRoomIndex = navigationHistory.indexOf(currentRoom);
  if (direction === 'back') {
    if (currentRoomIndex-1 >= 0){
      let backwardElement = navigationHistory[currentRoomIndex-1];
      currentRoom = backwardElement;
      renderWorkspace();
    }
    return

  } else if(direction === 'forward') {
    if (currentRoomIndex < navigationHistory.length-1) {
      let forwardElement = navigationHistory[currentRoomIndex+1];
      currentRoom = forwardElement;
      renderWorkspace();
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
function deleteSelectedObject(event) {

  // calling event.stopPropagation() to keep click to the buttton and not pass it up to the Parent
  // Prevent the click event from bubbling up to the parent container
  event.stopPropagation();

  // if object not Selected condition
  if (!selectedObject) {
    alert("No Object Selected");
    return;
  }
  
  // Condition if in Home Explore Drive we cannot Delete the Root Directory
  if (currentRoom === homeExplorerData) {
    alert("You cannot delete the Root directory!");
    return;
  }

  let selectedObjectIndex = currentRoom.children.indexOf(selectedObject);
  currentRoom.children.splice(selectedObjectIndex, 1);
  // console.log(selectedObjectIndex);

  // removing Selected Object
  selectedObject = "";
  // calling Render Workspace function
  renderWorkspace();

}

// creating "copyObjectValue" variable
let copyObjectValue;
// creating "copyObject" function
function copySelectedObject(event) {

  // calling event.stopPropagation() to keep click to the buttton and not pass it up to the Parent
  // Prevent the click event from bubbling up to the parent container
  event.stopPropagation();

  // if object not Selected condition
  console.log()
  if (!selectedObject) {
    alert("No Object Selected");
    return;
  }

  // Condition if in Home Explore Drive we cannot Copy the Root Directory
  if (currentRoom === homeExplorerData) {
    alert("You cannot copy the Root directory!");
    return;
  }

  // putting selectedObject value in copyObjectValue
  copyObjectValue = selectedObject;
  console.log(`Copy Object: ${JSON.stringify(copyObjectValue)}`)
}

// creating "cutObjectValue" variable
let cutObjectValue;
// creating "cutObject" function
function cutSelectedObject(event) {

  // calling event.stopPropagation() to keep click to the buttton and not pass it up to the Parent
  // Prevent the click event from bubbling up to the parent container
  event.stopPropagation();

  // if object not Selected condition
  if (!selectedObject) {
    alert("No Object Selected");
    return;
  }

  // Condition if in Home Explore Drive we cannot Cut the Root Directory
  if (currentRoom === homeExplorerData) {
    alert("You cannot cut the Root directory!");
    return;
  }

  // putting selectedObject value in cutObjectValue
  cutObjectValue = selectedObject;
  // finding index of cutObjectValue in currentRoom Children Array
  let cutObjectIndex = currentRoom.children.indexOf(cutObjectValue);
  // deleting the cutObject from currentRoom Children
  currentRoom.children.splice(cutObjectIndex, 1);


  console.log(`Cut Object: ${JSON.stringify(cutObjectValue)}`);

  // calling renderWorkspace to refresh the page
  renderWorkspace();
}

// creating "pasteObject" function
function pasteObject(event) {

  // calling event.stopPropagation() to keep click to the buttton and not pass it up to the Parent
  // Prevent the click event from bubbling up to the parent container
  event.stopPropagation();

  // if not Cut or Copy the Object Condition
  if (!cutObjectValue && !copyObjectValue) {
    alert("Nothing to Paste");
    return;
  }

  // Condition if in Home Explore Drive we cannot Paste in the Root Directory
  if (currentRoom === homeExplorerData) {
    alert("You cannot Paste in the Root directory!");
    return;
  }

  // pasting the copyObjectValue or cutObjectValue
  let pasteInput = (copyObjectValue || cutObjectValue);
  currentRoom.children.push(pasteInput);
  console.log(pasteInput);

// if we paste from copy we will need to change the id 
// while pasting we will need to look at "Names"


  // removing copyObjectValue and cutObject Value;
  copyObjectValue = '';
  cutObjectValue = '';

  // calling renderWorkspace to refresh the page
  renderWorkspace();

}

// creating "renameObject" Function
function renameObject(event) {

  // calling event.stopPropagation() to keep click to the buttton and not pass it up to the Parent
  // Prevent the click event from bubbling up to the parent container
  event.stopPropagation();

  // if object not Selected Condition
  if(!selectedObject){
    alert("No Object Selected");
    return;
  }

  // Condition if in Home Explore Drive we cannot Rename the Root Directory
  if (currentRoom === homeExplorerData) {
    alert("You cannot Rename the Root directory!");
    return;
  }

  // asking for the new name
  let renameInput = prompt("Enter new Name: ");
  
  // if not Entered a new name or pressed Esc condition
  if(!renameInput) {
    alert("Enter a Name");
    return;
  }

  // putting new name in old variable
  selectedObject.name = renameInput;

  // calling renderWorkspace to refresh the page
  renderWorkspace();
}

// creating "deselectObject" function
function deselectObejct() {
  selectedObject = "";
  // if Condition for Object Not Selected
  if(!selectedObject){
    console.log("Selected Object : ");
  }
}

// creating createShowNavigationHistory() function for showing History on Home Explorer
function createShowNavigationHistory() {
  // getting showNavigationHistory Div from Home Explorer
  const showNavigaitonHistory = document.querySelector('.show-navigation-history');
  // clearing old History
  showNavigaitonHistory.textContent = 'Navigation History: ';

  // adding navigationHistory to showNavigationHistory
  navigationHistory.forEach((room)=>{
    showNavigaitonHistory.append(`${room.name} => `);
  });
}

// creating sidebarCurrentRoom Variable object
// making the homeExploreData into an array of the key 'children' in the sidebar object
let sidebarCurrentRoom = {
  children: [homeExplorerData]
};
//change the name
let sidebarParentForChild = document.querySelector('.home-explorer-sidebar');
// creating renderSidebar() function
function renderSidebar() {
  {
    // // getting homeExplorerSidebar Div from Home Explorer
    // const sidebar = document.querySelector('.home-explorer-sidebar');

    // // creating a sidebarCurrentRoom
    // // let sidebarCurrentRoom

    // // creating homeExplorer.forEach to get /?/??
    // if (sidebarCurrentRoom.children.length > 0){
    //   let objectContainer;
    //   sidebarCurrentRoom.children.forEach(child => {
    //     // creating sidebar 'objectContainer' Div to store expand children arrow and object name
    //     // console.log("herer object:");
    //     // console.log(object);
    //     objectContainer = document.createElement('div');
    //     objectContainer.classList.add('sidebar-object-container');

    //     //
    //     let parent = sidebar;
    //     // creating a span for expand children arrow
    //     const expandChildrenArrow = document.createElement('span');
    //     expandChildrenArrow.classList.add('sidebar-expand-Children-Arrow');
    //     expandChildrenArrow.textContent = '⌄'
    //     expandChildrenArrow.addEventListener('click', (event)=>{
    //       sidebarCurrentRoom = child;
    //       expandChildrenArrowfunction(event);
    //       parent = event.target.parentElement;
    //       console.log(parent);

    //     });

    //     // creating a span for object name
    //     const objectName = document.createElement('span');
    //     objectName.classList.add('sidebar-object-name');
    //     objectName.textContent = child.name;

    //     // adding expandChildrenArrow span and objectName span in objectContainer Div
    //     objectContainer.append(expandChildrenArrow, objectName);

    //     // adding objectContainer Div in sidebar;
    //     parent.append(objectContainer);
    //   });
    // }
  }
  
  {
    // putting if condition to check if the room has children
    if(sidebarCurrentRoom.children.length > 0){
      // putting forEach condition on each child
      sidebarCurrentRoom.children.forEach(child => {
        // creating a sidebarParentForChildContainer Div
        let sidebarParentForChildContainer = document.createElement('div');
        sidebarParentForChildContainer.classList.add('sidebar-parent-for-child-container');

        // creating a sidebarChildContainer Div
        let sidebarChildContainer = document.createElement('div');
        sidebarChildContainer.classList.add('sidebar-child-container');

        // creating expandChildArrow Span
        let expandChildArrow = document.createElement('span');
        expandChildArrow.textContent = '▶';
        expandChildArrow.classList.add('expand-child-arrow');

        // putting click addEventListner on expandChildArrow
        expandChildArrow.addEventListener('click', (event)=>{
          sidebarParentForChild = event.target.closest('.sidebar-parent-for-child-container');
          sidebarCurrentRoom = child;
          expandChildrenArrowfunction(event);
        });

        // creating sidebarChildName Span
        let sidebarChildName = document.createElement('span');
        sidebarChildName.textContent = child.name;
        sidebarChildName.classList.add('sidebar-child-name');

        // adding expandChildArrow Span and sidebarChildName Span in sidebarChildContainer Div
        sidebarChildContainer.append(expandChildArrow, sidebarChildName);

        // adding sidebarChildContainer Div in sidebarParentForChildContainer Div
        sidebarParentForChildContainer.append(sidebarChildContainer);

        // adding sidebarParentForChildContainer Div in sidebarParentForChild Div
        sidebarParentForChild.append(sidebarParentForChildContainer);
      });
    }
  }
}

// creating a expandChildrenArrowfunction
function expandChildrenArrowfunction(event) {
  // calling event.stopPropagation() to keep click to the buttton and not pass it up to the Parent
  // Prevent the click event from bubbling up to the parent container
  event.stopPropagation();

  // calling renderSidebar() again to update the page
  renderSidebar();
}



//main function calling starts from here
let currentRoom = homeExplorerData;
let previousRoom;
addNavigationHistory();
renderExplorer();

// create a seperate funciton named renderWorkspace for rendering workspace