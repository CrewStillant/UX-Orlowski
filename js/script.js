// =====================================================================
//  OLPLAY — Main JavaScript
//  Structure:
//    1. Config
//    2. Splash — particles
//    3. Splash — loading bar
//    4. Splash — transition trigger
//    5. Main page — HTML template
//    6. Main page — injected CSS
//    7. Main page — interactions
//    8. Init
// =====================================================================


// ─── 1. Config ────────────────────────────────────────────────────────
const COLORS = {
    primary:   '#006AA3',
    secondary: '#3C438A',
    red:       '#E5202E',
    white:     '#ffffff',
};

const ROUTES = {
    player: 'player.html',
};


// ─── 2. Splash — Particles ────────────────────────────────────────────
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


// ─── 3. Splash — Loading bar ──────────────────────────────────────────
function hideLoadingBar() {
    const bar = document.querySelector('.loading-bar');
    if (!bar) return;
    setTimeout(() => {
        bar.style.opacity    = '0';
        bar.style.transition = 'opacity 0.5s';
    }, 4000);
}


// ─── 4. Splash — Transition trigger ──────────────────────────────────
function transitionToMainContent() {
    const logo = document.querySelector('.olplay-logo');
    if (!logo) return;

    logo.addEventListener('click', function () {
        const tagline = document.querySelector('.tagline');
        this.classList.add('zooming');
        if (tagline) tagline.style.opacity = '0';
        setTimeout(showMainContent, 800);
    });
}


