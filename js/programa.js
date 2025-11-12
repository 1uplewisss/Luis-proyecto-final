const menuBtn = document.getElementById("menu-btn");
const mainNav = document.getElementById("main-nav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("active");

  if (mainNav.classList.contains("active")) {
    mainNav.animate(
      [
        { transform: "translateX(100%) scale(0.8)", opacity: 0 },
        { transform: "translateX(-10%) scale(1.05)", opacity: 1 },
        { transform: "translateX(0) scale(1)", opacity: 1 }
      ],
      {
        duration: 600,
        easing: "cubic-bezier(0.25, 1.25, 0.5, 1)"
      }
    );

    mainNav.animate(
      [
        { opacity: 1 },
        { opacity: 0.6 },
        { opacity: 1 },
        { opacity: 0.7 },
        { opacity: 1 }
      ],
      {
        duration: 800,
        delay: 400,
        iterations: 1,
        easing: "ease-in-out"
      }
    );
  } else {
    mainNav.animate(
      [
        { transform: "translateX(0)", opacity: 1 },
        { transform: "translateX(100%)", opacity: 0 }
      ],
      {
        duration: 400,
        easing: "ease-in"
      }
    );
  }
});
