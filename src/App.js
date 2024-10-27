import './App.css';
import CategoryAndNumOfLettersToChoose from './components/CategoryAndNumOfLettersToChoose.js';
import WordToGuess from './components/WordToGuess.js';
import PageNotFound from './components/PageNotFound.js';
import FullscreenButton from './components/FullscreenButton';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ColorChange from './components/ColorChange.js';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/game" element={<WordToGuess />} />
          <Route exact path="/" element={<CategoryAndNumOfLettersToChoose />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
      <FullscreenButton />
      <ColorChange />
    </div>
  );
}

export default App;
