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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PlayController_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MainMenuController_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GameOverController_js__ = __webpack_require__(4);




// all controllers 'inherit' from this controller
const MainController = {
  init: function(){
    this.$main_menu = $("#main-area");
    __WEBPACK_IMPORTED_MODULE_2__MainMenuController_js__["a" /* MainMenuController */].init();
  },
  remove: function() {
    this.$main_menu.html("");
  },
  changeView: function(view) {
    if(view == "play"){
      this.remove();
      __WEBPACK_IMPORTED_MODULE_1__PlayController_js__["a" /* PlayController */].init();
    }else if (view == "gameover"){
      this.remove();
      __WEBPACK_IMPORTED_MODULE_3__GameOverController_js__["a" /* GameOverController */].init();
    }else if (view == "main"){
      this.remove();
      __WEBPACK_IMPORTED_MODULE_2__MainMenuController_js__["a" /* MainMenuController */].init();
    }
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
/* harmony export (immutable) */ __webpack_exports__["a"] = MainController;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_js__ = __webpack_require__(6);


var QuizModel = {
  init: function () {
    this.categories = this.addCategories();
    this.difficulty = ["Easy", "Medium", "Hard"];
    this.score = 0;
    this.quiz = [];
    this.numOfQuestions = 0;
    this.numOfCorrect = 0;
    this.selectedCategory = "";
  },
  getQuiz: function () {
    return this.quiz;
  },
  addQuestionAndAnswers: function (quiz_obj) {
    this.quiz.push(quiz_obj);
  },
  getCategories: function () {
    return this.categories;
  },
  getDifficulties: function () {
    return this.difficulty;
  },
  getNumOfQuestions: function () {
    return this.numOfQuestions;
  },
  getCurrentQuestion: function (index) {
    return this.quiz[index].question;
  },
  getCurrentAnswers: function (index) {
    return this.quiz[index].answers;
  },
  getCorrectAnswer: function (index) {
    return this.quiz[index].correct_answer;
  },
  addCategories: function () {
    return __WEBPACK_IMPORTED_MODULE_0__categories_js__["a" /* categoriesJSON */].map(function (category) {
      return category.name;
    });
  },
  setCategory: function(str){
    this.selectedCategory = str;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MainController_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_MainMenuView_js__ = __webpack_require__(8);



const MainMenuController = {
  init: function () {
    __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].init();
    this.addQuestions();
    __WEBPACK_IMPORTED_MODULE_2__views_MainMenuView_js__["a" /* MainMenuView */].init();
  },
  getCategories: function () {
    return __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].getCategories();
  },
  getDifficulties: function () {
    return __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].getDifficulties();
  },
  addQuestions: function () {
    $.ajax({
      url: "https://opentdb.com/api.php?amount=2&category=9&difficulty=easy&type=multiple",
      success: function (result) {
        var len = result.results.length;
        result.results.forEach(function (res) {
          var answers = res.incorrect_answers.concat(res.correct_answer);
          var correct_answer = res.correct_answer;
          var question = res.question;
          __WEBPACK_IMPORTED_MODULE_1__MainController_js__["a" /* MainController */].shuffle(answers);
          __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].addQuestionAndAnswers({
            question: question,
            answers: answers,
            correct_answer: correct_answer
          });
          __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].numOfQuestions++;
        });
      },
      error: function (res) {
        console.log("error accessing api " + JSON.stringify(res));
      }
    });
  },
  changetoPlayView: function () {
    __WEBPACK_IMPORTED_MODULE_1__MainController_js__["a" /* MainController */].changeView("play");
  },
  setCategory: function(str){
    __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].setCategory(str);
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = MainMenuController;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MainController_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_PlayView_js__ = __webpack_require__(7);




