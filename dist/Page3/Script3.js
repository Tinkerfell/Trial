"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const rabbitImg = document.querySelector(".rabbit");

const MAX_IMAGES = 6;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    updateTitle(); // Update the title on no button click
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

const titles = [
  "I AM YOUR CUTE BABY",
  "I’LL BE ANGRY AT YOU",
  "PLEASE, BABY?",
  "I’M FEELING SAD NOW...",
  "I’LL BE ALONE",
  "DON’T YOU DARE TO REJECT ME!!"
];

let currentIndex = 0;

function updateTitle() {
  currentIndex = (currentIndex + 1) % titles.length;
  titleElement.innerText = titles[currentIndex];
  messageElement.style.textAlign = "center"; 
}

function handleYesClick() {
  titleElement.innerHTML = "HEHE<br>I KNEW YOU WILL SAY YES";
  buttonsContainer.classList.add("hidden");
  changeImage("Yes❤️");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.5;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function getNoButtonMessage(noCount) {
  const messages = [
    "Sorry No",
    "Still No",
    "Think Again!",
    "You Sure🥺",
    "I’ll cry...",
    "No Way",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

document.getElementById('changeTitle').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % titles.length;
    document.getElementById('title').innerText = titles[currentIndex];
});

function changeImage(image) {
  if (image === "Yes❤️") {
    rabbitImg.src = "img/rabbit-yes.jpg";
    const messageElement = document.createElement("p");
    messageElement.innerHTML = "Now you can’t run away from me.<br>You’re stuck with me forever! YAY❤️<br><br>P.s I know it's very late but still I love you!";
    rabbitImg.parentNode.appendChild(messageElement);
    messageElement.style.textAlign = "center"; 
  } else {
    rabbitImg.src = `img/rabbit-${image}.jpg`;
  }; 
}



function updateNoButtonText() {
  noButton.innerHTML = getNoButtonMessage(noCount);
}
