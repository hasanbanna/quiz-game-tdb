import { QuizModel } from '../models/QuizModel.js';
import { PlayView } from '../views/PlayView.js';

export var PlayController = {
  init: function() {
    this.currentQuestionNumber = 0;
    PlayView.init();
  },
  getCurrentQuestion: function() {
    return QuizModel.getCurrentQuestion(this.currentQuestionNumber);
  },
  getCurrentAnswers: function() {
    return QuizModel.getCurrentAnswers(this.currentQuestionNumber);
  },
  getCorrectAnswer: function() {
    return QuizModel.getCorrectAnswer(this.currentQuestionNumber);
  },
  getNumOfQuestions: function() {
    return QuizModel.numOfQuestions;
  },
  increaseScore: function() {
    QuizModel.score += 20;
  },
  increaseCorrectAnswerCounter: function(){
    QuizModel.numOfCorrect++;
  }
  ,
  getCorrectAnswerCounter: function(){
    return QuizModel.numOfCorrect;
  }
};
