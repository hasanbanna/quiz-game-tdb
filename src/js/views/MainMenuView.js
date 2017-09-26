import { MainMenuController } from '../controllers/MainMenuController.js'

export var MainMenuView = {
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
    MainMenuController.setSelectedCategory("General Knowledge"); // hacky
    this.render();
  },
  render: function () {
    this.$select_category.html(this.populateCategories());
    this.$select_difficulty.html(this.populateDifficulties());
    // click to go to play view
    this.$start_button.html("start");
    this.$start_button.on("click", function(){
     MainMenuController.addQuestions();
    });
    this.$options.append("<label for='category'>Category</label>");
    this.$options.append(this.$select_category);
  
    this.$select_category.change(function(){
      var str = MainMenuController.getSelectedCategory();
      $( "#select-category option:selected" ).each(function() {
        str = $( this ).text();
      });
      MainMenuController.setSelectedCategory(str);
    }).trigger("change");
    
    this.$select_difficulty.change(function(){
      var str = "";
      $( "#select-difficulty option:selected" ).each(function() {
        str += $( this ).text();
      });
      MainMenuController.setSelectedDifficulty(str);
    })
    this.$options.append("<br><label for='category'>Difficulty</label>");
    this.$options.append(this.$select_difficulty);
    this.$options.append(this.$start_button);

    this.$main_menu.html(this.$options);

    this.$title.append("Quiz Time");
    $("#main-area").append(this.$title);
    $("#main-area").append(this.$main_menu);
    
  },
  populateCategories: function () {
    var cats = MainMenuController.getCategories();
    var html = "";
    cats.forEach(function (cat) {
      html += "<option value='" + cat + "'>" + cat + "</option>";
    });
    return html;
  },
  populateDifficulties: function () {
    var difficulties = MainMenuController.getDifficulties();
    var html = "";
    difficulties.forEach(function (difficulty) {
      html +=
        "<option value='" + difficulty + "'>" + difficulty + "</option>";
    });
    return html;
  }
};