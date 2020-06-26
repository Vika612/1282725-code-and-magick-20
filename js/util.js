'use strict';

(function () {

  var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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
    getRandom: getRandom,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
  };

})();
