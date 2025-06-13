// js/footer.js

document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
    <footer>
        <p>Call: <a href="tel:8438066935" class="no-blue-link">843-806-6935</a></p>
        <p>Email: <a href="mailto:info@thrillandchill.com" class="no-blue-link">info@thrillandchill.com</a></p>
        <p>&copy; 2025 Thrill & Chill Travel | All Rights Reserved</p>
    </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
