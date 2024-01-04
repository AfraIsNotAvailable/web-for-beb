function changeText(element) {
  // setTimeout(() => {
  //   changeTextBack(element);
  // }, 0);
  // element.innerHTML = "beeeb answer meee"

  setTimeout(() => {
    element.innerHTML = "other text"; // "beeeb answer meee!!! :<";
  }, 300);

  // TODO: make the animation do >{ when hovering over header
}

// TODO: make animation react to click

// utility function
function changeTextBack(element) {
  setTimeout(() => {
    element.innerHTML = "text"; // "Hey bebica, do you wanna go on a date with me? :&#123;";
  }, 300);
}

function moveButton() {
  document.getElementById("no").style.position = "absolute";

  // TODO: when first hovering over the button it doesn't move smoothly

  let x = Math.random() * (window.innerWidth - document.getElementById("no").offsetWidth);
  let y = Math.random() * (window.innerHeight - document.getElementById("no").offsetHeight);

  document.getElementById("no").style.transitionDelay = "0.05s";
  document.getElementById("no").style.left = `${x}px`;
  document.getElementById("no").style.top = `${y}px`;
}