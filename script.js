const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

// mostrar na tela a descriacao da imagem que esta sendo clicada

const activeTab = (index) => {
  tabContent.forEach((section) => {
    section.classList.remove("ativo");
  });
  tabContent[index].classList.add("ativo");
};

tabMenu.forEach((item, index) => {
  item.addEventListener("click", () => {
    activeTab(index);
  });
});

// mostrando a resposta da pergunta do faq clicada

const listFaq = document.querySelectorAll(".js-accordion dt");

listFaq.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("ativo");
  });
});

// animacao de scroll para item do menu selecionado

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

linksInternos.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // const topo = section.offsetTop;
    // scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  });
});

// animando ao scrollar da pagina

const sections = document.querySelectorAll(".js-scroll");

function scrollAnim() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - window.innerHeight * 0.6 < 0;
    isSectionVisible && section.classList.add("ativo");
    !isSectionVisible && section.classList.remove("ativo");
  });
}

scrollAnim();

window.addEventListener("scroll", scrollAnim);
