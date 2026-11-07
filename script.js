// Cleanizy — variante « comme Jalis » : effets légers en JavaScript vanilla
document.documentElement.classList.add('js');

(function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // En-tête : transparent sur le hero, plein dès qu'on dépasse sa hauteur
    var header = document.querySelector('.site-header');
    var toTop = document.querySelector('.to-top');
    function onScroll() {
        var y = window.scrollY;
        header.classList.toggle('is-solid', y > header.offsetHeight);
        toTop.classList.toggle('is-visible', y > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });

    // Menu mobile plein écran depuis la droite
    var burger = document.querySelector('.burger');
    var nav = document.getElementById('main-nav');
    function setMenu(open) {
        burger.setAttribute('aria-expanded', open);
        burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
        nav.classList.toggle('is-open', open);
        document.body.classList.toggle('menu-open', open);
        if (open) header.classList.add('is-solid'); else onScroll();
    }
    burger.addEventListener('click', function () {
        setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });
    nav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) setMenu(false);
    });

    // Apparition au défilement, une seule fois, en cascade (+65 ms par élément frère)
    var reveals = document.querySelectorAll('.reveal');
    reveals.forEach(function (el) {
        var siblings = Array.prototype.filter.call(el.parentElement.children, function (c) {
            return c.classList.contains('reveal');
        });
        var i = siblings.indexOf(el);
        el.style.setProperty('--d', (0.25 + i * 0.065).toFixed(3) + 's');
    });

    // Compteurs (1,5 s, format français)
    function runCounter(el) {
        var target = parseInt(el.dataset.target, 10);
        if (reduce || target === 0) { el.textContent = target.toLocaleString('fr-FR'); return; }
        var start = null;
        function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / 1500, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased).toLocaleString('fr-FR');
            if (p < 1) requestAnimationFrame(step);
        }
        el.textContent = '0';
        requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-in');
                entry.target.querySelectorAll('.counter').forEach(runCounter);
                io.unobserve(entry.target);
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(function (el) { io.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('is-in'); });
    }

    // Fenêtre « Être rappelé » (dialog natif)
    var dialog = document.getElementById('callback');
    document.querySelectorAll('[data-open-callback]').forEach(function (b) {
        b.addEventListener('click', function () {
            if (dialog.showModal) dialog.showModal(); else location.hash = '#devis';
        });
    });
    dialog.querySelector('[data-close-callback]').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });

    // Message de remerciement après envoi d'un formulaire (Netlify Forms)
    if (/[?&]merci=1/.test(location.search)) {
        var thanks = document.querySelector('.form-thanks');
        if (thanks) thanks.hidden = false;
    }
})();
