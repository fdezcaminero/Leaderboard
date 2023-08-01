export function addScore(personsName, score, leaderboard) {
  const newScore = {};
  newScore.name = personsName;
  newScore.score = score;
  leaderboard.push(newScore);
}

// export function addTask(inputvalue, arrayTasks) {
//   const newTask = {};
//   newTask.description = inputvalue;
//   newTask.completed = false;
//   newTask.index = arrayTasks.length + 1;
//   arrayTasks.push(newTask);
// }
