const priceBtc = async () => {
  try {
    const res = await fetch("https://blockchain.info/ticker");
    const json = await res.json();
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (100 / json.BRL.sell).toFixed(5);
  } catch (e) {
    console.log(Error(e));
  }
};

export default priceBtc();
