document.addEventListener("DOMContentLoaded", function () {
  const hamMenu = document.querySelector(".ham-menu");

  const offScreenmenu = document.querySelector(".off-screen-menu");

  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenmenu.classList.toggle("active");
  });

  const swiper = new Swiper(".swiper", {
    autoHeight: true,
    loop: true,

    // Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const backToTopButton = document.getElementById("bttopBTN");

  backToTopButton.addEventListener("click", function() {
    window.scrollTo({ top:0, behavior: "smooth"});
  });

  

  // Get all the "Дэлгэрэнгүй..." buttons
const moreButtons = document.querySelectorAll('.moreBtn button');

// Loop through each button and add a click event listener
moreButtons.forEach((button) => {
    button.addEventListener('click', function() {
        // Show the popup
        document.getElementById('popupOverlay').style.display = 'flex';
        
        // Add the blur effect to the background
        document.body.classList.add('blur-background');
    });
});

// Function to close the popup and remove the blur effect
function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
    document.body.classList.remove('blur-background');
}


AOS.init();






});
