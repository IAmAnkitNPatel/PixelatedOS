export function homeExplorerBody(homeExplorerContainerDiv) {
  // Creating Element
  const homeBodyDiv = document.createElement('div');
  homeBodyDiv.classList.add('home-body-div');
  const quickAccessDiv = document.createElement('div');
  quickAccessDiv.classList.add('quick-access-div');
  const quickAccessLabelDiv = document.createElement('div');
  quickAccessLabelDiv.classList.add('quick-access-label-div');
  quickAccessLabelDiv.textContent = "Quick Access";

  const theFoyerSpan = document.createElement('span');
  theFoyerSpan.classList.add('the-foyer-span');
  theFoyerSpan.textContent = "The Foyer";

  // Appending Element
  quickAccessDiv.append(quickAccessLabelDiv, theFoyerSpan);
  homeBodyDiv.append(quickAccessDiv);

  homeExplorerContainerDiv.append(homeBodyDiv);
}