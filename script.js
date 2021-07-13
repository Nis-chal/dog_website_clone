
$(document).ready(function () {
    $('.fa-bars').click(function () {
        $('.nav-links').slideToggle(3000);
    })
})

$(window).scroll(function () {
    let scroll = $(window).scrollTop();
 
    console.log(scroll)

    if (scroll >= 70 ) {
        $('nav').addClass("new-nav");

        $('nav ul li a').css({"color":"black"})

        $('.nav-heading span').addClass("black")
        $('.nav-heading span>i').addClass("redish")



        // $('nav ul li a').css({"color": "black"})

        // $('.nav-heading span').css({"color":"black"})
        // $('.nav-heading span>i').css({"color":"#F85A40"})

       
       
     
    }

    else {
        $('nav').removeClass("new-nav");
       

        $('.nav-heading span').removeClass("black")
        // $('nav ul li a').css({"color": "#fff"})

        // $('.nav-heading span').css({"color":"#fff"})
        // $('.nav-heading span>i').css({"color":"#fff"})

    }
})

