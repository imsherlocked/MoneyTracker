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
      </form>
    </main>
  );
}

export default App;
