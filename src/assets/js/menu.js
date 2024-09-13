export function menu() {
    const header02Toggle = document.getElementById("header02Toggle");
    const header02Nav = document.querySelector(".header02__nav");

    if(header02Toggle){
        header02Toggle.addEventListener("click", () => {
            header02Nav.classList.toggle("show");
    
            header02Toggle.getAttribute("aria-expanded") === "true" 
            ? header02Toggle.setAttribute("aria-expanded", "false") 
            : header02Toggle.setAttribute("aria-expanded", "true");
        });
    }
}