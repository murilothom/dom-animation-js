import outsideClick from "./outsideClick.js";

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

const menuMobile = () => {
  menuButton.addEventListener("click", () => {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideClick(menuList, ["click", "touchstart"], () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  });
};
export default menuMobile();
