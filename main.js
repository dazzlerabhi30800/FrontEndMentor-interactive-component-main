const rateBtn = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submitBtn');
const rate = document.querySelector('.rate');
const figureCard = document.querySelector('.card figure');
const backCard = document.querySelector('.card .back');
const frontCard = document.querySelector('.card .front');
const tl = gsap.timeline({defaults : {duration : .75, ease:'power1.out'}});

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
  })
})

submitBtn.addEventListener('click', () => {
 
  if(score === undefined) {
    rate.innerText = "NoRating";
    alert("Please select rating");
  } else {
    rate.innerText = score;
    frontCard.style.opacity = "0";
    backCard.style.opacity = "1";
    backCard.style.transform = "rotateY(0deg)";
    figureCard.style.position = "absolute";
    backCard.style.zIndex = "44";
  }
  console.log('it working');
})
