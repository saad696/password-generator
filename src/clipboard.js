import {pass,copyPassword, message} from "./DomEl";

copyPassword.addEventListener("click", () => {
    const el = document.createElement('textarea');
    el.value = pass.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    pass.classList.add("animate__rubberBand");
    setTimeout(() => {
        message.style.display = "block"
    }, 100);
    setTimeout(() => {
        message.style.display = "none"
    }, 2500);    
});



