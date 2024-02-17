var scrollToLeft = document.getElementById("scrollLeftContainer");
var scrollToRight = document.getElementById("scrollRightContainer");
var scrollInterval;
var scrollAmount = 5; // Adjust the scroll speed as needed

scrollToLeft.onmousedown = function () {
  console.log("left button pressed");
  scrollInterval = requestAnimationFrame(scrollLeft);
};

scrollToLeft.onmouseup = function () {
  console.log("left button released");
  cancelAnimationFrame(scrollInterval); // Stop scrolling
};

scrollToRight.onmousedown = function () {
  console.log("right button pressed");
  scrollInterval = requestAnimationFrame(scrollRight);
};

scrollToRight.onmouseup = function () {
  console.log("right button released");
  cancelAnimationFrame(scrollInterval); // Stop scrolling
};

function scrollLeft() {
  imgContainer.scrollLeft -= scrollAmount;

  // Check if scrolled to the beginning
  if (imgContainer.scrollLeft <= 0) {
    imgContainer.scrollLeft += imgContainer.scrollWidth;
  }

  scrollInterval = requestAnimationFrame(scrollLeft);
}

function scrollRight() {
  imgContainer.scrollLeft += scrollAmount;

  // Check if scrolled to the end
  if (
    imgContainer.scrollLeft >=
    imgContainer.scrollWidth - imgContainer.clientWidth
  ) {
    imgContainer.scrollLeft -= imgContainer.scrollWidth;
  }

  scrollInterval = requestAnimationFrame(scrollRight);
}
