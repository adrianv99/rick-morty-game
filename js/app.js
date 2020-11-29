import API from './api.js';
import Character from './character.js';
import Score from './score.js';

let character;
const startPoints = !localStorage.getItem('points') ? 0 : localStorage.getItem('points');
const api = new API();
const score = new Score({ startPoints });
const $aliveBtn = document.querySelector('#alive');
const $deadBtn = document.querySelector('#dead');

// validate that the character status is Alive
$aliveBtn.addEventListener('click', async () => {
    if (character.status === 'Alive') {
        score.upScore();
        console.log('right answer');
    }
    else {
        score.cleanScore();
        console.log('wrong answer');
    }
    score.render();
    generateCharacter();
});

// validate that the character status is Dead
$deadBtn.addEventListener('click', async () => {
    if (character.status === 'Dead') {
        score.upScore();
        console.log('right answer');
    }
    else {
        score.cleanScore();
        console.log('wrong answer');
    }
    score.render();
    generateCharacter();
});

async function generateCharacter() {
    let characterData = await api.fetchCharacter();
    character = new Character(characterData);
}

generateCharacter();