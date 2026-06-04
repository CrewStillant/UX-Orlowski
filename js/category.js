/* =====================================================================
   Category Pages — JavaScript
   Gère le rendu des vidéos et les interactions pour chaque catégorie
   ===================================================================== */

const CATEGORY_VIDEOS = {
    resumes: [
        {
            id: 'resume-1',
            title: 'OL vs Paris FC — Les temps forts',
            description: 'Les meilleurs moments du match en 5 minutes',
            duration: '5:23',
            views: '12.4K',
            status: 'gratuit',
            image: 'images/Niakhate.jpg'
        },
        {
            id: 'resume-2',
            title: 'OL vs Marseille — Résumé',
            description: 'Match de Ligue 1 — Journée 25',
            duration: '5:15',
            views: '8.9K',
            status: 'gratuit',
            image: 'images/Endrick.jpg'
        },
        {
            id: 'resume-3',
            title: 'OL vs AS Monaco — Highlights',
            description: 'Ligue 1 — Journée 24',
            duration: '5:30',
            views: '15.2K',
            status: 'gratuit',
            image: 'images/Wendy.jpg'
        },
        {
            id: 'resume-4',
            title: 'OL vs Real Madrid — Résumé UCL',
            description: 'UEFA Champions League',
            duration: '5:45',
            views: '28.5K',
            status: 'premium',
            image: 'images/Joueurs.jpg'
        },
        {
            id: 'resume-5',
            title: 'OL vs Nantes — Les temps forts',
            description: 'Coupe de France',
            duration: '5:20',
            views: '6.3K',
            status: 'gratuit',
            image: 'images/Hamdani.jpg'
        },
        {
            id: 'resume-6',
            title: 'OL vs PSG — Derby du 17 janvier',
            description: 'Ligue 1 — Journée 20',
            duration: '5:42',
            views: '31.8K',
            status: 'premium',
            image: 'images/OL-feminin.jpg'
        }
    ],
    grandformat: [
        {
            id: 'gf-1',
            title: 'Les coulisses d\'une victoire',
            description: 'Documentaire — Préparation et célébration',
            duration: '42:15',
            views: '5.2K',
            status: 'premium',
            image: 'images/Joueurs.jpg'
        },
        {
            id: 'gf-2',
            title: 'Portrait — Rayan Cherki',
            description: 'La montée en puissance du jeune talent lyonnais',
            duration: '38:20',
            views: '7.1K',
            status: 'premium',
            image: 'images/Endrick.jpg'
        },
        {
            id: 'gf-3',
            title: 'Derrière les murs du Groupama Stadium',
            description: 'Visite exclusive de notre enceinte mythique',
            duration: '35:50',
            views: '4.8K',
            status: 'premium',
            image: 'images/Niakhate.jpg'
        },
        {
            id: 'gf-4',
            title: 'Une saison en images',
            description: 'Le résumé de nos aventures 2025-2026',
            duration: '52:30',
            views: '9.3K',
            status: 'premium',
            image: 'images/Wendy.jpg'
        }
    ],
    avantmatch: [
        {
            id: 'am-1',
            title: 'Conférence de presse — 7 mars 2026',
            description: 'Préparation OL vs Paris FC — Journée 26',
            duration: '18:45',
            views: '3.2K',
            status: 'gratuit',
            image: 'images/Hamdani.jpg'
        },
        {
            id: 'am-2',
            title: 'Tactiques et stratégie',
            description: 'Analyse du plan de jeu avant le match',
            duration: '15:20',
            views: '2.8K',
            status: 'gratuit',
            image: 'images/Joueurs.jpg'
        },
        {
            id: 'am-3',
            title: 'Entraînement du mercredi',
            description: 'Sessions de préparation physique',
            duration: '22:10',
            views: '4.1K',
            status: 'gratuit',
            image: 'images/OL-feminin.jpg'
        },
        {
            id: 'am-4',
            title: 'Interview du coach',
            description: 'Objectifs et ambitions pour le match',
            duration: '12:55',
            views: '5.6K',
            status: 'premium',
            image: 'images/Niakhate.jpg'
        },
        {
            id: 'am-5',
            title: 'État physique de l\'équipe',
            description: 'Point médical avant le match',
            duration: '10:30',
            views: '2.3K',
            status: 'gratuit',
            image: 'images/Wendy.jpg'
        }
    ],
    apres: [
        {
            id: 'ap-1',
            title: 'Réactions post-match — OL vs Paris FC',
            description: 'Interview des joueurs et du coach',
            duration: '24:15',
            views: '6.8K',
            status: 'gratuit',
            image: 'images/Endrick.jpg'
        },
        {
            id: 'ap-2',
            title: 'Analyse technique',
            description: 'Décortication des actions décisives',
            duration: '18:40',
            views: '4.2K',
            status: 'gratuit',
            image: 'images/Niakhate.jpg'
        },
        {
            id: 'ap-3',
            title: 'Point médical après match',
            description: 'Bilan des blessures et fatigues',
            duration: '12:20',
            views: '2.5K',
            status: 'gratuit',
            image: 'images/OL-feminin.jpg'
        },
        {
            id: 'ap-4',
            title: 'Les stats qui parlent',
            description: 'Analyse détaillée des statistiques de jeu',
            duration: '15:50',
            views: '3.9K',
            status: 'premium',
            image: 'images/Joueurs.jpg'
        },
        {
            id: 'ap-5',
            title: 'Célébrations au Groupama Stadium',
            description: 'L\'euphorie après la victoire',
            duration: '8:30',
            views: '7.3K',
            status: 'gratuit',
            image: 'images/Wendy.jpg'
        }
    ],
    coulisses: [
        {
            id: 'coul-1',
            title: 'Entraînement intensif',
            description: 'Une séance de travail au cœur du terrain',
            duration: '28:15',
            views: '5.4K',
            status: 'gratuit',
            image: 'images/OL-feminin.jpg'
        },
        {
            id: 'coul-2',
            title: 'Life OL',
            description: 'La vie quotidienne des joueurs au centre de formation',
            duration: '35:45',
            views: '8.7K',
            status: 'gratuit',
            image: 'images/Joueurs.jpg'
        },
        {
            id: 'coul-3',
            title: 'Backstage — Jour de match',
            description: 'Les préparatifs en coulisse avant le coup d\'envoi',
            duration: '22:30',
            views: '4.1K',
            status: 'gratuit',
            image: 'images/Wendy.jpg'
        },
        {
            id: 'coul-4',
            title: 'Vestiaire en direct',
            description: 'Les moments intimes avant le match',
            duration: '19:20',
            views: '6.2K',
            status: 'premium',
            image: 'images/Niakhate.jpg'
        },
        {
            id: 'coul-5',
            title: 'Soins et récupération',
            description: 'Les protocoles de préparation physique',
            duration: '25:10',
            views: '3.8K',
            status: 'gratuit',
            image: 'images/Endrick.jpg'
        },
        {
            id: 'coul-6',
            title: 'Féminin — Une journée avec les joueuses',
            description: 'Coulisses de l\'équipe féminine',
            duration: '31:55',
            views: '7.5K',
            status: 'gratuit',
            image: 'images/Hamdani.jpg'
        }
    ]
};

