import './style.css';
import loadHTML from './modules/loadHTML.js';
import addScore from './modules/addScore.js';

let leaderboard = [];

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     "name": "Super cool game"
//   }),
// }).then(res => {
//   return res.json();
// }).then(data => console.log(data));

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ebDdFrSX03ugdnMEXHod/scores/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     "user": "Jose",
//     "score": 100
//   }),
// }).then(res => {
//   return res.json();
// }).then(data => console.log(data));

// Object { result: "Game with ID: ebDdFrSX03ugdnMEXHod added." }
// result: "Game with ID: sAWYRpOAO9rDXCKasPsP added."
// /games/ebDdFrSX03ugdnMEXHod/scores/
// https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ebDdFrSX03ugdnMEXHod/scores/

const gameID = 'ebDdFrSX03ugdnMEXHod';
const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ebDdFrSX03ugdnMEXHod/scores/';

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
