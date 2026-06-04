// =====================================================================
//  OLPLAY — Subscribe Page Logic
//  Gestion des offres, du toggle mensuel/annuel, du formulaire de paiement
// =====================================================================

// ─── Plan Data ───────────────────────────────────────────────────────
var PLANS = {
    essentiel: {
        name: 'Essentiel',
        monthly: { amount: '5,99', note: '' },
        annual:  { amount: '4,79', note: 'Soit 57,48\u00a0€ facturés annuellement' },
        features: [
            'Résumés des matchs',
            'Avant\u00a0& Après match',
            'Coulisses',
            '1 écran simultané',
        ],
    },
    olplay: {
        name: 'OLPLAY',
        monthly: { amount: '9,99', note: '' },
        annual:  { amount: '7,99', note: 'Soit 95,88\u00a0€ facturés annuellement' },
        features: [
            'Tout le contenu Essentiel',
            'Matchs complets',
            'Grand Format documentaires',
            'Archives complètes OL',
            'Qualité HD',
            '2 écrans simultanés',
        ],
    },
    famille: {
        name: 'Famille',
        monthly: { amount: '14,99', note: '' },
        annual:  { amount: '11,99', note: 'Soit 143,88\u00a0€ facturés annuellement' },
        features: [
            'Tout le contenu OLPLAY',
            '4 écrans simultanés',
            'Téléchargements offline',
            'Comptes enfants',
        ],
    },
};

// ─── State ───────────────────────────────────────────────────────────
var currentPeriod = 'monthly';
var currentPlan   = 'olplay';

// ─── Toggle Monthly / Annual ─────────────────────────────────────────
function initPeriodToggle() {
    document.querySelectorAll('.toggle-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var period = this.dataset.period;
            if (period === currentPeriod) return;
            currentPeriod = period;

            document.querySelectorAll('.toggle-btn').forEach(function (b) {
                b.classList.toggle('active', b.dataset.period === period);
            });

            updateAllPrices();
            updateCheckoutSummary();
        });
    });
}

function updateAllPrices() {
    document.querySelectorAll('.plan-card').forEach(function (card) {
        var planKey = card.dataset.plan;
        var plan    = PLANS[planKey];
        if (!plan) return;

        var data       = plan[currentPeriod];
        var amountEl   = card.querySelector('.plan-amount');
        var noteEl     = card.querySelector('.plan-annual-note');

        if (amountEl) amountEl.textContent = data.amount;
        if (noteEl)   noteEl.textContent   = data.note;
    });
}

// ─── Plan Selection ──────────────────────────────────────────────────
function initPlanSelection() {
    document.querySelectorAll('.plan-cta').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var card = this.closest('.plan-card');
            currentPlan = card ? card.dataset.plan : currentPlan;

            updateCheckoutSummary();
            scrollToCheckout();
        });
    });

    document.querySelector('.checkout-change-plan') &&
        document.querySelector('.checkout-change-plan').addEventListener('click', function () {
            var plansSection = document.querySelector('.plans-section');
            if (plansSection) plansSection.scrollIntoView({ behavior: 'smooth' });
        });
}

function updateCheckoutSummary() {
    var plan = PLANS[currentPlan];
    if (!plan) return;

    var data = plan[currentPeriod];

    var planNameEl  = document.querySelector('.checkout-summary-plan');
    var priceAmtEl  = document.querySelector('.price-amount');
    var pricePeriEl = document.querySelector('.price-period');
    var featsList   = document.querySelector('.checkout-summary-features');

    if (planNameEl)  planNameEl.textContent  = plan.name;
    if (priceAmtEl)  priceAmtEl.textContent  = data.amount + '\u00a0€';
    if (pricePeriEl) pricePeriEl.textContent = currentPeriod === 'monthly' ? '/mois' : '/mois (annuel)';

    if (featsList) {
        featsList.innerHTML = '';
        plan.features.forEach(function (feat) {
            var li = document.createElement('li');
            li.className = 'checkout-summary-feature';
            li.textContent = feat;
            featsList.appendChild(li);
        });
    }

    // Update checkout submit label
    var submitBtn = document.querySelector('.checkout-submit');
    if (submitBtn) {
        var suffix = currentPeriod === 'monthly'
            ? data.amount + '\u00a0€/mois'
            : data.amount + '\u00a0€/mois (annuel)';
        submitBtn.textContent = 'Confirmer — ' + suffix;
    }
}

