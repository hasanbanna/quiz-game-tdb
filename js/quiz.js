// TODO: 
// [x] add reset button in gameover screen
// [x] add different questions on game reset
(function() {
  var QuizModel = {
    init: function() {
      this.categories = ["General Knowledge"];
      this.difficulty = ["Easy", "Medium", "Hard"];
      this.score = 0;
      this.quiz = [];
      this.numOfQuestions = 0;
    },
    getQuiz: function() {
      return this.quiz;
    },
    addQuestionAndAnswers: function(quiz_obj) {
      this.quiz.push(quiz_obj);
    },
    getCategories: function() {
      return this.categories;
    },
    getDifficulties: function() {
      return this.difficulty;
    },
    getNumOfQuestions: function() {
      return this.numOfQuestions;
    },
    getCurrentQuestion: function(index) {
      console.log("the index is " + index);
      return this.quiz[index].question;
    },
    getCurrentAnswers: function(index) {
      return this.quiz[index].answers;
    },
    getCorrectAnswer: function(index) {
      return this.quiz[index].correct_answer;
    }
  };
  var QuizController = {
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
        QuizController.init();
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
            QuizController.shuffle(answers);
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
  var MainMenuView = {
    init: function() {
      this.$main_menu = $("<div>", { class: "main-menu" });
      this.$title = $("<div>", {class: "title"});
      this.$options = $("<div>", { class: "options" });
      this.$select_category = $("<select>", {
        name: "category",
        id: "select-category",
        class: "category"
      });
      this.$select_difficulty = $("<select>", {
        name: "difficulty",
        id: "select-difficulty",
        class: "difficulty"
      });
      this.$start_button = $("<button>", { id: "btn-start" });
      this.render();
    },
    render: function() {
      this.$select_category.html(this.populateCategories());
      this.$select_difficulty.html(this.populateDifficulties());

      // click to go to play view
      this.$start_button.html("start");
      this.$start_button.on("click", this.changeToPlayView.bind(this));

      this.$options.append("<label for='category'>Category</label>");
      this.$options.append(this.$select_category);
      this.$options.append("<br><label for='category'>Difficulty</label>");
      this.$options.append(this.$select_difficulty);
      this.$options.append(this.$start_button);
      this.$main_menu.html(this.$options);

      this.$title.append("Quiz Time");
      $("#main-area").append(this.$title);
      $("#main-area").append(this.$main_menu);
    },
    populateCategories: function() {
      var cats = QuizController.getCategories();
      var html = "";
      cats.forEach(function(cat) {
        html += "<option value='" + cat + "'>" + cat + "</option>";
      });
      return html;
    },
    populateDifficulties: function() {
      var difficulties = QuizController.getDifficulties();
      var html = "";
      difficulties.forEach(function(difficulty) {
        html +=
          "<option value='" + difficulty + "'>" + difficulty + "</option>";
      });
      return html;
    },
    changeToPlayView: function() {
      QuizController.changeView("play");
    },
    remove: function() {
      this.$main_menu.remove();
    }
  };
  var PlayController = {
    init: function() {
      this.currentQuestionNumber = 0;
      this.numOfCorrect = 0;
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
    }
  };
  var PlayView = {
    init: function() {
      (this.$play_area = $("<div>")), { id: "play-area" };
      this.$question = $("<h1>", { class: "question" });
      this.$answers = $("<div>", { class: "answers" });
      this.render();
    },
    render: function() {
      var cQ = PlayController.currentQuestionNumber;
      var nQ = PlayController.getNumOfQuestions();
      if (cQ < nQ) {
        this.$question.html(this.currentQuestion());
        this.$play_area.html(this.$question);
        this.$answers.html(this.populateAnswers());
        // on click return the answer
        this.$answers.on("click", "button", function(e) {
          if ($(this).is(":button")) {
            var answer = $(this).html();
            var correctAnswer = PlayController.getCorrectAnswer();
            if (answer === correctAnswer) {
              PlayController.numOfCorrect++;
              PlayController.increaseScore();
            }
            PlayController.currentQuestionNumber++;
            PlayView.init();
          }
        });
        this.$play_area.append(this.$answers);
        $("#main-area").html(this.$play_area);
      } else {
        QuizController.changeView("gameover");
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
  var GameOverController = {
    getScore: function() {
      return QuizModel.score;
    },
    getNumberOfQuestions: function() {
      return QuizModel.numOfQuestions;
    }
  };
  var GameOverView = {
    init: function() {
      this.$game_over = $("<div>", { id: "gameover" });
      // score is determined by how fast and how many the player answered correctly
      this.$reset_btn = $("<button>", {
        id: "reset-btn",
        text: "reset",
        click: function(){
          QuizController.changeView("main");
        }
      });
      this.answer_correctly = PlayController.numOfCorrect;
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
  QuizController.init();
})();
