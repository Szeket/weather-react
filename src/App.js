import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather />
        <footer>
          Coded by
          <a href="https://github.com/Szeket/weather-react"> Szeket</a>
        </footer>
      </header>
    </div>
  );
}

export default App;
