import React from "react";
import '../css/LettersToTry.css';

function LettersToTry(props){

    const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//    let word = 'APPLE';
    let word = props.word;
    let elementsToReturn = [];


    abc.forEach((item, index)=>{
        elementsToReturn.push(<button type="button" id={item} className="letters" key={index} onClick={() => isThisLetterInTheWord(item)}>{item}</button>);
    })

    let numOfLettersInTheWord = 0;
    function isThisLetterInTheWord(letterOfAbc){
        let letterOfAbcElement = document.getElementById(letterOfAbc);
        let numOfLettersInTheWordThatAreNotSameAsGuess = 0;
        (Array.from(word)).forEach((letterOfWord, indexOfWord)=>{
            if(letterOfWord === letterOfAbc){
                let letterAboveLine = document.getElementsByClassName('letterAboveLine');
//                console.log(letterAboveLine);
                (Array.from(letterAboveLine)).forEach((line, indexOfLine)=>{
                    if(indexOfLine === indexOfWord && !(letterOfAbcElement.classList.contains('alreadyInWordLetter'))){
                        numOfLettersInTheWord++;
                        line.innerText = letterOfWord;
                        letterOfAbcElement.classList.add('alreadyInWordLetter');
                    }
                });
//                console.log(numOfLettersInTheWord);
                if(numOfLettersInTheWord === word.length){
                    document.getElementById('checkmark').style.opacity = 1;
                }
            } else {
                numOfLettersInTheWordThatAreNotSameAsGuess++;
//                console.log(letterOfWord + ' ' + letterOfAbc);
//                console.log(numOfLettersInTheWordThatAreNotSameAsGuess);
            }
        });

        if(numOfLettersInTheWordThatAreNotSameAsGuess === word.length) {
            letterOfAbcElement.classList.add('wrongLetterGuess');
        }
    }

    return <div id="elementsToReturn">{elementsToReturn}</div>;

}

export default LettersToTry;