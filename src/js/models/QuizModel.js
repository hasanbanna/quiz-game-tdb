import {
  categoriesJSON
} from "./categories.js";

export var QuizModel = {
  init: function () {
    this.categories = this.addCategories();
    this.difficulty = ["Easy", "Medium", "Hard"];
    this.score = 0;
    this.quiz = [];
    this.numOfQuestions = 0;
    this.numOfCorrect = 0;
    this.selectedCategory = "";
    this.selectedDifficulty = "";
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
    return categoriesJSON.map(function (category) {
      return category.name;
    });
  },
  // change this so that it returns id to be used in the ajax call
  setSelectedCategory: function(str){
    this.selectedCategory = str;
  },
  getSelectedCategory: function(){
    return this.selectedCategory;
  },
  getSelectedCategoryId: function(){
    const selected = this.getSelectedCategory();    
    console.log(selected);
    return categoriesJSON.filter(function(category){
      if(category.name === selected){ return category; }
    })[0].id;
  },
  setSelectedDifficulty: function(str){
    this.selectedDifficulty = str;
  },
  getSelectedDifficulty: function(str){
    return this.selectedDifficulty;
  }
};