const button = document.querySelectorAll(".drum");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    console.log(this);

    var buttonInnerHTMl = this.textContent;
    playSound(buttonInnerHTMl);
    buttonAnimation(buttonInnerHTMl);
  });
}

document.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();
  console.log(event.key + key);

  var matchingButton = document.querySelector(`.drum.${key}`);

  if (matchingButton) {
    playSound(matchingButton.innerHTML);
    buttonAnimation(matchingButton.innerHTML);
  }
});

function playSound(option) {
  switch (option) {
    case "w":
      playAudio("sounds/tom-1.mp3");
      break;
    case "a":
      playAudio("sounds/tom-2.mp3");
      break;
    case "s":
      playAudio("sounds/tom-3.mp3");
      break;

    case "d":
      playAudio("sounds/tom-4.mp3");
      break;

    case "j":
      playAudio("sounds/snare.mp3");
      break;

    case "k":
      playAudio("sounds/crash.mp3");
      break;

    case "l":
      playAudio("sounds/kick-bass.mp3");
      break;

    default:
      alert("Click on any drum! or press button");
  }
}

function playAudio(audioSrc) {
  var audio = new Audio(audioSrc);
  audio.play();
}

function buttonAnimation(currentKey) {
  debugger
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
