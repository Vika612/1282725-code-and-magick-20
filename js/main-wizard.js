'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = wizardFireball.querySelector('input[name="fireball-color"]');

  // изменение цвета плаща/глаз/шара

  var onWizardCoatClick = function () {
    var newCoatColor = window.constColor.COAT_COLORS[window.util.getRandom(0, window.constColor.COAT_COLORS.length - 1)];
    wizardCoat.style.fill = newCoatColor;
    wizardCoatInput.value = newCoatColor;
  };

  var onWizardEyesClick = function () {
    var newEyesColor = window.constColor.EYES_COLORS[window.util.getRandom(0, window.constColor.EYES_COLORS.length - 1)];
    wizardEyes.style.fill = newEyesColor;
    wizardEyesInput.value = newEyesColor;
  };

  var onWizardFireballClick = function () {
    var newFireballColor = window.constColor.FIREBALL_COLORS[window.util.getRandom(0, window.constColor.FIREBALL_COLORS.length - 1)];
    wizardFireball.style.backgroundColor = newFireballColor;
    wizardFireballInput.value = newFireballColor;
  };

  wizardCoat.addEventListener('click', onWizardCoatClick);

  wizardEyes.addEventListener('click', onWizardEyesClick);

  wizardFireball.addEventListener('click', onWizardFireballClick);

})();
