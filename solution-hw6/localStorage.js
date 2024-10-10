function saveToLocalStorage() {
  //copy set to array
  const cartArray = Array.from(cart);

  //stringify objects in array
  const cartArrayString = JSON.stringify(cartArray);
  
  //set local storage with key "storedCart"
  localStorage.setItem("storedCart", cartArrayString);

  console.log("current cart array from local storage:" + cartArrayString);
}

function retrieveFromLocalStorage() {
  const cartArrayString = localStorage.getItem("storedCart");

  //JSON.parse does the oposite of stringify (so objectify?)
  const cartArray = JSON.parse(cartArrayString);
  cart = new Set(cartArray);
}

//retrieve from local storage upon load
if (localStorage.getItem("storedCart") != null) {
  retrieveFromLocalStorage();
} else {
  cart = new Set();
}
