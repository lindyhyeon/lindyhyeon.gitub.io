new fullpage('#fullpage', {
    anchors: ['intro', 'about-me', 'portfolio-1', 'portfolio-2', 'more-info']
});

// 커서
$(window).on("mousemove", (e) => {
  $(".cursor-default").css({
      top: e.pageY + "px",
      left: e.pageX + "px"
  });
});

document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;
  
  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY
  })
  
  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1
  })
})

// intro 이모지 슬라이드
$(document).ready(function(){
    $('.emoji-slick').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      vertical: true,
      infinite: true, 
      prevArrow: false,
      nextArrow: false,
    });
});

// aboutme 컨페티
function initparticles() {
  confetti();
}

function confetti() {
  $.each($(".particletext.confetti"), function(){
     var confetticount = ($(this).width()/50)*10;
     for(var i = 0; i <= confetticount; i++) {
        $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(10,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
     }
  });
}

jQuery.rnd = function(m,n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor( Math.random() * (n - m + 1) ) + m;
}

initparticles();
