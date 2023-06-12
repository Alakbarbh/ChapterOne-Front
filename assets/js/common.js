$(document).ready(function () {

    //Navbarın fixed olub aşağı gəlməyi
    $(window).scroll(function () {
        var header = $('#navbar'),
            scroll = $(window).scrollTop();
        let logoImg = $(".logo img")
        let loginRegister = $(".login-register")
        if (scroll >= 150) {
            header.css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'right': '0',
                'z-index': '99999',
                'background-color': 'white',
                'box-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            });
            logoImg.css({
                'margin-top': '26px'
            })
            loginRegister.css({
                'background-color': 'white'
            })
        } else {
            header.css({
                'position': 'relative',
                'box-shadow': 'none'
            });
            logoImg.css({
                'margin-top': '40px'
            })
        }
    });


    let search = document.querySelector(".search i")
    search.addEventListener("click", function () {
        document.querySelector(".search-input").classList.toggle("d-none")
    })

    let login = document.querySelector(".user i")
    login.addEventListener("click", function () {
        document.querySelector(".login-register").classList.toggle("d-none")
    })

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



    let searchPhone = document.querySelector("#navbar-phone .icons ul li .search")
    searchPhone.addEventListener("click", function () {
        document.querySelector("#navbar-phone .search-input").classList.toggle("d-none")
    })


    let hamburgerMenu = document.querySelector("#navbar-phone .nav .hamburger-icon i")
    hamburgerMenu.addEventListener("click", function () {
        document.querySelector("#navbar-phone .hamburger-menu").classList.toggle("d-none")
    })

})