// =====================================================================
//  OLPLAY — Splash Screen Logic
//  Gestion des particules, loading bar et transition vers main.html
// =====================================================================

// ─── Particles ───────────────────────────────────────────────────
function createParticles() {
    const background = document.getElementById('particles');
    if (!background) return;

    const particleColors = [COLORS.primary, COLORS.secondary, COLORS.red, COLORS.white];

    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left              = Math.random() * 100 + '%';
        p.style.animationDelay    = Math.random() * 6 + 's';
        p.style.animationDuration = (4 + Math.random() * 4) + 's';
        p.style.background        = particleColors[Math.floor(Math.random() * particleColors.length)];
        const size = (2 + Math.random() * 4) + 'px';
        p.style.width  = size;
        p.style.height = size;
        background.appendChild(p);
    }
}

// ─── Loading Bar ─────────────────────────────────────────────────
function hideLoadingBar() {
    const bar = document.querySelector('.loading-bar');
    if (!bar) return;
    setTimeout(() => {
        bar.style.opacity    = '0';
        bar.style.transition = 'opacity 0.5s';
    }, 4000);
}

// ─── Transition to Main ──────────────────────────────────────────
function transitionToMainContent() {
    const logo = document.querySelector('.olplay-logo');
    if (!logo) return;

    logo.addEventListener('click', function () {
        const tagline = document.querySelector('.tagline');
        this.classList.add('zooming');
        if (tagline) tagline.style.opacity = '0';
        setTimeout(() => {
            window.location.href = ROUTES.main;
        }, 800);
    });
}

// ─── Init ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    hideLoadingBar();
    transitionToMainContent();
});
