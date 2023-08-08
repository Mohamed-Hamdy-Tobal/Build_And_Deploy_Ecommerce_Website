document.addEventListener("DOMContentLoaded", function() {
    let myTable = document.querySelector("#cart table tbody")

    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Populate the cart table with cart items
    cartItems.forEach(item => {
        // Retrieve cart items from localStorage
        console.log(item.nameImg)
        console.log(item.price)

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
        
        subtotalCell.textContent = item.price;

        quantityCell.querySelector("input").oninput = function () {
            subtotalCell.textContent = (parseFloat(item.price) * quantityCell.querySelector("input").value).toFixed(2);
        }

        console.log(quantityCell.querySelector("input").value)
    });
});
