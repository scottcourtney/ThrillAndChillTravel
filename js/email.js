const emailJSUserId = CONFIG.EMAILJS_USER_ID;
const emailJSServiceKey = CONFIG.EMAILJS_SERVICE_KEY;
const emailJSTemplateKey = CONFIG.EMAILJS_TEMPLATE_KEY;

document.addEventListener('DOMContentLoaded', function () {
    // Wait until the EmailJS library is fully available
    if (typeof emailjs === 'undefined') {
      console.error('EmailJS did not load correctly.');
      return;
    }

    // Initialize EmailJS with your PUBLIC KEY
    emailjs.init(emailJSUserId); // Replace with your actual public key

    // Hook form submit
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      emailjs.sendForm(emailJSServiceKey, emailJSTemplateKey, form)
        .then(() => {
          alert('Thank you! Your request has been sent.');
        }, (error) => {
          alert('Oops... Something went wrong.');
          console.error('EmailJS error:', error);
        });
    });
  });