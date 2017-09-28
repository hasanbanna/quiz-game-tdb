import { QuizModel } from "../models/QuizModel.js";
import { MainController } from './MainController.js';
import { MainMenuView } from '../views/MainMenuView.js';
export const MainMenuController = {
  init: function () {
    QuizModel.init();
    MainMenuView.init();
  },
  getCategories: function () {
    return QuizModel.getCategories();
  },
  getDifficulties: function () {
    return QuizModel.getDifficulties();
  },
  addQuestions: function () {
    const catId = QuizModel.getSelectedCategoryId();
    const difficulty = QuizModel.getSelectedDifficulty().toLowerCase();
    const url = "https://opentdb.com/api.php?amount=2&category="+catId+"&difficulty="+difficulty+"&type=multiple";
    console.log(url);
    $.ajax({
      url: url,
      success: function (result) {
        var len = result.results.length;
        result.results.forEach(function (res) {
          var answers = res.incorrect_answers.concat(res.correct_answer);
          var correct_answer = res.correct_answer;
          var question = res.question;
          MainController.shuffle(answers);
          QuizModel.addQuestionAndAnswers({
            question: question,
            answers: answers,
            correct_answer: correct_answer
          });
          QuizModel.numOfQuestions++;
        });
      },
      error: function (res) {
        console.log("error accessing api " + JSON.stringify(res));
      },
      complete: function(res){
        MainMenuController.changetoPlayView();
      }
    });
  },
  changetoPlayView: function () {
    MainController.changeView("play");
  },
  setSelectedCategory: function(str){
    QuizModel.setSelectedCategory(str);
  },
  getSelectedCategory: function(){
    return QuizModel.getSelectedCategory();
  },
  setSelectedDifficulty: function(str){
    QuizModel.setSelectedDifficulty(str);
  }
};