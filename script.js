let getcount = document.getElementById("counter");
let count = parseInt(getcount.innerHTML);
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let steps = document.getElementById("steps");
let dots = document.getElementById("dots");

increment.addEventListener("click", ()=>{
    count += parseInt(steps.value);
    getcount.textContent = count;
    dots.textContent += ".";
    dots.style.color = "green";
})
decrement.addEventListener("click", ()=>{
    count -= parseInt(steps.value);
    getcount.textContent = count;
    dots.textContent += ".";
    dots.style.color = "orange";
})
reset.addEventListener("click", ()=>{
    count = 0;
    getcount.textContent = count;
    steps.value = 1;
})