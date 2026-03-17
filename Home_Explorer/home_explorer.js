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

// adding Head, Body and Sidebar in Home Explorer Div
homeExplorer.append(homeExplorerHeader)