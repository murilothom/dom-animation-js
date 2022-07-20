import scrollSuave from "./modules/scroll-suave.js";
import scrollAnim from "./modules/animacao-scroll.js";
import accordion from "./modules/accordion.js";
import imgAnim from "./modules/animacao-img.js";
import modal from "./modules/modal.js";
import tooltip from "./modules/tooltip.js";
import dropDownMenu from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import animaNumeros from "./modules/anima-numeros.js";
import funcionamentoDias from "./modules/funcionamento-dias.js";
import priceBtc from "./modules/fetch-bitcoin.js";
import { SlideNav } from "./modules/slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();

slide.addControl(".custom-controls");
