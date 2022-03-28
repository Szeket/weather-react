import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
          <footer>
            Coded by
            <a href="https://github.com/Szeket/weather-react"> Szeket</a>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
