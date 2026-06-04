// =====================================================================
//  OLPLAY — Main Page Logic
//  Interactions pour la page principale (hero, catégories, roster)
// =====================================================================

// ─── Hero Video Click ────────────────────────────────────────────
function initHeroVideo() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            window.location.href = ROUTES.player;
        });
    }
}

// ─── Watch Button Click ──────────────────────────────────────────
function initWatchButton() {
    const watchBtn = document.querySelector('.watch-button');
    if (watchBtn) {
        watchBtn.addEventListener('click', () => {
            window.location.href = ROUTES.player;
        });
    }
}

// ─── Category Cards Click ────────────────────────────────────────
function initCategoryCards() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function () {
            window.location.href = ROUTES.player;
        });
    });
}

// ─── Roster Cards Click (placeholder) ────────────────────────────
function initRosterCards() {
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('click', function () {
            const team = this.dataset.team;
            console.log('Team selected:', team);
            // TODO: Navigate to team page when implemented
        });
    });
}

// ─── Subscribe Button ─────────────────────────────────────────────
function initSubscribeButton() {
    document.querySelectorAll('.nav-subscribe').forEach(function (btn) {
        btn.addEventListener('click', function () {
            window.location.href = ROUTES.subscribe;
        });
    });
}

// ─── Init All ────────────────────────────────────────────────────
function initMain() {
    initHeroVideo();
    initWatchButton();
    initCategoryCards();
    initRosterCards();
    initSubscribeButton();
}

document.addEventListener('DOMContentLoaded', initMain);
