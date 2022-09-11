// document.querySelector("button").addEventListener("click", function(){
// //   var buttonLetter = this.innerHTML;
// //     playSound(buttonLetter);
//   var sound = new Audio("soundEffects/1.mp3");
//        sound.play();

//        setTimeout(function(){
//         sound.pause();
//         // alert("Audio Stop Successfully");
//     },
//     1000);
// },false);

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener(
    "click",
    function () {
      var buttonLetter = this.innerHTML;
      playSound(buttonLetter);
    },
    false
  );
}

document.addEventListener("keypress", function (event) {
  playSound(event.key);
});

function playSound(key) {
  switch (key) {
    case "P":
    case "p":
      var sound = new Audio("soundEffects/1.mp3");
      sound.play();
      setTimeout(function () {
        sound.pause();
      }, 1000);
      break;

    case "R":
    case "r":
      var sound = new Audio("soundEffects/2.mp3");
      sound.play();
      setTimeout(function () {
        sound.pause();
      }, 1000);
      break;

    case "A":
    case "a":
      var sound = new Audio("soundEffects/3.mp3");
      sound.play();
      setTimeout(function () {
        sound.pause();
      }, 2000);
      break;

    case "T":
    case "t":
      var sound = new Audio("soundEffects/4.mp3");
      sound.play();
      setTimeout(function () {
        sound.pause();
      }, 1000);
      break;

    case "I":
    case "i":
      var sound = new Audio("soundEffects/5.mp3");
      sound.play();
      setTimeout(function () {
        sound.pause();
      }, 3000);
      break;

    case "B":
    case "b":
      var sound = new Audio("soundEffects/6.mp3");
      sound.play();
      setTimeout(function () {
        sound.pause();
      }, 2000);
      break;

    case "H":
    case "h":
      var sound = new Audio("soundEffects/7.mp3");
      sound.play();
      setTimeout(function () {
        sound.pause();
      }, 2000);
      break;

    default:
      console.log(key);
  }
}
