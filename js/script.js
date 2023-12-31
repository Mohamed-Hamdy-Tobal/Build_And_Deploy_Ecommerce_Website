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

let prod = Array.from(document.querySelectorAll("#feature-products #pro-container .pro"));

let myCount = document.querySelector("header .navbar li:last-of-type a span")
let count = 0

// For Table 
let myTable = document.querySelector("#cart table tbody")


for (let i = 0; i < prod.length; i++) {
    // For Each Product Bag Click
    prod[i].onclick = function(event) {
        // Check if the click was not on the cart icon
        if (!event.target.classList.contains('cart')) {
            myImg = prod[i].firstElementChild.src;
            myPrice = prod[i].children[1].children[3]
            localStorage.setItem("updatedContent", myImg);
            localStorage.setItem("price", myPrice.innerHTML);
            window.location.href = 'sproduct.html';
        }
    };
    
    // For Count Of Bag
    let cartIcon = prod[i].querySelector('.cart');
    function countFunc(event) {
        event.preventDefault(); // Prevent the click from bubbling to the parent .pro element
        localStorage.setItem("active", "clicked")
        let click = localStorage.getItem("active")
        cartIcon.classList.add(click);
        cartIcon.classList.add("test")

        myCount.className = "active"
        if (cartIcon.classList.contains("clicked")) {
            count+= 1
            localStorage.setItem("bagNums", count)
        } else {
            count-= 1
            localStorage.setItem("bagNums", count)
            myCount.innerHTML = count
            if (count == 0) {
                myCount.classList.remove("active")
            }
        }
        const updatePrice = localStorage.getItem("bagNums");
        myCount.innerHTML = updatePrice
        
        // For Table
        const tabImg = localStorage.setItem("myImg", prod[i].firstElementChild.src)
        const tabPrice = localStorage.setItem("myPrice", prod[i].children[1].children[3].innerHTML)

        const cartItem = { nameImg: localStorage.getItem("myImg"), price: localStorage.getItem("myPrice") };
        
        // Retrieve existing cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        // Add the new item to the cartItems array
        cartItems.push(cartItem);
        
        // Store the updated cart items back in localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    cartIcon.addEventListener("click", countFunc)
}