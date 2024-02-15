document.addEventListener("DOMContentLoaded", function () {
  var random = document.getElementById("btnNo"); // Select the button by its class name
  var openBtn = document.getElementById("btnYes");
  var modal = document.getElementById("modalContainer");
  var mochaImage = document.getElementById("mochaChi");
  var buttonWidth = random.offsetWidth;
  var buttonHeight = random.offsetHeight;
  var screenWidth = document.body.scrollWidth - buttonWidth;
  var screenHeight = document.body.scrollHeight - buttonHeight;

  // array of no messages
  const noMessages = [
    "Nope!",
    "Nice Try!",
    "Better Luck Next Time!",
    "Almost! But No!",
    "HAHAHAHA!",
    "Why Still Trying?",
    "Don't You Love Me?",
  ];

  // array of mocha images
  const mochaImgs = [
    "/imgs/mochaCrying.gif",
    "/imgs/mochaStubborn.gif",
    "/imgs/mochaAngry.gif",
  ];

  // to change the image of mocha
  function changeMochaImage(event) {
    mochaImage.setAttribute(
      "src",
      mochaImgs[Math.floor(Math.random() * mochaImgs.length)]
    );
  }

  // move the no button to a random spot
  function placeDiv(event) {
    console.log(document.body.scrollHeight, " ", document.body.scrollWidth);
    document.getElementById("p1").innerHTML =
      noMessages[Math.floor(Math.random() * noMessages.length)];
    console.log("Button clicked!"); // Check if this message appears in the console
    var left = Math.floor(Math.random() * screenWidth);
    var top = Math.floor(Math.random() * screenHeight);
    random.style.position = "absolute";
    random.style.left = left + "px";
    random.style.top = top + "px";
  }

  // when button No is clicked
  function catchedNo(event) {
    document.getElementById("p1").innerHTML =
      "You Caught Me!!! Still No Bleeee!!!";
  }

  // opening the modal
  function openModal(event) {
    modal.classList.add("show");
    console.log("MODAL!");
  }

  random.addEventListener("mouseover", changeMochaImage);
  random.addEventListener("mouseover", placeDiv);
  random.addEventListener("click", catchedNo);

  // opening the modal
  openBtn.addEventListener("click", openModal);
});
