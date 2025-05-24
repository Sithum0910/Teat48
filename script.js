document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Optional: close menu when a nav link is clicked (on mobile)
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
});
