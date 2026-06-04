/* =====================================================================
   Login Page — JavaScript
   Gère les interactions et la soumission du formulaire de connexion
   ===================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    initSubscribeButton();
});

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const remember = document.getElementById('remember').checked;

    // Validation
    if (!email || !password) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Veuillez entrer une adresse email valide');
        return;
    }

    if (password.length < 6) {
        alert('Le mot de passe doit contenir au moins 6 caractères');
        return;
    }

    // Simulate login (client-side only)
    simulateLogin(email, remember);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function simulateLogin(email, remember) {
    const button = document.querySelector('.btn-login');
    const originalText = button.textContent;

    // Show loading state
    button.disabled = true;
    button.textContent = 'Connexion en cours...';

    // Simulate API call (1.5 seconds)
    setTimeout(() => {
        // Store user info in localStorage
        const user = {
            email: email,
            loginTime: new Date().toISOString(),
            isLoggedIn: true
        };

        localStorage.setItem('olplay_user', JSON.stringify(user));

        if (remember) {
            localStorage.setItem('olplay_remember_email', email);
        }

        // Success message
        button.textContent = 'Connecté ✓';
        button.style.background = '#20a34f';

        setTimeout(() => {
            // Redirect to main page
            window.location.href = ROUTES.main;
        }, 800);
    }, 1500);
}

function initSubscribeButton() {
    const subscribeButton = document.querySelector('.nav-subscribe');
    if (subscribeButton) {
        subscribeButton.addEventListener('click', () => {
            window.location.href = ROUTES.subscribe;
        });
    }
}
