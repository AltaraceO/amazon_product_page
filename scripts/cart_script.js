const add = document.querySelector(".add_to_cart");

const reduce = document.querySelector(".buy_now");

reduce.addEventListener("click", (_) => {
  let currNum = document.querySelector(".cart-number").innerHTML;
  let value = Number(currNum) - 1;
  document.querySelector(".cart-number").innerHTML = value;
});

add.addEventListener("click", (_) => {
  let currNum = document.querySelector(".cart-number").innerHTML;
  let value = Number(currNum) + 1;
  document.querySelector(".cart-number").innerHTML = value;
});
