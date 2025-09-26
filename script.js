// Email signup functionality
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const messageDiv = document.getElementById('message');

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show message function
    function showMessage(text, isError = false) {
        messageDiv.textContent = text;
        messageDiv.className = isError ? 'error' : 'success';
        
        // Clear message after 5 seconds
        setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.className = '';
        }, 5000);
    }

    // Handle form submission
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Validate email
        if (!email) {
            showMessage('Please enter your email address.', true);
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', true);
            return;
        }
        
        // Simulate email submission (replace with actual API call)
        showMessage('Thank you! We\'ll notify you when we launch.');
        emailInput.value = '';
        
        // In a real application, you would send the email to your server
        console.log('Email submitted:', email);
    });

    // Add some interactive feedback
    emailInput.addEventListener('focus', function() {
        this.style.borderColor = '#667eea';
    });
    
    emailInput.addEventListener('blur', function() {
        if (!this.value) {
            this.style.borderColor = '#ddd';
        }
    });

    // Add click handlers for social links (placeholder)
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real application, these would link to actual social media pages
            console.log('Social link clicked:', this.textContent);
        });
    });
});
