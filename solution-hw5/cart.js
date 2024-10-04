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

let cart = new Set();

function addRoll(){
  //manually add rolls
  const original = new Roll("Original", "Sugar Milk", "1", 2.49);
  const walnut =  new Roll("Walnut", "Vanilla Milk", "12", 3.49);
  const raisin =  new Roll("Raisin", "Sugar Milk", "3", 2.99);
  const apple = new Roll("Apple", "Original", "3", 3.49);

  cart.add(original)
  cart.add(walnut)
  cart.add(raisin)
  cart.add(apple)
}

let glazes = [
  {
    option: "Original",
    priceAdaption: 0,
  },
  {
    option: "Sugar Milk",
    priceAdaption: 0,
  },
  {
    option: "Vanilla Milk",
    priceAdaption: 0.5,
  },
  {
    option: "Double Chocolate",
    priceAdaption: 1.5,
  },
];

let packSizes = [
  {
    option: "1",
    priceAdaption: 1,
  },
  {
    option: "3",
    priceAdaption: 3,
  },
  {
    option: "6",
    priceAdaption: 5,
  },
  {
    option: "12",
    priceAdaption: 10,
  },
];

//calculate single item price
function calculatePrice(item) {
  //External Source: Looked up how to get value of a key https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
  let glaze = glazes.find((element) => element.option === item.glazing);
  let pack = packSizes.find((element) => element.option === item.size);

  itemPrice = (item.basePrice + glaze.priceAdaption) * pack.priceAdaption;
  itemPriceFixed = itemPrice.toFixed(2);
  return itemPriceFixed;
}

//calculate total item price
const priceElement = document.getElementById("cart-total-price");

function updateTotalPrice() {
  let totalPrice = 0;
  cart.forEach(
    (item) => (totalPrice = totalPrice + parseFloat(calculatePrice(item)))
  );
  priceElement.innerText = totalPrice.toFixed(2);
}

//display all items from cart set
function createCartItem(item) {
  //External Source: Looked up how to use template https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots
  const template = document.getElementById("cart-item-template");
  const clone = template.content.cloneNode(true);
  clone.querySelector("#cart-item-image").src = `../assets/products/${
    rolls[item.type].imageFile
  }`;
  clone.querySelector(
    "#cart-item-type"
  ).innerText = `${item.type} Cinnamon Roll`;
  clone.querySelector(
    "#cart-item-glazing"
  ).innerText = `Glazing: ${item.glazing}`;
  clone.querySelector("#cart-item-size").innerText = `Pack Size: ${item.size}`;
  clone.querySelector("#cart-item-price").innerText = `$ ${calculatePrice(
    item
  )}`;

  item.element = clone.querySelector('#cart-item-container');
  const btnDelete = clone.querySelector("#btn-remove");
  btnDelete.addEventListener("click", () => {
    removeItem(item);
  });

  const cartWrap = document.querySelector("#cart-item-wrap");
  cartWrap.appendChild(clone);
  if (cart.length === 0) {
    console.log("empty cart");
  }
}

function removeItem(item) {
  item.element.remove();
  cart.delete(item);
  console.log(cart)

  // update total price after removing the item
  updateTotalPrice();
}

//initialize cart and total price
addRoll();
cart.forEach((item) => createCartItem(item));
updateTotalPrice();
