let header = document.querySelector('header');
let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
let ticking = false;

function scrollHandler() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    // scrolled down -- header hide
    header.classList.add("scroll-down");
    header.classList.remove("scroll-up");
  } else if (currentScroll < lastScroll && !header.classList.contains("scroll-up")) {
    // scrolled up -- header show
    header.classList.add("scroll-up");
    header.classList.remove("scroll-down");
  }

  lastScroll = currentScroll;
  ticking = false;
}



window.addEventListener("scroll", function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      scrollHandler();
      ticking = false;
    });
    ticking = true;
  }
});