//On fait le RIGHT SIDE avec product_total_amt

const product_total_amt = document.getElementById("product_total_amt");
const total_cart_amt = document.getElementById("total_cart_amt");
const shipping_charge = document.getElementById("shipping_charge");
const inputDiscountCode = document.getElementById("discount_code1");
const error_trw = document.getElementById("error_trw");

//DECREASE-NUMBER
const decreaseNumber = (incdec, itemprice) => {
  const itemVal = document.getElementById(incdec);
  const itemPrice = document.getElementById(itemprice);

  if (itemVal.value <= 0) {
    itemVal.value = 0;
    alert("La quantité ne doit pas être négative.");
  } else {
    itemVal.value = parseInt(itemVal.value) - 1;
    itemVal.style.background = "#fff";
    itemVal.style.color = "#000";
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 999;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 999;
    total_cart_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) +
      parseInt(shipping_charge.innerHTML);
  }
};
const increaseNumber = (incdec, itemprice) => {
  const itemVal = document.getElementById(incdec);
  const itemPrice = document.getElementById(itemprice);

  if (itemVal.value >= 5) {
    itemVal.value = 5;
    alert("Maximum 5 quantités autorisées");
    itemVal.style.background = "red";
    itemVal.style.color = "#fff";
  } else {
    itemVal.value = parseInt(itemVal.value) + 1;
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) + 999;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 999;
    total_cart_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) +
      parseInt(shipping_charge.innerHTML);
  }
};

const discount_code = () => {
  const totalAmountCurr = parseInt(total_cart_amt.innerHTML);
  if (inputDiscountCode.value === "jules") {
    if (total_cart_amt.innerHTML > 0) {
      const newTotalAmountCurr = totalAmountCurr - 150;
      total_cart_amt.innerHTML = newTotalAmountCurr;
      error_trw.innerHTML = "Bravo! Le code est valide";
      error_trw.classList = "alert-success p-1";
    } else {
      alert("Veuillez choisir un produit");
      total_cart_amt.innerHTML = 0;
    }
  } else {
    error_trw.innerHTML = "Essayez encore ! Le code est jules";
    error_trw.classList = "alert-danger p-1";
  }
};

// HEADING QUINARY
const h5 = document.querySelector(".heading-quinary");

const date = new Date();
date.setDate(date.getDate() + 2);

const estimateDate = date.toLocaleDateString("fr-FR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

h5.innerHTML += `<p class="text-info"> La date prévue de livraison est dans 48 heures: <b> le ${estimateDate}.  </b> </p>`;
