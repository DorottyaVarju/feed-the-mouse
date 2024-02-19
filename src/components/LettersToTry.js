import React from "react";
import '../css/LettersToTry.css';

function LettersToTry(props){

    const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//    let word = 'APPLE';
    let word = props.word;
    let onWrongLetter = props.onWrongLetter;
    let elementsToReturn = [];


    abc.forEach((item, index)=>{
        elementsToReturn.push(<button type="button" className="letters" key={index} onClick={() => isThisLetterInTheWord(item)}>{item}</button>);
    })
    let numOfLettersInTheWord = 0;
    function isThisLetterInTheWord(letterOfAbc){
        let letterFound = false;
        (Array.from(word)).forEach((letterOfWord, indexOfWord)=>{
            if(letterOfWord === letterOfAbc){
                letterFound = true;
                let letterAboveLine = document.getElementsByClassName('letterAboveLine');
//                console.log(letterAboveLine);
                (Array.from(letterAboveLine)).forEach((line, indexOfLine)=>{
                    if(indexOfLine === indexOfWord){
                        numOfLettersInTheWord++;
                        line.innerText = letterOfWord;
                    }
                });
//                console.log(numOfLettersInTheWord);

                if(numOfLettersInTheWord === word.length){
                    document.getElementById('checkmark').style.opacity = 1;
                }
            }
        });

        if (!letterFound && onWrongLetter) {
            onWrongLetter();
        }

    }

    return <div id="elementsToReturn">{elementsToReturn}</div>;

}

export default LettersToTry;