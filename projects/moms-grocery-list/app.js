var newItemButton = $("#item-submit");
var newItemInput = $("#item-input");
var shoppingList = $("#item-list");


console.log(newItemButton);
console.log(newItemInput);

function addItem() {
    shoppingList.append(`
        <li>
            ${newItemInput.val()}
            <button class="remove-button">
                X
            </button>
        </li>`);
}


function removeItem() {
    this.parentElement.remove();
}


$("#item-list").on("click", ".remove-button", removeItem);
newItemButton.click(addItem);