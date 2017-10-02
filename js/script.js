$(document).ready(function(){

    //header and footer components import
    $('#header').load('header.html');
    $('#footer').load('footer.html');
    $('#modal').load('modal.html', function () {
        // modal
        $('.modal-toggle').on('click', function(e) {
            e.preventDefault();
            $('.modal').toggleClass('is-visible');
        });
    });

    //wow js
    new WOW().init();

    //parallax
    $('.parallax-window-main').parallax({imageSrc: 'img/first5.jpg'});
    $('.parallax-window-home').parallax({imageSrc: 'img/for_home5.jpg'});

    //Preloader
    var preLoader = $('.shim');
    setTimeout(function() {
        preLoader.css('opacity', '0');
        setTimeout(function() { preLoader.css('display', 'none') }, 500)
    }, 1500);

});




