const menuIcon=document.querySelector(".menu");
const show= document.querySelector(".side");
const span1=document.getElementById("spa")


menuIcon.addEventListener("click",function(){
  show.classList.remove("side");
  show.classList.add("show-menu");
  

});

span1.addEventListener("click", function(){
   show.style.display="none";
});