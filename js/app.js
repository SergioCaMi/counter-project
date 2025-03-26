// Estados de la app
// Estado inicial
const btnLower = document.querySelector(".prevBtn");
const btnNext = document.querySelector(".nextBtn");
const displayCounter = document.querySelector("#counter");
var counter = 0;


// Asociamos eventos

const btnCount = document.querySelectorAll(".btn");

// Opción 2 con arrays de objetos

btnCount.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        //Actualizamos variables
        if (e.target.classList.contains("prevBtn")) {
            counter--;
        } else if (e.target.classList.contains("nextBtn")) {
            counter++;
        }
        //Actualizamos DOM
        displayCounter.textContent = counter;
        if (counter<0)displayCounter.style.color = "red";
        if (counter==0)displayCounter.style.color = "black";
        if (counter>0)displayCounter.style.color = "green";
    });
});


// Opción 1 Simplificada

// btnLower.addEventListener("click", ()=>{
//     //Actualizamos variables
//     counter--;
//     //Actualizamos DOM
//     displayCounter.textContent = counter;
//     if (counter<0)displayCounter.style.color = "red";
//     if (counter==0)displayCounter.style.color = "black";
// });

// btnNext.addEventListener("click", ()=>{
//     //Actualizamos variables
//     counter++;
//     //Actualizamos DOM
//     displayCounter.textContent = counter;
//     if (counter>0)displayCounter.style.color = "green";
//     if (counter==0)displayCounter.style.color = "black";

// });



