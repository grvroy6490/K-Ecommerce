
// window.addEventListener('DOMContentLoaded')


$(document).ready(() => {
    const heroSlider = new Swiper('.hero-slider', {
        pagination: {
            el: '.hero-pagination',
            type: 'bullets',
            clickable:true
        },
    })

    const trendingSlider = new Swiper('.trending-slider',{
        autoplay: {
            delay: 3000,

        },
        allowTouchMove:true,
        slidesPerView:1,
        spaceBetween:20,
        breakpoints:{
            768:{
                slidesPerView:3
            },
            1024:{
                slidesPerView:4
            },
            1366:{
                slidesPerView:4
            }
        }
    })

    const dealSlider = new Swiper('.deals-slider',{
        autoplay: {
            delay: 3000,

        },
        allowTouchMove:true,
        slidesPerView:1,
        spaceBetween:20,
        
        breakpoints:{
            768:{
                slidesPerView:3
            },
           
            1920:{
                slidesPerView:4
            }
            
        }
    })
    const offerSlider = new Swiper('.offers-slider', {
        autoplay: {
            delay: 3000,
        },
        speed: 300,
        allowTouchMove: true,
        loop:true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        initialSlide: 2, // Center the third slide initially, index starts from 0
        
        breakpoints: {
            768: {
                slidesPerView: 1.5,
                centeredSlides: true,
                initialSlide: 2, // Keeps the third slide centered at this breakpoint
            }
        }
    });
        
})


