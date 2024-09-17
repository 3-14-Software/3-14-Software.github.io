window.onload = function() {
    document.getElementById('lightbox').addEventListener('click', function(e) {
        if (e.target !== document.getElementById('lightbox-img')) {
            closeLightbox();
        }
    });

    if (window.innerWidth > 768) {
    /*    setTimeout(function() {
            document.querySelector('.popup').style = "";
            document.querySelector('.popup').classList.add('fade-in');
        }, 8000);
    */
    }
    document.querySelector('header img').classList.add('fade-in');
    setTimeout(function() {
        document.querySelector('.description').classList.add('fade-in');
    }, 200);
    setTimeout(function() {
        document.querySelector('.gallery').classList.add('fade-in');
    }, 400);
    setTimeout(function() {
        document.querySelector('footer').classList.add('fade-in');
    }, 600);
};

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
