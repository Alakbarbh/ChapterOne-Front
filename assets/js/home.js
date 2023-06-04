$(document).ready(function () {

    let search = document.querySelector(".search i")
    search.addEventListener("click", function () {
        document.querySelector(".search-input").classList.toggle("d-none")
    })

    let login = document.querySelector(".user i")
    login.addEventListener("click", function () {
        document.querySelector(".login-register").classList.toggle("d-none")
    })

    //Home slider
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //login-registerdə body-ə vuranda işləməsi üçün js
    document.addEventListener("click", function (e) {
        if (!!!e.target.closest(".user")) {
            if (!$(".login-register").hasClass("d-none")) {
                $(".login-register").addClass("d-none")
            }
        }
    })


    //Bir-başa headerə qaytarn icon
    $('#topbtn').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 900)

    })



    // let headers = document.querySelectorAll(".category .item");

    // let contents = document.querySelectorAll("#products .products")


    // headers.forEach(element => {
    //     element.addEventListener("click", function () {
    //         document.querySelector(".active").classList.remove("active");
    //         this.classList.add("active");

    //         contents.forEach(content => {
    //             if (content.getAttribute("data-id") == this.getAttribute("data-id")) {
    //                 content.classList.remove("d-none")
    //             } else {
    //                 content.classList.add("d-none")
    //             }

    //         });
    //     })
    // });



})
