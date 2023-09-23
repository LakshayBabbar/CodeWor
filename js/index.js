let txt = document.querySelector(".title-txt");
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
setInterval(effect,12000);