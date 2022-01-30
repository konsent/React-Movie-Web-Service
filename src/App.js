import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSeletedCoin] = useState("");
  const [myMoney, setMyMoney] = useState(0);

  const onSelectCoin = (event) => {
    setSeletedCoin(event.target.value);
  };

  const putMyMoney = (event) => {
    setMyMoney(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {console.log(selectedCoin)}
      <h1>Thc Coins!({coins.length === 0 ? "Loading" : coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={onSelectCoin}>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name}
          </option>
        ))}
      </select>
      <br></br>
      <label>보유 USD</label>
      <input value={myMoney} onChange={putMyMoney} type="number"></input>
      <label>구매가능 코인 수량</label>
      <input value={myMoney / selectedCoin} disabled="true"></input>
    </div>
  );
}

export default App;
