document.addEventListener("DOMContentLoaded", function() {

	// // var slideIndex = 1;
	// // showSlides(slideIndex);
	// // function currentSlide(n){
	// //     showSlides(slideIndex = n);
    // // }
    // // function showSlides(n){
	// //     var i;
	// //     let slides = document.querySelector('.reviews');
    // //     let dots = document.querySelector('.dot');
    // //
    // //     if(n > slides.length){
    // //         slideIndex = 1
    // //     }
    // //     if (n < 1 ){
    // //         slideIndex=slides.length
    // //     }
    // //     for (i=0; i < dots.length; i++){
    // //         dots[i].className = dots[i].className.replace("active", "");
    // //     }
    // //     slides[slideIndex-1].style.display = "block";
    // //     dots[slideIndex-1].className+= "active";
    // }

    // let slides = document.querySelectorAll('.slider');
    // console.log(slides);
    // let slider =[];
    // for (let i=0; i< slides.length; i++){
    //     slider[i] = slides[i];
    //     slides[i].remove;
    // }
    // console.log(slider);
    $('.slider').slick({
        dots: true,
        speed: 300,
        arrows: false,
        fade: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

});
