import React from "react";
import '../css/LettersToTry.css';

function LettersToTry(props) {

    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    //let word = 'APPLE';
    let word = props.word;
    let onWrongLetter = props.onWrongLetter;

    const elementsToReturn = abc.map((item, index) => {
        const handleClick = () => isThisLetterInTheWord(item);
        return (
          <button type="button" id={item} className="letters" key={index} onClick={handleClick}>
            {item}
          </button>
        );
      });
      

    let letterAboveLine = document.getElementsByClassName('letterAboveLine');
    
    function isThisLetterInTheWord(letterOfAbc) {
        let letterFound = false;
        let letterOfAbcElement = document.getElementById(letterOfAbc);
        (Array.from(word)).forEach((letterOfWord, indexOfWord) => {
            if (letterOfWord === letterOfAbc) {
                letterFound = true;
//                console.log(letterAboveLine);
                (Array.from(letterAboveLine)).forEach((line, indexOfLine) => {
                    if (indexOfLine === indexOfWord) {
                        line.innerText = letterOfWord;

                        if (!(letterOfAbcElement.classList.contains('alreadyInWordLetter'))) {
                            letterOfAbcElement.classList.add('alreadyInWordLetter');
                        }
                    }

                });

                if ((document.querySelectorAll('.alreadyInWordLetter')).length === word.length) {
                    document.getElementById('checkmark').style.opacity = 1;
                    Array.from(document.getElementsByClassName('letters')).forEach((letter) => {
                        letter.classList.add('untriedLetter');
                    });
                } else {
                    const indexes = [];
                    (Array.from(document.querySelectorAll('.alreadyInWordLetter'))).forEach((charElement) => {
                        const char = charElement.textContent;
                        let index = -1;
                        
                        do {
                          index = word.indexOf(char, index + 1);
                          if (index !== -1) {
                            indexes.push(index);
                          }
                        } while (index !== -1);

//                        console.log(indexes);
                    }); 

                    if(indexes.length === word.length){
                        document.getElementById('checkmark').style.opacity = 1;
                        Array.from(document.getElementsByClassName('letters')).forEach((letter) => {
                            letter.classList.add('untriedLetter');
                        });
                    }
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