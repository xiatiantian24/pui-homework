class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;

    //for delete
    this.element = null;
  }
}

const buttonAddCart = document.querySelector("#btn-add-cart");

//handle add to cart whenever the button is clicked
function addCart() {
    const item = new Roll(rollType, glazingOption, packOption, basePrice);
    cart.add(item);
    saveToLocalStorage();
}

let cart = new Set();