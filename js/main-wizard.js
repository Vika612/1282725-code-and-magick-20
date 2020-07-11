'use strict';

(function () {

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');

  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');

  // изменение цвета плаща/глаз/шара

  var wizardCoat = setup.querySelector('.wizard-coat');

  wizardCoat.addEventListener('click', function () {
    var newCoatColor = window.util.arrayRandom(COAT_COLORS);
    wizardCoat.style.fill = newCoatColor;
    wizardCoatInput.value = newCoatColor;
    window.setupSimilar.onCoatChange(newCoatColor);
  });

  var wizardEyes = setup.querySelector('.wizard-eyes');

  wizardEyes.addEventListener('click', function () {
    var newEyesColor = window.util.arrayRandom(EYES_COLORS);
    wizardEyes.style.fill = newEyesColor;
    wizardEyesInput.value = newEyesColor;
    window.setupSimilar.onEyesChange(newEyesColor);
  });

  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  wizardFireball.addEventListener('click', function () {
    var newFireballColor = window.util.arrayRandom(FIREBALL_COLORS);
    wizardFireball.style.backgroundColor = newFireballColor;
    wizardFireballInput.value = newFireballColor;
  });

})();
