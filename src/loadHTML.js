export default function loadHTML(scoreContainer, scoreArray) {
  scoreContainer.innerHTML = '';
  for (let i = 0; i < scoreArray.length; i += 1) {
    const scoreElement = document.createElement('li');
    scoreElement.innerHTML = `${scoreArray[i].name}: ${scoreArray[i].score}`;
    scoreContainer.appendChild(scoreElement);
  }
}
