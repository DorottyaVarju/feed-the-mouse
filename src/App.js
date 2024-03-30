import './App.css';
import CategoryAndNumOfLettersToChoose from './components/CategoryAndNumOfLettersToChoose.js';
import WordToGuess from './components/WordToGuess.js';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/game" component={<WordToGuess/>} />
          <Route exact path="/" component={<CategoryAndNumOfLettersToChoose/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
