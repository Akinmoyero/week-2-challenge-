// Attach event listener to the "Add" button
document.getElementById('addButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const priceInput = document.getElementById('priceInput');
    const itemText = itemInput.value.trim(); // Get the item text
    const priceText = priceInput.value.trim(); // Get the price text

    // Check if both item and price are provided
    if (itemText && priceText) {
        addItemToList(itemText, priceText);
        
        // Clear the input fields
        itemInput.value = '';
        priceInput.value = '';
    } else {
        alert("Please enter both item and price."); // Alert if inputs are empty
    }
});

// Function to add item to the list
function addItemToList(itemText, priceText) {
    const li = document.createElement('li'); // Create a new list item
    li.textContent = ${itemText} - ${parseFloat(priceText).toFixed(2)}; // Set the text content

    // Create a "Mark as Purchased" button
    const markPurchasedButton = document.createElement('button');
    markPurchasedButton.textContent = 'Mark as Purchased';
    markPurchasedButton.style.marginLeft = '10px'; // Add some space between text and button

    // Attach event listener to the "Mark as Purchased" button
    markPurchasedButton.addEventListener('click', function() {
        li.classList.toggle('purchased'); // Toggle the 'purchased' class
    });

    // Attach event listener to edit the item on double-click
    li.addEventListener('dblclick', function() {
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.value = li.textContent; // Set the input value to the current text

        // Replace the list item text with the input field
        li.textContent = '';
        li.appendChild(editInput);
        li.appendChild(markPurchasedButton); // Re-attach the button
        editInput.focus();

        // Save changes on pressing Enter
        editInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const newText = editInput.value.trim();
                if (newText) {
                    li.textContent = newText; // Update the list item text
                    li.appendChild(markPurchasedButton); // Re-attach the button
                } else {
                    alert("Item cannot be empty."); // Alert if input is empty
                }
            }
        });

        // Save changes when input loses focus
        editInput.addEventListener('blur', function() {
            const newText = editInput.value.trim();
            if (newText) {
                li.textContent = newText; // Update the list item text
                li.appendChild(markPurchasedButton); // Re-attach the button
            } else {
                alert("Item cannot be empty."); // Alert if input is empty
            }
        });
    });

    // Append the new item and button to the list
    li.appendChild(markPurchasedButton);
    document.getElementById('itemList').appendChild(li);
}

// Attach event listener to the "Clear List" button
document.getElementById('clearListButton').addEventListener('click', function() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Clear all items from the list
});