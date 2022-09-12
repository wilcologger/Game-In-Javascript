/* 
   step 1: maak meerder divs
   stap 2: eventlister(click) toevoegen 
   stap 3: queryselectorall met een index om een class te toggle
*/

// function toggleButton() {
//     let toggleElement = document.getElementById("toggleBody");
//     toggleElement.classList.toggle("show");
// }

// Node list
// OF
// array

// array methods 

const buttons = document.querySelectorAll('.accordion-button');
let bodys = document.querySelectorAll('.accordion-collapse');

for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener('click', (e) => { 
      bodys[i].classList.toggle('show');
   });   
}