
var dogBreeds = ["beagle", "terrier", "labrador", "chihuahua", "setter", "pug"]
var chances = 10;
var wins = 0;
var output = [];
var userLetter = "";
var computerGuess = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
var computerLetters = computerGuess.split("")
var wrongLetters = [];
var usedLetters = [];


function game() {
    var computerGuess = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
    var computerLetters = computerGuess.split("")
    console.log(computerGuess)
    for (var j = 0; j < computerLetters.length; j++) {
        output.push("_ ");
    }

    document.onkeyup = function (event) {
        var userGuess = event.key;
        usedLetters.push(userGuess);
        document.getElementById("usedLetters").innerHTML = usedLetters.join("");

        if (output.indexOf(userGuess) != -1 || wrongLetters.indexOf(userGuess) != -1) {
            
        }

        else if (computerLetters.indexOf(userGuess) != -1) {

            for (var i = 0; i < computerLetters.length; i++) {
                if (computerLetters[i] == userGuess) {
                    output[i] = userGuess;
                }
                


            }
            document.getElementById("game").innerHTML = output.join("");
        }

    }
}


game()



  
