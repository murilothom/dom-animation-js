// mostrar na tela a descriacao da imagem que esta sendo clicada

const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
const tabContent = document.querySelectorAll('[data-tab="content"] section');

export default tabMenu.forEach((item, index) => {
  item.addEventListener("click", () => {
    const activeTab = () => {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    };
    activeTab();
  });
});
