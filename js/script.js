const carts = document.querySelectorAll('.cart');
const totalprice = document.querySelector('.totalprice');
const amount = document.querySelector('.amount');
// const btnsPlus = document.querySelectorAll('.plus');
// const btnsMinus = document.querySelectorAll('.minus');
// const inputs = document.querySelectorAll('.input');

let summ = 0;
let index = 0

carts.forEach((elem) => {
    let counter = 0;
    const input = elem.querySelector(".input");
    const btnPlus = elem.querySelector(".plus");
    const btnMinus = elem.querySelector(".minus");
    btnPlus.addEventListener("click", () => {
        counter++; 
        input.value = counter;
        summ = summ + Number(elem.getAttribute("data-price"));
        totalprice.textContent = summ + "$";
        index++;
        amount.textContent = index;
    });
    btnMinus.addEventListener("click", () => {
        if (input.value > 0) {
            counter--;
            input.value = counter;
            summ = summ - Number(elem.getAttribute("data-price"));
            totalprice.textContent = summ + "$";
            index--;
            amount.textContent = index;
        }
    });
});