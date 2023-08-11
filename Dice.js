// for player 1
var randomnumber1 = Math.floor((Math.random()*6)+1);

var randomdiceimage = "dice" + randomnumber1 + ".png";

var randomimagesource = "images/" + randomdiceimage;

var image1 = document.querySelectorAll('img')[0];

image1.src = randomimagesource;

// for player 2

var randomnumber2 = Math.floor((Math.random()*6)+1);

var randomdiceimage2 = "dice" + randomnumber2 + ".png";

var randomimagesource2 = "images/" + randomdiceimage2;

var image2 = document.querySelectorAll('img')[1];

image2.src = randomimagesource2;

if(randomnumber1>randomnumber2){
    document.querySelector('h1').innerHTML="🚩 Play 1 Wins!";
}
else if(randomnumber1<randomnumber2){
    document.querySelector('h1').innerHTML=" Play 2 Wins! 🚩";
}
else{
    document.querySelector('h1').innerHTML=" Tie! ";
}