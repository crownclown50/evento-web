document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }

    emailjs.init("hFdE67VpUKOwR_DWK"); 
    const btn = document.querySelector('input[type="submit"]');
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            if (btn) {
                btn.value = 'Enviando...'; 
            }
            const serviceID = 'service_vacbiba'; 
            const templateID = 'template_zr7ph5o'; 
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    if (btn) {
                        btn.value = 'Enviar';
                    }
                    alert('Registro enviado exitosamente!');
                    contactForm.reset();
                }, (err) => {
                    if (btn) {
                        btn.value = 'Enviar'; 
                    }
                    alert('Error al enviar el correo: ' + JSON.stringify(err));
                });
        });
    }
});