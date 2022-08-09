
import './App.css';
import Weather from './Weather';

function App() {
  let city = "Lisbon";
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello world from {city}</h1>
      <Weather />
      <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">She Code</a>
      <img src="test.png" alt="SheCodes logo" />
      </header>
    </div>
  );
}

export default App;
