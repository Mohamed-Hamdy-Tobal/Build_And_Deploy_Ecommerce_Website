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

// If Onclick On The Bar Menu
let bar = document.getElementById("bar")
let nav = document.querySelector(".navbar")
let closed = document.getElementById("x-mark")

if (bar) {
    bar.addEventListener("click", function() {
        nav.classList.add('active')
        bar.classList.add("active")
        nav.classList.remove('close')
    })
}
if (closed) {
    closed.addEventListener("click", function() {
        nav.classList.add('close')
        nav.classList.remove('active')
        bar.classList.remove("active")

    })
}


// --- End For Header ---

// $$$ End Script $$$
