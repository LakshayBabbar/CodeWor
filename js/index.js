/* let txt = document.querySelector(".title-txt");
const effect = () => {
    setTimeout(()=>{
        txt.textContent = "CodeWor";
    },0);
    setTimeout(()=>{
        txt.textContent = "Free BCA Notes";
    },4000);
    setTimeout(()=>{
        txt.textContent = "By Lakshay Babbar";
    },8000);
}
effect();
setInterval(effect,12000); */

let selector = document.querySelector(".title-txt");
let i = 0;
let txt = "CodeWor";
let speed = 250;

function typeWriter() {
  if (i < txt.length) {
    selector.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}
setTimeout(typeWriter,500);
