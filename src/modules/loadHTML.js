const loadHTML = async (scoreContainer, scoreArray) => {
  scoreContainer.innerHTML = '';
  const getScore = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ebDdFrSX03ugdnMEXHod/scores/');
  const convertScore = await getScore.json();
  scoreArray = convertScore.result;
  console.log(scoreArray);
  for (let i = 0; i < scoreArray.length; i += 1) {
    const scoreElement = document.createElement('li');
    scoreElement.innerHTML = `${scoreArray[i].user}: ${scoreArray[i].score}`;
    scoreContainer.appendChild(scoreElement);
  }
}

export default loadHTML;
