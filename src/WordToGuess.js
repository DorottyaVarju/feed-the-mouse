import React from "react";

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

        setOfWords.forEach(searchForTheValueFromSetOfWordsWithTheIndexOfRandomWord);

        function searchForTheValueFromSetOfWordsWithTheIndexOfRandomWord(item, index){

            if(index === indexOfRandomWord){
                    wordToGuess = item;
            } 

        }

        elementToSetItsInnertext.innerText = wordToGuess;
    }

    return <button type="button" onClick={returnAWordToGuess}>I want a word!</button>

}

export default WordToGuess;