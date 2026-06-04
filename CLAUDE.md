# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A website refont of OLPLAY (https://olplay.ol.fr/), the official video platform of Olympique Lyonnais. Modular multi-page static site — no build step, open directly in a browser.

## Project Structure

```
UI/
├── Index.html          # Splash screen
├── main.html           # Main page (hero, categories, roster)
├── player.html         # Video player page (OL vs Paris FC — Ligue 1 J26)
├── subscribe.html      # Subscription / payment page
├── matchs.html         # Match listing page (Ligue 1, UCL, Coupe de France)
├── css/
│   ├── variables.css   # Global CSS variables + reset
│   ├── common.css      # Shared styles: navbar, footer, global animations
│   ├── splash.css      # Splash screen styles (Index.html only)
│   ├── main.css        # Main page styles
│   ├── player.css      # Video player page styles
│   ├── subscribe.css   # Subscription page styles
│   └── matchs.css      # Matches listing page styles
├── js/
│   ├── config.js       # Global config: COLORS + ROUTES constants
│   ├── script.js       # Splash screen interactions for Index.html
│   ├── splash.js       # Splash transition helper
│   ├── main.js         # Main page interactions
│   ├── player.js       # Player page: scroll animations, paywall buttons
│   ├── subscribe.js    # Subscribe page: plan toggle, checkout form, FAQ
│   ├── matchs.js       # Matches page: match data, filter, render
│   ├── cursor.js       # Red cursor follower (all pages)
│   └── components/
│       └── navbar.js   # Hamburger menu (auto-init, shared by all pages)
├── images/
│   ├── OLPLAY logo.svg
│   ├── OLPLAY-logo-red.svg
│   ├── Joueurs.jpg              # Hero video background + Grand Format card
│   ├── Niakhate.jpg             # Matchs complets card
│   ├── Endrick.jpg              # Résumés card
│   ├── Hamdani.jpg              # Avant match card
│   ├── Wendy.jpg                # Après match card
│   ├── OL-feminin.jpg           # Coulisses card
│   ├── Cercle masculin.jpg      # Masculins roster circle
│   ├── Cercle féminin.jpg       # Féminines roster circle
│   ├── Cercle U19.jpg           # U19 roster circle
│   ├── Cercle U17.jpg           # U17 roster circle
│   └── Cercle Réserve.jpg       # Réserve N3 roster circle
└── CLAUDE.md
```

- `css/style.css` and `js/script.js` are used by `Index.html` for the splash screen and transition into the main content flow.

## Brand Colors

- **Primary**: `#006AA3` (medium blue) — cards, borders, glows, dividers, S'abonner button
- **Secondary**: `#3C438A` (indigo/purple) — gradients
- **Accent/Red**: `#E5202E` (OL red) — navbar, LE LIVE, Se connecter, CTAs, active states

## Color Usage Rules

- **Navbar**: red only (border-bottom, LE LIVE dot, Se connecter button, logo)
- **Section dividers** (`border-top`): blue (`rgba(0, 106, 163, 0.x)`)
- **Category cards**: blue border + blue neon glow on hover; red on active/selected
- **Match cards**: blue border/glow; red border/glow for live match card
- **Roster circles**: blue border + blue ambient glow
- **S'abonner button**: blue fill (`#006AA3`)
- **Se connecter button**: red fill (`#E5202E`)
- **Status badges**: GRATUIT = blue, EN DIRECT = red, Premium = dark semi-transparent

## CSS Variables (defined in `css/variables.css`)

```css
--color-primary:   #006AA3
--color-secondary: #3C438A
--color-red:       #E5202E
--color-white:     #ffffff
--color-black:     #000000

--font-primary:   'Montserrat', sans-serif
--font-secondary: 'Oswald', sans-serif

--transition-fast:   0.25s ease
--transition-normal: 0.3s ease
--transition-slow:   0.5s ease

--shadow-blue-sm / -md / -lg
--shadow-red-sm / -md
```

## Global Config (`js/config.js`)

