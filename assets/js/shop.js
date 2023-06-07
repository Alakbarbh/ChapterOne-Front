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

    //-------price filtre --star------------

let minValue = document.getElementById("min-value");
// console.log(minValue);
let maxValue = document.getElementById("max-value");

function validateRange(minPrice, maxPrice) {
  if (minPrice > maxPrice) {
    // Swap to Values
    let tempValue = maxPrice;
    maxPrice = minPrice;
    minPrice = tempValue;
  }

  minValue.innerHTML = "$" + minPrice;
  maxValue.innerHTML = "$" + maxPrice;
}

const inputElements = document.querySelectorAll(".range-slider input");
inputElements.forEach((element) => {
  element.addEventListener("change", (e) => {
    let minPrice = parseInt(inputElements[0].value);
    let maxPrice = parseInt(inputElements[1].value);

    validateRange(minPrice, maxPrice);
  });
});

validateRange(inputElements[0].value, inputElements[1].value);
    
})