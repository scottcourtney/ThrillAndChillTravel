document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
      <footer class="footer-compact">
        <a href="https://www.instagram.com/thrillandchill.travel" target="_blank" aria-label="Instagram" class="social-icon">
          <img src="/images/icons/instagram.svg" alt="Instagram" />
        </a>
  
        <div class="footer-center">
        <p>Call: <a href="tel:8438066935" class="no-blue-link">843-806-6935</a></p>
        <p>Email: <a href="mailto:info@thrillandchill.com" class="no-blue-link">info@thrillandchill.com</a></p>
        <p>&copy; 2025 Thrill & Chill Travel | All Rights Reserved</p>

        </div>
  
        <a href="https://www.facebook.com/thrillandchilltravel" target="_blank" aria-label="Facebook" class="social-icon">
          <img src="/images/icons/facebook.svg" alt="Facebook" />
        </a>
      </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  });
  