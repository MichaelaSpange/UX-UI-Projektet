// alert ("hej med dig");

document.getElementById("burger").addEventListener("click", burgerfunction);

document.getElementById("closemenu").addEventListener("click", close)

function burgerfunction () {
    document.getElementById("burgermenu").style.display = "block";
    document.getElementById("burger").style.display = "none";
}

function close () {
    document.getElementById("burgermenu").style.display = "none";
    document.getElementById("burger").style.display = "block";
}

//Billedkarussel---------------------------------------------

// Variable:
const karrusel1 = document.getElementById("karrusel1");
const karrusel2 = document.getElementById("karrusel2");
const karrusel3 = document.getElementById("karrusel3");
const karrusel4 = document.getElementById("karrusel4");
const karrusel5 = document.getElementById("karrusel5");
const pil_right = document.getElementById("pil_right");
const pil_left = document.getElementById("pil_left");

// Arrayet:
const carousel = [karrusel1, karrusel2, karrusel3, karrusel4, karrusel5];

carousel[0].style.display = "block";
carousel[1].style.display = "none";
carousel[2].style.display = "none";
carousel[3].style.display = "none";
carousel[4].style.display = "none";

// Knapper:
pil_right.addEventListener("click", naesteBillede);
pil_left.addEventListener("click", forrigeBillede);

// Funktioner:
function naesteBillede(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede(){
    carousel[0].style.display = "none";
    carousel.unshift(carousel[2]);
    carousel.pop();
    carousel[0].style.display = "block";
}