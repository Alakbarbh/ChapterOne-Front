$(document).ready(function () {
    
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
    
})