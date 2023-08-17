import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();

  function handleEvent(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, description, date }),
    }).then((response) => {
      response.json().then((json) => {
        console.log("result", json);
      });
    });
    console.log(url);
  }
  return (
    <main>
      <h1>
        $400 <span>.00</span>
      </h1>
      <form onSubmit={handleEvent}>
        <div className="basics">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={"+200 new Samsung Tv"}
          ></input>
          <input
            type="datetime-local"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          ></input>
        </div>
        <div className="decription">
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder={"decription"}
          ></input>
        </div>
        <button tyoe="submit" onClick={handleEvent}>
          Add new Transactions
        </button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung Tv</div>
            <div className="description">It is time for a new Tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-08-16 23:29</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Website gig</div>
            <div className="description">It is time for a new Tv</div>
          </div>
          <div className="right">
            <div className="price green">+$500</div>
            <div className="datetime">2023-08-16 23:29</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">It is time for a new Tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-08-16 23:29</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
