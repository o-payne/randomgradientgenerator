var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2"); 
var body = document.getElementById("gradient");
var currentBackground = document.querySelector(".currentBackground");
var randomButton = document.getElementById("randomButton");



function setGradient()
{
    //sets gradient
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    //currentBackground.innerHTML = "Current background hex" + "<br>Color 1: " + color1.value + "<br>Color 2: " + color2.value + "<br><br>";
    css.textContent = "Current background CSS: "  + body.style.background + ";";
}

function setRandomColors()
{
    var randomColor1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    var randomColor2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    
    color1.value = randomColor1;
    color2.value = randomColor2;
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomColors);

css.textContent = "background-image: linear-gradient(to right, red, yellow);";