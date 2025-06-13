// js/header.js

document.addEventListener('DOMContentLoaded', function () {
    const headerHTML = `
    <header>
  <a href="index.html" class="logo">
    <img src="images/logos/logo5.png" alt="Thrill & Chill Travel Logo" />
  </a>

  <nav class="nav-links">
    <a href="index.html">HOME</a>
    <a href="free-quote.html">FREE QUOTE</a>
    <a href="about.html">ABOUT US</a>
    <div class="dropdown">
      <div class="dropdown-btn">DESTINATIONS</div>
      <div class="dropdown-content">
        <a href="#">Disney</a>
        <a href="#">Universal</a>
        <a href="#">Cruises</a>
      </div>
    </div>
    <a href="blog.html">BLOG</a>
    <a href="contact.html">CONTACT</a>
  </nav>

  <button class="menu-toggle" aria-label="Toggle Menu">&#9776;</button>
</header>

  
    `;
  
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener('click', function () {
        navLinks.classList.toggle('show');
      });
    }
  });
  