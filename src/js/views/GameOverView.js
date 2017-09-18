import { MainController } from '../controllers/MainController.js'
import { GameOverController } from '../controllers/GameOverController.js'
export var GameOverView = {
  init: function() {
    this.$game_over = $("<div>", { id: "gameover" });
    this.$reset_btn = $("<button>", {
      id: "reset-btn",
      text: "reset",
      click: function(){
        MainController.changeView("main");
      }
    });
    this.answer_correctly = GameOverController.getNumberOfCorrect();
    this.num_of_questions = GameOverController.getNumberOfQuestions();
    this.$score_show = $("<div>", { id: "score" });
    this.$score = GameOverController.getScore();
    this.render();
  },
  render: function() {
    var html = "";
    html +=
      "<b> " +
      this.answer_correctly +
      " / " +
      this.num_of_questions +
      " </b><br><br>";
    html += "Score: " + this.$score;
    this.$game_over.append("<h1 class='title'>Quiz Finished</h1>");
    this.$score_show.html(html);
    this.$game_over.append(this.$score_show);
    this.$game_over.append(this.$reset_btn);
    $("#main-area").html(this.$game_over);
  },
  remove: function(){
    return this.$game_over.remove();
  }
};