console.log('Site Cleanizy chargé - Version 2026');
// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
