import React, { useEffect } from "react";
import '../css/LettersToTry.css';
import nocheese from '../images/nocheese.png';

function LettersToTry(props) {
    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const { word, wrongGuess, onWrongLetter } = props;
    const letterAboveLine = document.getElementsByClassName('letterAboveLine');
    const handleKeyUp = (event) => {
        const letter = event.key.toUpperCase();
        if (abc.includes(letter)) {
            isThisLetterInTheWord(letter);
        }
    };

    useEffect(() => {

        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [word, wrongGuess, onWrongLetter]);

    const handleClick = (item) => () => {
        isThisLetterInTheWord(item);
    };

    const elementsToReturn = abc.map((item, index) => (
        <button
            type="button"
            id={item}
            className="letters"
            key={index}
            tabIndex="0"
            onClick={handleClick(item)}
        >
            {item}
        </button>
    ));

    const unTriedLetter = () => {
        document.getElementById('mark').style.opacity = 1;
        Array.from(document.getElementsByClassName('letters')).forEach((letter) => {
            letter.classList.add('untriedLetter');
        });
        document.getElementById('mouse').src = nocheese;
        document.removeEventListener('keyup', handleKeyUp);
    };

    function isThisLetterInTheWord(letterOfAbc) {
        let letterFound = false;
        let letterOfAbcElement = document.getElementById(letterOfAbc);

        Array.from(word).forEach((letterOfWord, indexOfWord) => {
            if (letterOfWord === letterOfAbc) {
                letterFound = true;
                Array.from(letterAboveLine).forEach((line, indexOfLine) => {
                    if (indexOfLine === indexOfWord) {
                        line.innerText = letterOfWord;
                        if (!letterOfAbcElement.classList.contains('alreadyInWordLetter')) {
                            letterOfAbcElement.classList.add('alreadyInWordLetter');
                        }
                    }
                });

                if (document.querySelectorAll('.alreadyInWordLetter').length === word.length) {
                    unTriedLetter();
                } else {
                    const indexes = [];
                    Array.from(document.querySelectorAll('.alreadyInWordLetter')).forEach((charElement) => {
                        const char = charElement.textContent;
                        let index = -1;
                        do {
                            index = word.indexOf(char, index + 1);
                            if (index !== -1) {
                                indexes.push(index);
                            }
                        } while (index !== -1);
                    });

                    if (indexes.length === word.length) {
                        unTriedLetter();
                    }
                }
            }
        });

        if (!letterFound && onWrongLetter) {
            onWrongLetter();
            letterOfAbcElement.classList.add('wrongLetterGuess');
            //            console.log(wrongGuess);
            if (wrongGuess > 5) {
                unTriedLetter();
                Array.from(word).forEach((letterOfWord, indexOfWord) => {
                    Array.from(letterAboveLine).forEach((line, indexOfLine) => {
                        if (indexOfLine === indexOfWord) {
                            line.innerText = letterOfWord;
                        }
                    });
                });
            }
        }
    }

    return <div id="elementsToReturn">{elementsToReturn}</div>;
}

export default LettersToTry;
