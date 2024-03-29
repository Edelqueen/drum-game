
var count = 0;

while(count < document.querySelectorAll(".drum").length){
  document.querySelectorAll(".drum")[count].addEventListener("click", buttonSound);
  count++;
}

document.addEventListener("keydown", function(keyBoardEvent){
  makeSound(keyBoardEvent.key);
  buttonAnimation(keyBoardEvent.key);
})

function buttonSound(){
  var buttonClicked = this.innerHTML;
  makeSound(buttonClicked);
  buttonAnimation(buttonClicked);

}
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "l":
      var kickBass = new Audio("kick-bass.mp3");
      kickBass.play();
      break;

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    default: console.log(key);

  }
}

function buttonAnimation (currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
