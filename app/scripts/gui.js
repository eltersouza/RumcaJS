'use strict';

angular.module('rumca-js')
  .controller('GUI', function ($document, Keyboard, DSP) {
    //Register keyboard event handlers
    $document.bind('keydown', function (e) {
      if (Keyboard.activeKeys.indexOf(e.keyCode) === -1) {
        Keyboard.keydown(e.keyCode);
      }
    });
    $document.bind('keyup', function (e) {
      Keyboard.keyup(e.keyCode);
    });
  });
