import { Route, Routes } from 'react-router-dom';
import './App.css';
import CategoryAndNumOfLettersToChoose from './components/CategoryAndNumOfLettersToChoose.js';
import WordToGuess from './components/WordToGuess.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/game" element={<WordToGuess />} />
        <Route path="/" element={<CategoryAndNumOfLettersToChoose />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
