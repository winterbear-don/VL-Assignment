// function to go back from the error page
function goBack() {window.history.back();}

/* Drawing matrix on canvas */
var c = document.getElementById("canvas");
var cxt = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

var chinese =
  "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
chinese = chinese.split("");

var font_size = 12;
var columns = c.width / font_size;

var drops = [];

for (var x = 0; x < columns; x++) {
  drops[x] = 1;
}

function draw() {
  cxt.fillStyle = "rgba(0,0,30,0.05)";
  cxt.fillRect(0, 0, c.width, c.height);

  cxt.fillStyle = "red";
  cxt.font = font_size + "px arial";

  for (var i = 0; i < drops.length; i++) {
    var text = chinese[Math.floor(Math.random() * chinese.length)];
    cxt.fillText(text, i * font_size, drops[i] * font_size);

    if (drops[i] * font_size > c.height && Math.random() > 0.975)
      drops[i] = 0;

    //increment y coordinate
    drops[i]++;
  }
}
setInterval(draw, 50);