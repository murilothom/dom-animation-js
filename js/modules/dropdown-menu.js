import outsideClick from "./outsideClick.js";

const dropdownMenus = document.querySelectorAll("[data-dropdown]");

const dropDownMenu = () => {
  dropdownMenus.forEach((menu) => {
    const events = ["click", "touchstart"];

    events.forEach((userEvent) => {
      menu.addEventListener(userEvent, (e) => {
        e.preventDefault();
        menu.classList.add("active");
        outsideClick(menu, events, () => {
          menu.classList.remove("active");
        });
      });
    });
  });
};

export default dropDownMenu();
