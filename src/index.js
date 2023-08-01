import './style.css';
import loadHTML from './loadHTML.js';
import addScore from './addScore.js';

let leaderboard = [];

const scoreContainer = document.querySelector('.scoreList');
const submitButton = document.getElementById('submitButton');
const refreshButton = document.getElementById('refreshButton');
const inputName = document.getElementById('inputName');
const inputScore = document.getElementById('inputScore');

submitButton.addEventListener('click', () => {
  addScore(inputName.value, inputScore.value, leaderboard);
  inputName.value = '';
  inputScore.value = '';
  // loadHTML(scoreContainer, leaderboard);
});

refreshButton.addEventListener('click', () => loadHTML(scoreContainer, leaderboard));

window.addEventListener('load', () => loadHTML(scoreContainer, leaderboard));
