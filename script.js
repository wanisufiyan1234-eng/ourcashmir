
/*--------------------------------------------------------------
    # Loading Screen
    --------------------------------------------------------------*/
//     document.addEventListener("DOMContentLoaded", function() {
//     // Simulate content loading
//     setTimeout(function() {
//         // Hide the loading screen
//         document.getElementById("loading-screen").style.display = "none";
        
//         // Display the content
//         document.getElementById("content").style.display = "block";
//     }, 1000); // Adjust the time as needed
// });




/*--------------------------------------------------------------
    # on Scroll
    --------------------------------------------------------------*/
    
// Function to handle scrolling behavior
function handleScroll() {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        logo = document.querySelector('.logo'),
        hdrCta = document.querySelector('.hdr-cta'),
        navElement = document.querySelector('nav');
  
    if (distanceY > 150) {
        logo.style.display = 'none';
        hdrCta.style.display = 'none';
        navElement.style.justifyContent = 'center';
    } else {
        logo.style.display = 'block';
        hdrCta.style.display = 'flex';
        navElement.style.justifyContent = 'space-between';
    }
  }
  
  // Add scroll event only if window width is above 850px
  if (window.innerWidth > 1060) {
    window.addEventListener('scroll', handleScroll);
  }
  
  // Add event listener for window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 850) {
        window.addEventListener('scroll', handleScroll);
    } else {
        window.removeEventListener('scroll', handleScroll);
    }
  });
  
   
  /*--------------------------------------------------------------
      # Smooth Scrolling
      --------------------------------------------------------------*/
      window.onload = function() {
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
              e.preventDefault();
        
              const targetId = this.getAttribute('href').substring(1);
              const targetElement = document.getElementById(targetId);
        
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            });
          });
        };
  /*--------------------------------------------------------------
      # Side Bar Open Close Logic
      --------------------------------------------------------------*/
      const toggleBtn = document.querySelector(".toggle-btn");
      const toggleBtnIcon = document.querySelector(".toggle-btn i");
      const sideBarMenu = document.querySelector(".sidebar-menu");
      const overlay = document.querySelector(".overlay");
      const sideBarBtns = document.querySelectorAll(".links li");
  
      sideBarBtns.forEach(function(btn) {
          btn.addEventListener("click", function () {
              closeSidebar();
          });
      });
  
      toggleBtn.addEventListener("click", function () {
          sideBarMenu.classList.toggle("open");
          overlay.classList.toggle("blurred");
  
  
  
          const isOpen = sideBarMenu.classList.contains("open");
  
          toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  
      });
  
      function closeSidebar() {
          sideBarMenu.classList.remove("open");
          toggleBtnIcon.classList = "fa-solid fa-bars";
          overlay.classList.remove("blurred");
  
  
      }
  
      window.addEventListener("click", function (event) {
          if (
              !sideBarMenu.contains(event.target) && // Clicked outside the sidebar
              event.target !== toggleBtnIcon // Clicked outside the toggle button
          ) {
              closeSidebar();
          }
      });
  
   
  /*--------------------------------------------------------------
      # FAQs
      --------------------------------------------------------------*/
  
  
      var acc = document.getElementsByClassName("accordion");
              var i;
              for (i = 0; i < acc.length; i++) {
                  acc[i].addEventListener("click", function () {
                      this.classList.toggle("active");
                      this.parentElement.classList.toggle("active");
  
                      var pannel = this.nextElementSibling;
  
                      if (pannel.style.display === "block") {
                          pannel.style.display = "none";
                      } else {
                          pannel.style.display = "block";
                      }
                  });
              }
  
  /*--------------------------------------------------------------
      # Animate on Scroll
      --------------------------------------------------------------*/
  
  
  
              AOS.init({
                  offset: 40,
                  delay: 50,
                  duration: 100,
                  once: true
                });
  