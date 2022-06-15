const scoreForm = document.getElementById('score-form');
const nameInput = scoreForm.name;
const scoreInput = scoreForm.score;
const scoreBoard = document.getElementById('score-board');
const id = 'tpbH0M4HiGifjDCgjsk54arzy4e7f';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

export async function getPlayers() {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const renderPlayers = async () => {
  const players = await getPlayers();
  scoreBoard.innerHTML = '';
  players.result.forEach((player) => {
    const scoreLi = document.createElement('li');
    scoreLi.classList.add('score-div');
    const nameAndScoreLabel = document.createElement('label');
    nameAndScoreLabel.innerHTML = `${player.user} : ${player.score}`;
    scoreLi.append(nameAndScoreLabel);
    scoreBoard.append(scoreLi);
  });
};

export const sendScore = async () => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: nameInput.value,
        score: scoreInput.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    nameInput.value = '';
    scoreInput.value = '';
    renderPlayers();
    return res.json();
  } catch (error) {
    console.log(error);
    return false;
  }
};
