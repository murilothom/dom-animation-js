const funcionamento = document.querySelector("[data-semana]");
const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

const funcionamentoDias = () => {
  const dateWeek = new Date().getDay();
  const hourNow = new Date().getHours();

  const diaSemanaAberto = diasSemana.indexOf(dateWeek) !== -1;
  const horarioAberto =
    hourNow >= horarioSemana[0] && hourNow < horarioSemana[1];

  if (diaSemanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
    console.log("aberto");
  } else {
    console.log("fechado");
  }
};

export default funcionamentoDias();
