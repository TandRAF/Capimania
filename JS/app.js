//nav bar
const navButtons = document.querySelectorAll(".link"),
muveBlock = document.getElementById("muve-block"), 
burger = document.querySelector(".burger-block"),
lines = document.querySelectorAll(".line"),
circle = document.querySelector(".circle"),
nav = document.querySelector("nav");

const navStatus = (n) =>{
    let muveIndex = n;
    muveBlock.style.transform = "translateX(" + 52.5*muveIndex + "px)";
    muveBlock.style.transition = "all 0.5s";
}
let stepValue;
const queryString = window.location.search;
if(queryString) {
  const urlParams = new URLSearchParams(queryString);
  stepValue = urlParams.get('index');
}
window.addEventListener('load',() => {
    navStatus(stepValue);
})
navButtons.forEach((item,index)=>{
    item.addEventListener("mouseover", () =>{
        navStatus(index);
    });
    item.addEventListener("mouseout", () =>{
        navStatus(stepValue);
    })
});

burger.addEventListener('click',() =>{
    for(let line of lines){
        line.classList.toggle("active");
        circle.classList.toggle("active");
        nav.classList.toggle("active");
    }
})
