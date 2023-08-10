// update.js File For Product
document.addEventListener("DOMContentLoaded", function() {
    let mainPro = document.getElementById("mainImg");
    let price = document.querySelector("#prodetails .single-pro-details h2")
    const updatedContent = localStorage.getItem("updatedContent");
    const updatePrice = localStorage.getItem("price");
    console.log(updatePrice)
    
    if (updatedContent) {
        mainPro.src = updatedContent;
        price.innerHTML = updatePrice
        localStorage.removeItem("updatedContent"); // Optional: Remove the item from Local Storage after use
        console.log("Hello")
    }
});

let addBut = document.querySelector("#prodetails .single-pro-details button")
let countBg = localStorage.getItem("bagNums")
console.log(countBg)

function myFunc() {
    let price = document.querySelector("#prodetails .single-pro-details h2")
    let mainPro = document.getElementById("mainImg");
    let num = parseInt(countBg)
    num += 1
    localStorage.setItem("bagNums", num)
    myCount.innerHTML = localStorage.getItem("bagNums")
    console.log("HElo4")
    const tabImg = localStorage.setItem("myImg", mainPro.src)
    const tabPrice = localStorage.setItem("myPrice", price.innerHTML)
}

addBut.addEventListener("click", myFunc) 
