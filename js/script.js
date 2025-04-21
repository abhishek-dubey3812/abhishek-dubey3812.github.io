$(function(){
        $('#menu').slicknav({
            'label' : '',
            'brand' : 'Portfolio'
        });
    });

    
    document.addEventListener("DOMContentLoaded", function () {
      // Typing Effect
      const typedElement = document.querySelector(".typed");
      if (typedElement) {
          const typedItems = typedElement.getAttribute("data-typed-items").split(",");
          let currentItem = 0;
          let charIndex = 0;
          let isDeleting = false;
    
          function typeEffect() {
              let currentText = typedItems[currentItem];
              if (isDeleting) {
                  typedElement.textContent = currentText.substring(0, charIndex - 1);
                  charIndex--;
              } else {
                  typedElement.textContent = currentText.substring(0, charIndex + 1);
                  charIndex++;
              }
    
              if (!isDeleting && charIndex === currentText.length) {
                  isDeleting = true;
                  setTimeout(typeEffect, 2000);
              } else if (isDeleting && charIndex === 0) {
                  isDeleting = false;
                  currentItem = (currentItem + 1) % typedItems.length;
                  setTimeout(typeEffect, 500);
              } else {
                  setTimeout(typeEffect, isDeleting ? 50 : 100);
              }
          }
          typeEffect();
      }
    });     

// skills section

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            dots:false,
            autoplay: true,    
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            margin:120,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                624:{
                    items:3,
                    nav:false
                },
                992:{
                    items:5,
                    nav:false,
                    loop:true
                }
            }
        });
      });
     
//    project section   

// === FILTER SYSTEM ===
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active")?.classList.remove("active");
    button.classList.add("active");
    const category = button.getAttribute("data-filter");

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");
      card.style.display = (category === "all" || cardCategory === category) ? "block" : "none";
    });
  });
});

// === LIGHTBOX ZOOM SYSTEM ===
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    const fullImg = img.getAttribute('data-full');
    if (fullImg) {
      lightboxImg.src = fullImg;
      lightbox.classList.add('active');
    }
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightboxImg.src = "";
});