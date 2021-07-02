
// --iPone 11 --//
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
  const productTotalPrice = priceNumber + 1219;
  productPrice.innerText = productTotalPrice;

  // --subtotal --//
  const subtotal = document.getElementById("subtotal").innerText;
  const subtotalNumber = parseFloat(subtotal);
  const subtotalNumberUpdate = productTotalPrice;
  document.getElementById("subtotal").innerText = subtotalNumberUpdate;

  // --tax --//
  const tax = document.getElementById("tax").innerText;
  const taxNumber = parseFloat(tax);
  const taxNumberUpdate = subtotalNumberUpdate / 10;
  document.getElementById("tax").innerText = taxNumberUpdate;

  // --total --//
  const total = document.getElementById("total").innerText;
  // const totalNumber = parseFloat(total);
  const totalNumber = subtotalNumberUpdate + taxNumberUpdate;
  document.getElementById("total").innerText = totalNumber;
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
  const productTotalPrice = priceNumber - 1219;
  productPrice.innerText = productTotalPrice;

  // --subtotal --//
  const subtotal = document.getElementById("subtotal").innerText;
  const subtotalNumber = parseFloat(subtotal);
  const subtotalNumberUpdate = productTotalPrice;
  document.getElementById("subtotal").innerText = subtotalNumberUpdate;

  // --tax --//
  const tax = document.getElementById("tax").innerText;
  const taxNumber = parseFloat(tax);
  const taxNumberUpdate = subtotalNumberUpdate / 10;
  document.getElementById("tax").innerText = taxNumberUpdate;

  // --total --//
  const total = document.getElementById("total").innerText;
  // const totalNumber = parseFloat(total);
  const totalNumber = subtotalNumberUpdate + taxNumberUpdate;
  document.getElementById("total").innerText = totalNumber;
});
