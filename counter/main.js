// butonları html den al
// butonlar tıklandımı dinle
// eger tıklanırsa arttır yada azalt
//         // title ı bul ve onu arttır veya azalt
const increaseButton = document.querySelector('.azalt');
const decreaseButton = document.querySelector('.arttir');
const number = document.querySelector('#numara');

let initialNumber = 0;

increaseButton.addEventListener("click", () => {
    initialNumber--;
    number.innerHTML = `${initialNumber}`;
});

decreaseButton.addEventListener("click", () => {
    initialNumber++;
    number.innerHTML = `${initialNumber}`;
});
