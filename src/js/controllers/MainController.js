import { QuizModel } from '../models/QuizModel.js';
import { PlayController } from './PlayController.js'
import { GameOverController } from './GameOverController.js'
import { MainMenuView } from '../views/MainMenuView.js'
import { PlayView } from '../views/PlayView.js'
import { GameOverView } from '../views/GameOverView.js'

export const MainController = {
  init: function() {
    QuizModel.init();
    this.addQuestions();
    MainMenuView.init();
  },
  changeView: function(view) {
    if (view == "play") {
      PlayController.init();
      MainMenuView.remove();
    } else if (view == "gameover") {
      PlayView.remove();
      GameOverView.init();
    } else if (view == "main") {
      PlayView.remove();
      GameOverView.remove();
      MainController.init();
    }
  },
  getCategories: function() {
    return QuizModel.getCategories();
  },
  getDifficulties: function() {
    return QuizModel.getDifficulties();
  },
  addQuestions: function() {
    $.ajax({
      url:
        "https://opentdb.com/api.php?amount=2&category=9&difficulty=easy&type=multiple",
      success: function(result) {
        var len = result.results.length;
        result.results.forEach(function(res) {
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

        // console.log(result.results[0].question);
      },
      error: function(res) {
        console.log("error accessing api " + JSON.stringify(res));
      }
    });
  },
  shuffle: function(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
  }
};
