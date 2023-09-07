
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");

    });
    $('.menu-btn').click(function(){
        $('.wrapper').toggleClass("active");

    });
    $('.menu-btn').click(function(){
        $('.skills').toggleClass("active");

    });
    var typed = new Typed(".text",{
        strings: ["KHOUDIDIR","Fatima"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});