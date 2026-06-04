// =====================================================================
//  OLPLAY — Player Page Logic
//  Gestion des animations IntersectionObserver et boutons paywall
// =====================================================================

// ─── Benefit Rows Scroll Animation ───────────────────────────────
function initBenefitAnimations() {
    const rows = document.querySelectorAll('.benefit-row');
    if (!rows.length) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // animate once
            }
        });
    }, {
        threshold: 0.18,
        rootMargin: '0px 0px -40px 0px'
    });

    rows.forEach(function (row) {
        observer.observe(row);
    });
}

// ─── Paywall Buttons ─────────────────────────────────────────────
function initPaywallButtons() {
    // Sign-in buttons → login page
    document.querySelectorAll('.btn-paywall-signin, .btn-cta-signin, .nav-signin').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    });

    // Subscribe buttons → subscription page
    document.querySelectorAll('.btn-paywall-subscribe, .btn-cta-subscribe, .nav-subscribe').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = ROUTES.subscribe;
        });
    });
}

// ─── Init All ────────────────────────────────────────────────────
function initPlayer() {
    initBenefitAnimations();
    initPaywallButtons();
}

document.addEventListener('DOMContentLoaded', initPlayer);
