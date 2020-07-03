'use strict';

(function () {

  var NUMBER_OF_WIZARD = 4;

  var setup = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // генерация похожих персонажей

  var wizards = window.data.createObject();

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };


  var onLoad = function () {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < NUMBER_OF_WIZARD; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
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


  var form = setup.querySelector('.setup-wizard-form');

  var submit = function (evt) {
    window.backend.save(new FormData(form), function () {
      window.dialog.closePopup();
    });
    evt.preventDefault();
  };
  form.addEventListener('submit', submit);

}());
