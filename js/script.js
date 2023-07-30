// $$$ Start Script $$$

// --- Start For Header ---
let ulElements = Array.from(document.querySelectorAll("header .navbar li a"))
ulElements.forEach((e) => {
    console.log(e)
    e.onclick = function () {
        ulElements.forEach((e) => {
            e.classList.remove("active")
        })
        e.classList.add("active")
    }
})
// --- End For Header ---

// $$$ End Script $$$