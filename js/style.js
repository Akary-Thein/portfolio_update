$(document).ready(function () {
    // Menu Toggle
    $(".menu-toggle").click(function () {
        $(this).toggleClass("active");
        $(".gnav").toggleClass("active");
        $("html").toggleClass("scroll-prevent");
    });
});

//gsap.registerPlugin(ScrollTrigger);

// Mainvisual Section
//const mvItems = gsap.timeline({
//    defaults: { ease: "power3.out", duration: 1.2 }
//});
//mvItems
//    .from(".sec-mv .profile-ttl", { y: -60, opacity: 0 })
//    .from(".sec-mv p", { y: 40, opacity: 0 }, "-=0.8")
//    .from(".sec-mv .btn-list a", { y: 30, opacity: 0, stagger: 0.25 }, "-=0.9")
//    .from(".sec-mv .profile-img img", { scale: 0.92, opacity: 0, duration: 1.4 }, "-=1.0");

// Banner Section
//const bannerItems = gsap.timeline({
//    scrollTrigger: { trigger: ".sec-bnr", start: "top 80%", once: true }
//});
//bannerItems
//    .from(".sec-bnr .col", { y: 50, opacity: 0, duration: 1.2, ease: "power2.out", stagger: 0.3 })
//    .from(".sec-bnr .col-ico img", { scale: 0.8, opacity: 0, duration: 0.6, ease: "back.out(1.7)", stagger: 0.3 }, "-=1.0")
//    .from(".sec-bnr .col-ttl", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out", stagger: 0.3 }, "-=0.9")
//    .from(".sec-bnr .desc", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out", stagger: 0.3 }, "-=0.9");

// About Section
//const aboutItems = gsap.timeline({
//    defaults: { ease: "power2.out" },
//    scrollTrigger: { trigger: ".sec-about", start: "top 80%", once: true }
//});
//aboutItems
//    .from(".sec-about .cmn-ttl", { y: 60, opacity: 0, duration: 1.4 })
//    .from(".sec-about .about-txt", { y: 40, opacity: 0, duration: 1.2, stagger: 0.25 }, "-=0.7")
//    .from(".sec-about .left-blk", { y: 40, opacity: 0, duration: 1.2 }, "-=0.6")
//    .from(".sec-about .right-blk", { y: 40, opacity: 0, duration: 1.2 }, "-=0.8");

// Projects Section
//const projectItems = gsap.timeline({
//    defaults: { ease: "power2.out" },
//    scrollTrigger: { trigger: ".sec-projects", start: "top 80%", once: true }
//});
//projectItems
//    .from(".sec-projects .cmn-ttl", { y: 60, opacity: 0, duration: 1.4 })
//    .from(".sec-projects .prj-txt", { y: 40, opacity: 0, duration: 1.2, stagger: 0.25 }, "-=0.7");

const swiper = new Swiper(".project-swiper", {
    slidesPerView: "auto",
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1450: { slidesPerView: 4 },
    },
});

$headerHeight = $(".header").outerHeight();
setTimeout(function () {
    if (location.hash) {
        window.scrollTo(0, 0);
        target = location.hash.split("#");
        smoothScrollTo($("#" + target[1]));
    }
}, 1);

$('.header a[href*="#"]:not([href="#"]), .btn-list a[href*="#"]:not([href="#"])').click(function () {
    $(".menu-toggle").removeClass("active");
    $(".gnav").removeClass("active");
    $("html").removeClass("scroll-prevent");
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname) {
        smoothScrollTo($(this.hash));
        return false;
    }
});

function smoothScrollTo(target) {
    if (!target || !target.length) return;
    $("html,body").animate({
        scrollTop: target.offset().top - $headerHeight
    }, 1000);
}

// Page Top
var topBtn = $(".page-top");
topBtn.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $(".footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
        $(".page-top").css({
            "position": "absolute",
            "bottom": footHeight + 20,
        });
        $("body").css({
            "position": "relative",
        });
    }
    else {
        $(".page-top").css({
            "position": "fixed",
            "bottom": 35,
        });
    }
});
$(".page-top").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 1000);
});