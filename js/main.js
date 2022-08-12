const siteHeader=document.querySelector("#site-header")
const navOpenBtn = document.querySelector(".nav-btn")
const siteNav = document.querySelector(".site-navigaion")
navOpenBtn.addEventListener("click", function(){
    siteHeader.classList.toggle("site-navigation-on")
})