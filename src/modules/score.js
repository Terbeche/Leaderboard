const scoreForm = document.getElementById('score-form');
const scoreBoard = document.getElementById('score-board');
const nameInput = scoreForm.name;
const scoreInput = scoreForm.score;
const scoreArray = JSON.parse(localStorage.getItem('scoreArray')) || [];

export const addScore = (name, score) => {
  if (Number.isNaN(Number(score)) || score === '') {
    return false;
  }
  scoreArray.push({
    name,
    score,
  });

  localStorage.setItem('scoreArray', JSON.stringify(scoreArray));
  return {
    name,
    score,
  };
};

export const displayScore = ({
  name,
  score,
}) => {
  if (Number.isNaN(Number(score)) || score === '') {
    nameInput.value = '';
    scoreInput.value = '';
    return false;
  }
  const scoreLi = document.createElement('li');
  scoreLi.classList.add('score-div');

  const nameAndScoreLabel = document.createElement('label');
  nameAndScoreLabel.innerHTML = `${name} : ${score}`;
  scoreLi.append(nameAndScoreLabel);

  scoreBoard.append(scoreLi);

  nameInput.value = '';
  scoreInput.value = '';
  return true;
};

export const displayScoreOnReload = () => {
  scoreArray.forEach(displayScore);
};
