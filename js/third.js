(function(){
  'use strict';

  var btn_send = document.getElementById('send-btn');
  var omedetou = new Audio('sounds/omedetou.wav');

  btn_send.addEventListener('click',function(){
    omedetou.play();
    setTimeout(function(){
      window.location.href = "forth.html";
    }, 1500)
  });
})();