// ─── 5. Main page — HTML template ────────────────────────────────────
function getMainHTML() {
    return `
        <nav class="navbar">
            <div class="nav-logo">
                <svg viewBox="0 0 4395.89 861.47" xmlns="http://www.w3.org/2000/svg">
                    <path class="logo-path" fill="#E5202E" fill-rule="evenodd" d="m455.69,0C198.49,0,0,174.79,0,430.73s198.49,430.74,455.69,430.74,455.69-174.79,455.69-430.74S712.88,0,455.69,0Zm0,639.22c-121.12,0-199.75-92.4-199.75-208.49s78.63-208.48,199.75-208.48,199.75,92.39,199.75,208.48-78.63,208.49-199.75,208.49ZM4147.18,13.76l-101.31,274.92-101.35-274.92h-248.57l225.63,612-81.39,220.68h249.6L4395.89,13.76h-248.71Zm-3208.34-.06h252.17v613.07h315.9v219.67h-568.07V13.7Zm1051.15,0h-444.44v832.74h252.17v-262.16h192.27c194.78,0,299.62-129.85,299.62-284.66S2184.77,13.7,1989.99,13.7Zm-32.43,350.84h-159.84v-131.11h159.84c42.43,0,76.18,21.24,76.18,66.18s-33.69,64.93-76.18,64.93Zm920.11,478.44L3183.51,13.7h317.09l307.23,832.74h-285.9l-29.98-97.36h-299.63l-29.98,97.36h-852.67V13.7h252.17v613.01h315.83v216.28Zm464.42-582.08l-82.4,268.44h164.8l-82.4-268.44Z"/>
                </svg>
            </div>
            <button class="hamburger" aria-label="Menu">
                <span></span><span></span><span></span>
            </button>
            <div class="nav-menu">
                <ul class="nav-sections">
                    <li class="nav-item"><a href="#">Matchs</a></li>
                    <li class="nav-item"><a href="#">Résumés</a></li>
                    <li class="nav-item"><a href="#">Grand Format</a></li>
                    <li class="nav-item nav-live-item"><a href="#" class="nav-live-link">LE LIVE</a></li>
                    <li class="nav-item"><a href="#">Avant match</a></li>
                    <li class="nav-item"><a href="#">Après match</a></li>
                    <li class="nav-item"><a href="#">Coulisses</a></li>
                </ul>
                <div class="nav-right">
                    <button class="nav-subscribe">S'abonner</button>
                    <button class="nav-signin">Se connecter</button>
                </div>
            </div>
        </nav>

        <!-- Hero -->
        <div class="main-content">
            <div class="video-section">
                <div class="video-container">
                    <div class="video-placeholder" role="button" aria-label="Regarder OL vs Paris FC">
                        <img src="images/Joueurs.jpg" alt="OL vs Paris FC" class="video-bg-img">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" opacity="0.6">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    <div class="video-info">
                        <h3>OL vs Paris FC</h3>
                        <p class="match-date">Ligue 1 · 8 mars 2026</p>
                    </div>
                </div>
            </div>
            <div class="content-section">
                <h1>Bienvenue sur OLPLAY</h1>
                <p>Votre accès exclusif aux meilleures actions de l'Olympique Lyonnais</p>
                <button class="watch-button">REGARDER LE MATCH</button>
            </div>
        </div>

        <!-- Categories -->
        <div class="categories-section">
            <h2>Explorez nos contenus</h2>
            <div class="categories-grid">
                <div class="category-card" data-category="matchs">
                    <div class="category-image">
                        <img src="images/Niakhate.jpg" alt="Matchs complets" class="category-img">
                        <div class="category-label">
                            <h3>Matchs complets</h3>
                            <p>Les intégrales des rencontres</p>
                        </div>
                    </div>
                </div>
                <div class="category-card" data-category="resumes">
                    <div class="category-image">
                        <img src="images/Endrick.jpg" alt="Résumés" class="category-img">
                        <div class="category-label">
                            <h3>Résumés</h3>
                            <p>Les meilleurs moments en 5 min</p>
                        </div>
                    </div>
                </div>
                <div class="category-card" data-category="grandformat">
                    <div class="category-image">
                        <img src="images/Joueurs.jpg" alt="Grand Format" class="category-img">
                        <div class="category-label">
                            <h3>Grand Format</h3>
                            <p>Documentaires exclusifs</p>
                        </div>
                    </div>
                </div>
                <div class="category-card" data-category="avantmatch">
                    <div class="category-image">
                        <img src="images/Hamdani.jpg" alt="Avant match" class="category-img">
                        <div class="category-label">
                            <h3>Avant match</h3>
                            <p>Conférences et préparation</p>
                        </div>
                    </div>
                </div>
                <div class="category-card" data-category="apres">
                    <div class="category-image">
                        <img src="images/Wendy.jpg" alt="Après match" class="category-img">
                        <div class="category-label">
                            <h3>Après match</h3>
                            <p>Réactions et analyses</p>
                        </div>
                    </div>
                </div>
                <div class="category-card" data-category="coulisses">
                    <div class="category-image">
                        <img src="images/OL-feminin.jpg" alt="Coulisses" class="category-img">
                        <div class="category-label">
                            <h3>Coulisses</h3>
                            <p>Entraînements et backstage</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Roster -->
        <div class="roster-section">
            <h2>Nos effectifs</h2>
            <div class="roster-grid">
                <div class="team-card" data-team="masculins">
                    <div class="team-image">
                        <img src="images/Cercle%20masculin.jpg" alt="Masculins">
                    </div>
                    <div class="team-info"><h3>Masculins</h3></div>
                </div>
                <div class="team-card" data-team="feminines">
                    <div class="team-image">
                        <img src="images/Cercle%20f%C3%A9minin.jpg" alt="Féminines">
                    </div>
                    <div class="team-info"><h3>Féminines</h3></div>
                </div>
                <div class="team-card" data-team="u19">
                    <div class="team-image">
                        <img src="images/Cercle%20U19.jpg" alt="U19">
                    </div>
                    <div class="team-info"><h3>U19</h3></div>
                </div>
                <div class="team-card" data-team="u17">
                    <div class="team-image">
                        <img src="images/Cercle%20U17.jpg" alt="U17">
                    </div>
                    <div class="team-info"><h3>U17</h3></div>
                </div>
                <div class="team-card" data-team="reserve">
                    <div class="team-image">
                        <img src="images/Cercle%20R%C3%A9serve.jpg" alt="Réserve N3">
                    </div>
                    <div class="team-info"><h3>Réserve N3</h3></div>
                </div>
            </div>
        </div>
    `;
}


