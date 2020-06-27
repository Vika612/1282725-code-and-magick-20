'use strict';

(function () {

  var NUMBER_OF_WIZARD = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  // генерация похожих персонажей

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  for (var i = 0; i < NUMBER_OF_WIZARD; i++) {
    fragment.appendChild(renderWizard(window.setup.createObject()));
  }
  similarListElement.appendChild(fragment);

  document.querySelector('.setup-similar').classList.remove('hidden');

}());
