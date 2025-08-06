const toggleIcon = document.querySelector('.toggle-icon');
const body = document.body;
toggleIcon.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = toggleIcon.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.className = 'bx bx-sun';
    } else {
        icon.className = 'bx bx-moon';
    }
});
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('.navbar a').forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
    });
});
emailjs.init("P8lVz08DenCbu1kr4"); 
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    emailjs.sendForm('service_7fbqmwd', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.log('Error:', error);
        })
        .finally(function() {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});k