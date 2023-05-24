import API from "./api.js";
import Character from "./character.js";
import Score from "./score.js";
import Loading from "./loading.js";

let currentCharacter = null;
let characters = [];
const startPoints = !localStorage.getItem("points")
  ? 0
  : Number(localStorage.getItem("points"));
const score = new Score({ startPoints });
const api = new API();
const loading = new Loading({ status: false });

// get a random element from an array
const getRandomElement = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const handleChooseAnswer = (answer) => {
  // check if answer is correct
  const correctAnswer = currentCharacter.status === answer;

  if (correctAnswer) {
    score.add(1);
  } else {
    score.reset();
  }

  // change current character
  currentCharacter = new Character(getRandomElement(characters));
};

const initApp = async () => {
  try {
    loading.setState(true);

    // fetch all characters with alive and dead status
    const { results: aliveCharacters } = await api.fetchCharacters({
      status: "alive",
    });
    const { results: deadCharacters } = await api.fetchCharacters({
      status: "dead",
    });

    // shuffle characters
    characters = []
      .concat(aliveCharacters, deadCharacters)
      .sort((a, b) => 0.5 - Math.random());

    loading.setState(false);

    // set a character
    currentCharacter = new Character(getRandomElement(characters));
  } catch (error) {
    if (!alert("Oops, something went wrong.")) {
      window.location.reload();
    }
    console.log(error);
  }
};

initApp();
window.chooseAnswer = handleChooseAnswer;