var PlayController = {
  init: function() {
    this.currentQuestionNumber = 0;
    __WEBPACK_IMPORTED_MODULE_2__views_PlayView_js__["a" /* PlayView */].init();
  },
  getCurrentQuestion: function() {
    return __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].getCurrentQuestion(this.currentQuestionNumber);
  },
  getCurrentAnswers: function() {
    return __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].getCurrentAnswers(this.currentQuestionNumber);
  },
  getCorrectAnswer: function() {
    return __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].getCorrectAnswer(this.currentQuestionNumber);
  },
  getNumOfQuestions: function() {
    return __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].numOfQuestions;
  },
  increaseScore: function() {
    __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].score += 20;
  },
  increaseCorrectAnswerCounter: function(){
    __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].numOfCorrect++;
  },
  getCorrectAnswerCounter: function(){
    return __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].numOfCorrect;
  },
  changeToGameOverView: function(){
    __WEBPACK_IMPORTED_MODULE_1__MainController_js__["a" /* MainController */].changeView("gameover");
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_GameOverView_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MainController_js__ = __webpack_require__(0);




const GameOverController = {
  init: function(){
    __WEBPACK_IMPORTED_MODULE_1__views_GameOverView_js__["a" /* GameOverView */].init();
  },
  getScore: function() {
    return __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].score;
  },
  getNumberOfQuestions: function() {
    return __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].numOfQuestions;
  },
  getNumberOfCorrect: function(){
  	return __WEBPACK_IMPORTED_MODULE_0__models_QuizModel_js__["a" /* QuizModel */].numOfCorrect;
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = GameOverController;

GameOverController.__proto__ = __WEBPACK_IMPORTED_MODULE_2__MainController_js__["a" /* MainController */];

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_MainController_js__ = __webpack_require__(0);

(function() {
  __WEBPACK_IMPORTED_MODULE_0__controllers_MainController_js__["a" /* MainController */].init();
})();


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const categoriesJSON = [
        {
                "id": "9",
                "name": "General Knowledge"
        },
        {
                "id": "10",
                "name": "Books"
        },
        {
                "id": "11",
                "name": "Film"
        },
        {
                "id": "12",
                "name": "Music"
        },
        {
                "id": "13",
                "name": "Musicals &amp; Theatres"
        },
        {
                "id": "14",
                "name": "Television"
        },
        {
                "id": "15",
                "name": "Video Games"
        },
        {
                "id": "16",
                "name": "Board Games"
        },
        {
                "id": "17",
                "name": "Nature"
        },
        {
                "id": "18",
                "name": "Computers"
        },
        {
                "id": "19",
                "name": "Mathematics"
        },
        {
                "id": "20",
                "name": "Mythology"
        },
        {
                "id": "21",
                "name": "Sports"
        },
        {
                "id": "22",
                "name": "Geography"
        },
        {
                "id": "23",
                "name": "History"
        },
        {
                "id": "24",
                "name": "Politics"
        },
        {
                "id": "25",
                "name": "Art"
        },
        {
                "id": "26",
                "name": "Celebrities"
        },
        {
                "id": "27",
                "name": "Animals"
        },
        {
                "id": "28",
                "name": "Vehicles"
        },
        {
                "id": "29",
                "name": "Comics"
        },
        {
                "id": "30",
                "name": "Gadgets"
        },
        {
                "id": "31",
                "name": "Japanese Anime &amp; Manga"
        },
        {
                "id": "32",
                "name": "Cartoon &amp; Animations"
        }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = categoriesJSON;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_PlayController_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_MainMenuController_js__ = __webpack_require__(2);


var PlayView = {
  init: function() {
    this.$play_area = $("<div>"), { id: "play-area" };
    this.$question = $("<h1>", { class: "question" });
    this.$answers = $("<div>", { class: "answers" });
    this.render();
  },
  render: function() {
    // probably refactor this code
    var currentQuestionNumber = __WEBPACK_IMPORTED_MODULE_0__controllers_PlayController_js__["a" /* PlayController */].currentQuestionNumber;
    var numberOfQuestions = __WEBPACK_IMPORTED_MODULE_0__controllers_PlayController_js__["a" /* PlayController */].getNumOfQuestions();
    if (currentQuestionNumber< numberOfQuestions) {
      this.$question.html(this.currentQuestion());
      this.$play_area.html(this.$question);
      this.$answers.html(this.populateAnswers());
      // on click return the answer
      this.$answers.hide();
      this.$answers.fadeIn(350);
      this.$answers.on("click", "button", function(e) {
        if ($(this).is(":button")) {
          var answer = $(this).html();
          var correctAnswer = __WEBPACK_IMPORTED_MODULE_0__controllers_PlayController_js__["a" /* PlayController */].getCorrectAnswer();
          if (answer === correctAnswer) {
            __WEBPACK_IMPORTED_MODULE_0__controllers_PlayController_js__["a" /* PlayController */].increaseCorrectAnswerCounter();
            __WEBPACK_IMPORTED_MODULE_0__controllers_PlayController_js__["a" /* PlayController */].increaseScore();
          }
          __WEBPACK_IMPORTED_MODULE_0__controllers_PlayController_js__["a" /* PlayController */].currentQuestionNumber++;
          PlayView.init();
        }
      });
      this.$play_area.append(this.$answers);
      $("#main-area").html(this.$play_area);
    } else {
       __WEBPACK_IMPORTED_MODULE_0__controllers_PlayController_js__["a" /* PlayController */].changeToGameOverView();
    }
  },
  currentQuestion: function() {
    return __WEBPACK_IMPORTED_MODULE_0__controllers_PlayController_js__["a" /* PlayController */].getCurrentQuestion();
  },
  populateAnswers: function() {
    var answers = __WEBPACK_IMPORTED_MODULE_0__controllers_PlayController_js__["a" /* PlayController */].getCurrentAnswers();
    var html = "";
    answers.forEach(function(answer) {
      html += "<button class='btn-answer'>" + answer + "</button>";
    });
    return html;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_MainMenuController_js__ = __webpack_require__(2);


var MainMenuView = {
  init: function () {
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
    this.render();
  },
  render: function () {
    this.$select_category.html(this.populateCategories());
    this.$select_difficulty.html(this.populateDifficulties());
    // click to go to play view
    this.$start_button.html("start");
    this.$start_button.on("click", __WEBPACK_IMPORTED_MODULE_0__controllers_MainMenuController_js__["a" /* MainMenuController */].changetoPlayView.bind(this));

    this.$options.append("<label for='category'>Category</label>");
    this.$options.append(this.$select_category);
    this.$select_category.val($("#select-category option:first").val());
    
    this.$select_category.change(function(){
      var str = "";
      $( "#select-category option:selected" ).each(function() {
        str += $( this ).text();
      });
      __WEBPACK_IMPORTED_MODULE_0__controllers_MainMenuController_js__["a" /* MainMenuController */].setCategory(str);
    }).trigger("change");

    this.$options.append("<br><label for='category'>Difficulty</label>");
    this.$options.append(this.$select_difficulty);
    this.$options.append(this.$start_button);

    this.$main_menu.html(this.$options);

    this.$title.append("Quiz Time");
    $("#main-area").append(this.$title);
    $("#main-area").append(this.$main_menu);
    
  },
  populateCategories: function () {
    var cats = __WEBPACK_IMPORTED_MODULE_0__controllers_MainMenuController_js__["a" /* MainMenuController */].getCategories();
    var html = "";
    cats.forEach(function (cat) {
      html += "<option value='" + cat + "'>" + cat + "</option>";
    });
    return html;
  },
  populateDifficulties: function () {
    var difficulties = __WEBPACK_IMPORTED_MODULE_0__controllers_MainMenuController_js__["a" /* MainMenuController */].getDifficulties();
    var html = "";
    difficulties.forEach(function (difficulty) {
      html +=
        "<option value='" + difficulty + "'>" + difficulty + "</option>";
    });
    return html;
  }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOverView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_MainController_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_GameOverController_js__ = __webpack_require__(4);


var GameOverView = {
  init: function () {
    this.$game_over = $("<div>", {
      id: "gameover"
    });
    this.$reset_btn = $("<button>", {
      id: "reset-btn",
      text: "reset",
      click: function () {
        __WEBPACK_IMPORTED_MODULE_0__controllers_MainController_js__["a" /* MainController */].changeView("main");
      }
    });
    this.answer_correctly = __WEBPACK_IMPORTED_MODULE_1__controllers_GameOverController_js__["a" /* GameOverController */].getNumberOfCorrect();
    this.num_of_questions = __WEBPACK_IMPORTED_MODULE_1__controllers_GameOverController_js__["a" /* GameOverController */].getNumberOfQuestions();
    this.$score_show = $("<div>", {
      id: "score"
    });
    this.$score = __WEBPACK_IMPORTED_MODULE_1__controllers_GameOverController_js__["a" /* GameOverController */].getScore();
    this.render();
  },
  render: function () {
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
  }
};

/***/ })
/******/ ]);