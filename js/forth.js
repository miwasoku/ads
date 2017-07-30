(function(){
  'use strict';

  var btn_last = document.getElementById('last-btn');
  var omedetou = new Audio('sounds/omedetou.wav');

  btn_last.addEventListener('click',function(){
    var kamo = confirm('本当にこれでよろしいですか？この操作は巻き戻しできません\n\n発送：NINTENDO SWITCH １台\n　　　オプションソフト　１本\n　　　専用コントローラ');
    if(kamo){
      setTimeout(function(){
        window.location.href = "mizuki.html";
      }, 1000)
    }
  });
})();
