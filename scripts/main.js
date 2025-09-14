// main.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    const messageContainer = document.getElementById('message-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        submitButton.disabled = true;

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Replace with your EmailJS service ID, template ID, and user ID
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID')
            .then(() => {
                messageContainer.textContent = 'Message sent successfully!';
                messageContainer.style.color = 'green';
                form.reset();
            })
            .catch((error) => {
                messageContainer.textContent = 'Failed to send message. Please try again.';
                messageContainer.style.color = 'red';
            })
            .finally(() => {
                submitButton.disabled = false;
            });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});