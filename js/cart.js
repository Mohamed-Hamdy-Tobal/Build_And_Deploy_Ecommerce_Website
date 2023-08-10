document.addEventListener("DOMContentLoaded", function() {
    let myTable = document.querySelector("#cart table tbody")

    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function updateCartTotal() {
    let totalPrice = 0;

    TR.forEach(item => {
        if (!item.classList.contains("hid")) {
            let itemTotal = parseFloat(item.querySelector(".subtot").textContent);
            totalPrice += itemTotal;
        }
    });

    for (let i = 0; i < pagePrice.length; i++) {
        pagePrice[i].textContent = totalPrice.toFixed(2);
    }

    localStorage.setItem("tablePrice", totalPrice);
    }

    let pagePrice = document.querySelectorAll("#cart-add #subtotal table td.total")
    
    // Populate the cart table with cart items
    cartItems.forEach(item => {
        // Retrieve cart items from localStorage
        const row = myTable.insertRow();
            
        // Create cells
        const removeCell = row.insertCell(0);
        const imageCell = row.insertCell(1);
        const productCell = row.insertCell(2);
        const priceCell = row.insertCell(3);
        const quantityCell = row.insertCell(4);
        const subtotalCell = row.insertCell(5);

        // Set cell content
        removeCell.innerHTML = '<a href="#"><i class="fa-regular fa-circle-xmark"></i></a>';
        imageCell.innerHTML = '<img src="' + item.nameImg + '" alt="">';
        productCell.textContent = "Carton Astronaut T-Shirts";
        priceCell.textContent = item.price; 
        quantityCell.innerHTML = '<input type="number" value="1">';
        quantityCell.className = "input"
        
        subtotalCell.textContent = item.price;
        subtotalCell.className = "subtot"

        let quantityInput = quantityCell.querySelector("input");
        quantityInput.addEventListener("input", function () {

            let newQuantity = parseInt(quantityInput.value);
            let newSubtotal = parseFloat(item.price) * newQuantity;
            subtotalCell.textContent = newSubtotal.toFixed(2);

            // Ensure the new quantity is not less than 0
            if (newQuantity < 0) {
                newQuantity = 0;
                subtotalCell.textContent = parseFloat(0)
                quantityInput.value = newQuantity;
            }

            updateCartTotal();

            let items = JSON.parse(localStorage.getItem('cartItems'));
            items.quantity = newQuantity;
            localStorage.setItem('cartItems', JSON.stringify(items));
        });
    });

    let TR = Array.from(document.querySelectorAll("#cart table tbody tr"));

    let totalPrice = 0
    TR.forEach((item, i) => {
        item.querySelector("a").onclick = function(event) {
            event.preventDefault()
            item.className = "hid"
            let items = JSON.parse(localStorage.getItem('cartItems'))
            items = items.slice(0, i).concat(items.slice(i+1))
            localStorage.setItem('cartItems', JSON.stringify(items));
            myCount.innerHTML -= 1
            localStorage.setItem("bagNums", myCount.innerHTML)
            if (myCount.innerHTML == 0) {
                myCount.classList.remove("active")
            }

            totalPrice -= parseInt(item.querySelector("td:last-of-type").innerHTML)
            localStorage.setItem("tablePrice", totalPrice)
            for (i=0; i<pagePrice.length; i++) {
                pagePrice[i].textContent = totalPrice
            }
        }

    let itemTotal = parseFloat(item.querySelector(".subtot").innerHTML)

    totalPrice += itemTotal

    localStorage.setItem("tablePrice", totalPrice)

    for (i=0; i<pagePrice.length; i++) {
        pagePrice[i].textContent = totalPrice
    }
    })
    updateCartTotal();
});
