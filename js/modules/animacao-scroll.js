// animando ao scrollar da pagina

const sections = document.querySelectorAll('[data-anime="scroll"]');

export default function scrollAnim() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - window.innerHeight * 0.6 < 0;
    isSectionVisible && section.classList.add("ativo");
    !isSectionVisible && section.classList.remove("ativo");
  });
}

scrollAnim();

window.addEventListener("scroll", scrollAnim);
