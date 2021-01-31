import {pass,copyPassword, message} from "./DomEl";

copyPassword.addEventListener("click", () => {
    const el = document.createElement('textarea');
    el.value = pass.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    if( pass.innerText === " "){
        return;
    }else{
        setTimeout(() => {
            message.style.display = "block"
        }, 100);
        setTimeout(() => {
            message.style.display = "none"
        }, 2500); 
    }
    document.body.removeChild(el);
    pass.classList.add("animate__rubberBand");
});



