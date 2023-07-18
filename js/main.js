// Get all the draggable icons
const icons = document.querySelectorAll(".container img");
const patrioti = document.querySelector('#icon3');
const dancing = document.querySelector('#icon4');
const swastika = document.querySelector('#icon5');
const sad = document.querySelector('#icon6');
const sufi = document.querySelector('#icon1');
const romantic = document.querySelector('#icon2');

// Get all the title elements
const boxes = document.querySelectorAll(".DragDropBox");
const Box = document.querySelector('#Box');

// Define the sound effects to be played
const aevatanpatriotic = new Audio("assets/aevatanpatriotic.mp3");
const badtameezdildancepop = new Audio("assets/badtameezdildancepop.mp3");
const hamkathasunateshriramki = new Audio("assets/hamkathasunateshriramki.mp3");
const agartumsathhosad = new Audio("assets/agartumsathhosad.mp3");
const khwajamerekhwaja = new Audio("assets/khwajamerekhwaja.mp3");
const tumsehiromanticballad = new Audio("assets/tumsehiromanticballad.mp3");

// Add event listeners to each icon
icons.forEach(icon => {
  // When the drag starts, store the ID of the dragged icon
  icon.addEventListener("dragstart", event => {
    event.dataTransfer.setData("target", event.target.id);
  });
});

// Add event listeners to each title
boxes.forEach(box => {
  // When an icon is dragged over a box, prevent the default behavior
  box.addEventListener("dragover", event => {
    event.preventDefault();
  });

  // When an icon is dropped on a box, play the sound effect
  box.addEventListener("drop", event => {
    event.preventDefault();

    // Get the ID of the dropped icon
    const iconId = event.dataTransfer.getData("target");

    // Play the sound effect based on the element that was dropped on
    if (patrioti.id === iconId) {
      aevatanpatriotic.play();
    } else if (dancing.id === iconId) {
      badtameezdildancepop.play();
    } else if (swastika.id === iconId) {
      hamkathasunateshriramki.play();
    } else if (sad.id === iconId) {
      agartumsathhosad.play();
    } else if (sufi.id === iconId) {
      khwajamerekhwaja.play();
    } else if (romantic.id === iconId) {
      tumsehiromanticballad.play();
    }

    console.log(`Icon ${iconId} dropped on ${Box.alt}`);
  });
});
