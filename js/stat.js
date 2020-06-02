'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 110;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;

var GAP = 30;
var MAX_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + CLOUD_GAP * 5);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx);

  var maxTime = getMaxElement(times);

  var renderColor = function () {
    return players[index] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
  };

  var renderData = function (index) {
    ctx.fillStyle = '#000';
    var gapX = CLOUD_X + GAP + (GAP * 2 + BAR_WIDTH) * index;
    ctx.fillText(players[index], gapX, CLOUD_HEIGHT - CLOUD_GAP);

    ctx.fillStyle = renderColor();

    var playerBarHeight = MAX_HEIGHT * times[index] / maxTime;
    ctx.fillRect(gapX, GAP * 3 + MAX_HEIGHT - playerBarHeight, BAR_WIDTH, playerBarHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[index]), gapX, GAP * 2.8 + MAX_HEIGHT - playerBarHeight);
  };

  for (var index = 0; index < players.length; index++) {
    renderData(index);
  }
};
