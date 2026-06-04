// =====================================================================
//  OLPLAY — Matchs Page Logic
//  Données saison 2025-2026 + rendu des cartes + filtre par compétition
// =====================================================================

// ─── Match Data ──────────────────────────────────────────────────────
var MATCHES = [

    // ── EN DIRECT ────────────────────────────────────────────────────
    {
        id: 'L1-J27', competition: 'ligue1', compLabel: 'Ligue 1 · J27',
        home: 'OL', away: 'Monaco',
        homeScore: null, awayScore: null,
        date: '10 mars 2026', time: '21h00',
        status: 'live', thumb: 'images/Joueurs.jpg',
    },

    // ── PAYANT (journée -1 et récent) ────────────────────────────────
    {
        id: 'L1-J26', competition: 'ligue1', compLabel: 'Ligue 1 · J26',
        home: 'Paris FC', away: 'OL',
        homeScore: 1, awayScore: 1,
        date: '8 mars 2026', time: '20h45',
        status: 'payant', thumb: 'images/Niakhate.jpg',
    },
    {
        id: 'UEL-16E-2', competition: 'uel', compLabel: 'UEFA Europa League · 16e retour',
        home: 'OL', away: 'Sporting CP',
        homeScore: 2, awayScore: 0,
        date: '4 mars 2026', time: '21h00',
        status: 'payant', thumb: 'images/Endrick.jpg',
    },

    // ── GRATUIT (journée -2 et plus) ─────────────────────────────────
    {
        id: 'L1-J25', competition: 'ligue1', compLabel: 'Ligue 1 · J25',
        home: 'OL', away: 'Reims',
        homeScore: 2, awayScore: 0,
        date: '5 mars 2026', time: '17h00',
        status: 'gratuit', thumb: 'images/Hamdani.jpg',
    },
    {
        id: 'L1-J24', competition: 'ligue1', compLabel: 'Ligue 1 · J24',
        home: 'Brest', away: 'OL',
        homeScore: 1, awayScore: 1,
        date: '1 mars 2026', time: '15h00',
        status: 'gratuit', thumb: 'images/Niakhate.jpg',
    },
    {
        id: 'UEL-16E-1', competition: 'uel', compLabel: 'UEFA Europa League · 16e aller',
        home: 'Sporting CP', away: 'OL',
        homeScore: 0, awayScore: 1,
        date: '20 fév 2026', time: '21h00',
        status: 'gratuit', thumb: 'images/Joueurs.jpg',
    },
    {
        id: 'L1-J23', competition: 'ligue1', compLabel: 'Ligue 1 · J23',
        home: 'OL', away: 'Toulouse',
        homeScore: 1, awayScore: 0,
        date: '22 fév 2026', time: '20h45',
        status: 'gratuit', thumb: 'images/Endrick.jpg',
    },
    {
        id: 'L1-J22', competition: 'ligue1', compLabel: 'Ligue 1 · J22',
        home: 'Rennes', away: 'OL',
        homeScore: 0, awayScore: 1,
        date: '15 fév 2026', time: '20h45',
        status: 'gratuit', thumb: 'images/OL-feminin.jpg',
    },
    {
        id: 'CDF-QF', competition: 'cdf', compLabel: 'Coupe de France · Quart de finale',
        home: 'OL', away: 'Montpellier',
        homeScore: 2, awayScore: 1,
        date: '4 fév 2026', time: '21h00',
        status: 'gratuit', thumb: 'images/Wendy.jpg',
    },
    {
        id: 'L1-J21', competition: 'ligue1', compLabel: 'Ligue 1 · J21',
        home: 'OL', away: 'Nice',
        homeScore: 3, awayScore: 1,
        date: '8 fév 2026', time: '17h05',
        status: 'gratuit', thumb: 'images/Hamdani.jpg',
    },
    {
        id: 'L1-J20', competition: 'ligue1', compLabel: 'Ligue 1 · J20',
        home: 'Nantes', away: 'OL',
        homeScore: 1, awayScore: 2,
        date: '1 fév 2026', time: '15h00',
        status: 'gratuit', thumb: 'images/Endrick.jpg',
    },
    {
        id: 'UEL-PL-J8', competition: 'uel', compLabel: 'UEFA Europa League · Phase de ligue J8',
        home: 'PSV Eindhoven', away: 'OL',
        homeScore: 1, awayScore: 1,
        date: '28 janv 2026', time: '21h00',
        status: 'gratuit', thumb: 'images/Joueurs.jpg',
    },
    {
        id: 'L1-J19', competition: 'ligue1', compLabel: 'Ligue 1 · J19',
        home: 'OL', away: 'Lens',
        homeScore: 2, awayScore: 1,
        date: '25 janv 2026', time: '20h45',
        status: 'gratuit', thumb: 'images/Niakhate.jpg',
    },
    {
        id: 'UEL-PL-J7', competition: 'uel', compLabel: 'UEFA Europa League · Phase de ligue J7',
        home: 'OL', away: 'Ajax',
        homeScore: 3, awayScore: 1,
        date: '21 janv 2026', time: '21h00',
        status: 'gratuit', thumb: 'images/Endrick.jpg',
    },
    {
        id: 'L1-J18', competition: 'ligue1', compLabel: 'Ligue 1 · J18',
        home: 'PSG', away: 'OL',
        homeScore: 3, awayScore: 1,
        date: '18 janv 2026', time: '21h00',
        status: 'gratuit', thumb: 'images/Hamdani.jpg',
    },
    {
        id: 'L1-J17', competition: 'ligue1', compLabel: 'Ligue 1 · J17',
        home: 'OL', away: 'Le Havre',
        homeScore: 2, awayScore: 0,
        date: '11 janv 2026', time: '15h00',
        status: 'gratuit', thumb: 'images/OL-feminin.jpg',
    },
    {
        id: 'CDF-8E', competition: 'cdf', compLabel: 'Coupe de France · 8e de finale',
        home: 'OL', away: 'Caen',
        homeScore: 3, awayScore: 0,
        date: '7 janv 2026', time: '18h00',
        status: 'gratuit', thumb: 'images/Wendy.jpg',
    },
    {
        id: 'L1-J16', competition: 'ligue1', compLabel: 'Ligue 1 · J16',
        home: 'Angers', away: 'OL',
        homeScore: 0, awayScore: 1,
        date: '21 déc 2025', time: '17h00',
        status: 'gratuit', thumb: 'images/Niakhate.jpg',
    },
    {
        id: 'L1-J15', competition: 'ligue1', compLabel: 'Ligue 1 · J15',
        home: 'OL', away: 'Auxerre',
        homeScore: 1, awayScore: 1,
        date: '14 déc 2025', time: '15h00',
        status: 'gratuit', thumb: 'images/Endrick.jpg',
    },
    {
        id: 'UEL-PL-J6', competition: 'uel', compLabel: 'UEFA Europa League · Phase de ligue J6',
        home: 'Galatasaray', away: 'OL',
        homeScore: 0, awayScore: 2,
        date: '10 déc 2025', time: '21h00',
        status: 'gratuit', thumb: 'images/Joueurs.jpg',
    },
    {
        id: 'L1-J14', competition: 'ligue1', compLabel: 'Ligue 1 · J14',
        home: 'Saint-Étienne', away: 'OL',
        homeScore: 0, awayScore: 2,
        date: '7 déc 2025', time: '20h45',
        status: 'gratuit', thumb: 'images/Hamdani.jpg',
    },
    {
        id: 'L1-J13', competition: 'ligue1', compLabel: 'Ligue 1 · J13',
        home: 'OL', away: 'Strasbourg',
        homeScore: 2, awayScore: 1,
        date: '30 nov 2025', time: '20h45',
        status: 'gratuit', thumb: 'images/OL-feminin.jpg',
    },
    {
        id: 'UEL-PL-J5', competition: 'uel', compLabel: 'UEFA Europa League · Phase de ligue J5',
        home: 'OL', away: 'Fenerbahçe',
        homeScore: 1, awayScore: 1,
        date: '26 nov 2025', time: '21h00',
        status: 'gratuit', thumb: 'images/Endrick.jpg',
    },
    {
        id: 'L1-J12', competition: 'ligue1', compLabel: 'Ligue 1 · J12',
        home: 'Toulouse', away: 'OL',
        homeScore: 1, awayScore: 3,
        date: '23 nov 2025', time: '17h05',
        status: 'gratuit', thumb: 'images/Niakhate.jpg',
    },
    {
        id: 'L1-J11', competition: 'ligue1', compLabel: 'Ligue 1 · J11',
        home: 'OL', away: 'Rennes',
        homeScore: 1, awayScore: 2,
        date: '9 nov 2025', time: '20h45',
        status: 'gratuit', thumb: 'images/Hamdani.jpg',
    },
    {
        id: 'UEL-PL-J4', competition: 'uel', compLabel: 'UEFA Europa League · Phase de ligue J4',
        home: 'Rangers', away: 'OL',
        homeScore: 0, awayScore: 1,
        date: '5 nov 2025', time: '21h00',
        status: 'gratuit', thumb: 'images/Joueurs.jpg',
    },
    {
        id: 'L1-J10', competition: 'ligue1', compLabel: 'Ligue 1 · J10',
        home: 'Nice', away: 'OL',
        homeScore: 0, awayScore: 0,
        date: '2 nov 2025', time: '15h00',
        status: 'gratuit', thumb: 'images/OL-feminin.jpg',
    },
    {
        id: 'UEL-PL-J3', competition: 'uel', compLabel: 'UEFA Europa League · Phase de ligue J3',
        home: 'OL', away: 'Eintracht Frankfurt',
        homeScore: 2, awayScore: 2,
        date: '22 oct 2025', time: '21h00',
        status: 'gratuit', thumb: 'images/Endrick.jpg',
    },
    {
        id: 'L1-J9', competition: 'ligue1', compLabel: 'Ligue 1 · J9',
        home: 'OL', away: 'Nantes',
        homeScore: 2, awayScore: 0,
        date: '26 oct 2025', time: '15h00',
        status: 'gratuit', thumb: 'images/Niakhate.jpg',
    },
    {
        id: 'L1-J8', competition: 'ligue1', compLabel: 'Ligue 1 · J8',
        home: 'Lens', away: 'OL',
        homeScore: 1, awayScore: 1,
        date: '19 oct 2025', time: '20h45',
        status: 'gratuit', thumb: 'images/Hamdani.jpg',
    },
    {
        id: 'UEL-PL-J2', competition: 'uel', compLabel: 'UEFA Europa League · Phase de ligue J2',
        home: 'Anderlecht', away: 'OL',
        homeScore: 1, awayScore: 2,
        date: '1 oct 2025', time: '21h00',
        status: 'gratuit', thumb: 'images/Joueurs.jpg',
    },
    {
        id: 'L1-J7', competition: 'ligue1', compLabel: 'Ligue 1 · J7',
        home: 'OL', away: 'PSG',
        homeScore: 0, awayScore: 1,
        date: '5 oct 2025', time: '20h45',
        status: 'gratuit', thumb: 'images/OL-feminin.jpg',
    },
    {
        id: 'UEL-PL-J1', competition: 'uel', compLabel: 'UEFA Europa League · Phase de ligue J1',
        home: 'OL', away: 'Porto',
        homeScore: 1, awayScore: 0,
        date: '17 sept 2025', time: '21h00',
        status: 'gratuit', thumb: 'images/Endrick.jpg',
    },
    {
        id: 'L1-J6', competition: 'ligue1', compLabel: 'Ligue 1 · J6',
        home: 'Marseille', away: 'OL',
        homeScore: 1, awayScore: 2,
        date: '28 sept 2025', time: '20h45',
        status: 'gratuit', thumb: 'images/Niakhate.jpg',
    },
    {
        id: 'L1-J5', competition: 'ligue1', compLabel: 'Ligue 1 · J5',
        home: 'OL', away: 'Montpellier',
        homeScore: 3, awayScore: 0,
        date: '21 sept 2025', time: '15h00',
        status: 'gratuit', thumb: 'images/Hamdani.jpg',
    },
    {
        id: 'L1-J4', competition: 'ligue1', compLabel: 'Ligue 1 · J4',
        home: 'Lille', away: 'OL',
        homeScore: 2, awayScore: 2,
        date: '14 sept 2025', time: '17h05',
        status: 'gratuit', thumb: 'images/Joueurs.jpg',
    },
    {
        id: 'L1-J3', competition: 'ligue1', compLabel: 'Ligue 1 · J3',
        home: 'OL', away: 'Monaco',
        homeScore: 1, awayScore: 1,
        date: '1 sept 2025', time: '20h45',
        status: 'gratuit', thumb: 'images/Endrick.jpg',
    },
    {
        id: 'L1-J2', competition: 'ligue1', compLabel: 'Ligue 1 · J2',
        home: 'Reims', away: 'OL',
        homeScore: 0, awayScore: 3,
        date: '25 août 2025', time: '15h00',
        status: 'gratuit', thumb: 'images/Niakhate.jpg',
    },
    {
        id: 'L1-J1', competition: 'ligue1', compLabel: 'Ligue 1 · J1',
        home: 'OL', away: 'Brest',
        homeScore: 2, awayScore: 1,
        date: '17 août 2025', time: '20h45',
        status: 'gratuit', thumb: 'images/Hamdani.jpg',
    },
];

