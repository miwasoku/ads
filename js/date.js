var main = function() {

  var now = new Date();

  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate() - 1;
  var day = now.getDay() - 1;
  if(day === -1){
    day = 6;
  }
  var japday = ["日","月","火","水","木","金","土"];

  var shaped = year + "/" + month + "/" + date + " (" + japday[day] + ")";

  $(".getdate").text(shaped);
}

$(document).ready(main);
