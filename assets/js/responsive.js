$('.section-services .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    rtl:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.section-clients .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    rtl:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})