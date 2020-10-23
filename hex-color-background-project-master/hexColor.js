//This is the array where where gonna tsake the elements to form the hexadecimal value
var exVlues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// Create two variables to select the tags
var loc = document.querySelector("#hex-value")
var boton = document.getElementById("#btn").style.backgroundColor = hexadecimal();

// This function makes the color changing and the introcuction of the value inside the a tag
function randomizer() {
    // The variable final is where weregonna store the the iterations of the loop
    var final = "";
    let symbol = "#"
        // This loop iterates the array and stores the output inside the final variable
    for (let index = 0; index < 6; index++) {
        var rando1 = exVlues[Math.floor(Math.random() * exVlues.length)]
        final += rando1;
    }
    // La variable hexadecimal junta el sigon de gato con el valor de final
    let hexadecimal = symbol + final;
    // This prints the value on screen 
    loc.textContent = " " + hexadecimal;
    // This changes the color of the background 
    document.body.style.backgroundColor = hexadecimal
    return final;
}