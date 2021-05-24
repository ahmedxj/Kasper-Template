
window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.backtop');
    scroll.classList.toggle("active" , window.scrollY>500)
})	

function scrolltotp(){
	window.scrollTo({top:0,
	behavior:'smooth'
	})

}

