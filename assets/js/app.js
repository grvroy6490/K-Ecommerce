
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
        
})


