new fullpage('#fullpage', {
    anchors: ['intro', 'about-me', 'portfolio-1', 'portfolio-2', 'more-info'],
});

// 커서
$(window).on('mousemove', (e) => {
    $('.cursor-default').css({
        top: e.pageY + 'px',
        left: e.pageX + 'px',
    });
});

document.body.addEventListener('mousemove', (evt) => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;

    gsap.set('.cursor', {
        x: mouseX,
        y: mouseY,
    });

    gsap.to('.shape', {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
    });
});

// intro 이모지 슬라이드
$(document).ready(function () {
    $('.emoji-slick').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        vertical: true,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
    });
});

jQuery.rnd = function (m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
};

initparticles();
