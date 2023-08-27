// JavaScript For Sticky Header

window.addEventListener("scroll", function(){
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 100)

})


// Testimonial Slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    items: 1,

})