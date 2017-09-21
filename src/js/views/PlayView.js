import { PlayController } from '../controllers/PlayController.js'
import { MainController } from '../controllers/MainController.js'
export var PlayView = {
  init: function() {
    this.$play_area = $("<div>"), { id: "play-area" };
    this.$question = $("<h1>", { class: "question" });
    this.$answers = $("<div>", { class: "answers" });
    this.render();
  },
  render: function() {
    // probably refactor this code
    var currentQuestionNumber = PlayController.currentQuestionNumber;
    var numberOfQuestions = PlayController.getNumOfQuestions();
    if (currentQuestionNumber< numberOfQuestions) {
      this.$question.html(this.currentQuestion());
      this.$play_area.html(this.$question);
      this.$answers.html(this.populateAnswers());
      // on click return the answer
      this.$answers.on("click", "button", function(e) {
        if ($(this).is(":button")) {
          var answer = $(this).html();
          var correctAnswer = PlayController.getCorrectAnswer();
          if (answer === correctAnswer) {
            PlayController.increaseCorrectAnswerCounter();
            PlayController.increaseScore();
          }
          PlayController.currentQuestionNumber++;
          PlayView.init();
        }
      });
      this.$play_area.append(this.$answers);
      $("#main-area").html(this.$play_area);
    } else {
      MainController.changeView("gameover");
    }
  },
  currentQuestion: function() {
    return PlayController.getCurrentQuestion();
  },
  populateAnswers: function() {
    var answers = PlayController.getCurrentAnswers();
    var html = "";
    answers.forEach(function(answer) {
      html += "<button class='btn-answer'>" + answer + "</button>";
    });
    return html;
  },
  remove: function() {
    this.$play_area.remove();
  }
};
