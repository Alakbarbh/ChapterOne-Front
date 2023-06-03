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





    // filterSelection("all")
    // function filterSelection(c) {
    //     var x, i;
    //     x = document.getElementsByClassName("filterDiv");
    //     if (c == "all") c = "";
    //     for (i = 0; i < x.length; i++) {
    //         w3RemoveClass(x[i], "show");
    //         if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    //     }
    // }

    // function w3AddClass(element, name) {
    //     var i, arr1, arr2;
    //     arr1 = element.className.split(" ");
    //     arr2 = name.split(" ");
    //     for (i = 0; i < arr2.length; i++) {
    //         if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    //     }
    // }

    // function w3RemoveClass(element, name) {
    //     var i, arr1, arr2;
    //     arr1 = element.className.split(" ");
    //     arr2 = name.split(" ");
    //     for (i = 0; i < arr2.length; i++) {
    //         while (arr1.indexOf(arr2[i]) > -1) {
    //             arr1.splice(arr1.indexOf(arr2[i]), 1);
    //         }
    //     }
    //     element.className = arr1.join(" ");
    // }

    // // Add active class to the current button (highlight it)
    // var btnContainer = document.getElementById("myBtnContainer");
    // var btns = btnContainer.getElementsByClassName("btn");
    // for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function () {
    //         var current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active";
    //     });
    // }
})
