const numeros = document.querySelectorAll("[data-numero]");

const animaNumeros = () => {
  numeros.forEach((numero) => {
    const total = Number(numero.innerText);

    let start = 0;
    const timer = setInterval(() => {
      start += total / 100;
      numero.innerText = start.toFixed(0);
      if (start >= total) {
        clearInterval(timer);
        numero.innerText = total;
      }
    }, 25 * Math.random());
  });
};

const observer = new MutationObserver((mutation) => {
  if (mutation[0].target.classList.contains("ativo")) {
    observer.disconnect();
    animaNumeros();
  }
});

const observeTarget = document.querySelector(".numeros");
observer.observe(observeTarget, { attributes: true });

export default animaNumeros;
