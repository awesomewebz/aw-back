let innerWidth = window.innerWidth;
let nav = document.getElementById("nav");
let navItems = document.getElementById("nav-item");
let navIcon = document.getElementById("hamIcon");
let mobileMenu = document.getElementById("mobileMenu");
let crossIcon = document.getElementById("crossIcon");
let mobileMenuVisible = false;

if(window.innerWidth < 1024){
    navItems.classList.add("hidden");
    

}else{
    navIcon.classList.add("hidden");
}

navIcon.addEventListener("click", ()=>{
    mobileMenu.classList.remove("-top-full");
    mobileMenu.classList.remove("translate-x-full");
    navIcon.classList.add("hidden");
    crossIcon.classList.remove("hidden");
});
crossIcon.addEventListener("click", ()=>{
    mobileMenu.classList.add("-top-full");
    mobileMenu.classList.add("translate-x-full");
    navIcon.classList.remove("hidden");
    crossIcon.classList.add("hidden");
})

