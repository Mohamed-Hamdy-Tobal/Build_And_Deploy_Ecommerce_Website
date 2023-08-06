document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById("bar");
    const closed = document.getElementById("x-mark");
    const nav = document.querySelector(".navbar");

    if (bar) {
        bar.addEventListener("click", function() {
            nav.classList.add('active');
            bar.classList.add("active");
            nav.classList.remove('close');
        });
    }

    if (closed) {
        closed.addEventListener("click", function() {
            nav.classList.add('close');
            nav.classList.remove('active');
            bar.classList.remove("active");
        });
    }

    // Add a click event listener to the document
    document.addEventListener("click", function (event) {
        // Check if the clicked element is the navbar or the toggle button
        const isNavbarClicked = nav.contains(event.target) || event.target === bar;
    
        // If the click is outside the navbar and it's not the toggle button, close the navbar
        if (!isNavbarClicked) {
            nav.classList.remove('active');
            nav.classList.add('close');
            bar.classList.remove("active");
        }
    });
});

let mainPro = document.getElementById("mainImg");
let smallPro = document.getElementsByClassName("small-img");

let prod = Array.from(document.querySelectorAll("#feature-products #pro-container .pro"))
for (let i =0; i<prod.length; i++) {
    prod[i].onclick = function () {
        myItem = prod[i].firstElementChild.src
        localStorage.setItem("updatedContent", myItem);
        window.location.href = 'sproduct.html'
    }
}




