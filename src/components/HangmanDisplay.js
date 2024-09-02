import React from "react";
import '../css/HangmanDisplay.css';
import {useEffect } from "react";
import ladderfoot from '../images/ladderfoot.png';
import rung from '../images/rung.png';

function HangmanDisplay({wrongGuess}){

    document.getElementById("drawingDiv").style.opacity = "1";

    if(document.getElementById("ladderfootleft") !== null){
        document.getElementById("ladderfootleft").style.opacity = "0";
        document.getElementById("ladderfootright").style.opacity = "0";
        document.getElementById("rung5").style.opacity = "0";
        document.getElementById("rung4").style.opacity = "0";
        document.getElementById("rung3").style.opacity = "0";
        document.getElementById("rung2").style.opacity = "0";
        document.getElementById("rung1").style.opacity = "0";
    }

    useEffect(() => {

        if (wrongGuess > 0) {
            document.getElementById("ladderfootleft").style.opacity = "1";
        }

        if (wrongGuess > 1) {
            document.getElementById("ladderfootright").style.opacity = "1";
        }

        if (wrongGuess > 2) {
            document.getElementById("rung5").style.opacity = "1";
        }

        if (wrongGuess > 3) {
            document.getElementById("rung4").style.opacity = "1";
        }

        if (wrongGuess > 4) {
            document.getElementById("rung3").style.opacity = "1";
        }

        if (wrongGuess > 5) {
            document.getElementById("rung2").style.opacity = "1";
        }

        if (wrongGuess > 6) {
            document.getElementById("rung1").style.opacity = "5";
        }

    }, [wrongGuess]);

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