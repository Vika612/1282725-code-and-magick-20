'use strict';

(function () {
  var URL_GET = 'https://javascript.pages.academy/code-and-magick/data';
  var URL_POST = 'https://javascript.pages.academy/code-and-magick';

  var request = function (xhr, onLoad, onError) {
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
  };

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    request(xhr, onLoad, onError);
    xhr.open('GET', URL_GET);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    request(xhr, onLoad, onError, data);
    xhr.open('POST', URL_POST);
    xhr.send(data);
  };


  window.backend = {
    load: load,
    save: save
  };
})();
