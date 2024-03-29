  // for my refresh button
document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload(true); 
  });

  var name1 = prompt("Input your first task");
  var name2 = prompt("Input your second task");

  // for player 1

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;// to give out a random number 1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png";// to select an image from dice1.png - dice2.png

  var randomImgSrc = "images/" + randomDiceImage; // to select the src of the dice img 

// to change the attribute of the source element
var image1 = document.querySelectorAll("img")[0]; // first tap in to the selector img add (All) to querySelector so as to get both img1 and 1mg2
image1.setAttribute( "src", randomImgSrc); // then set the attribute of image 1 src 

// for player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =  " Do " + name1 + "😊";
} else if (randomNumber2 > randomNumber1){
     document.querySelector("h1").innerHTML = "Do " + name2 + "😊";
}else {
    document.querySelector("h1").innerHTML = "DO BOTH FAM😂";
}