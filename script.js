// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    
    // Example JS: Add a simple alert on contact section click (optional, customize as needed)
    const contactSection = document.getElementById('contacts');
    if (contactSection) {
        contactSection.addEventListener('click', () => {
            alert('Feel free to reach out!');
        });
    }
    
    // You can add more interactive features here, like form validation or animations
});
