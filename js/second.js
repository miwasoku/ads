(function(){
  'use strict';

  var omedetou = new Audio('sounds/omedetou.wav');

  var btns_second = document.getElementsByClassName("btn-second");

  var btn_kita = document.getElementById('btn-kita')

  btn_kita.addEventListener('click',function(){
    omedetou.play();
    setTimeout(function(){
      window.location.href ="third.html";
      window.open("http://www.europe-studio.net/gmf/game/sumita/");
    }, 1800)
  })

  for(var i = 0;i < btns_second.length; i++){
    btns_second[i].addEventListener('click',function(){
      omedetou.play();
      setTimeout(function(){
        window.location.href = "third.html";
      }, 1800)
    });
  }

})();
