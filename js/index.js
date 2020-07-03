// Your code goes here

//mouseover
// let test = document.querySelector("header");
// test.addEventListener("mouseover", function( event ) {   
//     // highlight the mouseover target
//     event.target.style.backgroundColor = "#e5e5e5";
// })
// //key-down
// document.addEventListener("keydown",function(event){
//     event.style.backgroundColor = "black";
// });
// const navTags = document.querySelectorAll('.nav-link');
// const nav     = document.getElementsByClassName('nav');
//processing
//load 
// const intro = document.querySelector('intro')
// window.addEventListener('load',function(){
//     intro.style.backgroundColor = "black"
// }); //processing

const header = document.querySelector('header');
const h1     = document.querySelector('h1');
const body   = document.querySelector('body')


//mouseover
header.addEventListener('mouseover', function(){
    header.style.backgroundColor = "#e5e5e5"
});

//keydown
document.addEventListener('keydown', function(){
    header.style.backgroundColor = "#f8edeb"
});

//wheeldown 
document.addEventListener('wheel', function(){
    header.style.backgroundColor = "#c6dabf"
});



window.addEventListener('load', function(){
    header.style.backgroundColor = "grey";
    h1.style.color = "#e59500"
});


//sroll
window.addEventListener('scroll',function(){
    header.style.backgroundColor = "#eef5db";
})


// mouseleave
header.addEventListener('mouseleave',function(){
    header.style.backgroundColor = "#8d99ae";
})

//focus
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = '';    
});

password.addEventListener('blur', (event) => {
    event.target.style.background = '';    
  });


//online and offline events
  if (navigator.onLine){
    body.style.backgroundColor = "#e0fbfc";
  }

  window.addEventListener('online',function(){
    body.style.backgroundColor = "#f0f3bd";
}); 

 window.addEventListener('offline', function(){
        body.style.backgroundColor = "#2b2d42";
        body.style.color = "white";      
  });

  document.querySelector("nav").addEventListener("click", function(event) {
    event.preventDefault();
}, false);


//click
const navTags = document.querySelectorAll('.nav-link');
for(let i=0 ; i<navTags.length; i++){
    navTags[i].addEventListener('click',function(){      
        header.style.backgroundColor='white';       
    })
}

//PREVENT propagation
header.addEventListener('click',function(){
    header.style.backgroundColor="#606c38";
})
navTags.forEach(navTag => navTag.addEventListener('click',function(e){
    header.style.backgroundColor ="#fec89a";
    e.stopPropagation();
}))
function eventPropagation (e){ 
    header.style.backgroundColor="#fec89a";
    e.stopPropagation();
  }
navTags.forEach(navTag => navTag.addEventListener('click',eventPropagation,false));