let x=0;
let y=1;
function clicker() {
  x = x + y;
document.getElementById("demo").innerHTML = x;
}


function achat() {
if (x >= 25) {
  x = x - 25;
  y = y + 1;
}
document.getElementById("demo").innerHTML = x;
}
