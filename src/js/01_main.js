$(document).ready(function() {

    let isMobile = false;

    if(window.matchMedia("(max-width: 767px)").matches){
        
        isMobile = true;
    } else{
        
        isMobile = false;
    }

    $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99"});

    Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            autoStart: false,
        },
        Toolbar: {
            display: [
                { id: "prev", position: "center" },
                { id: "counter", position: "center" },
                { id: "next", position: "center" },
                "zoom",
                "close",
            ],
        },
        dragToClose: false
    });

    $('.js-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-slider-nav',
        adaptiveHeight: true,
        draggable: false,
        infinite: true,
    });

    $('.js-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '.js-slider-nav-prev',
        nextArrow: '.card-slider__next',
        asNavFor: '.js-slider-main',
        focusOnSelect: true,
        vertical: true,
        adaptiveHeight: true,
        draggable: false,
        infinite: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    vertical: false,
                    fade: false,
                    slidesToShow: 3,
                    infinite: true,
                    centerMode: true,
                    draggable: true,
                    dots: false
                }
            }
        ]
    });

    $('.slider-license').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-license-nav',
        prevArrow: '.js-license-prev',
        nextArrow: '.js-license-next',
        infinite: false,
    });

    $('.slider-license-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-license',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: false,
    });

    $('.about-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.js-about-prev',
        nextArrow: '.js-about-next',
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    draggable: true,
                    autoplay: false,
                    fade: true,
                    dots: false
                }
            }
        ]
    });

    $('.js-slider-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        prevArrow: '.btn-gallery.left',
        nextArrow: '.btn-gallery.right',
        infinite: false,
    });

    $('.js-about-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        prevArrow: '.btn-interes.left',
        nextArrow: '.btn-interes.right',
        infinite: false,
    });

    $('.tab-list__item').click(function() {
        $('.tab-list__item').removeClass('active');
        $('.tab-content__item').removeClass('active');
        $('.tab-content__item').eq($(this).index()).addClass('active');
        $(this).addClass('active');
    });

    $('.faq__head').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().find('.faq__content').slideToggle();
    });

    $('.js-nist').click(function() {
        $(this).parent().parent().toggleClass('active');
        $(this).parent().parent().find('.nist__item-content').slideToggle();
    });

    $('.btn-param').click(function() {
        $(this).parent().parent().find('.params-hidden-content').slideToggle();
        $(this).find('span').text(
            $(this).find('span').text() == 'Подробнее' ? 'Скрыть' : 'Подробнее'
        );
    });

    $('.filter-section__head').click(function() {

        if (isMobile) {

            $('.filter-section__head').removeClass('active');
            $(this).addClass('active');
            $('.filter-section__content').hide();
            $(this).parent().find('.filter-section__content').slideToggle();
        }
        else {

            $(this).toggleClass('active');
            $(this).parent().find('.filter-section__content').slideToggle();
        }
    });

    $('.filter-mobile').on('touchend', function() {
        $('.filter').addClass('show');
        $('html').addClass('no-scroll');
    });

    $('.filter-back').on('touchend', function() {
        $('.filter').removeClass('show');
        $('html').removeClass('no-scroll');
    });


    $('.header .menu-mobile').on('touchend', function() {
        $('.menu').addClass('show');
        $('html').addClass('no-scroll');
    });

    $('.menu .close').on('touchend', function() {
        $('.menu').removeClass('show');
        $('html').removeClass('no-scroll');
    });

    $('.open-aside-mobile').on('touchend', function() {
        $(this).toggleClass('open');
        $(this).parent().toggleClass('open');
        $('html').toggleClass('no-scroll');
    });

});