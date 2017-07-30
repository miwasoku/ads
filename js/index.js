(function(){
  'use strict';

  var btn_index = document.getElementById('trigger');
  var omedetou = new Audio('sounds/omedetou.wav');

  btn_index.addEventListener('click',function(){
    omedetou.play();
    setTimeout(function(){
      window.location.href = "second.html";
    }, 1500)
  });
})();
