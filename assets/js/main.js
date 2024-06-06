const elements = document.querySelectorAll('.main__production__card-choice');
const displayedElements = document.querySelectorAll('.main__production__displaying-product');

elements.forEach((element, index) => {
  element.addEventListener('click', () => {
    elements.forEach((el, idx) => {
      el.classList.toggle('active', el === element);
      displayedElements[idx].classList.toggle('active', idx === index);
    });
  });
});
