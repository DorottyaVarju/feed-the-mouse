import './App.css';
import CategoryAndNumOfLettersToChoose from './components/CategoryAndNumOfLettersToChoose.js';
import WordToGuess from './components/WordToGuess.js';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/game" element={<WordToGuess />} />
          <Route exact path="/" element={<CategoryAndNumOfLettersToChoose />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
