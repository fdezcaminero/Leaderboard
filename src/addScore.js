export default function addScore(personsName, score, leaderboard) {
  const newScore = {};
  newScore.score = score;
  newScore.name = personsName;
  leaderboard.push(newScore);
  localStorage.setItem('superboard', JSON.stringify(leaderboard));
}
