// Pure Vanilla JS Logic
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        // Reveal animations
        const hero = document.getElementById('hero');
        const features = document.getElementById('features');
        const cta = document.getElementById('cta');

        // Staggered entry
        setTimeout(() => {
            if (hero) hero.classList.remove('opacity-0', 'translate-y-5');
        }, 100);

        setTimeout(() => {
            if (features) features.classList.remove('opacity-0');
        }, 600);

        setTimeout(() => {
            if (cta) cta.classList.remove('opacity-0', 'translate-y-5');
        }, 1100);

        // Redirect on Enter Dashboard
        const enterBtn = document.querySelector('button');
        if (enterBtn) {
            enterBtn.addEventListener('click', () => {
                window.location.href = './dashboard.html';
            });
        }
    });
})();
