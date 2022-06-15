// import _ from 'lodash';
import './style.css';

import './modules/score.js';
import {sendScore, renderPlayers} from './modules/score.js';

 const scoreForm = document.getElementById('score-form');

 scoreForm.onsubmit = (e) => {
   e.preventDefault();
  sendScore();
 };

 refresh.onclick = (e) => {
  e.preventDefault();
  renderPlayers();
};

window.onload = (e) => {
  e.preventDefault();
  renderPlayers();
};
