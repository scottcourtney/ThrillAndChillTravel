const emailJSUserId = CONFIG.EMAILJS_USER_ID;
const emailJSServiceKey = CONFIG.EMAILJS_SERVICE_KEY;
const emailJSTemplateKey = CONFIG.EMAILJS_TEMPLATE_KEY;

document.addEventListener('DOMContentLoaded', function () {
  if (typeof emailjs === 'undefined') {
    console.error('EmailJS did not load correctly.');
    return;
  }

  // Replace with your actual public key
  emailjs.init(emailJSUserId);

  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    showSpinner(); // Spinner from spinner.js

    emailjs.sendForm(emailJSServiceKey, emailJSTemplateKey, form)
      .then(() => {
        alert('Thank you! Your request has been sent.');
        form.reset();
      })
      .catch((error) => {
        alert('Oops... Something went wrong.');
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        hideSpinner(); // Spinner from spinner.js
      });
  });
});