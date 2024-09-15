import React from "react";
import '../css/HangmanDisplay.css';
import {useEffect } from "react";
import ladderfoot from '../images/ladderfoot.png';
import rung from '../images/rung.png';

function HangmanDisplay({goodGuess}){

    document.getElementById("drawingDiv").style.opacity = "1";

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