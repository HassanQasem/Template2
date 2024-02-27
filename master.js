let prog = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog .hh");

window.onscroll = function () {
    if (window.scrollY >= prog.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}

//Check if There is Storage Color Option
let maincolor = localStorage.getItem("color_option");

if (maincolor !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

    //Remove Active Class from All Colors List Items 
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        //Add Active Class On Element With Data-Color ===Local Storage Item
        if (element.dataset.color === maincolor) {

            //Add Active Class
            element.classList.add("active");
        }

    });
}

// Toggol Spin Class  On Icon 
document.querySelector(".set-toggole i").onclick = function () {
    // Toggole Class Fa-spin for Rotation On Self 
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");

};
//Switch Colors 
const colorLi = document.querySelectorAll(".colors-list li");

//Loop In All List Item

colorLi.forEach(li => {

    //Click On Every List Items

    li.addEventListener("click", (e) => {

        //Set color In Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //Set Color On Loclal Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        //Remove Active Class from All Childern 
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        //Add Active Class On Self
        e.target.classList.add("active");
    })
})

// Start Bullets 
let links = document.querySelectorAll(".container nav ul li a");

let bullets = document.querySelectorAll(".bullets-nav .bullet-box");

function whereYouWantScrollTo(elements) {

    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            // scrollTo(e.target.dataset.sections);

            e.preventDefault();
            document.querySelector(e.target.dataset.sections).scrollIntoView({

                behavior: 'smooth'
            })

        });
    });
}


// End Bullets

whereYouWantScrollTo(links);
whereYouWantScrollTo(bullets);





