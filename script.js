const nav = document.querySelector('.nav-responsive');
let go_back = document.getElementById('back-drop');
let hamburger = document.querySelector(".hamburger")



hamburger.addEventListener("click", ()=>{
    nav.style.display = "flex";
})
go_back.addEventListener("click", ()=>{
    nav.style.display = "none";
})