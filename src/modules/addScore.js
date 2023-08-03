const addScore = async (personsName, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ebDdFrSX03ugdnMEXHod/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "user": personsName,
      "score": score
    }),
  });
}

export default addScore;
