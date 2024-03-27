import picTogetherPhotos from "../../assets/imgs/home/picTogetherPhotos.jpeg";
import picTogether2 from "../../assets/imgs/home/picTogether2.jpg";
import picTogether3 from "../../assets/imgs/home/picTogether3.jpg";
import picTogether5 from "../../assets/imgs/home/picTogether5.jpg";
import picTogether6 from "../../assets/imgs/home/picTogether6.jpg";
import picTogether8 from "../../assets/imgs/home/picTogether8.jpg";
import picTogether10 from "../../assets/imgs/home/picTogether10.jpg";
import picTogether11 from "../../assets/imgs/home/picTogether11.jpg";

let imgContainer = [
  picTogetherPhotos,
  picTogether2,
  picTogether3,
  picTogether5,
  picTogether6,
  picTogether8,
  picTogether10,
  picTogether11,
];

const homePicTogetherImg = document.getElementById("homePicTogetherImg");
homePicTogetherImg.src = picTogetherPhotos;

// Fisher-Yates Shuffle (for efficient, non-repeating image cycling)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initial Setup
let shuffledIndices = [...imgContainer.keys()]; // Array of indices (0 to length - 1)
let currentIndex = 0;
shuffle(shuffledIndices);

// Event Listener
homePicTogetherImg.addEventListener("click", () => {
  console.log(
    "------------------\n",
    "previous: ",
    shuffledIndices[currentIndex]
  );
  currentIndex = (currentIndex + 1) % shuffledIndices.length;
  homePicTogetherImg.src = imgContainer[shuffledIndices[currentIndex]];
  console.log("current: ", shuffledIndices[currentIndex]);
});
