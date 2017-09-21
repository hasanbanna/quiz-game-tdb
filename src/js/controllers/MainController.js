import { QuizModel } from '../models/QuizModel.js';
import { PlayController } from './PlayController.js';
import  { MainMenuController } from './MainMenuController.js';
import { GameOverController } from './GameOverController.js';
// all controllers 'inherit' from this controller;
export const MainController = {
  init: function(){
    this.$main_menu = $("#main-area");
    MainMenuController.init();
  },
  remove: function() {
    this.$main_menu.html("");
  },
  changeView: function(view) {
    if(view == "play"){
      this.remove();
      PlayController.init();
    }else if (view == "gameover"){
      this.remove();
      GameOverController.init();
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
