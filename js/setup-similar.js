'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');

  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.renderWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var onEyesChange = function (color) {
    eyesColor = color;
    updateWizards();
  };

  var onCoatChange = function (color) {
    coatColor = color;
    updateWizards();
  };

  var onLoad = function (data) {
    wizards = data;
    updateWizards();
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onLoad, onError);

  var submit = function (evt) {
    window.backend.save(new FormData(form), function () {
      window.dialog.closePopup();
    });
    evt.preventDefault();
  };
  form.addEventListener('submit', submit);

  window.setupSimilar = {
    onEyesChange: onEyesChange,
    onCoatChange: onCoatChange
  };

}());