// ─── State ────────────────────────────────────────────────────────────
var activeFilter = 'all';

// ─── SVG lock icon ────────────────────────────────────────────────────
var LOCK_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>';

// ─── Render a single match card ───────────────────────────────────────
function renderMatchCard(match) {
    var isOLHome = match.home === 'OL';

    var statusBadge;
    if (match.status === 'live') {
        statusBadge = '<div class="match-status-badge badge-live"><span class="live-dot"></span>EN DIRECT</div>';
    } else if (match.status === 'gratuit') {
        statusBadge = '<div class="match-status-badge badge-gratuit">GRATUIT</div>';
    } else {
        statusBadge = '<div class="match-status-badge badge-payant">' + LOCK_SVG + 'Premium</div>';
    }

    var scoreContent;
    if (match.status === 'live') {
        scoreContent = '<span class="live-dot-inline" aria-label="En direct"></span>';
    } else {
        scoreContent = match.homeScore + ' – ' + match.awayScore;
    }

    return [
        '<div class="match-card" data-competition="' + match.competition + '" data-status="' + match.status + '">',
            '<div class="match-thumb">',
                '<img src="' + match.thumb + '" alt="' + match.home + ' vs ' + match.away + '" loading="lazy">',
                '<div class="match-thumb-overlay"></div>',
                statusBadge,
            '</div>',
            '<div class="match-body">',
                '<div class="match-comp comp-' + match.competition + '">' + match.compLabel + '</div>',
                '<div class="match-teams">',
                    '<span class="team-name' + (isOLHome ? ' team-ol' : '') + '">' + match.home + '</span>',
                    '<span class="match-score' + (match.status === 'live' ? ' score-live' : '') + '">' + scoreContent + '</span>',
                    '<span class="team-name' + (!isOLHome ? ' team-ol' : '') + '">' + match.away + '</span>',
                '</div>',
                '<div class="match-date">' + match.date + ' · ' + match.time + '</div>',
            '</div>',
        '</div>',
    ].join('');
}

