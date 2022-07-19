import outsideClick from "./outsideClick.js";

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

const events = ["click", "touchstart"];

const menuMobile = () => {
  events.forEach((event) => {
    menuButton.addEventListener(event, (e) => {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(menuList, events, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    });
  });
};
export default menuMobile();