function scrollToCheckout() {
    var checkout = document.getElementById('checkout');
    if (checkout) checkout.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── Card Number Formatting ──────────────────────────────────────────
function initCardFormatting() {
    var cardInput  = document.getElementById('card-number');
    var expiryInput = document.getElementById('card-expiry');
    var cvvInput   = document.getElementById('card-cvv');

    if (cardInput) {
        cardInput.addEventListener('input', function () {
            var v = this.value.replace(/\D/g, '').slice(0, 16);
            this.value = v.replace(/(.{4})/g, '$1 ').trim();

            // Show card brand icon
            var visaIcon = document.querySelector('.card-icon.visa');
            var mcIcon   = document.querySelector('.card-icon.mc');
            if (visaIcon && mcIcon) {
                var digit = v[0];
                visaIcon.classList.toggle('active', digit === '4');
                mcIcon.classList.toggle('active', digit === '5' || digit === '2');
            }
        });
    }

    if (expiryInput) {
        expiryInput.addEventListener('input', function () {
            var v = this.value.replace(/\D/g, '').slice(0, 4);
            if (v.length >= 3) {
                this.value = v.slice(0, 2) + ' / ' + v.slice(2);
            } else {
                this.value = v;
            }
        });
    }

    if (cvvInput) {
        cvvInput.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, '').slice(0, 4);
        });
    }
}

// ─── Form Validation & Submit ─────────────────────────────────────────
function initCheckoutForm() {
    var form = document.getElementById('checkout-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var valid = true;

        form.querySelectorAll('.form-input').forEach(function (input) {
            input.classList.remove('error');
            if (!input.value.trim()) {
                input.classList.add('error');
                valid = false;
            }
        });

        // Basic card number length check
        var cardInput = document.getElementById('card-number');
        if (cardInput && cardInput.value.replace(/\s/g, '').length < 16) {
            cardInput.classList.add('error');
            valid = false;
        }

        // Basic expiry check
        var expiryInput = document.getElementById('card-expiry');
        if (expiryInput && expiryInput.value.replace(/\D/g, '').length < 4) {
            expiryInput.classList.add('error');
            valid = false;
        }

        if (!valid) return;

        // Simulate async processing
        var submitBtn = form.querySelector('.checkout-submit');
        submitBtn.disabled    = true;
        submitBtn.textContent = 'Traitement en cours…';

        setTimeout(function () {
            showSuccess();
        }, 1400);
    });
}

function showSuccess() {
    var formEl    = document.getElementById('checkout-form');
    var legalEl   = document.querySelector('.checkout-legal');
    var successEl = document.getElementById('checkout-success');

    if (formEl)    formEl.style.display    = 'none';
    if (legalEl)   legalEl.style.display   = 'none';
    if (successEl) successEl.classList.add('visible');
}

// ─── FAQ Accordion ────────────────────────────────────────────────────
function initFaq() {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item     = this.closest('.faq-item');
            var isOpen   = item.classList.contains('open');

            // Close all
            document.querySelectorAll('.faq-item.open').forEach(function (i) {
                i.classList.remove('open');
            });

            if (!isOpen) item.classList.add('open');
        });
    });
}

// ─── Init All ─────────────────────────────────────────────────────────
function initSubscribe() {
    initPeriodToggle();
    initPlanSelection();
    updateCheckoutSummary();
    initCardFormatting();
    initCheckoutForm();
    initFaq();
}

document.addEventListener('DOMContentLoaded', initSubscribe);
