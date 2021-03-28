// Fleche vers le haut
function arrowUp(){
    if (window.scrollY > 577){
      document.getElementsByClassName("backToTop")[0].classList.add("flex");
    } else {
      document.getElementsByClassName("backToTop")[0].classList.remove("flex");
    }
  }
  
  window.addEventListener("scroll", arrowUp);
  
  
  // SLIDER
  let images = ['./images/banner-slider/1.jpg','./images/banner-slider/2.jpg','./images/banner-slider/3.jpg'];

  let slideNumber = 0;
  let slider = document.getElementById("slider");
  
  function precedent() {
    slideNumber--
    if (slideNumber < 0) {
      slideNumber = images.length-1
    } 
    slider.src = images[slideNumber]
  }
  
  function suivant() {
    slideNumber++
    if (slideNumber >= images.length) {
      slideNumber = 0
    } 
    slider.src = images[slideNumber]
  }
  
  document.getElementsByClassName("precedent")[0].addEventListener("click", precedent)
  document.getElementsByClassName("suivant")[0].addEventListener("click", suivant)
  