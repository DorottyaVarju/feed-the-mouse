import { useState } from "react";
import React from "react";
import '../css/WordToGuess.css';
import LettersToTry from './LettersToTry.js';
import HangmanDisplay from './HangmanDisplay.js';
import checkmark from'../images/checkmark.png';

function WordToGuess(){

    const [linesForWordToGuess, setLinesForWordToGuess] = useState([]);
    const [word, setWord] = useState([]);
    const [wrongGuess, setWrongGuess] = useState(0);
    const [wordSelected, setWordSelected] = useState(false);

const queryParameters = new URLSearchParams(window.location.search)
  const category = queryParameters.get("category")
  const level = queryParameters.get("level")
    let setOfWords;

    console.log(category);
    if(category === 'nature'){
        if(level === 'easy'){ //3-5 letters
            setOfWords = [
                'PEAR',
                'TREE',
                'FLY',
                'BIRD',
                'GRASS',
                'LION',
                'RAIN'
            ]
        } else if(level === 'medium'){ //6-8 letters
            setOfWords = [
                'ANTELOPE',
                'DESERT'
            ]
        } else {
            setOfWords = [ // >8 letters
                'BUTTERFLY',
                'HIGHLANDS'
            ]
        }
    } else if(category === 'entertainment'){
        if(level === 'easy'){
            setOfWords = [
                'FILM',
                'BOOK',
                'ACTOR',
                'FUN'
            ]
        } else if(level === 'medium'){
            setOfWords = [
                'CINEMA',
                'THEATRE'
            ]
        } else {
            setOfWords = [
                'NIGHTCLUB'
            ]
        }
    } else {
        if(level === 'easy'){
            setOfWords = [
                'JOB',
                'FLAT'
            ]
        } else if(level === 'medium'){
            setOfWords = [
                'PEOPLE',
                'FRIEND',
                'COMPANY'
            ]
        } else {
            setOfWords = [
                'SCIENTIST',
                'CIVILIZATION'
            ]
        }
    }

    function returnAWordToGuess() {

        let indexOfRandomWord = Math.floor(Math.random() * setOfWords.length);

        setOfWords.forEach(searchForTheValueFromSetOfWordsWithTheIndexOfRandomWord);

        function searchForTheValueFromSetOfWordsWithTheIndexOfRandomWord(item, index){

            if(index === indexOfRandomWord){
                    let word = item;
                    let linesForWordToGuess = [];

                    (Array.from(item)).forEach((letterOfWordToGuess, indexOfLetterOfWordToGuess)=>{
                        linesForWordToGuess.push(<span key={"letterAndLineContainer"+indexOfLetterOfWordToGuess} className="letterAndLineContainer"><span key={"letterAboveLine"+indexOfLetterOfWordToGuess} className="letterAboveLine"></span><span key={indexOfLetterOfWordToGuess} className="lineForWordToGuess">&nbsp;_______&nbsp;</span></span>);
                    });
                    setLinesForWordToGuess(linesForWordToGuess);
                    setWord(word);
                    setWrongGuess(0);
                    setWordSelected(true);
            } 

        }

        const elements = document.getElementsByClassName('letterAboveLine');
            for (let i = 0; i < elements.length; i++) {
            elements[i].innerText = '';
        }

        document.getElementById('checkmark').style.opacity = 0;

        let lettersOfAbcFromThePreviousWord = document.getElementsByClassName('letters');
        (Array.from(lettersOfAbcFromThePreviousWord)).forEach((letterFromPreviousWord, indexOfLetterFromPreviousWord)=>{
            letterFromPreviousWord.classList.remove('alreadyInWordLetter');
            letterFromPreviousWord.classList.remove('wrongLetterGuess');
        });

        return [linesForWordToGuess, word];
    }

    const backToMainPage = () => {
        window.location.href = '/';
    };

    return(
        <div>
            {linesForWordToGuess}
            <img src={checkmark} alt="checkmark" id="checkmark"></img>
            <button id="backBtn" onClick={backToMainPage}>Back to the main page!</button>
            <br></br>
            {wordSelected && <HangmanDisplay wrongGuess={wrongGuess}></HangmanDisplay>}
            <br></br>
            <br></br>
            <button type="button" onClick={returnAWordToGuess} id="btnIWantAWord">I want a word!</button>
            <LettersToTry word={word} onWrongLetter={() => setWrongGuess(wrongGuess + 1)}></LettersToTry>
        </div>
    )

}

export default WordToGuess;