import './App.css';
import './components/WordToGuess.js';
import WordToGuess from './components/WordToGuess.js';

function App() {
  return (
    <div className="App">
      <p id = "wordToGuess"></p>
      <WordToGuess></WordToGuess>
    </div>
  );
}

export default App;
