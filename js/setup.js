'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  // окно настройки персонажа

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var createObject = function () {
    return {
      name: WIZARD_NAMES[window.util.getRandom(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[window.util.getRandom(0, WIZARD_SURNAMES.length - 1)],
      coatColor: window.constColor.COAT_COLORS[window.util.getRandom(0, window.constColor.COAT_COLORS.length - 1)],
      eyesColor: window.constColor.EYES_COLORS[window.util.getRandom(0, window.constColor.EYES_COLORS.length - 1)]
    };
  };

  window.setup = {
    createObject: createObject,
  };

}());


