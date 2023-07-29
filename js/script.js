// $$$ Start Script $$$

// --- Start For Header ---
let ulElements = Array.from(document.querySelectorAll("header .navbar li a"))
ulElements.forEach((e) => {
    e.onclick = function() {
        console.log("Yes")
    }
})
// --- End For Header ---

// $$$ End Script $$$