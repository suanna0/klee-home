gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const goToTopBtn = document.getElementById("goToTop");
  goToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  gsap.to("#downArrow", {
    opacity: 1,
    delay: 0.5,
    duration: 0.5,
    ease: "power2.out"
  });

  // Scroll to main site on click
  document.getElementById("downArrow").addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: "#mainSite",
      duration: 1,
      ease: "power2.inOut"
    });
  });

  gsap.utils.toArray("p").forEach((pEl) => {
    gsap.from(pEl, {
      scrollTrigger: {
        trigger: pEl,
        start: "top 80%",
      },
      y: 15,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out"
    });
  });

  gsap.utils.toArray("img").forEach((imgEl) => {
    gsap.from(imgEl, {
      scrollTrigger: {
        trigger: imgEl,
        start: "top 80%",
      },
      y: 10,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  });

  gsap.utils.toArray("iframe").forEach((videoEl) => {
    gsap.from(videoEl, {
      scrollTrigger: {
        trigger: videoEl,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  });
});

const carousel = document.querySelector(".carousel");
  const cards = gsap.utils.toArray(".card");

  // Duplicate cards to simulate seamless loop
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    carousel.appendChild(clone);
  });

  const totalWidth = carousel.scrollWidth / 2;

  gsap.to(carousel, {
    x: `-=${totalWidth}`,
    duration: 20,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
    }
  });

  gsap.utils.toArray(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -100,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      duration: 0.4,
      ease: "power2.inOut"
    });
  });
});