function getCategoryFromUrl() {
    const filename = window.location.pathname.split('/').pop().replace('.html', '');
    const categoryMap = {
        'resumes': 'resumes',
        'grandformat': 'grandformat',
        'avantmatch': 'avantmatch',
        'apres': 'apres',
        'coulisses': 'coulisses'
    };
    return categoryMap[filename] || 'resumes';
}

function renderCategoryVideos() {
    const category = getCategoryFromUrl();
    const videos = CATEGORY_VIDEOS[category] || [];
    const grid = document.getElementById('contentGrid');

    if (!grid) return;

    if (videos.length === 0) {
        grid.innerHTML = '<div class="empty-state"><p>Aucune vidéo disponible pour le moment</p></div>';
        return;
    }

    grid.innerHTML = videos.map(video => `
        <div class="video-card" data-video-id="${video.id}">
            <div class="video-thumbnail">
                <img src="${video.image || 'images/Joueurs.jpg'}" alt="${video.title}">
                <div class="play-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
                <div class="video-meta">
                    <div>
                        <span>${video.duration}</span>
                        <span> • </span>
                        <span>${video.views}</span>
                    </div>
                    <span class="video-status status-${video.status}">
                        ${video.status === 'gratuit' ? 'GRATUIT' : 'PREMIUM'}
                    </span>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const video = videos.find(v => v.id === card.dataset.videoId);
            if (video) {
                if (video.status === 'premium') {
                    window.location.href = ROUTES.subscribe;
                } else {
                    window.location.href = ROUTES.player;
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', renderCategoryVideos);
