const modal = document.querySelector(".modal-container");
const botaoAbrir = document.querySelector('.menu [data-modal="abrir"]');
const botaoFechar = document.querySelector(
  '.modal-container [data-modal="fechar"]'
);

const modalTela = () => {
  botaoAbrir.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("ativo");
  });
  botaoFechar.addEventListener("click", (e) => {
    modal.classList.remove("ativo");
  });
  modal.addEventListener("click", (e) => {
    if (!e.target.classList.contains("ativo")) return;
    modal.classList.remove("ativo");
  });
};

export default modalTela();
