document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.services-grid');
    if (productsGrid) {

    }

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }

    const testimonialsCarousel = document.querySelector('.testimonial-carousel');
    const prevButton = document.querySelector('.carousel-nav.prev');
    const nextButton = document.querySelector('.carousel-nav.next');

    if (testimonialsCarousel && prevButton && nextButton) {
        let scrollAmount = 0;
        const cardWidth = testimonialsCarousel.querySelector('.testimonial-card').offsetWidth + 30;

        nextButton.addEventListener('click', () => {
            scrollAmount += cardWidth;
            testimonialsCarousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            if (scrollAmount >= testimonialsCarousel.scrollWidth - testimonialsCarousel.clientWidth) {
                scrollAmount = 0;
                testimonialsCarousel.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        });

        prevButton.addEventListener('click', () => {
            scrollAmount -= cardWidth;
            testimonialsCarousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            if (scrollAmount < 0) {
                scrollAmount = testimonialsCarousel.scrollWidth - testimonialsCarousel.clientWidth;
                testimonialsCarousel.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        });
    }
});