var main = function() {
  var hourmin = [20,48];
  var num = $(".time").length;

  for(var i=0;i < num;i++) {
    var shaped = timeinc(hourmin);
    $(".time").eq(i).text(shaped);
  }
}

var timeinc = function(hourmin) {
  var inc = Math.floor(Math.random() * 3) + 1;
  hourmin[1] += inc;
  if(hourmin[1] >= 60){
    hourmin[1] -= 60;
    hourmin[0] += 1;
  }
  var commas = Math.random().toString(9).slice(-2);
  var micros = Math.random().toString(9).slice(-2);

  if(hourmin[1] >= 10){
    var shaped = hourmin[0] + ":" + hourmin[1] + ":" + commas + "." + micros;
  }
  else{
    var shaped = hourmin[0] + ":0" + hourmin[1] + ":" + commas + "." + micros;
  }

  return shaped;
}

$(document).ready(main);
