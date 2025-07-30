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
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
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
  
  