// ─── Render filtered match grid ───────────────────────────────────────
function renderMatches() {
    var grid = document.getElementById('matches-grid');
    if (!grid) return;

    var filtered = activeFilter === 'all'
        ? MATCHES
        : MATCHES.filter(function (m) { return m.competition === activeFilter; });

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="matches-empty">Aucun match disponible pour cette compétition.</p>';
        return;
    }

    grid.innerHTML = filtered.map(renderMatchCard).join('');

    // Click handlers
    grid.querySelectorAll('.match-card').forEach(function (card) {
        card.addEventListener('click', function () {
            if (this.dataset.status === 'payant') {
                window.location.href = ROUTES.subscribe;
            } else {
                window.location.href = ROUTES.player;
            }
        });
    });
}

// ─── Live Banner ──────────────────────────────────────────────────────
function initLiveBanner() {
    var liveMatch = null;
    for (var i = 0; i < MATCHES.length; i++) {
        if (MATCHES[i].status === 'live') { liveMatch = MATCHES[i]; break; }
    }

    var banner = document.getElementById('live-banner');
    if (!banner || !liveMatch) return;

    document.getElementById('live-banner-teams').textContent =
        liveMatch.home + ' vs ' + liveMatch.away;
    document.getElementById('live-banner-comp').textContent =
        liveMatch.compLabel + ' · ' + liveMatch.time;

    banner.style.display = 'flex';

    banner.addEventListener('click', function () {
        window.location.href = ROUTES.player;
    });
}

// ─── Filter Tabs ──────────────────────────────────────────────────────
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            activeFilter = this.dataset.filter;
            document.querySelectorAll('.filter-btn').forEach(function (b) {
                b.classList.toggle('active', b.dataset.filter === activeFilter);
            });
            renderMatches();
        });
    });
}

// ─── Init ─────────────────────────────────────────────────────────────
function initMatchs() {
    initLiveBanner();
    initFilters();
    renderMatches();

    // Navbar buttons
    document.querySelectorAll('.nav-subscribe').forEach(function (btn) {
        btn.addEventListener('click', function () {
            window.location.href = ROUTES.subscribe;
        });
    });
}

document.addEventListener('DOMContentLoaded', initMatchs);
