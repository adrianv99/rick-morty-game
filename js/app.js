import API from './api.js';
import Character from './character.js';
import Score from './score.js';
import Loading from './loading.js';

let character;
const startPoints = !localStorage.getItem('points') ? 0 : localStorage.getItem('points');
const score = new Score({ startPoints });
const api = new API();
const loading = new Loading({ status: false });

const chooseAnswer = (answer) => {
    if(character.status === answer) score.upScore(); // right answer 
    else score.cleanScore(); // wrong answer
    score.render(); 
    generateCharacter();
}

const generateCharacter = async () => {
    loading.setState(true)
    const characterData = await api.fetchCharacter();
    loading.setState(false)
    character = new Character(characterData);
}

generateCharacter();
window.chooseAnswer = chooseAnswer;
