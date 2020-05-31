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

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_GAP * 3, CLOUD_Y + CLOUD_GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_GAP * 3, CLOUD_Y + CLOUD_GAP * 5);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    var GapX = CLOUD_X + GAP + (GAP * 2 + BAR_WIDTH) * i;
    ctx.fillText(players[i], GapX, CLOUD_HEIGHT - CLOUD_GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    }
    var playerBarHeight = MAX_HEIGHT * times[i] / maxTime;
    ctx.fillRect(GapX, GAP * 3 + MAX_HEIGHT - playerBarHeight, BAR_WIDTH, playerBarHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), GapX, GAP * 2.8 + MAX_HEIGHT - playerBarHeight);
  }
};
