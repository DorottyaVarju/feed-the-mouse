import React from "react";
import '../css/WordToGuess.css';

function WordToGuess(){

    function returnAWordToGuess() {

        const setOfWords = [
            'APPLE',
         /*   'PEAR',
            'ORANGE', 
            'BREAD', 
            'TABLE', 
            'COMPUTER', 
            'MOUSE',
            'BED',
            'FLOWER' */
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