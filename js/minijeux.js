// =====================================================================
//  OLPLAY — Mini Jeux: OL Dream Team
//  Build your historic OL XI in 4-3-3 and simulate Ligue 1 2026-27
// =====================================================================

(function () {
    'use strict';

    // ─── OL Historic Players Database ──────────────────────────────
    const OL_PLAYERS = {
        GK: [
            { name: 'Grégory Coupet', years: '1997–2008', rating: 90 },
            { name: 'Rémy Vercoutre', years: '2001–2013', rating: 76 },
            { name: 'Anthony Lopes', years: '2012–présent', rating: 83 },
            { name: 'Hugo Lloris', years: '2008–2012', rating: 88 },
            { name: 'Joël Bats', years: '1981–1985', rating: 78 },
            { name: 'Gérard Bernardet', years: '1971–1980', rating: 72 },
            { name: 'Pascal Olmeta', years: '1985–1988', rating: 74 },
            { name: 'Dominique Dropsy', years: '1980–1986', rating: 73 },
        ],
        DEF: [
            { name: 'Cris', years: '2004–2012', rating: 86 },
            { name: 'Éric Abidal', years: '2002–2007', rating: 84 },
            { name: 'Jérémy Berthod', years: '2003–2010', rating: 70 },
            { name: 'François Clerc', years: '2004–2010', rating: 73 },
            { name: 'Aly Cissokho', years: '2007–2009', rating: 74 },
            { name: 'Dejan Lovren', years: '2009–2013', rating: 79 },
            { name: 'Samuel Umtiti', years: '2012–2016', rating: 83 },
            { name: 'Mapou Yanga-Mbiwa', years: '2008–2013', rating: 77 },
            { name: 'Marcelo', years: '2017–2022', rating: 75 },
            { name: 'Christophe Jallet', years: '2014–2017', rating: 76 },
            { name: 'Rafael', years: '2015–2020', rating: 77 },
            { name: 'Serge Aurier', years: '2012–2014', rating: 76 },
            { name: 'Claudio Caçapa', years: '2000–2007', rating: 82 },
            { name: 'Anthony Réveillère', years: '2003–2013', rating: 79 },
            { name: 'Patrick Müller', years: '2003–2006', rating: 74 },
            { name: 'Edmilson', years: '2000–2004', rating: 84 },
            { name: 'Jason Denayer', years: '2018–2022', rating: 78 },
        ],
        MID: [
            { name: 'Juninho', years: '2001–2009', rating: 92 },
            { name: 'Michael Essien', years: '2003–2005', rating: 85 },
            { name: 'Mahamadou Diarra', years: '2002–2006', rating: 83 },
            { name: 'Florent Malouda', years: '2003–2007', rating: 84 },
            { name: 'Tiago', years: '2004–2007', rating: 82 },
            { name: 'Kim Källström', years: '2006–2012', rating: 78 },
            { name: 'Yoann Gourcuff', years: '2010–2015', rating: 80 },
            { name: 'Maxime Gonalons', years: '2009–2017', rating: 78 },
            { name: 'Corentin Tolisso', years: '2013–2017', rating: 82 },
            { name: 'Nabil Fekir', years: '2013–2019', rating: 85 },
            { name: 'Houssem Aouar', years: '2016–2022', rating: 81 },
            { name: 'Bruno Guimarães', years: '2020–2022', rating: 84 },
            { name: 'Lucas Paquetá', years: '2020–2022', rating: 83 },
            { name: 'Robert Pirès', years: '1996–1998', rating: 82 },
            { name: 'Éric Carrière', years: '2002–2004', rating: 77 },
            { name: 'Steed Malbranque', years: '1997–2001', rating: 75 },
            { name: 'Miralem Pjanić', years: '2008–2011', rating: 81 },
            { name: 'Clément Grenier', years: '2009–2017', rating: 76 },
            { name: 'Jordan Ferri', years: '2012–2018', rating: 73 },
            { name: 'Rayan Cherki', years: '2019–présent', rating: 80 },
        ],
        ATT: [
            { name: 'Karim Benzema', years: '2005–2009', rating: 88 },
            { name: 'Alexandre Lacazette', years: '2010–2022', rating: 85 },
            { name: 'Sonny Anderson', years: '1999–2003', rating: 86 },
            { name: 'John Carew', years: '2003–2005', rating: 80 },
            { name: 'Fred', years: '2005–2009', rating: 82 },
            { name: 'Bafétimbi Gomis', years: '2009–2014', rating: 79 },
            { name: 'Lisandro López', years: '2009–2014', rating: 83 },
            { name: 'Mariano Díaz', years: '2017–2018', rating: 77 },
            { name: 'Memphis Depay', years: '2017–2021', rating: 84 },
            { name: 'Moussa Dembélé', years: '2018–2023', rating: 78 },
            { name: 'Sidney Govou', years: '2000–2010', rating: 80 },
            { name: 'Peguy Luyindula', years: '2001–2004', rating: 76 },
            { name: 'Giovane Élber', years: '2003–2005', rating: 79 },
            { name: 'Sylvain Wiltord', years: '2007–2009', rating: 78 },
            { name: 'Michel Bastos', years: '2009–2013', rating: 79 },
            { name: 'Jimmy Briand', years: '2007–2012', rating: 74 },
            { name: 'Clinton Njié', years: '2013–2015', rating: 72 },
            { name: 'Bertrand Traoré', years: '2017–2020', rating: 76 },
            { name: 'Karl Toko Ekambi', years: '2020–2023', rating: 75 },
        ],
    };

    // ─── Ligue 1 2026-27 Opponents ─────────────────────────────────
    const LIGUE1_TEAMS = [
        { name: 'PSG',              strength: 92 },
        { name: 'Marseille',        strength: 82 },
        { name: 'Monaco',           strength: 81 },
        { name: 'Lille',            strength: 79 },
        { name: 'Nice',             strength: 77 },
        { name: 'Rennes',           strength: 76 },
        { name: 'Lens',             strength: 78 },
        { name: 'Brest',            strength: 73 },
        { name: 'Strasbourg',       strength: 72 },
        { name: 'Toulouse',         strength: 71 },
        { name: 'Nantes',           strength: 70 },
        { name: 'Montpellier',      strength: 69 },
        { name: 'Reims',            strength: 68 },
        { name: 'Le Havre',         strength: 65 },
        { name: 'Auxerre',          strength: 64 },
        { name: 'Angers',           strength: 63 },
        { name: 'Saint-Étienne',    strength: 67 },
    ];

    // ─── Formation positions (4-3-3) with absolute positions on pitch ──
    // Positions are in % from top-left of the pitch container
    const SLOTS = [
        // ATT row (3) — top of pitch = attacking end
        { id: 'slot-ATT-0', pos: 'ATT', label: 'AG', top: 14, left: 20 },
        { id: 'slot-ATT-1', pos: 'ATT', label: 'BU', top: 10, left: 50 },
        { id: 'slot-ATT-2', pos: 'ATT', label: 'AD', top: 14, left: 80 },
        // MID row (3)
        { id: 'slot-MID-0', pos: 'MID', label: 'MG', top: 38, left: 22 },
        { id: 'slot-MID-1', pos: 'MID', label: 'MC', top: 34, left: 50 },
        { id: 'slot-MID-2', pos: 'MID', label: 'MD', top: 38, left: 78 },
        // DEF row (4)
        { id: 'slot-DEF-0', pos: 'DEF', label: 'AG', top: 62, left: 14 },
        { id: 'slot-DEF-1', pos: 'DEF', label: 'DC', top: 60, left: 38 },
        { id: 'slot-DEF-2', pos: 'DEF', label: 'DC', top: 60, left: 62 },
        { id: 'slot-DEF-3', pos: 'DEF', label: 'AD', top: 62, left: 86 },
        // GK row (1)
        { id: 'slot-GK-0',  pos: 'GK',  label: 'GB', top: 84, left: 50 },
    ];

    const TOTAL_SLOTS = 11;

    // ─── State ─────────────────────────────────────────────────────
    let selectedPlayers = {};
    let slotChoices = {};
    let currentSlotId = null;

    // ─── DOM References (safe — inside DOMContentLoaded) ───────────
    const pitchEl      = document.getElementById('pitch');
    const modal        = document.getElementById('player-modal-overlay');
    const modalTitle   = document.getElementById('modal-title');
    const modalBadge   = document.getElementById('modal-position-badge');
    const modalChoices = document.getElementById('player-choices');
    const confirmBtn   = document.getElementById('confirm-btn');
    const resetBtn     = document.getElementById('reset-btn');
    const simOverlay   = document.getElementById('simulation-overlay');
    const modalCloseBtn = document.getElementById('modal-close');

    // ─── Init ──────────────────────────────────────────────────────
    buildPitchSlots();
    confirmBtn.addEventListener('click', startSimulation);
    resetBtn.addEventListener('click', resetGame);
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    // ─── Build Player Slots on Pitch ──────────────────────────────
    function buildPitchSlots() {
        SLOTS.forEach(function (s) {
            var slot = document.createElement('div');
            slot.className = 'player-slot';
            slot.id = s.id;
            slot.style.position = 'absolute';
            slot.style.top = s.top + '%';
            slot.style.left = s.left + '%';
            slot.style.transform = 'translate(-50%, -50%)';
            slot.dataset.position = s.pos;
            slot.dataset.label = s.label;

            slot.innerHTML =
                '<div class="slot-circle">' +
                '  <span class="slot-icon">+</span>' +
                '  <span class="slot-jersey">🔴</span>' +
                '</div>' +
                '<span class="slot-label">' + s.label + '</span>' +
                '<span class="slot-player-name"></span>';

            slot.addEventListener('click', function () {
                openModal(s.id, s.pos, s.label);
            });

            pitchEl.appendChild(slot);
        });
    }

    // ─── Random Pick 5 Unique Players ──────────────────────────────
    function pickRandomPlayers(position) {
        var pool = OL_PLAYERS[position].slice();
        var usedNames = [];
        Object.keys(selectedPlayers).forEach(function (sid) {
            if (sid.indexOf('slot-' + position) === 0) {
                usedNames.push(selectedPlayers[sid].name);
            }
        });
        var available = pool.filter(function (p) {
            return usedNames.indexOf(p.name) === -1;
        });
        // Shuffle
        for (var i = available.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = available[i];
            available[i] = available[j];
            available[j] = tmp;
        }
        return available.slice(0, Math.min(5, available.length));
    }

    // ─── Modal ─────────────────────────────────────────────────────
    function openModal(slotId, position, label) {
        currentSlotId = slotId;
        modalTitle.textContent = 'Choisissez un joueur';
        modalBadge.textContent = label;

        if (!slotChoices[slotId] || selectedPlayers[slotId]) {
            slotChoices[slotId] = pickRandomPlayers(position);
        }

        renderChoices(slotChoices[slotId]);
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
        currentSlotId = null;
    }

    function renderChoices(players) {
        modalChoices.innerHTML = '';
        players.forEach(function (player, idx) {
            var card = document.createElement('div');
            card.className = 'player-choice';
            card.innerHTML =
                '<div class="player-choice-number">' + (idx + 1) + '</div>' +
                '<div class="player-choice-info">' +
                '  <div class="player-choice-name">' + player.name + '</div>' +
                '  <div class="player-choice-years">' + player.years + '</div>' +
                '</div>' +
                '<div class="player-choice-rating">' + player.rating + '</div>';

            card.addEventListener('click', function () {
                selectPlayer(player);
            });
            modalChoices.appendChild(card);
        });
    }

    function selectPlayer(player) {
        selectedPlayers[currentSlotId] = player;
        var slot = document.getElementById(currentSlotId);
        slot.classList.add('filled');
        slot.querySelector('.slot-player-name').textContent = player.name;
        closeModal();
        checkAllFilled();
    }

    function checkAllFilled() {
        var filledCount = Object.keys(selectedPlayers).length;
        if (filledCount >= TOTAL_SLOTS) {
            confirmBtn.classList.add('visible');
        }
        resetBtn.classList.toggle('visible', filledCount > 0);
    }

    function resetGame() {
        selectedPlayers = {};
        slotChoices = {};
        confirmBtn.classList.remove('visible');
        resetBtn.classList.remove('visible');
        document.querySelectorAll('.player-slot').forEach(function (slot) {
            slot.classList.remove('filled');
            slot.querySelector('.slot-player-name').textContent = '';
        });
    }

    // ─── Simulation ────────────────────────────────────────────────
    function getTeamStrength() {
        var ratings = Object.keys(selectedPlayers).map(function (k) {
            return selectedPlayers[k].rating;
        });
        var avg = ratings.reduce(function (a, b) { return a + b; }, 0) / ratings.length;
        return Math.round(avg * 0.95 + 5);
    }

    function simulateMatch(olStrength, oppStrength, isHome) {
        var homeBoost = isHome ? 5 : -3;
        var diff = (olStrength + homeBoost) - oppStrength;
        var luck = (Math.random() - 0.5) * 40;
        var result = diff + luck;

        var olGoals, oppGoals;
        if (result > 12) {
            olGoals = Math.floor(Math.random() * 3) + 2;
            oppGoals = Math.floor(Math.random() * 2);
        } else if (result > 3) {
            olGoals = Math.floor(Math.random() * 2) + 1;
            oppGoals = Math.floor(Math.random() * 1);
        } else if (result > -3) {
            var base = Math.floor(Math.random() * 2);
            olGoals = base; oppGoals = base;
        } else if (result > -12) {
            olGoals = Math.floor(Math.random() * 1);
            oppGoals = Math.floor(Math.random() * 2) + 1;
        } else {
            olGoals = Math.floor(Math.random() * 1);
            oppGoals = Math.floor(Math.random() * 3) + 2;
        }
        return { olGoals: olGoals, oppGoals: oppGoals };
    }

    function startSimulation() {
        confirmBtn.classList.remove('visible');
        resetBtn.classList.remove('visible');

        var olStrength = getTeamStrength();
        var feed = document.getElementById('sim-match-feed');
        var progressFill = document.getElementById('sim-progress-fill');
        var progressLabel = document.getElementById('sim-progress-label');
        var statWins = document.getElementById('stat-wins');
        var statDraws = document.getElementById('stat-draws');
        var statLosses = document.getElementById('stat-losses');
        var statPoints = document.getElementById('stat-points');

        feed.innerHTML = '';
        progressFill.style.width = '0%';
        document.getElementById('sim-result').classList.remove('active');
        document.getElementById('sim-standings-wrapper').innerHTML = '';
        simOverlay.classList.add('active');

        // Build schedule
        var schedule = [];
        LIGUE1_TEAMS.forEach(function (team) {
            schedule.push({ opponent: team, isHome: true });
            schedule.push({ opponent: team, isHome: false });
        });
        // Shuffle
        for (var i = schedule.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = schedule[i];
            schedule[i] = schedule[j];
            schedule[j] = tmp;
        }

        var allTeams = [{ name: 'OL Dream Team', strength: olStrength }].concat(LIGUE1_TEAMS);
        var standings = {};
        allTeams.forEach(function (t) {
            standings[t.name] = { played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, points: 0 };
        });

        var wins = 0, draws = 0, losses = 0, points = 0;
        var matchIdx = 0;
        var totalMatches = schedule.length;

        function playNextMatch() {
            if (matchIdx >= totalMatches) {
                simulateOtherMatches(standings);
                setTimeout(function () { showResult(standings); }, 600);
                return;
            }

            var s = schedule[matchIdx];
            var res = simulateMatch(olStrength, s.opponent.strength, s.isHome);

            standings['OL Dream Team'].played++;
            standings['OL Dream Team'].gf += res.olGoals;
            standings['OL Dream Team'].ga += res.oppGoals;
            standings[s.opponent.name].played++;
            standings[s.opponent.name].gf += res.oppGoals;
            standings[s.opponent.name].ga += res.olGoals;

            var resultType;
            if (res.olGoals > res.oppGoals) {
                wins++; points += 3; resultType = 'win';
                standings['OL Dream Team'].wins++;
                standings['OL Dream Team'].points += 3;
                standings[s.opponent.name].losses++;
            } else if (res.olGoals === res.oppGoals) {
                draws++; points += 1; resultType = 'draw';
                standings['OL Dream Team'].draws++;
                standings['OL Dream Team'].points += 1;
                standings[s.opponent.name].draws++;
                standings[s.opponent.name].points += 1;
            } else {
                losses++; resultType = 'loss';
                standings['OL Dream Team'].losses++;
                standings[s.opponent.name].wins++;
                standings[s.opponent.name].points += 3;
            }

            var teamDisplay = s.isHome
                ? 'OL Dream Team vs ' + s.opponent.name
                : s.opponent.name + ' vs OL Dream Team';
            var scoreDisplay = s.isHome
                ? res.olGoals + ' - ' + res.oppGoals
                : res.oppGoals + ' - ' + res.olGoals;

            var matchItem = document.createElement('div');
            matchItem.className = 'sim-match-item ' + resultType;
            matchItem.innerHTML =
                '<span class="sim-match-day">J' + (matchIdx + 1) + '</span>' +
                '<span class="sim-match-teams">' + teamDisplay + '</span>' +
                '<span class="sim-match-score">' + scoreDisplay + '</span>' +
                '<span class="sim-match-result-tag">' + (resultType === 'win' ? 'V' : resultType === 'draw' ? 'N' : 'D') + '</span>';
            feed.appendChild(matchItem);
            feed.scrollTop = feed.scrollHeight;

            var pct = Math.round(((matchIdx + 1) / totalMatches) * 100);
            progressFill.style.width = pct + '%';
            progressLabel.textContent = 'Journée ' + (matchIdx + 1) + ' / ' + totalMatches;

            statWins.textContent = wins;
            statDraws.textContent = draws;
            statLosses.textContent = losses;
            statPoints.textContent = points;

            matchIdx++;
            setTimeout(playNextMatch, 70);
        }

        playNextMatch();
    }

    function simulateOtherMatches(standings) {
        for (var i = 0; i < LIGUE1_TEAMS.length; i++) {
            for (var j = 0; j < LIGUE1_TEAMS.length; j++) {
                if (i === j) continue;
                var home = LIGUE1_TEAMS[i];
                var away = LIGUE1_TEAMS[j];

                var diff = (home.strength + 4) - away.strength;
                var luck = (Math.random() - 0.5) * 40;
                var result = diff + luck;

                var hGoals, aGoals;
                if (result > 12) {
                    hGoals = Math.floor(Math.random() * 3) + 2; aGoals = Math.floor(Math.random() * 2);
                } else if (result > 3) {
                    hGoals = Math.floor(Math.random() * 2) + 1; aGoals = Math.floor(Math.random() * 1);
                } else if (result > -3) {
                    var b = Math.floor(Math.random() * 2); hGoals = b; aGoals = b;
                } else if (result > -12) {
                    hGoals = Math.floor(Math.random() * 1); aGoals = Math.floor(Math.random() * 2) + 1;
                } else {
                    hGoals = Math.floor(Math.random() * 1); aGoals = Math.floor(Math.random() * 3) + 2;
                }

                standings[home.name].played++;
                standings[home.name].gf += hGoals;
                standings[home.name].ga += aGoals;
                standings[away.name].played++;
                standings[away.name].gf += aGoals;
                standings[away.name].ga += hGoals;

                if (hGoals > aGoals) {
                    standings[home.name].wins++; standings[home.name].points += 3;
                    standings[away.name].losses++;
                } else if (hGoals === aGoals) {
                    standings[home.name].draws++; standings[home.name].points += 1;
                    standings[away.name].draws++; standings[away.name].points += 1;
                } else {
                    standings[home.name].losses++;
                    standings[away.name].wins++; standings[away.name].points += 3;
                }
            }
        }
    }

    function showResult(standings) {
        var sorted = Object.keys(standings).map(function (name) {
            var s = standings[name];
            return { name: name, played: s.played, wins: s.wins, draws: s.draws, losses: s.losses, gf: s.gf, ga: s.ga, gd: s.gf - s.ga, points: s.points };
        }).sort(function (a, b) {
            return b.points - a.points || b.gd - a.gd || b.gf - a.gf;
        });

        var olRank = -1;
        var olData = null;
        for (var i = 0; i < sorted.length; i++) {
            if (sorted[i].name === 'OL Dream Team') {
                olRank = i + 1;
                olData = sorted[i];
                break;
            }
        }

        // Build standings table
        var standingsWrapper = document.getElementById('sim-standings-wrapper');
        var html = '<div class="sim-standings"><table class="standings-table"><thead><tr>' +
            '<th>#</th><th>Équipe</th><th>MJ</th><th>V</th><th>N</th><th>D</th>' +
            '<th>BP</th><th>BC</th><th>Diff</th><th>Pts</th></tr></thead><tbody>';

        sorted.forEach(function (team, idx) {
            var isOL = team.name === 'OL Dream Team';
            html += '<tr class="' + (isOL ? 'team-ol' : '') + '">' +
                '<td>' + (idx + 1) + '</td>' +
                '<td>' + team.name + '</td>' +
                '<td>' + team.played + '</td>' +
                '<td>' + team.wins + '</td>' +
                '<td>' + team.draws + '</td>' +
                '<td>' + team.losses + '</td>' +
                '<td>' + team.gf + '</td>' +
                '<td>' + team.ga + '</td>' +
                '<td>' + (team.gd > 0 ? '+' : '') + team.gd + '</td>' +
                '<td>' + team.points + '</td></tr>';
        });
        html += '</tbody></table></div>';
        standingsWrapper.innerHTML = html;

        var resultDiv = document.getElementById('sim-result');
        var resultTitle = document.getElementById('sim-result-title');
        var resultSubtitle = document.getElementById('sim-result-subtitle');
        var resultPoints = document.getElementById('sim-result-points');
        var trophyContainer = document.getElementById('trophy-container');

        resultPoints.textContent = olData.points;

        if (olRank === 1) {
            resultTitle.className = 'sim-result-title champion';
            resultTitle.textContent = '🏆 CHAMPION DE FRANCE !';
            resultSubtitle.textContent = 'Votre OL Dream Team remporte la Ligue 1 2026-2027 ! Une saison historique avec ' + olData.wins + ' victoires !';
            trophyContainer.textContent = '🏆';
            trophyContainer.style.display = 'block';
            spawnConfetti();
        } else if (olRank <= 3) {
            resultTitle.className = 'sim-result-title runner-up';
            resultTitle.textContent = olRank + 'ème place — Podium !';
            resultSubtitle.textContent = 'Votre OL Dream Team termine sur le podium de la Ligue 1. Qualification en Ligue des Champions !';
            trophyContainer.textContent = '🥈';
            trophyContainer.style.display = 'block';
        } else if (olRank <= 5) {
            resultTitle.className = 'sim-result-title runner-up';
            resultTitle.textContent = olRank + 'ème place — Europa League';
            resultSubtitle.textContent = "Saison correcte, mais le titre s'est envolé. Place européenne tout de même !";
            trophyContainer.textContent = '⚽';
            trophyContainer.style.display = 'block';
        } else {
            resultTitle.className = 'sim-result-title failed';
            resultTitle.textContent = olRank + 'ème place — Saison décevante';
            resultSubtitle.textContent = "Votre Dream Team n'a pas été à la hauteur cette saison. Peut-être une autre composition ?";
            trophyContainer.textContent = '😔';
            trophyContainer.style.display = 'block';
        }

        resultDiv.classList.add('active');
    }

    function spawnConfetti() {
        var colors = ['#E5202E', '#006AA3', '#ffd700', '#ffffff', '#ff6b6b', '#4ade80'];
        for (var i = 0; i < 60; i++) {
            var c = document.createElement('div');
            c.className = 'confetti';
            c.style.left = Math.random() * 100 + '%';
            c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            c.style.width = (Math.random() * 8 + 5) + 'px';
            c.style.height = (Math.random() * 8 + 5) + 'px';
            c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            c.style.animation = 'confettiFall ' + (Math.random() * 2 + 2) + 's linear ' + (Math.random() * 1.5) + 's forwards';
            document.body.appendChild(c);
            (function (el) {
                setTimeout(function () { el.remove(); }, 5000);
            })(c);
        }
    }

    // ─── Play Again (global) ───────────────────────────────────────
    window.playAgain = function () {
        simOverlay.classList.remove('active');
        document.querySelectorAll('.confetti').forEach(function (c) { c.remove(); });
        resetGame();
    };
})();
