var randomPicturePlayer1 = Math.ceil(Math.random()*6)
var picturePlayer1 = "images/dice" + randomPicturePlayer1 + ".png"
document.querySelector(".player1").setAttribute("src", picturePlayer1);

var randomPicturePlayer2 = Math.ceil(Math.random()*6)
var picturePlayer2 = "images/dice" + randomPicturePlayer2 + ".png"
document.querySelector(".player2").setAttribute("src", picturePlayer2);

if (randomPicturePlayer1 > randomPicturePlayer2){
    document.querySelector("#title").innerHTML = '🎉Player 1 Wins';
} else if (randomPicturePlayer1 < randomPicturePlayer2){
    document.querySelector("#title").innerHTML = 'Player 2 Wins🎉';
} else {
    document.querySelector("#title").textContent = "Draw!";
}