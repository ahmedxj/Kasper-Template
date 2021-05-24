// window.onscroll = function(){
//     'use strict';
//     var x = document.setElementsByClassName('backtop');
//     if (window.pageYOffset >= 800){
//         x.addClass('reveal');
//     }
//     else{
//         x.removeClass('reveal');
//     }
// }


// var goup = document.getElementById('backtop');
// window.onscroll = function(){
//     'use strict';
//     if (window.pageYOffset >= 800){
//         goup.style.display ='block'
//     }else{
//         goup.style.display ='none'
//     }
 
// };

// var v = document.getElementById("backtop");
// let span = v.classList;


// var goup = document.getElementsByClassName('backtop').innerHTML;
// var x = document.setElementsByClassName('backtop').innerHTML;;
// window.onscroll = function(){
//     'use strict';
//     var x = document.setElementsByClassName('backtop');
//     if (window.pageYOffset >= 700){
//         span.addeClass('reveal');
//     }else{
//         v.removeClass('reveal');
//     }
 
// };

window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.backtop');
    scroll.classList.toggle("active" , window.scrollY>500)
})	

