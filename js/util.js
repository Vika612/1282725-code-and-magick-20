'use strict';

(function () {

  var arrayRandom = function (arr) {
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
    arrayRandom: arrayRandom,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
  };

})();