Must be loaded first on every page (before other page scripts).

```js
const COLORS = { primary, secondary, red, white }

const ROUTES = {
    main:      'main.html',
    player:    'player.html',
    subscribe: 'subscribe.html',
    matchs:    'matchs.html',
}
```

## Tech Stack

- Vanilla HTML/CSS/JS — no framework, no build step
- Google Fonts: Oswald (headings), Montserrat (body)
- Each page loads: `variables.css` → `common.css` → page CSS, then `config.js` → `navbar.js` → page JS → `cursor.js`

## Architecture — Page by Page

### `Index.html` (Splash)
- CSS: `css/style.css`
- JS: `js/script.js`
- Animated OLPLAY logo with red glow (`olGlow` keyframe)
- Floating particle effects in brand colors
- Loading bar animation (`loadingProgress`)
- On logo click: `OL` zoom animation (`zoomOL`) → transition to main content section

### `main.html` (Main Page)
- CSS: `variables.css`, `common.css`, `main.css`
- JS: `config.js`, `navbar.js`, `main.js`, `cursor.js`
- **Hero**: two-column — video thumbnail (Joueurs.jpg, OL vs Paris FC · 8 mars 2026) + title/watch button
- **Categories**: 6 image cards (horizontal scroll) — click → `ROUTES.player`
- **Roster**: 5 circular team portraits — click logs team name (placeholder)
- `initSubscribeButton()` wires `.nav-subscribe` → `ROUTES.subscribe`
- `initNavbar()` in `js/components/navbar.js` toggles mobile dropdown and closes it when nav links are clicked
- **Navbar**: logo is a `<div class="nav-logo">` (not a link — already on home)

### `player.html` (Video Player)
- CSS: `variables.css`, `common.css`, `player.css`
- JS: `config.js`, `navbar.js`, `player.js`, `cursor.js`
- Match: OL vs Paris FC — Ligue 1 · Journée 26 · 8 mars 2026 · Groupama Stadium
- Paywall overlay with lock icon — "Contenu Premium"
- Sidebar: match metadata (date, venue, duration, views)
- Benefits section (6 rows, IntersectionObserver scroll animation with `is-visible` class)
- CTA banner at bottom
- `initPaywallButtons()` wires: `.btn-paywall-subscribe`, `.btn-cta-subscribe`, `.nav-subscribe` → `ROUTES.subscribe`
- **Navbar**: logo is `<a href="main.html">` (home link)

### `subscribe.html` (Subscription / Payment)
- CSS: `variables.css`, `common.css`, `subscribe.css`
- JS: `config.js`, `navbar.js`, `subscribe.js`, `cursor.js`
- **Plans** (data in `js/subscribe.js PLANS`):
  | Plan | Monthly | Annual |
  |------|---------|--------|
  | Essentiel | 5,99 € | 4,79 € |
  | OLPLAY (featured) | 9,99 € | 7,99 € |
  | Famille | 14,99 € | 11,99 € |
- Monthly/Annual toggle (−20% badge on annual)
- On plan CTA click: updates checkout summary + smooth scroll to `#checkout`
- **Checkout form**: card number (4×4 groups), expiry (MM / AA), CVV — client-side only
  - Visa detected by first digit `4`, Mastercard by `5` or `2`
  - On submit: 1.4 s mock delay → `showSuccess()` reveals `.checkout-success`
- **FAQ accordion**: `max-height: 0 → 300px` transition via `.open` class
- `currentPeriod` + `currentPlan` state vars drive all dynamic updates

### `matchs.html` (Match Listing)
- CSS: `variables.css`, `common.css`, `matchs.css`
- JS: `config.js`, `navbar.js`, `matchs.js`, `cursor.js`
- **Live banner**: full-width red strip, displayed when `status === 'live'` exists → click = `ROUTES.player`
- **Filter tabs**: Tous · Ligue 1 · Champions League · Coupe de France
- **Match data** (39 matches, 2025-2026 season, newest first):
  | Status | Criteria | Badge | Click |
  |--------|----------|-------|-------|
  | `live` | J27 (10 mars 2026, en cours) | `● EN DIRECT` red | → player |
  | `payant` | J26 + UCL 8e retour | Padlock "Premium" | → subscribe |
  | `gratuit` | J25 and older | `GRATUIT` blue | → player |
