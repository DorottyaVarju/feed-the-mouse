import React from "react";
import '../css/HangmanDisplay.css';
import { useEffect } from "react";
import ladderEasy from '../images/ladderEasy.png';
import ladderMedium from '../images/ladderMedium.png';
import ladderHard from '../images/ladderHard.png';
import rung from '../images/rung.png';

function HangmanDisplay(props) {

    const { word, goodGuess } = props;
    document.getElementById("drawingDiv").style.opacity = "1";

    let ladder = document.getElementById('ladder');
    let rung1 = document.getElementById('rung1');
    let cheese = document.getElementsByClassName('cheese')[0];
    let bodyHeight = document.body.clientHeight;
    let bodyWidth = document.body.clientWidth;
    let ladderfoot;

    switch (word.length) {
        case 5:
            if (bodyHeight > 800) {
                if(bodyWidth > 769){
                    cheese.style.marginLeft = '75px';
                    cheese.style.marginTop = '-33.5px';
                    if (ladder !== null) {
                        rung1.style.marginTop = '-190px';
                    }
                } else {
                    cheese.style.marginLeft = '3.5rem';
                    cheese.style.marginTop = '-40.5px'; 
                    if (ladder !== null) {
                        rung1.style.marginTop = '-162px';
                    }
                }
            } else {
                cheese.style.marginLeft = '3.5rem';
                cheese.style.marginTop = '-40.5px'; 
            }
            ladderfoot = ladderMedium;
            break;
        case 6:
            if (bodyHeight > 800) {
                if(bodyWidth > 769){
                    cheese.style.marginLeft = '75px';
                    cheese.style.marginTop = '-32.5px';
                    if (ladder !== null) {
                        rung1.style.marginTop = '-163px';
                    }
                } else {
                    cheese.style.marginLeft = '50px';
                    cheese.style.marginTop = '-40.5px'; 
                    if (ladder !== null) {
                        rung1.style.marginTop = '-145px';
                    }
                }
            } else {
                cheese.style.marginLeft = '50px';
                cheese.style.marginTop = '-40.5px'; 
            }

            ladderfoot = ladderMedium;
            break;
        case 7:
            ladderfoot = ladderHard;
            break;
        default:
            if (bodyHeight > 800) {
                if(bodyWidth > 769){
                    cheese.style.marginLeft = '67px';
                    cheese.style.marginTop = '53.5px';
                    if (ladder !== null) {
                        rung1.style.marginTop = '-170px';
                    }
                } else {
                    cheese.style.marginLeft = '50px';
                    cheese.style.marginTop = '30.5px'; 
                    if (ladder !== null) {
                        rung1.style.marginTop = '-150px';
                    }
                }
            } else {
                cheese.style.marginLeft = '50px';
                cheese.style.marginTop = '30.5px'; 
            }
            ladderfoot = ladderEasy;
    }

    useEffect(() => {

        if (goodGuess > 0) {
            document.getElementById("ladderfootleft").style.opacity = "1";
        }

        if (goodGuess > 1) {
            document.getElementById("ladderfootright").style.opacity = "1";
        }

        if (goodGuess > 2) {
            document.getElementById("rung5").style.opacity = "1";
        }

        if (goodGuess > 3) {
            document.getElementById("rung4").style.opacity = "1";
        }

        if (goodGuess > 4) {
            document.getElementById("rung3").style.opacity = "1";
        }

        if (goodGuess > 5) {
            document.getElementById("rung2").style.opacity = "1";
        }

        if (goodGuess > 6) {
            document.getElementById("rung1").style.opacity = "5";
        }

    }, [goodGuess]);

    return (
        <div id="ladder">
            <div id="ladderFootDiv">
                <img className="ladderfoot" id="ladderfootleft" alt="ladderfootleft" src={ladderfoot} title="ladderfootleft"></img>
                <img className="ladderfoot" id="ladderfootright" alt="ladderfootright" src={ladderfoot} title="ladderfootright"></img>
            </div>
            <div id="rungDiv">
                <img className="rung" id="rung1" alt="rung1" src={rung} title="rung"></img>
                <img className="rung" id="rung2" alt="rung2" src={rung} title="rung"></img>
                <img className="rung" id="rung3" alt="rung3" src={rung} title="rung"></img>
                <img className="rung" id="rung4" alt="rung4" src={rung} title="rung"></img>
                <img className="rung" id="rung5" alt="rung5" src={rung} title="rung"></img>
            </div>
        </div>
    );
}

export default HangmanDisplay;