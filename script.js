let x=0;
let y=1;
let p=25;
function clicker() {
  x = x + y;
document.getElementById("demo").innerHTML = x;
refreshOptions()
}

function refreshOptions()
{
    if (x < p)
        document.getElementById("ovenBtn").disabled = true;
    else
        document.getElementById("ovenBtn").disabled = false;
}

function achat() {
if (x >= p) {
  x = x - p;
  y = y + 1;
  p = p * 2;
}
document.getElementById("demo").innerHTML = x;
refreshOptions()
document.getElementById("price").innerHTML = p;
refreshOptions()
}
