(function () {
    var $banner = document.querySelector('.banner');
    var $bannerBtn = document.querySelector('.banner__close');
    var intervaloEsconde = null;

    $bannerBtn.addEventListener('click', escondeBanner);

    function mostraBanner() {
        $banner.style.display = 'block';
        setTimeout(escondeBanner, 3000);
    }

    function escondeBanner() {
        $bannerBtn.removeEventListener('click', escondeBanner);
        $banner.parentNode.removeChild($banner);

        clearTimeout(intervaloEsconde);
    }

    setTimeout(mostraBanner, 2000);

    setTimeout(escondeBanner, 5000);
})();