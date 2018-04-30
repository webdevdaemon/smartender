

function resizeHeaderOnScroll() {
  
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    headerEl = document.querySelector('.nav')

  if (distanceY > shrinkOn) {
    headerEl.classList.add('smaller')
  } else {
    headerEl.classList.remove('smaller')
  }
  
};

