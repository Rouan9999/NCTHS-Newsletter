const hamburger = document.querySelector(".hamburger");
const nav_ul = document.querySelector(".nav_ul") ;

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    nav_ul.classList.toggle("active");
})
document.querySelectorAll(".navitems").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_ul.classList.remove("active");
}))

var submited = false;
if (submited == true){
    window.location.href = "thankyou.html";
}
