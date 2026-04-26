window.addEventListener("scroll",function(){
document.querySelector(".header").classList.toggle(
"scrolled",
window.scrollY > 50
);
});