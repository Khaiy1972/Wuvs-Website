var btnI = document.getElementById("btnI");
var btnLOVE = document.getElementById("btnLOVE");
var btnYOU = document.getElementById("btnYOU");
var btnReturn = document.getElementById("btnReturn");
var header = document.getElementById("title");
var text = document.getElementById("paragraphContent");
var modal = document.getElementById("modalContainer");

const titleArray = ["I", "LOVE", "YOU"];
const textArray = [
  "I means, I will always protect you, I will always take care of you, I will always be by your side, I will always support you, and I will always love you. I'm doing my best to give you everything you want and need because it makes me happy to see your beautiful smile. I'll never leave you, my love, because it will shatter my whole world without you, I can't concentrate, I can't think properly, and I'll always be sad, so I promise you that I'm doing my all to be better.",
  "LOVE makes us feel like there are butterflies in our stomachs, Love will always make us motivated. Even if there are challenges in this cruel world, Love makes the impossible possible. So my Love always remember that I will Love you, till my last breath because my Love towards you will never fade.",
  "YOU chose me over a lot of people surrounding You. You always make me laugh when I'm down, You always make me feel supported with all my stupid decision, You are always there for me when I feel lonely, and You chose to love me despite all my flaws, that's why I will always Love You. I Love You",
];

// this will change the content of the header and paragraph in the modal
function openAndChangeModal(index) {
  console.log("open");
  modal.classList.add("show");
  header.innerHTML = titleArray[index];
  text.innerHTML = textArray[index];
}

// cloding the modal
function closeModal(event) {
  modal.classList.remove("show");
  console.log("hi");
}

// assigning event handlers properly
btnI.onclick = function () {
  openAndChangeModal(0);
};
btnLOVE.onclick = function () {
  openAndChangeModal(1);
};
btnYOU.onclick = function () {
  openAndChangeModal(2);
};
btnReturn.onclick = closeModal;
