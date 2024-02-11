import React from "react";
import '../css/LettersToTry.css';

function LettersToTry(props){

    const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//    let word = 'APPLE';
    let word = props.word;
    let elementsToReturn = [];


    abc.forEach((item, index)=>{
        elementsToReturn.push(<button type="button" className="letters" key={index} onClick={() => isThisLetterInTheWord(item)}>{item}</button>);
    })
    
    
    function isThisLetterInTheWord(letterOfAbc){
        (Array.from(word)).forEach((letterOfWord, indexOfWord)=>{
            if(letterOfWord === letterOfAbc){
                let letterAboveLine = document.getElementsByClassName('letterAboveLine');
//                console.log(letterAboveLine);
                (Array.from(letterAboveLine)).forEach((line, indexOfLine)=>{
                    if(indexOfLine === indexOfWord){
                        line.innerText = letterOfWord;
                    }
                });
            }
        });
    }

    return <div id="elementsToReturn">{elementsToReturn}</div>;

}

export default LettersToTry;