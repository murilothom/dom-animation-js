// animando ao scrollar da pagina

const sections = document.querySelectorAll('[data-anime="scroll"]');

export default function scrollAnim() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - window.innerHeight * 0.6 < 0;
    if (isSectionVisible) section.classList.add("ativo");
    else if (section.classList.contains("ativo"))
      section.classList.remove("ativo");
  });
}

scrollAnim();

window.addEventListener("scroll", scrollAnim);
