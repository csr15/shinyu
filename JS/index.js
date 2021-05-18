var t1 = gsap.timeline({
  defaults: { duration: 0.7, opacity: 0 },
});

t1.from(".header-content h1", { delay: 0.5, y: 300, opacity: 0.5 }, "");
t1.from(".header-content h2", { delay: 0.5, y: 300, opacity: 0.5 }, "-=1.1");

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
    start: "center",
  },
});
t2.from(".apps .col-md-5 img", { delay: 0, x: 300, opacity: 0 }, "");

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apps",
    start: "center",
  },
});
t3.from(".article-1 img", { delay: 0, y: 100, opacity: 0 }, "");

const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".article-1",
    start: "center",
  },
});
t4.from(".article-2 img", { delay: 0, y: 100, opacity: 0 }, "-=1");

const t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".article-2",
    start: "center",
  },
});
t5.from("#img1", { delay: 0, y: 100, opacity: 0 }, "-=1");
t5.from("#img2", { delay: 0, y: 100, opacity: 0 }, "-=0.8");
t5.from("#img3", { delay: 0, y: 100, opacity: 0 }, "-=0.3");
t5.from(".carousel-item img", { delay: 0, scale: 0, opacity: 0 });

const t6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".categories",
    start: "center",
  },
});
t6.from(".walked img", { delay: 0, x: 100, opacity: 0 });

const t7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner",
    start: "center",
  },
});
t7.from(".walk-through img", { delay: 0, x: -100, opacity: 0 });

const t8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".bridge-banner",
    start: "center",
  },
});
t8.from(".intro img", { delay: 0, scale: 3, opacity: 0 });

const t9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    start: "center",
  },
});
t8.from("#bottomBannerImg", { delay: 0, y: 200, opacity: 0 });
