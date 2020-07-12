'use strict';

(function () {

  var getRandomArrayElement = function (arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  var isEscEvent = function (evt, action) {
    if (evt.key === 'Escape') {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.key === 'Enter') {
      action();
    }
  };

  window.util = {
    getRandomArrayElement: getRandomArrayElement,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
  };

})();
