$(document).ready(function() {

    const heroBanner = document.querySelector(".hero-info");

    if (heroBanner) {
        setTimeout(function() {
            heroBanner.classList.add("visible");

            setTimeout(function() {
                heroBanner.classList.remove("visible");
            }, 6000);
        }, 800);
    }

    let isMobile = false;

    if(window.matchMedia("(max-width: 767px)").matches){

        isMobile = true;
    } else{

        isMobile = false;
    }

    // $(document).snowfall({
    //     flakeCount: 110,
    //     minSize: 2,
    //     maxSize: 8,
    //     maxSpeed: 5,
    //     round: true,
    //     shadow: false,
    // });

    $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99"});

    $(".slider-nav img:first-child").addClass("active");
    $(".slider-main > *:first-child").addClass("active");

    var currentVideo = $('.slider-main video');

    if (currentVideo.length > 0) {
        currentVideo.get(0).play();
    }

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

    $('.procedure-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.js-procedure-prev',
        nextArrow: '.js-procedure-next',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.education-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.js-education-prev',
        nextArrow: '.js-education-next',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.js-trust-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        // focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.js-effect-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: "0",
                    slidesToShow: 1,
                }
            },
        ],
        prevArrow: '<button class="prev-slide"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 28" fill="none"><path d="M20 2L2 14L20 26" stroke="#EA4033" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button class="next-slide"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 28" fill="none"><path d="M2 2L20 14L2 26" stroke="#EA4033" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    });

    $(".slider-nav img").click(function() {

        $(".slider-nav img").removeClass("active");
        $(this).addClass("active");

        $(".slider-main > *").removeClass("active");
        $(".slider-main > *").eq($(this).index()).addClass("active");

        var video = $('.slider-main video')[0];

        if ($('.slider-main video').parent().hasClass('active')) {

            video.play();
        } else {

            video.pause();
        }
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

    $('.slider-brand').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-brand-nav',
        prevArrow: '.js-brand-prev',
        nextArrow: '.js-brand-next',
        infinite: true,
    });

    $('.slider-brand-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-brand',
        arrows: false,
        dots: false,
        centerMode: true,
        infinite: true,
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
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
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

        $('.tab-content__footer .btn-collapse').text(
            $('.tab-content__footer .btn-collapse').text() == 'Скрыть' ? 'Развернуть' : 'Развернуть'
        );
        $('.tab-content__footer').removeClass('grad-hidden');
        $('.tab-content__main').removeClass('open');
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

    $('.js-submenu').click(function() {

        $(this).parent().parent().find('.menu__subnav').slideToggle();
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

    $('.filter__action .btn--primary').on('touchend', function() {

        $('.filter').removeClass('show');
        $('html').removeClass('no-scroll');
    });


    $('.header').on('click touchend', '.menu-mobile', function(event) {

        event.stopPropagation();
        $('.menu').addClass('show');
        $('html').addClass('no-scroll');

        return false;
    });

    $('.menu').on('click touchend', '.close', function(event) {

        event.stopPropagation();
        $('.menu').removeClass('show');
        $('html').removeClass('no-scroll');

        return false;
    });

    $('.open-aside-mobile').on('touchend', function() {

        $(this).toggleClass('open');
        $(this).parent().toggleClass('open');
        $('html').toggleClass('no-scroll');
    });

    $('.wiki-main-tabs__item label, .wiki-main-tabs__item button').on('click', function() {

        $('.wiki-main-tabs__item').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.btn-collapse').click(function() {

        $(this).text(
            $(this).text() == 'Развернуть' ? 'Скрыть' : 'Развернуть'
        );
        $(this).parent().toggleClass('grad-hidden');
        $(this).parent().parent().find('.tab-content__main').toggleClass('open');
    });

    $(".btn-scroll-down").click(function() {

        $('html, body').animate({
            scrollTop: $(`#${$(this).data("scroll")}`).offset().top
        }, 1000);
    });

    $(".js-btn-garant").click(function() {

        $('html, body').animate({
            scrollTop: $(`#${$(this).data("scroll")}`).offset().top - 100
        }, 1000);
    });

    $(".sale-promo").click(function() {

        $('html, body').animate({
            scrollTop: $(`#${$(this).data("scroll")}`).offset().top - 125
        }, 800);
    });

    $(window).scroll(startCounter);

    function startCounter() {

        if ( $(".numbers").length === 0 ) return false;

        const scrollY = $(".numbers").offset().top - window.innerHeight;

        if ($(window).scrollTop() > scrollY) {

            $(window).off("scroll", startCounter);

            $(".number-item__num span").each(function () {

                const $this = $(this);

                jQuery({ Counter: 0 }).animate({ Counter: $this.attr("data-number") }, {
                    duration: 2000,
                    easing: "swing",
                        step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

    $(".js-btn-search").click(function() {

        $(this).toggleClass("active");
        $(".js-search-form").toggle(200);
        $(".js-search-input").focus();
    })

    $(document).click(function(event) {

        if (!$(event.target).closest(".header-search").length) {

            $(".js-search-form").hide();
            $(".js-btn-search").removeClass("active");
        }
    });

    $(".service-info__item").click(function() {

        $(".service-info__item").removeClass("active");
        $(this).addClass("active");

        $(".service-info__content").removeClass("active");
        $(".service-info__content").eq($(this).index()).addClass("active");
    });

    document.addEventListener('copy', function(event) {

        const selectedText = window.getSelection().toString();
        const copiedText = selectedText + '\n\nПодробнее: ' + window.location.href;

        event.clipboardData.setData('text/plain', copiedText);

        event.preventDefault();
    });

    (function() {
        const btnBack = document.querySelector(".js-btn-back");

        if (btnBack) {

            btnBack.addEventListener("click", function() {

                if (window.history.length > 1) {

                    window.history.back();
                }
                else {

                    window.location.href = "/wiki/";
                }
            });
        }
    })();

});