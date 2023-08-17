import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main>
      <h1>
        $400 <span>.00</span>
      </h1>
      <form>
        <div className="basics">
          <input type="text" placeholder={"+200 new Samsung Tv"}></input>
          <input type="datetime-local"></input>
        </div>
        <div className="decription">
          <input type="text" placeholder={"decription"}></input>
        </div>
        <button tyoe="submit">Add new Transactions</button>
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
