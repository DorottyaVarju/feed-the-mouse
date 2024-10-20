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
    let rung2 = document.getElementById('rung2');
    let rung3 = document.getElementById('rung3');
    let rung4 = document.getElementById('rung4');
    let rung5 = document.getElementById('rung5');
    let rungs = document.getElementsByClassName('rung');
    let ladderfoot;

    switch (word.length) {
        case 5:
            if (ladder !== null) {
                ladder.style.height = '132px';
                for (let i = 0; i < rungs.length; i++) {
                    rungs[i].style.width = '90px';
                }
                rung3.style.marginLeft = '15px';
                rung4.style.marginLeft = '5px';
                rung5.style.marginLeft = '-5px';
            }
            ladderfoot = ladderMedium;
            break;
        case 6:
            if (ladder !== null) {
                ladder.style.height = '175px';
                for (let i = 0; i < rungs.length; i++) {
                    rungs[i].style.width = '115px';
                }
                rung2.style.marginLeft = '20px';
                rung3.style.marginLeft = '10px';
                rung4.style.marginLeft = '0px';
                rung5.style.marginLeft = '-10px';
            }
            ladderfoot = ladderMedium;
            break;
        case 7:
            ladderfoot = ladderHard;
            break;
        default:
            if (ladder !== null) {
                ladder.style.height = '108px';
                for (let i = 0; i < rungs.length; i++) {
                    rungs[i].style.width = '108px';
                }
                rung4.style.marginLeft = '10px';
                rung5.style.marginLeft = '-10px';
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