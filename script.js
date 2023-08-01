//   //card options
const cardArray = [
  {
    name: "CSS",
    img: "images/CSS.png",
  },
  {
    name: "EPS",
    img: "images/EPS.png",
  },
  {
    name: "HTML",
    img: "images/HTML.png",
  },
  {
    name: "JPG",
    img: "images/JPG.png",
  },
  {
    name: "JS",
    img: "images/JS.png",
  },
  {
    name: "MP4",
    img: "images/MP4.png",
  },
  {
    name: "PDF",
    img: "images/PDF.png",
  },
  {
    name: "PHP",
    img: "images/PHP.png",
  },
  {
    name: "XLS",
    img: "images/XLS.png",
  },
  {
    name: "ZIP",
    img: "images/ZIP.png",
  },
  {
    name: "CSS",
    img: "images/CSS.png",
  },
  {
    name: "EPS",
    img: "images/EPS.png",
  },
  {
    name: "HTML",
    img: "images/HTML.png",
  },
  {
    name: "JPG",
    img: "images/JPG.png",
  },
  {
    name: "JS",
    img: "images/JS.png",
  },
  {
    name: "MP4",
    img: "images/MP4.png",
  },
  {
    name: "PDF",
    img: "images/PDF.png",
  },
  {
    name: "PHP",
    img: "images/PHP.png",
  },
  {
    name: "XLS",
    img: "images/XLS.png",
  },
  {
    name: "ZIP",
    img: "images/ZIP.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".MyStyle");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

//check for matches
function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("You have clicked the same image!");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry, try again");
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! You found them all!";
  }
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();
