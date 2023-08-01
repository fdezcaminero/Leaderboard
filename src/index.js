import './style.css';
import loadHTML from './loadHTML.js';
import addScore from './addScore.js';

let leaderboard = [];

const localBoard = localStorage.getItem('superboard');

if (localBoard) {
  leaderboard = JSON.parse(localBoard);
}

const scoreContainer = document.querySelector('.scoreList');
const inputName = document.getElementById('inputName');
const inputScore = document.getElementById('inputScore');
const refreshButton = document.getElementById('refreshButton');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  addScore(inputName.value, inputScore.value, leaderboard);
  inputName.value = '';
  inputScore.value = '';
  localStorage.setItem('superboard', JSON.stringify(leaderboard));
});

refreshButton.addEventListener('click', () => loadHTML(scoreContainer, leaderboard));

window.addEventListener('load', () => loadHTML(scoreContainer, leaderboard));
