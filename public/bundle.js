/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainController = undefined;

var _QuizModel = __webpack_require__(1);

var _PlayController = __webpack_require__(3);

var _MainMenuController = __webpack_require__(2);

var _GameOverController = __webpack_require__(4);

// all controllers 'inherit' from this controller
var MainController = exports.MainController = {
  init: function init() {
    this.$main_menu = $("#main-area");
    _MainMenuController.MainMenuController.init();
  },
  remove: function remove() {
    this.$main_menu.html("");
  },
  changeView: function changeView(view) {
    if (view == "play") {
      this.remove();
      _PlayController.PlayController.init();
    } else if (view == "gameover") {
      this.remove();
      _GameOverController.GameOverController.init();
    } else if (view == "main") {
      this.remove();
      _MainMenuController.MainMenuController.init();
    }
  },
  shuffle: function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuizModel = undefined;

var _categories = __webpack_require__(6);

var QuizModel = exports.QuizModel = {
  init: function init() {
    this.categories = this.addCategories();
    this.difficulty = ["Easy", "Medium", "Hard"];
    this.score = 0;
    this.quiz = [];
    this.numOfQuestions = 0;
    this.numOfCorrect = 0;
    this.selectedCategory = "";
    this.selectedDifficulty = "";
  },
  getQuiz: function getQuiz() {
    return this.quiz;
  },
  addQuestionAndAnswers: function addQuestionAndAnswers(quiz_obj) {
    this.quiz.push(quiz_obj);
  },
  getCategories: function getCategories() {
    return this.categories;
  },
  getDifficulties: function getDifficulties() {
    return this.difficulty;
  },
  getNumOfQuestions: function getNumOfQuestions() {
    return this.numOfQuestions;
  },
  getCurrentQuestion: function getCurrentQuestion(index) {
    return this.quiz[index].question;
  },
  getCurrentAnswers: function getCurrentAnswers(index) {
    return this.quiz[index].answers;
  },
  getCorrectAnswer: function getCorrectAnswer(index) {
    return this.quiz[index].correct_answer;
  },
  addCategories: function addCategories() {
    return _categories.categoriesJSON.map(function (category) {
      return category.name;
    });
  },
  // change this so that it returns id to be used in the ajax call
  setSelectedCategory: function setSelectedCategory(str) {
    this.selectedCategory = str;
  },
  getSelectedCategory: function getSelectedCategory() {
    return this.selectedCategory;
  },
  getSelectedCategoryId: function getSelectedCategoryId() {
    var selected = this.getSelectedCategory();
    console.log(selected);
    return _categories.categoriesJSON.filter(function (category) {
      if (category.name === selected) {
        return category;
      }
    })[0].id;
  },
  setSelectedDifficulty: function setSelectedDifficulty(str) {
    this.selectedDifficulty = str;
  },
  getSelectedDifficulty: function getSelectedDifficulty(str) {
    return this.selectedDifficulty;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainMenuController = undefined;

var _QuizModel = __webpack_require__(1);

var _MainController = __webpack_require__(0);

var _MainMenuView = __webpack_require__(8);

var MainMenuController = exports.MainMenuController = {
  init: function init() {
    _QuizModel.QuizModel.init();
    _MainMenuView.MainMenuView.init();
  },
  getCategories: function getCategories() {
    return _QuizModel.QuizModel.getCategories();
  },
  getDifficulties: function getDifficulties() {
    return _QuizModel.QuizModel.getDifficulties();
  },
  addQuestions: function addQuestions() {
    var catId = _QuizModel.QuizModel.getSelectedCategoryId();
    var difficulty = _QuizModel.QuizModel.getSelectedDifficulty().toLowerCase();
    var url = "https://opentdb.com/api.php?amount=2&category=" + catId + "&difficulty=" + difficulty + "&type=multiple";
    $.ajax({
      url: url,
      success: function success(result) {
        var len = result.results.length;
        result.results.forEach(function (res) {
          var answers = res.incorrect_answers.concat(res.correct_answer);
          var correct_answer = res.correct_answer;
          var question = res.question;
          _MainController.MainController.shuffle(answers);
          _QuizModel.QuizModel.addQuestionAndAnswers({
            question: question,
            answers: answers,
            correct_answer: correct_answer
          });
          _QuizModel.QuizModel.numOfQuestions++;
        });
      },
      error: function error(res) {
        console.log("error accessing api " + JSON.stringify(res));
      },
      complete: function complete(res) {
        MainMenuController.changetoPlayView();
      }
    });
  },
  changetoPlayView: function changetoPlayView() {
    _MainController.MainController.changeView("play");
  },
  setSelectedCategory: function setSelectedCategory(str) {
    _QuizModel.QuizModel.setSelectedCategory(str);
  },
  getSelectedCategory: function getSelectedCategory() {
    return _QuizModel.QuizModel.getSelectedCategory();
  },
  setSelectedDifficulty: function setSelectedDifficulty(str) {
    _QuizModel.QuizModel.setSelectedDifficulty(str);
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayController = undefined;

var _QuizModel = __webpack_require__(1);

var _MainController = __webpack_require__(0);

var _PlayView = __webpack_require__(7);

var PlayController = exports.PlayController = {
  init: function init() {
    this.currentQuestionNumber = 0;
    _PlayView.PlayView.init();
  },
  getCurrentQuestion: function getCurrentQuestion() {
    return _QuizModel.QuizModel.getCurrentQuestion(this.currentQuestionNumber);
  },
  getCurrentAnswers: function getCurrentAnswers() {
    return _QuizModel.QuizModel.getCurrentAnswers(this.currentQuestionNumber);
  },
  getCorrectAnswer: function getCorrectAnswer() {
    return _QuizModel.QuizModel.getCorrectAnswer(this.currentQuestionNumber);
  },
  getNumOfQuestions: function getNumOfQuestions() {
    return _QuizModel.QuizModel.numOfQuestions;
  },
  increaseScore: function increaseScore() {
    _QuizModel.QuizModel.score += 20;
  },
  increaseCorrectAnswerCounter: function increaseCorrectAnswerCounter() {
    _QuizModel.QuizModel.numOfCorrect++;
  },
  getCorrectAnswerCounter: function getCorrectAnswerCounter() {
    return _QuizModel.QuizModel.numOfCorrect;
  },
  changeToGameOverView: function changeToGameOverView() {
    _MainController.MainController.changeView("gameover");
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameOverController = undefined;

var _QuizModel = __webpack_require__(1);

var _GameOverView = __webpack_require__(9);

var _MainController = __webpack_require__(0);

var GameOverController = exports.GameOverController = {
  init: function init() {
    _GameOverView.GameOverView.init();
  },
  getScore: function getScore() {
    return _QuizModel.QuizModel.score;
  },
  getNumberOfQuestions: function getNumberOfQuestions() {
    return _QuizModel.QuizModel.numOfQuestions;
  },
  getNumberOfCorrect: function getNumberOfCorrect() {
    return _QuizModel.QuizModel.numOfCorrect;
  }
};
GameOverController.__proto__ = _MainController.MainController;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MainController = __webpack_require__(0);

(function () {
  _MainController.MainController.init();
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
var categoriesJSON = exports.categoriesJSON = [{
        "id": "9",
        "name": "General Knowledge"
}, {
        "id": "10",
        "name": "Books"
}, {
        "id": "11",
        "name": "Film"
}, {
        "id": "12",
        "name": "Music"
}, {
        "id": "14",
        "name": "Television"
}, {
        "id": "15",
        "name": "Video Games"
}, {
        "id": "16",
        "name": "Board Games"
}, {
        "id": "17",
        "name": "Nature"
}, {
        "id": "18",
        "name": "Computers"
}, {
        "id": "19",
        "name": "Mathematics"
}, {
        "id": "20",
        "name": "Mythology"
}, {
        "id": "21",
        "name": "Sports"
}, {
        "id": "22",
        "name": "Geography"
}, {
        "id": "23",
        "name": "History"
}, {
        "id": "24",
        "name": "Politics"
}, {
        "id": "25",
        "name": "Art"
}, {
        "id": "26",
        "name": "Celebrities"
}, {
        "id": "27",
        "name": "Animals"
}, {
        "id": "28",
        "name": "Vehicles"
}, {
        "id": "29",
        "name": "Comics"
}, {
        "id": "30",
        "name": "Gadgets"
}];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayView = undefined;

var _PlayController = __webpack_require__(3);

var _MainMenuController = __webpack_require__(2);

var PlayView = exports.PlayView = {
  init: function init() {
    this.$play_area = $("<div>"), { id: "play-area" };
    this.$question = $("<h1>", { class: "question" });
    this.$answers = $("<div>", { class: "answers" });
    this.render();
  },
  render: function render() {
    // probably refactor this code
    var currentQuestionNumber = _PlayController.PlayController.currentQuestionNumber;
    var numberOfQuestions = _PlayController.PlayController.getNumOfQuestions();
    if (currentQuestionNumber < numberOfQuestions) {
      this.$question.html(this.currentQuestion());
      this.$play_area.html(this.$question);
      this.$answers.html(this.populateAnswers());
      // on click return the answer
      this.$answers.hide();
      this.$answers.fadeIn(350);
      this.$answers.on("click", "button", function (e) {
        if ($(this).is(":button")) {
          var answer = $(this).html();
          var correctAnswer = _PlayController.PlayController.getCorrectAnswer();
          if (answer === correctAnswer) {
            _PlayController.PlayController.increaseCorrectAnswerCounter();
            _PlayController.PlayController.increaseScore();
          }
          _PlayController.PlayController.currentQuestionNumber++;
          PlayView.init();
        }
      });
      this.$play_area.append(this.$answers);
      $("#main-area").html(this.$play_area);
    } else {
      _PlayController.PlayController.changeToGameOverView();
    }
  },
  currentQuestion: function currentQuestion() {
    return _PlayController.PlayController.getCurrentQuestion();
  },
  populateAnswers: function populateAnswers() {
    var answers = _PlayController.PlayController.getCurrentAnswers();
    var html = "";
    answers.forEach(function (answer) {
      html += "<button class='btn-answer'>" + answer + "</button>";
    });
    return html;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainMenuView = undefined;

var _MainMenuController = __webpack_require__(2);

var MainMenuView = exports.MainMenuView = {
  init: function init() {
    this.title = "Quiz Gem";
    this.$main_menu = $("<div>", {
      class: "main-menu"
    });
    this.$title = $("<div>", {
      class: "title"
    });
    this.$options = $("<div>", {
      class: "options"
    });
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
    this.$start_button = $("<button>", {
      id: "btn-start"
    });
    _MainMenuController.MainMenuController.setSelectedCategory("General Knowledge"); // hacky
    this.render();
  },
  render: function render() {
    this.$select_category.html(this.populateCategories());
    this.$select_difficulty.html(this.populateDifficulties());
    // click to go to play view
    this.$start_button.html("start");
    this.$start_button.on("click", function () {
      _MainMenuController.MainMenuController.addQuestions();
    });
    this.$options.append("<label for='category'>Category</label>");
    this.$options.append(this.$select_category);

    this.$select_category.change(function () {
      var str = _MainMenuController.MainMenuController.getSelectedCategory();
      $("#select-category option:selected").each(function () {
        str = $(this).text();
      });
      _MainMenuController.MainMenuController.setSelectedCategory(str);
    }).trigger("change");

    this.$select_difficulty.change(function () {
      var str = "";
      $("#select-difficulty option:selected").each(function () {
        str += $(this).text();
      });
      _MainMenuController.MainMenuController.setSelectedDifficulty(str);
    });
    this.$options.append("<br><label for='category'>Difficulty</label>");
    this.$options.append(this.$select_difficulty);
    this.$options.append(this.$start_button);

    this.$main_menu.html(this.$options);

    this.$title.append(this.title);
    $("#main-area").append(this.$title);
    $("#main-area").append(this.$main_menu);
  },
  populateCategories: function populateCategories() {
    var cats = _MainMenuController.MainMenuController.getCategories();
    var html = "";
    cats.forEach(function (cat) {
      html += "<option value='" + cat + "'>" + cat + "</option>";
    });
    return html;
  },
  populateDifficulties: function populateDifficulties() {
    var difficulties = _MainMenuController.MainMenuController.getDifficulties();
    var html = "";
    difficulties.forEach(function (difficulty) {
      html += "<option value='" + difficulty + "'>" + difficulty + "</option>";
    });
    return html;
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameOverView = undefined;

var _MainController = __webpack_require__(0);

var _GameOverController = __webpack_require__(4);

var GameOverView = exports.GameOverView = {
  init: function init() {
    this.$game_over = $("<div>", {
      id: "gameover"
    });
    this.$reset_btn = $("<button>", {
      id: "reset-btn",
      text: "reset",
      click: function click() {
        _MainController.MainController.changeView("main");
      }
    });
    this.answer_correctly = _GameOverController.GameOverController.getNumberOfCorrect();
    this.num_of_questions = _GameOverController.GameOverController.getNumberOfQuestions();
    this.$score_show = $("<div>", {
      id: "score"
    });
    this.$score = _GameOverController.GameOverController.getScore();
    this.render();
  },
  render: function render() {
    var html = "";
    html += "<b> " + this.answer_correctly + " / " + this.num_of_questions + " </b><br><br>";
    html += "Score: " + this.$score;
    this.$game_over.append("<h1 class='title'>Quiz Finished</h1>");
    this.$score_show.html(html);
    this.$game_over.append(this.$score_show);
    this.$game_over.append(this.$reset_btn);
    $("#main-area").html(this.$game_over);
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map