// ─── 6. Main page — injected CSS ─────────────────────────────────────
function getMainCSS() {
    return `
        /* ── Base ──────────────────────────────────────────────── */
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #000000 0%, #1a1a2e 100%);
            color: #ffffff;
            font-family: 'Montserrat', sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            overflow: auto;
        }

        /* ── Animations ────────────────────────────────────────── */
        @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to   { transform: translateY(0);     opacity: 1; }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to   { opacity: 1; transform: translateX(0);     }
        }
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes livePulse {
            0%, 100% { opacity: 1;   transform: scale(1);   box-shadow: 0 0 0 0   rgba(229, 32, 46, 0.6); }
            50%       { opacity: 0.7; transform: scale(1.3); box-shadow: 0 0 0 4px rgba(229, 32, 46, 0);   }
        }
        @keyframes playerFadeIn {
            from { opacity: 0; transform: translateY(20px) scale(0.9); }
            to   { opacity: 1; transform: translateY(0)    scale(1);   }
        }

        /* ── Navbar ────────────────────────────────────────────── */
        .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 3rem;
            background: rgba(0, 0, 0, 0.9);
            border-bottom: 2px solid #E5202E;
            position: sticky;
            top: 0;
            z-index: 100;
            width: 100%;
            max-width: 100vw;
            animation: slideDown 0.5s ease-out;
        }

        .nav-logo { flex-shrink: 0; width: 120px; }
        .nav-logo svg { width: 100%; height: auto; }
        .nav-logo svg .logo-path { fill: #E5202E; }

        .hamburger {
            display: none;
            flex-direction: column;
            gap: 5px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
            z-index: 101;
        }
        .hamburger span {
            width: 25px;
            height: 3px;
            background: #E5202E;
            border-radius: 3px;
            transition: all 0.3s ease;
        }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg)  translate(7px, 7px);  }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }

        .nav-menu {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: space-between;
        }

        .nav-sections {
            display: flex;
            list-style: none;
            gap: 2rem;
            margin: 0;
            padding: 0;
            flex-wrap: wrap;
            justify-content: center;
            flex: 1;
        }

        .nav-item a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            display: block;
            padding: 0.5rem;
            white-space: nowrap;
            transition: color 0.3s, transform 0.3s;
        }
        .nav-item a:hover { color: #E5202E; transform: translateY(-2px); }

        .nav-live-link {
            color: #E5202E !important;
            font-weight: 700 !important;
            font-size: 0.85rem !important;
            display: flex !important;
            align-items: center;
            gap: 0.5rem;
            letter-spacing: 1px;
        }
        .nav-live-link::before {
            content: '';
            width: 8px; height: 8px;
            background: #E5202E;
            border-radius: 50%;
            display: inline-block;
            flex-shrink: 0;
            animation: livePulse 1.5s ease-in-out infinite;
        }
        .nav-live-link:hover { color: #ff3344 !important; transform: translateY(-2px); }

        .nav-right { display: flex; gap: 1.5rem; align-items: center; flex-shrink: 0; }

        .nav-subscribe {
            background: #006AA3;
            color: white;
            border: none;
            padding: 0.6rem 1.2rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 0.85rem;
            letter-spacing: 0.5px;
            cursor: pointer;
            transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .nav-subscribe:hover {
            background: #0085cc;
            transform: scale(1.05);
            box-shadow: 0 0 14px rgba(0, 106, 163, 0.6);
        }

        .nav-signin {
            background-color: #E5202E;
            background: #E5202E;
            color: white;
            border: none;
            padding: 0.6rem 1.2rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 0.85rem;
            letter-spacing: 0.5px;
            cursor: pointer;
            transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .nav-signin:hover {
            background-color: #ff3344;
            background: #ff3344;
            transform: scale(1.05);
            box-shadow: 0 0 14px rgba(229, 32, 46, 0.6);
        }

        /* ── Hero ──────────────────────────────────────────────── */
        .main-content {
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: stretch;
            padding: 3rem 2rem;
            gap: 3rem;
            animation: fadeIn 0.8s ease-out 0.3s both;
        }

        .video-section {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .video-container {
            width: 100%;
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 106, 163, 0.45), 0 0 0 2px rgba(0, 106, 163, 0.3);
            animation: slideInLeft 0.8s ease-out 0.5s both;
            cursor: pointer;
        }

        .video-placeholder {
            width: 100%;
            aspect-ratio: 16/9;
            background: linear-gradient(135deg, #006AA3, #3C438A);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        .video-placeholder::after {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.3);
            transition: background 0.3s;
        }
        .video-placeholder:hover::after { background: rgba(0, 0, 0, 0.5); }

        .video-bg-img {
            position: absolute;
            inset: 0;
            width: 100%; height: 100%;
            object-fit: cover;
            z-index: 1;
        }
        .video-placeholder svg {
            position: relative;
            z-index: 3;
            width: 80px; height: 80px;
            transition: transform 0.3s;
        }
        .video-placeholder:hover svg { transform: scale(1.15); }

        .video-info {
            padding: 1.5rem;
            background: rgba(0, 0, 0, 0.8);
            border-top: 2px solid #006AA3;
        }
        .video-info h3 {
            margin: 0 0 0.5rem;
            font-size: 1.3rem;
            font-family: 'Oswald', sans-serif;
            color: white;
        }
        .match-date { margin: 0; font-size: 0.9rem; color: rgba(255, 255, 255, 0.7); }

        .content-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            animation: slideInRight 0.8s ease-out 0.5s both;
        }
        .main-content h1 {
            font-family: 'Oswald', sans-serif;
            font-size: 3rem;
            margin: 0 0 1rem;
            color: white;
        }
        .main-content > .content-section > p {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.7);
            margin: 0 0 2rem;
        }

        .watch-button {
            background: #E5202E;
            color: white;
            border: none;
            padding: 0.9rem 2rem;
            font-family: 'Oswald', sans-serif;
            font-weight: 600;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            align-self: flex-start;
            transition: background 0.3s, transform 0.3s;
        }
        .watch-button:hover { background: #ff3344; transform: translateY(-2px); }

        /* ── Categories ────────────────────────────────────────── */
        .categories-section {
            padding: 4rem 2rem;
            background: rgba(0, 0, 0, 0.5);
            border-top: 2px solid rgba(0, 106, 163, 0.5);
            animation: fadeIn 0.8s ease-out 0.6s both;
        }
        .categories-section h2 {
            font-family: 'Oswald', sans-serif;
            font-size: 2.5rem;
            text-align: center;
            margin: 0 0 3rem;
            color: white;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .categories-grid {
            display: flex;
            gap: 2rem;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 1rem 0;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
        }
        .categories-grid::-webkit-scrollbar       { height: 8px; }
        .categories-grid::-webkit-scrollbar-track  { background: rgba(0, 106, 163, 0.15); border-radius: 10px; }
        .categories-grid::-webkit-scrollbar-thumb  { background: rgba(0, 106, 163, 0.6);  border-radius: 10px; transition: background 0.3s; }
        .categories-grid::-webkit-scrollbar-thumb:hover { background: #006AA3; }

        .category-card {
            flex: 0 0 280px;
            min-width: 280px;
            background: transparent;
            border: none;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            height: 100%;
            transition: all 0.3s ease;
        }
        .category-card:hover { transform: translateY(-8px); box-shadow: 0 12px 40px rgba(0, 106, 163, 0.4); }

        .category-image {
            flex: 1;
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            border: 2px solid rgba(0, 106, 163, 0.6);
            box-shadow: 0 0 10px rgba(0, 106, 163, 0.25);
            min-height: 420px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
            transition: all 0.3s ease;
        }
        .category-image::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
            z-index: 2;
            pointer-events: none;
            transition: background 0.3s;
        }
        .category-card:hover .category-image::before {
            background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
        }
        .category-card:hover .category-image {
            border-color: #006AA3;
            box-shadow: 0 0 20px rgba(0, 106, 163, 0.75), 0 0 45px rgba(0, 106, 163, 0.35);
        }

        .category-img {
            position: absolute;
            inset: 0;
            width: 100%; height: 100%;
            object-fit: cover;
            z-index: 1;
            transition: transform 0.4s ease;
        }
        .category-card:hover .category-img { transform: scale(1.08); }

        .category-label {
            position: relative;
            z-index: 3;
            padding: 1.2rem 1rem 1rem;
            width: 100%;
            text-align: left;
        }
        .category-label h3 {
            font-family: 'Oswald', sans-serif;
            font-size: 1.1rem;
            color: white;
            margin: 0 0 0.3rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .category-label p { font-size: 0.78rem; color: rgba(255, 255, 255, 0.8); margin: 0; }
        .category-card:hover .category-label p { color: rgba(255, 255, 255, 1); }

        /* Active state — red highlight (unused on landing, kept for future use) */
        .category-card.active .category-image {
            border-color: #E5202E;
            box-shadow: 0 0 20px rgba(229, 32, 46, 0.55), 0 0 45px rgba(229, 32, 46, 0.25);
        }

        /* ── Roster ────────────────────────────────────────────── */
        .roster-section {
            padding: 4rem 2rem;
            background: rgba(0, 0, 0, 0.3);
            border-top: 2px solid rgba(0, 106, 163, 0.5);
            animation: fadeIn 0.8s ease-out 0.7s both;
        }
        .roster-section h2 {
            font-family: 'Oswald', sans-serif;
            font-size: 2.5rem;
            text-align: center;
            margin: 0 0 3rem;
            color: white;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .roster-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 3rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .team-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: playerFadeIn 0.6s ease-out backwards;
        }
        .team-card:nth-child(1) { animation-delay: 0.1s; }
        .team-card:nth-child(2) { animation-delay: 0.2s; }
        .team-card:nth-child(3) { animation-delay: 0.3s; }
        .team-card:nth-child(4) { animation-delay: 0.4s; }
        .team-card:nth-child(5) { animation-delay: 0.5s; }

        .team-image {
            width: 320px; height: 320px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(0, 106, 163, 0.5), rgba(60, 67, 138, 0.5));
            border: 4px solid rgba(0, 106, 163, 0.8);
            margin-bottom: 2rem;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6), 0 0 12px rgba(0, 106, 163, 0.3);
        }
        .team-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }

        .team-card:hover .team-image {
            border-color: #006AA3;
            transform: scale(1.12);
            box-shadow: 0 12px 50px rgba(0, 106, 163, 0.55), 0 0 30px rgba(0, 106, 163, 0.4);
        }

        .team-card h3 {
            font-family: 'Oswald', sans-serif;
            font-size: 1.5rem;
            margin: 0;
            color: white;
            font-weight: 700;
            letter-spacing: 1px;
            transition: color 0.3s;
        }
        .team-card:hover h3 { color: #E5202E; }

        /* ── Responsive (≤ 768px) ──────────────────────────────── */
        @media (max-width: 768px) {
            .navbar { padding: 0.75rem 1rem; }
            .nav-logo { width: 80px; }
            .hamburger { display: flex; }

            .nav-menu {
                position: fixed;
                top: 60px; left: 0; right: 0;
                background: rgba(0, 0, 0, 0.98);
                flex-direction: column;
                align-items: stretch;
                padding: 0;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.4s ease, padding 0.4s ease;
                border-bottom: 0 solid #E5202E;
            }
            .nav-menu.active { max-height: 500px; padding: 1.5rem 1rem; border-bottom: 2px solid #E5202E; }

            .nav-sections { flex-direction: column; gap: 0; margin: 0 0 1.5rem; width: 100%; }
            .nav-item { width: 100%; border-bottom: 1px solid rgba(229, 32, 46, 0.2); }
            .nav-item:last-child { border-bottom: none; }
            .nav-item a { font-size: 1rem; padding: 1rem; width: 100%; }

            .nav-right { flex-direction: column; gap: 1rem; width: 100%; }
            .nav-subscribe, .nav-signin { width: 100%; padding: 0.8rem 1.2rem; font-size: 0.9rem; }

            .main-content { flex-direction: column; padding: 1.5rem 1rem; gap: 1.5rem; }
            .content-section { align-items: flex-start; }
            .main-content h1 { font-size: 2rem; }
            .main-content > .content-section > p { font-size: 1rem; }
            .video-placeholder svg { width: 60px; height: 60px; }
            .watch-button { width: 100%; text-align: center; }

            .categories-section { padding: 2rem 1rem; }
            .categories-section h2 { font-size: 1.8rem; margin-bottom: 2rem; }
            .categories-grid { gap: 1rem; }
            .category-card { flex: 0 0 150px; min-width: 150px; }
            .category-image { min-height: 200px; }

            .roster-section { padding: 2rem 1rem; }
            .roster-section h2 { font-size: 1.8rem; margin-bottom: 2rem; }
            .roster-grid { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; }
            .team-image { width: 200px; height: 200px; margin-bottom: 1rem; }
            .team-card h3 { font-size: 1.1rem; }
        }
    `;
}


// ─── 7. Main page — Interactions ─────────────────────────────────────
function initInteractions() {

    // — Hamburger menu —
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
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
    }

    // — Hero: video thumbnail click → player —
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            window.location.href = ROUTES.player;
        });
    }

    // — Hero: "REGARDER LE MATCH" button → player —
    const watchBtn = document.querySelector('.watch-button');
    if (watchBtn) {
        watchBtn.addEventListener('click', () => {
            window.location.href = ROUTES.player;
        });
    }

    // — Category cards → player —
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function () {
            window.location.href = ROUTES.player;
        });
    });

    // — Roster cards (no navigation yet, placeholder interaction) —
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('click', function () {
            const team = this.dataset.team;
            console.log('Team selected:', team);
        });
    });
}


// ─── Main page bootstrap ──────────────────────────────────────────────
function showMainContent() {
    document.body.innerHTML = getMainHTML();

    const style = document.createElement('style');
    style.textContent = getMainCSS();
    document.head.appendChild(style);

    initInteractions();
}


// ─── 8. Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    hideLoadingBar();
    transitionToMainContent();
});
