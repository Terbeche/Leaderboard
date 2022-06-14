// import _ from 'lodash';
import './style.css';
import { addScore, displayScore, displayScoreOnReload } from './modules/score.js';

const scoreForm = document.getElementById('score-form');
const nameInput = scoreForm.name;
const scoreInput = scoreForm.score;

displayScoreOnReload();
scoreForm.onsubmit = (e) => {
  e.preventDefault();

  const newScore = addScore(nameInput.value, scoreInput.value);

  displayScore(newScore);
};