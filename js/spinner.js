// spinner.js
function showSpinner() {
    const spinner = document.getElementById('spinner');
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    if (spinner) spinner.style.display = 'block';
    if (submitBtn) submitBtn.disabled = true;
  }
  
  function hideSpinner() {
    const spinner = document.getElementById('spinner');
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    if (spinner) spinner.style.display = 'none';
    if (submitBtn) submitBtn.disabled = false;
  }