document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    const nav = document.querySelector('.header__nav');
    const dropdownItems = document.querySelectorAll('.header__nav-item--has-dropdown');

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('is-active');
        mobileToggle.classList.toggle('is-active');
    });

    // Mobile dropdown toggles
    dropdownItems.forEach(item => {
        const link = item.querySelector('.header__nav-link');
        const dropdown = item.querySelector('.header__dropdown');

        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('is-active');
                
                // Close other dropdowns
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('is-active');
                    }
                });
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
            nav.classList.remove('is-active');
            mobileToggle.classList.remove('is-active');
        }
    });

    // Handle footer link clicks
    const footerLinks = document.querySelectorAll('.footer__link');
    const currentPage = window.location.pathname.split('/').pop();

    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            const targetPage = href.split('/').pop();

            // If on about.html and clicking about link, scroll to top
            if (currentPage === 'about.html' && targetPage === 'about.html') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            // If on contact.html and clicking contact link, scroll to top
            else if (currentPage === 'contact.html' && targetPage === 'contact.html') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
});
