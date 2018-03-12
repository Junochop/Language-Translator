
var elvesArray = [
    {
    "merry": "yo",
    "christmas": "mama",
    "you": "big"
    }
]

var klignonArray = [
    {
    "merry": "yo klignon",
    "christmas": "mama klignon",
    "you": "big knlignon"
    }
]

var datrakiArray = [
    {
    "merry": "yo Datraki",
    "christmas": "mama Datraki",
    "you": "big Datraki"
    }
]




function writeToDom(string) {

    document.getElementById("display-container").innerHTML += string + " ";
    
}


//Button Functions
document.getElementById("button1").addEventListener("click", function () { displayElvesFunction() });
document.getElementById("button2").addEventListener("click", function () { displayKlignonFunction() });
document.getElementById("button3").addEventListener("click", function () { displayDatrakiFunction() });


function displayElvesFunction(inputValue) {

    var input = document.getElementById("field").value;
  
        for (var i = 0; i < elvesArray.length;  i++){
            if (input in elvesArray[i]) {
                
                var domString = "";
                domString = elvesArray[i][input];
                writeToDom(domString);
            }
            
        }

}


function displayKlignonFunction(inputValue) {

    var input = document.getElementById("field").value;

    for (var i = 0; i < klignonArray.length; i++) {
        if (input in elvesArray[i]) {

            var domString = "";
            domString = klignonArray[i][input];
            writeToDom(domString);
        }

    }

}


function displayDatrakiFunction(inputValue) {

    var input = document.getElementById("field").value;

    for (var i = 0; i < datrakiArray.length; i++) {
        if (input in datrakiArray[i]) {

            var domString = "";
            domString = datrakiArray[i][input];
            writeToDom(domString);
        }

    }

}