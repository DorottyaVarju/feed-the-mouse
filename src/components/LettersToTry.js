import React from "react";
import '../css/LettersToTry.css';

function LettersToTry(props) {

    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    //let word = 'APPLE';
    let word = props.word;
    let onWrongLetter = props.onWrongLetter;
    let elementsToReturn = [];


    abc.forEach((item, index) => {
        elementsToReturn.push(<button type="button" id={item} className="letters" key={index} onClick={() => isThisLetterInTheWord(item)}>{item}</button>);
    })

    let letterAboveLine = document.getElementsByClassName('letterAboveLine');
    let numOfLettersInTheWord = 0;
    
    function isThisLetterInTheWord(letterOfAbc) {
        let letterFound = false;
        let letterOfAbcElement = document.getElementById(letterOfAbc);
        (Array.from(word)).forEach((letterOfWord, indexOfWord) => {
            if (letterOfWord === letterOfAbc) {
                letterFound = true;
                console.log(letterAboveLine);
                (Array.from(letterAboveLine)).forEach((line, indexOfLine) => {
                    if (indexOfLine === indexOfWord) {
                        line.innerText = letterOfWord;
                        if (!(letterOfAbcElement.classList.contains('alreadyInWordLetter'))) {
                            letterOfAbcElement.classList.add('alreadyInWordLetter');
                        }
                    }

                    if (line.innerText !== '') {
                        numOfLettersInTheWord++;
                    }

                });
                console.log(numOfLettersInTheWord);

                if (numOfLettersInTheWord === word.length) {
                    document.getElementById('checkmark').style.opacity = 1;
                }

            }
        });


        if (!letterFound && onWrongLetter) {
            onWrongLetter();
            letterOfAbcElement.classList.add('wrongLetterGuess');
        }
    }

    return <div id="elementsToReturn">{elementsToReturn}</div>;

}

export default LettersToTry;