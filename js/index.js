let txt = document.querySelector(".title-txt");
const effect = () => {
    setTimeout(()=>{
        txt.textContent = "CodeWor";
    },0);
    setTimeout(()=>{
        txt.textContent = "Free BCA Notes";
    },4200);
    setTimeout(()=>{
        txt.textContent = "By Lakshay Babbar";
    },8400);
}
effect();
setInterval(effect,12600);