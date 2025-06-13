// js/header.js

document.addEventListener('DOMContentLoaded', function () {
  
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener('click', function () {
        navLinks.classList.toggle('show');
      });
    }
  });
  