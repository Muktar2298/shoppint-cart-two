//--Plus Btn Event Handler--//
const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener("click", function () {
  // --Quantity--//
  const quantity = document.getElementById("product-quantity");
  const productQuantity = quantity.value;
  const productQuantityNumber = parseInt(productQuantity);
  const totalQuantity = productQuantityNumber + 1;
  quantity.value = totalQuantity;

  //--Price --//
  const productPrice = document.getElementById("product-price");
  const price = productPrice.innerText;
  const priceNumber = parseFloat(price);
  const totalPrice = totalQuantity * 1219;

  productPrice.innerText = totalPrice;
});

// --Minus Btn Event Handler --//
const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", function () {
  // --Quantity--//
  const quantity = document.getElementById("product-quantity");
  const productQuantity = quantity.value;
  const productQuantityNumber = parseInt(productQuantity);
  const totalQuantity = productQuantityNumber - 1;
  quantity.value = totalQuantity;

  //--Price --//
  const productPrice = document.getElementById("product-price");
  const price = productPrice.innerText;
  const priceNumber = parseFloat(price);
  const totalPrice = priceNumber - 1219;

  productPrice.innerText = totalPrice;
});
