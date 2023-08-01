export default function addScore(personsName, score, leaderboard) {
  const newScore = {};
  newScore.name = personsName;
  newScore.score = score;
  leaderboard.push(newScore);
  localStorage.setItem('superboard', JSON.stringify(leaderboard));
}
