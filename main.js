// News Slider
let newsI = 0, projectI = 0, testiI = 0;
const newsSlides = document.querySelectorAll('.news-slider .slide');
const projectCards = document.querySelectorAll('.projects-carousel .project-card');
const testimonySlides = document.querySelectorAll('.testimonial-slider .testimony');

function showSlide(arr, i) {
  arr.forEach((el, idx) => el.classList.toggle('active', idx===i));
}
function nextSlide() { newsI = (newsI+1)%newsSlides.length; showSlide(newsSlides, newsI);}
function prevSlide() { newsI = (newsI-1+newsSlides.length)%newsSlides.length; showSlide(newsSlides, newsI);}
function nextProject() { projectI = (projectI+1)%projectCards.length; showSlide(projectCards, projectI);}
function prevProject() { projectI = (projectI-1+projectCards.length)%projectCards.length; showSlide(projectCards, projectI);}
setInterval(nextSlide, 4000);
setInterval(nextProject, 5000);
// Testimonials slider auto
setInterval(() => { testiI=(testiI+1)%testimonySlides.length; showSlide(testimonySlides, testiI); }, 6000);

// Dark Mode Toggle
const dToggle = document.getElementById('dark-toggle');
if (dToggle)
  dToggle.onclick = () => document.body.classList.toggle('dark');

// Dummy Language Switcher (it just stores the preference and reloads page here)
const langSwitch = document.getElementById('lang-switch');
if(langSwitch) langSwitch.onchange = () => { 
  localStorage.setItem('lang', langSwitch.value); location.reload();
};

// On page load, set theme and lang from storage
window.onload = function(){
  if(localStorage.getItem('theme')==='dark') document.body.classList.add('dark');
  if(langSwitch) langSwitch.value = localStorage.getItem('lang') || 'en';
};



document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  
    // Optional: close menu when clicking a nav link on mobile
    // document.querySelectorAll('.nav-link').forEach(link => {
    //   link.addEventListener('click', () => {
    //     if (window.innerWidth <= 768 && navMenu.classList.contains('open')) {
    //       navMenu.classList.remove('open');
    //     }
    //   });
    // });

    document.addEventListener('DOMContentLoaded', function () {
        // Get current filename from URL
        const path = window.location.pathname;
        const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html'; // Default to index.html
    
        // Remove 'active' from all
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
        // Set 'active' for the current page
        document.querySelectorAll('.nav-link').forEach(link => {
          if (link.getAttribute('href') === file) {
            link.classList.add('active');
          }
        });
      });
  
    // Dark mode toggle (make sure you have implemented dark mode toggling code)
    const dToggle = document.getElementById('dark-toggle');
    if (dToggle) {
      dToggle.onclick = () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
      };
      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
      }
    }
  
    // Language selector persistence (if implemented)
    const langSwitch = document.getElementById('lang-switch');
    if (langSwitch) {
      langSwitch.value = localStorage.getItem('lang') || 'en';
      langSwitch.onchange = () => {
        localStorage.setItem('lang', langSwitch.value);
        location.reload();
      };
    }
  });
  
//   for about page slider

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
  
    // Width of one slide + margin (adjust if you change CSS)
    const slideWidth = slides[0].getBoundingClientRect().width + 16; // 16px = margin-right (1em approx)
  
    let currentIndex = 0;
  
    function moveToSlide(index) {
      // Clamp index between 0 and max possible
      const maxIndex = slides.length - Math.floor(track.parentElement.offsetWidth / slideWidth);
      if (index < 0) index = 0;
      if (index > maxIndex) index = maxIndex;
  
      track.style.transform = `translateX(-${index * slideWidth}px)`;
      currentIndex = index;
    }
  
    nextButton.addEventListener('click', () => {
      moveToSlide(currentIndex + 1);
    });
  
    prevButton.addEventListener('click', () => {
      moveToSlide(currentIndex - 1);
    });
  
    // Optional: Auto slide every 5 seconds
    // setInterval(() => {
    //   let nextIndex = currentIndex + 1;
    //   if(nextIndex > slides.length - 1) nextIndex = 0;
    //   moveToSlide(nextIndex);
    // }, 5000);
  });
  
