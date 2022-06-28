(function () {
    window.addEventListener('scroll', setupNav);

    function setupNav() {
        var posYScroll = getYScroll();

        if (posYScroll > 100 && !hasClassFX()) {
            document.body.classList.add('fx');
        }
        if (posYScroll <= 100 && hasClassFX()) {
            document.body.classList.remove('fx');
        }
    }

    function getYScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    function hasClassFX() {
        return !!document.body.classList.contains('fx');
    }
})();