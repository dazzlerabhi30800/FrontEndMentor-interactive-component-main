const rateBtn = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submitBtn');
const rate = document.querySelector('.rate');
const figureCard = document.querySelector('.card figure');
const backCard = document.querySelector('.card .back');
const frontCard = document.querySelector('.card .front');

let score;

var button = function (manual) {
  rateBtn.forEach((btn) => {
    btn.classList.remove('active')
  });

  rateBtn[manual].classList.add('active');
}

rateBtn.forEach((btn, i) => {
  btn.addEventListener('click', (e) => {
    button(i);
   const targetItem = e.currentTarget;
   score = targetItem.innerText;
   
  //  console.log(targetItem);



  })
})

submitBtn.addEventListener('click', () => {
  frontCard.style.opacity = "0";
  backCard.style.opacity = "1";
  figureCard.style.position = "absolute";
  backCard.style.zIndex = "44";
  rate.innerText = score;
  console.log('it working');
})