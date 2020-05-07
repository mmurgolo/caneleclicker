let x=0;
let y=1;
let p=25;
let fourx=0;
let fourxp=400;
let foury=0;
let fouryp=1000000;
let fourxvalue=40;
let fouryvalue=10000;
let m=1000;
let mc=0;

function clicker() {
  x = x + y + fourxvalue*fourx + fouryvalue*foury;
  document.getElementById("four").innerHTML = y;
  refreshOptions()
  document.getElementById("demo").innerHTML = x;
  refreshOptions()
  document.getElementById("price").innerHTML = p;
  refreshOptions()
  document.getElementById("fourxp").innerHTML = fourxp;
  refreshOptions()
  document.getElementById("fouryp").innerHTML = fouryp;
  refreshOptions()
  document.getElementById("fourx").innerHTML = fourx;
  refreshOptions()
  document.getElementById("foury").innerHTML = foury;
  refreshOptions()
  document.getElementById("clic").innerHTML = y + fourxvalue*fourx + fouryvalue*foury;
  refreshOptions()
}

function refreshOptions()
{
    if (x < p) {
        document.getElementById("ovenBtn").disabled = true;
    }
    else {
        document.getElementById("ovenBtn").disabled = false;
    }
    if (x < fourxp){
        document.getElementById("ovenBtnx").disabled = true;
    }
    else {
        document.getElementById("ovenBtnx").disabled = false;
    }
    if (x < fouryp) {
        document.getElementById("ovenBtny").disabled = true;
      }
    else {
        document.getElementById("ovenBtny").disabled = false;
      }
    if (x >= 1) {
        document.getElementById("mission1").innerHTML = "Mission finie. Vous venez d'obtenir le maitre du canelées. Un fournisseur vous a offert des emporte-pièces !";
        mc = mc + 1;
        document.getElementById("chap2").style.display = "block";
        document.getElementById("brede").style.display = "block";
        document.getElementById("moral").style.display = "block";
        document.getElementById("emp").style.display = "block";
        document.getElementById("craft").style.display = "block";
        document.getElementById("mor").style.display = "block";
      }
}

function achat() {
if (x >= p) {
  x = x - p;
  y = y + 1;
  p = p + 25;
}
document.getElementById("four").innerHTML = y;
refreshOptions()
document.getElementById("demo").innerHTML = x;
refreshOptions()
document.getElementById("price").innerHTML = p;
refreshOptions()
document.getElementById("fourx").innerHTML = fourx;
refreshOptions()
document.getElementById("foury").innerHTML = foury;
refreshOptions()
document.getElementById("clic").innerHTML = y + fourxvalue*fourx + fouryvalue*foury;
refreshOptions()
document.getElementById("fourxp").innerHTML = fourxp;
refreshOptions()
document.getElementById("fouryp").innerHTML = fouryp;
refreshOptions()
}

function achatx() {
if (x >= fourxp) {
  x = x - fourxp;
  fourx = fourx + 1;
  fourxp = fourxp + 400;
}
document.getElementById("four").innerHTML = y;
refreshOptions()
document.getElementById("demo").innerHTML = x;
refreshOptions()
document.getElementById("price").innerHTML = p;
refreshOptions()
document.getElementById("fourx").innerHTML = fourx;
refreshOptions()
document.getElementById("foury").innerHTML = foury;
refreshOptions()
document.getElementById("clic").innerHTML = y + fourxvalue*fourx + fouryvalue*foury;
refreshOptions()
document.getElementById("fourxp").innerHTML = fourxp;
refreshOptions()
document.getElementById("fouryp").innerHTML = fouryp;
refreshOptions()
}

function achaty() {
if (x >= fouryp) {
  x = x - fouryp;
  foury = foury + 1;
  fouryp = fouryp + 10000;
}
document.getElementById("four").innerHTML = y;
refreshOptions()
document.getElementById("demo").innerHTML = x;
refreshOptions()
document.getElementById("price").innerHTML = p;
refreshOptions()
document.getElementById("fourx").innerHTML = fourx;
refreshOptions()
document.getElementById("foury").innerHTML = foury;
refreshOptions()
document.getElementById("clic").innerHTML = y + fourxvalue*fourx + fouryvalue*foury;
refreshOptions()
document.getElementById("fourxp").innerHTML = fourxp;
refreshOptions()
document.getElementById("fouryp").innerHTML = fouryp;
refreshOptions()
}
/* Mise en place du second chapitre */



/* Initialisation des variables */
let bred=0;
let moral=1;

function bredele() {
  if (m>0) {
bred = bred + 1;
m = m - (10/moral);
RefreshMoral()
document.getElementById("nbbredele").innerHTML = bred;
document.getElementById("mission1m").innerHTML = m;
}
}

/* function moral() {
bred = bred - 10;
moral = moral + 1;
}
*/

function RefreshMoral() { 
  if (moral<10) {
    document.getElementById("moral").disabled = true;
  }
  if (bred<10){
    document.getElementById("moral").disabled = true;
  }
} 