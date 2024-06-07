
var randomNumber1 = Math.floor(Math.random()*6)+1;
var x ="images\\";
var imageName=  x+"dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",imageName);
var randomNumber2= Math.floor(Math.random()*6)+1;
var imageName2=x+"dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",imageName2);

if (randomNumber1> randomNumber2){ document.querySelector('h1').textContent="🚩Player1 wins";}
else if (randomNumber1 < randomNumber2){ document.querySelector('h1').textContent="🚩Player2 wins";}
else if (randomNumber1=== randomNumber2 ){ document.querySelector('h1').textContent="🚩Draw 🚩";}
