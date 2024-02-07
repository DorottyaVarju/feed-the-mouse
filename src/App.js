import './App.css';
import './components/WordToGuess.js';
import WordToGuess from './components/WordToGuess.js';
import LettersToTry from './components/LettersToTry.js';

function App() {
  return (
    <div className="App">
      <p id = "wordToGuess"></p>
      <WordToGuess></WordToGuess>
      <LettersToTry></LettersToTry>
    </div>
  );
}

export default App;
