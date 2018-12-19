const spanCounter = document.querySelector("span.counter");
const btnAdd = document.querySelector('button');
const btnMinus = document.querySelector('button:nth-child(2)');

let counter = 0;
btnAdd.addEventListener("click", function(){

    counter ++;

    spanCounter.textContent = counter;
});
btnMinus.addEventListener("click", function(){

    counter --;
    spanCounter.textContent = counter;
});