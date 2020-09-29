let run = ()=> {
    let menu = document.querySelector("#menu");
    let items = document.querySelectorAll(".items");
    menu.addEventListener("click", ()=>{
        for(let i = 0; i < items.length; i++){
            items[i].classList.toggle("open");
        }
    })
}
run();