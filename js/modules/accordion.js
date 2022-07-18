// mostrando a resposta da pergunta do faq clicada

const listFaq = document.querySelectorAll('[data-anime="accordion"] dt');

export default listFaq.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("ativo");
  });
});
