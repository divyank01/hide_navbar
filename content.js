// ID of the element to hide
const elementId = 'target-id';

function hideElementById(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = 'none';
    console.log(`Element with ID '${id}' has been hidden.`);
  } else {
    console.log(`Element with ID '${id}' not found.`);
  }
}

// Wait for the DOM to be fully ready
window.addEventListener('load', () => {
  hideElementById(elementId);
});
