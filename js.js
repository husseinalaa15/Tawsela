let slidePage = document.querySelector(".slidepage");
let firstNextBtn = document.querySelector(".nextBtn");
let SecNextBtn = document.querySelector(".next-1");
let prevBtn3 = document.querySelector(".perv-3");

let ThirdNextBtn = document.querySelector(".next-2");

let types = document.querySelector(".types-item");

let prevBtn = document.querySelector(".prev-1");
let prevBtn2 = document.querySelector(".prev-2");


firstNextBtn.addEventListener("click",function(){
	slidePage.style.marginLeft= "-25%";
})

SecNextBtn.addEventListener("click",function(){
	slidePage.style.marginLeft= "-50%";
})

prevBtn.addEventListener("click",function(){
	slidePage.style.marginLeft= "0";
})
prevBtn2.addEventListener("click",function(){
	slidePage.style.marginLeft= "-25%";
})

types.addEventListener("click",function(){
	types.style.backgroundColor= "crimson";
})



ThirdNextBtn.addEventListener("click",function(){
		slidePage.style.marginLeft= "-75%";

})
prevBtn3.addEventListener("click",function(){
	slidePage.style.marginLeft= "-50%";
})
