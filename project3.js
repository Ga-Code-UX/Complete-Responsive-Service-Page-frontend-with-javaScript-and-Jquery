$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle'); 

        if($(window).scrollTop() >30){
            $('.header').css({'background':'#4ABDAC', 'box-shadow':'0 .2rem .5rem rgba(0,0,0 .4)'});
        }
        else {
            $('.header').css({'background':'none', 'box-shadow':'none'});
        }
    });

    $('.accordion-header').click(function(){
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    });

});

// scrollrevel
window.sr = ScrollReveal({reset:true});
ScrollReveal().reveal('.about', {delay:700});
ScrollReveal().reveal('.services', {delay:700, rotate:{x:100,y:0,z:0}});
ScrollReveal().reveal('.team',{delay:700,rotate:{x:100,y:0,z:0}});
ScrollReveal().reveal('.contact',{delay:700,rotate:{x:100,y:0,z:0}});
ScrollReveal().reveal('.faq',{delay:700,rotate:{x:100,y:0,z:0}});


/* javascript to animation on scroll
const item = document.querySelectorAll("[data-anime]");
const animeScroll = () => {
    const windowTop = window.pageYOffset+window.innerHeight*0.85;
    item.forEach(element => {
        if(windowTop > element.offsetTop){
            element.classList.add('animate');
        }

    })
}
animeScroll();

window.addEventListener("scroll",()=>{
    animeScroll();
})*/