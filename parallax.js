document.querySelectorAll(".parallax-wrap").forEach(parallaxWrap =>
    document.addEventListener("mousemove", ({ clientX, clientY }) => {
        parallaxWrap.style.setProperty("--x", clientX);
        parallaxWrap.style.setProperty("--y", clientY);
    }),
);

