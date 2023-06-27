var swiperBlogPreview = new Swiper('.swiper-blog-preview', {
    spaceBetween: 10,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
});
var swiperCommissions = new Swiper('.swiper-commissions', {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    breakpoints: {
        390: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});



// var swiperBlog = new Swiper('.swiper-blogs', {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true
//     },
//     breakpoints: {
//         390: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//         },
//         480: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 15,
//         },
//         1200: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//         }
//     }
// });