- Match cards rendered via `renderMatchCard()` from `MATCHES[]` array in `matchs.js`
- Competition label colours: Ligue 1 = blue, UCL = amber `#c9a227`, CdF = red
- Grid: 3 cols desktop / 2 cols ≤1100px / 1 col ≤768px
- OL team name always highlighted in white (`.team-ol`), opponent in dimmer grey

### `js/cursor.js` (Cursor Follower)
- Self-contained IIFE, injected on all pages
- Lerp smoothing: `dotX += (mouseX - dotX) * 0.12` in `requestAnimationFrame`
- Red circle (`#E5202E`), 16px, blend mode `difference`
- Injects its own `<style>` tag — no CSS file needed

### `js/components/navbar.js` (Shared Component)
- Auto-init on `DOMContentLoaded`
- Toggles `.hamburger.active` + `.nav-menu.active`
- Closes mobile menu on any `.nav-item a`, `.nav-subscribe`, `.nav-signin` click

## Navbar Structure (all pages)

```html
<nav class="navbar">
  <a href="main.html" class="nav-logo">…SVG…</a>   <!-- <div> on main.html -->
  <button class="hamburger">…</button>
  <div class="nav-menu">
    <ul class="nav-sections">
      <li><a href="matchs.html">Matchs</a></li>
      <li><a href="#">Résumés</a></li>
      <li><a href="#">Grand Format</a></li>
      <li><a href="player.html" class="nav-live-link">LE LIVE</a></li>
      <li><a href="#">Avant match</a></li>
      <li><a href="#">Après match</a></li>
      <li><a href="#">Coulisses</a></li>
    </ul>
    <div class="nav-right">
      <button class="nav-subscribe">S'abonner</button>
      <button class="nav-signin">Se connecter</button>
    </div>
  </div>
</nav>
```

> `main.html` uses `<div class="nav-logo">` (not a link) and adds `nav-live-item` class to the LE LIVE `<li>`.
> All other pages use `<a href="main.html" class="nav-logo">`.

## Key Interactions

| From | Action | Destination |
|------|--------|-------------|
| Index.html | Logo click | main.html |
| Any page navbar | Matchs | matchs.html |
| Any page navbar | LE LIVE | player.html |
| Any page navbar | S'abonner button | subscribe.html |
| main.html | Hero video / watch button / category card | player.html |
| player.html | S'abonner / paywall subscribe buttons | subscribe.html |
| matchs.html | Live banner / gratuit card click | player.html |
| matchs.html | Payant card click | subscribe.html |
| subscribe.html | Plan CTA | scrolls to checkout |
| subscribe.html | Success state | shows `.checkout-success` |

## Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| ≤768px | Navbar → hamburger dropdown, stacked layouts, reduced padding |
| ≤900px | Subscribe plan cards → stacked column |
| ≤1100px | Match grid 3 cols → 2 cols |

## Commands

No build commands needed — open `Index.html` directly in a browser.

## Future Development

- **Authentication**: replace "S'abonner" + "Se connecter" with user avatar/menu when logged in
- **Roster team pages**: wire team card clicks to dedicated team pages
- **Live match**: update `matchs.js MATCHES` entry with `status: 'live'` for the current match; `player.html` title/metadata should reflect the live match
- **Real payment**: replace mock form with Stripe or similar
- **Category filtering**: wire navbar category links (Résumés, Grand Format, etc.) to filter or dedicated pages
- **API integration**: replace static `MATCHES[]` and `PLANS{}` data with backend calls
- **Video metadata**: add duration, views count to match cards
- URL-encode French filenames in `src` attributes (spaces → `%20`, é → `%C3%A9`)
