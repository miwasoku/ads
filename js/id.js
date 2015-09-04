var main = function() {
  var length = 8;
  var num = $(".getid").length;

  for(var i=0;i < num;i++){
    var id = Math.random().toString(36).slice(-1 * length);
    $(".getid").eq(i).text(id);
  }
}

$(document).ready(main);
