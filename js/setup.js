'use strict';

var NUMBER_OF_WIZARD = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

// окно настройки персонажа

userDialog.classList.remove('hidden');

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var createObject = function () {
  return {
    name: WIZARD_NAMES[getRandom(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[getRandom(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandom(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandom(0, EYES_COLORS.length - 1)]
  };
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

for (var i = 0; i < NUMBER_OF_WIZARD; i++) {
  fragment.appendChild(renderWizard(createObject()));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

// открытие/закрытие модального окна настройки персонажа

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// изменение цвета плаща/глаз/шара

var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
var wizardFireballInput = wizardFireball.querySelector('input[name="fireball-color"]');

var onWizardCoatClick = function () {
  wizardCoat.style.fill = COAT_COLORS[getRandom(0, COAT_COLORS.length - 1)];
  wizardCoatInput.value = wizardCoat.style.fill;
};

var onWizardEyesClick = function () {
  wizardEyes.style.fill = EYES_COLORS[getRandom(0, EYES_COLORS.length - 1)];
  wizardEyesInput.value = wizardEyes.style.fill;
};

var onWizardFireballClick = function () {
  wizardFireball.style.backgroundColor = FIREBALL_COLORS[getRandom(0, FIREBALL_COLORS.length - 1)];
  wizardFireballInput.value = wizardFireball.style.backgroundColor;
};

wizardCoat.addEventListener('click', onWizardCoatClick);

wizardEyes.addEventListener('click', onWizardEyesClick);

wizardFireball.addEventListener('click', onWizardFireballClick);
