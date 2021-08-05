
window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.backtop');
	var hed = document.querySelector('header');
    scroll.classList.toggle("active" , window.scrollY>500),
	hed.classList.toggle("header1" , window.scrollY>300)
})	

function scrolltotp(){
	window.scrollTo({top:0,
	behavior:'smooth'
	})

}

// var bg = document.querySelector('hero');  
var bg = document.getElementById('hero');
var nxbtn = document.querySelector('.fa-angle-left');
var brbtn = document.querySelector('.fa-angle-right');
var togg = document.querySelector('.toggle-minu');
var ulss = document.querySelector('.toggjg');

nxbtn.onclick = function(){
	bg.style.backgroundImage = 'url("img/hero/001.jpg")' ;
};
nxbtn.ondblclick = function(){
	bg.style.backgroundImage = 'url("img/hero/002.jpg")' ;
};

brbtn.onclick = function(){
	bg.style.backgroundImage = 'url("img/hero/002.jpg")' ;
};
brbtn.ondblclick = function(){
	bg.style.backgroundImage = 'url("img/hero/003.jpg")' ;
};

// togg.onclick = function(){
// 	ulss.classList.toggle("toggle1");
// }