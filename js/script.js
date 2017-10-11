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
    $('.parallax-window-office').parallax({imageSrc: 'img/office_main.jpg'});

    //Preloader
    var preLoader = $('.shim');
    setTimeout(function() {
        preLoader.css('opacity', '0');
        setTimeout(function() { preLoader.css('display', 'none') }, 500)
    }, 1500);

    //unslider
    $('.automatic-slider').unslider({
        autoplay: true,
        keys: false,
        arrows: false,
        delay: 5000
    });

});


toastr.error("Продолжая пользование настоящим сайтом, Вы выражаете своё согласие на обработку Ваших персональных данных с испольованием интернет-сервисов \"Google analytics\" и \"Яндекс Метрика\". Порядок обработки Ваших персональных данных, а также реализуемые требования к их защите, содержатся в Политике ООО \"МебельКомплект\"","");

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "3000",
    "hideDuration": "1000",
    "timeOut": "10000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}



