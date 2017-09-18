import { QuizModel } from '../models/QuizModel.js';
import { GameOverView } from '../views/GameOverView.js'
export var GameOverController = {
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