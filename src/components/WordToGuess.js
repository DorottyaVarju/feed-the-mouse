import { useState, useEffect } from "react";
import React from "react";
import '../css/WordToGuess.css';
import LettersToTry from './LettersToTry.js';
import HangmanDisplay from './HangmanDisplay.js';
import checkmark from'../images/checkmark.png';
import xmark from'../images/xmark.png';

function WordToGuess(){

    const [linesForWordToGuess, setLinesForWordToGuess] = useState([]);
    const [word, setWord] = useState([]);
    const [wrongGuess, setWrongGuess] = useState(0);
    const [wordSelected, setWordSelected] = useState(false);

    const fragment = decodeURIComponent(window.location.hash);
    const params = fragment.split('?')[1].split('&').map(param => param.split('='));
    const queryParams = Object.fromEntries(params);
    const category = queryParams.category;
    const level = queryParams.level;
    let setOfWords;

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

        setWrongGuess(0);

        setOfWords.forEach(searchForTheValueFromSetOfWordsWithTheIndexOfRandomWord);

        function searchForTheValueFromSetOfWordsWithTheIndexOfRandomWord(item, index){

            if(index === indexOfRandomWord){
                    let word = item;

                    let linesForWordToGuess = Array.from(item).map((letterOfWordToGuess, indexOfLetterOfWordToGuess) =>
                        <li key={"letterAndLineContainer"+indexOfLetterOfWordToGuess} className="letterAndLineContainer">
                            <span key={"letterAboveLine"+indexOfLetterOfWordToGuess} className="letterAboveLine"></span>
                            <span key={indexOfLetterOfWordToGuess} className="lineForWordToGuess">&nbsp;_______&nbsp;</span>
                        </li>
                    );

                    setLinesForWordToGuess(linesForWordToGuess);
                    setWord(word);
                    setWordSelected(true);
            } 

        }

        const elements = document.getElementsByClassName('letterAboveLine');
            for (let i = 0; i < elements.length; i++) {
            elements[i].innerText = '';
        }

        document.getElementById('mark').style.opacity = 0;

        let lettersOfAbcFromThePreviousWord = document.getElementsByClassName('letters');
        (Array.from(lettersOfAbcFromThePreviousWord)).forEach((letterFromPreviousWord, indexOfLetterFromPreviousWord)=>{
            letterFromPreviousWord.classList.remove('alreadyInWordLetter');
            letterFromPreviousWord.classList.remove('wrongLetterGuess');
            letterFromPreviousWord.classList.remove('untriedLetter');
        });

        return [linesForWordToGuess, word];
    }

    const backToMainPage = () => {
        window.location.href = '/';
    //    window.location.href = '/hangman-game/';
    };
    
    useEffect(() => { 
        returnAWordToGuess();
    }, []);

    return(
        <div>
            <div id="gameDiv">
                <ul>
                    {linesForWordToGuess}
                    <li><img src={wrongGuess>6 ? xmark :checkmark} alt="mark" id="mark"></img></li>
                </ul>
                <br></br>
                {wordSelected && <HangmanDisplay wrongGuess={wrongGuess}></HangmanDisplay>}
                <br></br>
                <br></br>
                <div id="buttonDiv">
                    <button type="button" onClick={returnAWordToGuess} id="btnIWantAWord">I want another word!</button>
                    <button type="button" id="backBtn" onClick={backToMainPage}>Back to the main page!</button>
                </div>
            </div>
            <LettersToTry word={word} wrongGuess={wrongGuess} onWrongLetter={() => setWrongGuess(wrongGuess + 1)}></LettersToTry>
        </div>
    )

}

export default WordToGuess;