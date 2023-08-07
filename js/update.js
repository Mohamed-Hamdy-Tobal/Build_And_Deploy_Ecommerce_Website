// update.js File
document.addEventListener("DOMContentLoaded", function() {
    let mainPro = document.getElementById("mainImg");
    const updatedContent = localStorage.getItem("updatedContent");
    
    if (updatedContent) {
        mainPro.src = updatedContent;
        // localStorage.removeItem("updatedContent"); // Optional: Remove the item from Local Storage after use
        console.log("Hello")
    }
});
