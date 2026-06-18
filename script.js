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
<<<<<<< HEAD
const touchCards = document.querySelectorAll(
  ".project-card, .animated-paragraph, .skill-list span, .btn"
);

touchCards.forEach((item) => {
=======
const touchItems = document.querySelectorAll(
  ".project-card, .animated-paragraph, .skill-list span, .btn"
);

touchItems.forEach((item) => {
>>>>>>> 0ba7288 (update)
  item.addEventListener("touchstart", () => {
    item.classList.add("touch-active");
  });

  item.addEventListener("touchend", () => {
    setTimeout(() => {
      item.classList.remove("touch-active");
    }, 300);
  });
});
<<<<<<< HEAD
=======

/* Smooth page link animation */
const pageLinks = document.querySelectorAll("a[href$='.html']");

pageLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = this.getAttribute("href");

    if (target && !target.startsWith("#")) {
      e.preventDefault();

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 350);
    }
  });
});
>>>>>>> 0ba7288 (update)
