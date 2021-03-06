'use strict';

(function () {

  var NUMBER_OF_WIZARD = 4;

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // генерация похожих персонажей

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (data) {
    var takeNumber = data.length > NUMBER_OF_WIZARD ? NUMBER_OF_WIZARD : data.length;
    similarList.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };

  window.render = {
    renderWizards: renderWizards
  };

}());
