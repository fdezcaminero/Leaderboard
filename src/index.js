import './style.css';
import loadHTML from './modules/loadHTML.js';
import addScore from './modules/addScore.js';

let leaderboard = [];

const scoreContainer = document.querySelector('.scoreList');
const inputName = document.getElementById('inputName');
const inputScore = document.getElementById('inputScore');
const refreshButton = document.getElementById('refreshButton');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  addScore(inputName.value, inputScore.value);
  inputName.value = '';
  inputScore.value = '';
});

refreshButton.addEventListener('click', () => loadHTML(scoreContainer, leaderboard));

window.addEventListener('load', () => loadHTML(scoreContainer, leaderboard));
