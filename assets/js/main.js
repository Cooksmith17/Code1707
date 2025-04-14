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
});
