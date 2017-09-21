import { QuizModel } from '../models/QuizModel.js';
import { GameOverView } from '../views/GameOverView.js';
import { MainController } from './MainController.js';

export const GameOverController = {
  init: function(){
    GameOverView.init();
  },
  getScore: function() {
    return QuizModel.score;
  },
  getNumberOfQuestions: function() {
    return QuizModel.numOfQuestions;
  },
  getNumberOfCorrect: function(){
  	return QuizModel.numOfCorrect;
  }
};
GameOverController.__proto__ = MainController;