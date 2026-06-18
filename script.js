const revealElements = document.querySelectorAll(
  ".reveal-up, .reveal-left, .reveal-right, .reveal-scale"
);

const revealOnScroll = () => {
  revealElements.forEach((element, index) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      setTimeout(() => {
        element.classList.add("active");
      }, index * 40);
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* Better mobile touch animation */
const touchCards = document.querySelectorAll(
  ".project-card, .animated-paragraph, .skill-list span, .btn"
);

touchCards.forEach((item) => {
  item.addEventListener("touchstart", () => {
    item.classList.add("touch-active");
  });

  item.addEventListener("touchend", () => {
    setTimeout(() => {
      item.classList.remove("touch-active");
    }, 300);
  });
});
