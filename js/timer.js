(function(){
  'use strict';

  var timer = document.getElementById('timer');

  var startTime;
  var timeLeft;
  var timeToCountDown = 3.64 * 1000 * 60;
  var timerId;

  function updateTimer(t){
    var d = new Date(t);
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);
    timer.textContent = m + ':' + s + '.' + ms;
  }

  function countDown(){
    timerId = setTimeout(function(){
      timeLeft = timeToCountDown - (Date.now() - startTime);
      if (timeLeft < 0){
        clearTimeout(timerId);
        timer.textContent = "はよ進めや遅漏(´・_・｀)"
        window.open('https://kids.yahoo.co.jp/games/sports/013.html');
        return ;
      }
      updateTimer(timeLeft);
      countDown();
    }, 10);
  }

  window.onload = function(){
    startTime = Date.now();
    countDown();
  }
})();
