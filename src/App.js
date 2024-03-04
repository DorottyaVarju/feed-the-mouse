import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './components/WordToGuess.js';
import WordToGuess from './components/WordToGuess.js';

function App() {
  return (
    <div className="App">
      <WordToGuess></WordToGuess>
    </div>
  );
}

export default App;
