export var QuizModel = {
  init: function() {
    this.categories = ["General Knowledge"];
    this.difficulty = ["Easy", "Medium", "Hard"];
    this.score = 0;
    this.quiz = [];
    this.numOfQuestions = 0;
    this.numOfCorrect = 0;
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