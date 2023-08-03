export default function addScore(personsName, score, leaderboard) {
  const newScore = {};
  newScore.score = score;
  newScore.name = personsName;
  leaderboard.push(newScore);
  localStorage.setItem('superboard', JSON.stringify(leaderboard));

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ebDdFrSX03ugdnMEXHod/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "user": personsName,
      "score": score
    }),
  }).then(res => {
    return res.json();
  }).then(data => console.log(data));
}
