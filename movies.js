var elem = document.getElementById('nomeFilme');


var moviesList = [

 movie = {
 	name: "Birdman",
 	image: "birdman",
 	year: 2015
 },

 movie2 = {
 	name: "Pulp Fiction",
 	image: "pulp-fiction"
 },

 movie3 = {
 	name: "Scarface",
 	image: "scarface"
 }

]

var movieChoice = Math.floor(Math.random() * moviesList.length);

console.log(movieChoice);

for(var i = 0; i <= movieChoice; i++) {
  console.log(moviesList[movieChoice].name);	
}

//elem.innerHTML = moviesList[0].name + '<br><br>' + '<img src="'+ moviesList[0].image +'">';