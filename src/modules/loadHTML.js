export default async function loadHTML(scoreContainer, scoreArray) {
  scoreContainer.innerHTML = '';
  // scoreArray = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ebDdFrSX03ugdnMEXHod/scores/', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // }).then(data => console.log(data));

  const getScore = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ebDdFrSX03ugdnMEXHod/scores/');
  const convertScore = await getScore.json();

  // console.log(convertScore.result);
  scoreArray = convertScore.result;
  console.log(scoreArray);

  // scoreArray = convertScore.then(function(value) { return value.result });
  // console.log(scoreArray);

  for (let i = 0; i < scoreArray.length; i += 1) {
    const scoreElement = document.createElement('li');
    scoreElement.innerHTML = `${scoreArray[i].user}: ${scoreArray[i].score}`;
    scoreContainer.appendChild(scoreElement);
  }
  // console.log(scoreArray);
}
