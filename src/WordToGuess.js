import React from "react";
import './WordToGuess.css';

function WordToGuess(){

    function returnAWordToGuess() {

        const setOfWords = [
            'apple',
            'pear',
            'orange', 
            'bread', 
            'table', 
            'computer', 
            'mouse',
            'bed',
            'flower'
        ];
        const elementToSetItsInnertext = document.getElementById('wordToGuess');

        let indexOfRandomWord = Math.floor(Math.random() * setOfWords.length);
        let wordToGuess = '';
        let i;

        setOfWords.forEach(searchForTheValueFromSetOfWordsWithTheIndexOfRandomWord);

        function searchForTheValueFromSetOfWordsWithTheIndexOfRandomWord(item, index){

            if(index === indexOfRandomWord){
                    wordToGuess = item;
            } 

        }

        elementToSetItsInnertext.innerText = '';

        for(i = 0; i < wordToGuess.length; i++) {
            elementToSetItsInnertext.innerText += '_______\u00A0\u00A0\u00A0';
        }

    }

    return <button type="button" onClick={returnAWordToGuess}>I want a word!</button>

}

export default WordToGuess;