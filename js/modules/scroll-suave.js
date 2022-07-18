// animacao de scroll para item do menu selecionado

const linksInternos = document.querySelectorAll(
  '[data-menu="anime"] a[href^="#"]'
);

export default linksInternos.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
