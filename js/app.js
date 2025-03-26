// Estados de la app
// Estado inicial
const btnLower = document.querySelector(".prevBtn");
const btnNext = document.querySelector(".nextBtn");
const displayCounter = document.querySelector("#counter");
var counter = 0;


// Asociamos eventos

btnLower.addEventListener("click", ()=>{
    //Actualizamos variables
    counter--;
    //Actualizamos DOM
    displayCounter.textContent = counter;
    if (counter<0)displayCounter.style.color = "red";
    if (counter==0)displayCounter.style.color = "black";
});

btnNext.addEventListener("click", ()=>{
    //Actualizamos variables
    counter++;
    //Actualizamos DOM
    displayCounter.textContent = counter;
    if (counter>0)displayCounter.style.color = "green";
    if (counter==0)displayCounter.style.color = "black";

});



