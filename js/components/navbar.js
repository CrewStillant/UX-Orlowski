// =====================================================================
//  OLPLAY — Navbar Component
//  Gestion du menu hamburger et interactions navbar (réutilisable)
// =====================================================================

function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.querySelector('.nav-menu');

    // Highlight active nav item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'main.html';
    document.querySelectorAll('.nav-item a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage && linkPage === currentPage) {
            link.closest('.nav-item').classList.add('active');
        }
    });

    if (hamburger && navMenu) {
        // Toggle hamburger menu
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu on nav link / button click
        document.querySelectorAll('.nav-item a, .nav-subscribe, .nav-signin').forEach(el => {
            el.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Wire subscribe button
        const subscribeBtn = navMenu.querySelector('.nav-subscribe');
        if (subscribeBtn) {
            subscribeBtn.addEventListener('click', () => {
                window.location.href = ROUTES.subscribe;
            });
        }

        // Wire signin button
        const signinBtn = navMenu.querySelector('.nav-signin');
        if (signinBtn) {
            signinBtn.addEventListener('click', () => {
                window.location.href = 'login.html';
            });
        }
    }
}

// Auto-init
document.addEventListener('DOMContentLoaded', initNavbar);
