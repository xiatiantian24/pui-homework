let cartGlazes = [
  {
    option: "Keep original",
    priceAdaption: 0,
  },
  {
    option: "Sugar milk",
    priceAdaption: 0,
  },
  {
    option: "Vanilla milk",
    priceAdaption: 0.5,
  },
  {
    option: "Double chocolate",
    priceAdaption: 1.5,
  },
];

let cartPackSizes = [
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

//retrieve from local storage upon load
if (localStorage.getItem("storedCart") != null) {
    retrieveFromLocalStorage();
    for (const cartItem of cart) {
        createCartItem(cartItem);
      }
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

  item.element = clone.querySelector("#cart-item-container");
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

//calculate single item price
function calculatePrice(item) {
  //External Source: Looked up how to get value of a key https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
  let glaze = cartGlazes.find((element) => element.option === item.glazing);
  let pack = cartPackSizes.find((element) => element.option === item.size);

  itemPrice = (item.basePrice + glaze.priceAdaption) * pack.priceAdaption;
  itemPriceFixed = itemPrice.toFixed(2);
  return itemPriceFixed;
}

//calculate total item price
const totalPriceElement = document.getElementById("cart-total-price");

function updateTotalPrice() {
  let totalPrice = 0;
  cart.forEach(
    (item) => (totalPrice = totalPrice + parseFloat(calculatePrice(item)))
  );
  totalPriceElement.innerText = totalPrice.toFixed(2);
}

function removeItem(item) {
    cart.delete(item);
  item.element.remove();
  saveToLocalStorage();

  // update total price after removing the item
  updateTotalPrice();
}

//initialize cart and total price
// cart.forEach((item) => createCartItem(item));
updateTotalPrice();
