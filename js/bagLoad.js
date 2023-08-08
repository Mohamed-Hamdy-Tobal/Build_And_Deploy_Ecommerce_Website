// update.js File
document.addEventListener("DOMContentLoaded", function() {
    const updatePrice = localStorage.getItem("bagNums");
    if (updatePrice > 0) {
        myCount.className = "active"
        myCount.innerHTML = updatePrice
    } else {
        myCount.classList.remove("active")
    }
});