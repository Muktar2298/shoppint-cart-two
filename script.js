                  // ----iPone 11 ----//
//--Plus Btn Event Handler--//
const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener("click", function () {
  shoppingCartIconHandler("product-quantity", "product-price",1, 1219);
});

// --Minus Btn Event Handler --//
const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", function () {
  shoppingCartIconHandler("product-quantity", "product-price",-1, -1219);
});


                    // -----iPhone Case ----//
// --Plus Icon Event Handler --//
const plusIcon = document.getElementById("plus-icon");
plusIcon.addEventListener("click", function () {
  shoppingCartIconHandler("case-quantity", "case-price",1, 59);
});

// --Minus Icon Event Handler --//
const minusIcon = document.getElementById("minus-icon");
minusIcon.addEventListener("click", function () {
  shoppingCartIconHandler("case-quantity", "case-price",-1, -59);

});

                  // ----shopping Cart Icon Handler --//
function shoppingCartIconHandler (id1,id2,count,perProductPrice){
// --Quantity--//
const quantity = document.getElementById(id1);
const productQuantity = quantity.value;
const productQuantityNumber = parseInt(productQuantity);
const totalQuantity = productQuantityNumber + count;
document.getElementById(id1).value = totalQuantity;

//--Price --//
const productPrice = document.getElementById(id2);
const price = productPrice.innerText;
const priceNumber = parseFloat(price);
const productTotalPrice = priceNumber + perProductPrice;
document.getElementById(id2).innerText = productTotalPrice;

calculateTotal();
}                 



              // ----Subtotal ,Tax & total----//
function calculateTotal() {
  const phoneQuantity = document.getElementById("product-quantity");
  const phoneQuantityNumber = parseFloat(phoneQuantity.value);
  const phonePrice = phoneQuantityNumber * 1219;

  const caseQuantity = document.getElementById("case-quantity");
  const caseQuantityNumber = parseFloat(caseQuantity.value);
  const casePrice = caseQuantityNumber * 59;
  // --subtotal --//
  const totalSubtotalPrice = phonePrice + casePrice;
  document.getElementById("subtotal").innerText = totalSubtotalPrice;

  // // --tax --//
  const tax = document.getElementById("tax").innerText;
  const taxNumber = parseFloat(tax);
  const taxNumberUpdate = totalSubtotalPrice / 10;
  document.getElementById("tax").innerText = taxNumberUpdate;

  // // --total --//
  const totalPrice = totalSubtotalPrice + taxNumberUpdate;
  document.getElementById("total").innerText = totalPrice;
}
