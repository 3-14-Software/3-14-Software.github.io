window.onload = function() {

    // Fade-in
    const elements = document.querySelectorAll('.fade-out');
    const animateElement = (element, delay) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, delay);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                animateElement(entry.target, 200 * index); // 200 ms
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // 10% of element is visible

    elements.forEach((element) => observer.observe(element));

    // Lightbox
    document.getElementById('lightbox').addEventListener('click', function(e) {
        if (e.target !== document.getElementById('lightbox-img')) {
            closeLightbox();
        }
    });

    // Popup (only on PC)
    if (window.innerWidth > 768) {
    /*    setTimeout(function() {
            document.querySelector('.popup').style = "";
            document.querySelector('.popup').classList.add('fade-in');
        }, 8000);
    */
    }

};

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
