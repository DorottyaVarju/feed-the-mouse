import React from "react";
import '../css/HangmanDisplay.css';
import {useEffect } from "react";
import cheese from '../images/cheese.png';
import ladderfoot from '../images/ladderfoot.png';
import rung from '../images/rung.png';
import mouse from '../images/mouse.png';
import yescheese from '../images/yescheese.png';

function HangmanDisplay({wrongGuess}){
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
        <div id="drawingDiv">
            <img className="mouse" id="mouse" alt="mouse" src={wrongGuess > 6 ? yescheese : mouse} title="mouse"></img>
            <div id="ladder" style={{display: 'flex', height: "100%", marginTop: "-20px"}}>
                <div style={{display: 'flex', position: "absolute", height: "100%"}}>
                    <img style={{height:'300px', width:'180px', marginRight:'-40px', opacity:'0'}} className="ladderfoot" id="ladderfootleft" alt="ladderfootleft" src={ladderfoot} title="ladderfootleft"></img>
                    <img style={{height:'300px', width:'180px', marginLeft:'-60px', opacity:'0'}} className="ladderfoot" id="ladderfootright" alt="ladderfootright" src={ladderfoot} title="ladderfootright"></img>
                </div>
                <div style={{display: 'flex', flexDirection:"column", height: '100%', position: "relative"}}>
                    <img style={{height:'360px', width:'195px', marginBottom: '-310px', marginLeft: '50px',marginTop: '-115px', opacity:'0'}} className="rung" id="rung1" alt="rung1" src={rung} title="rung"></img>
                    <img style={{height:'360px', width:'195px', marginBottom: '-310px', marginLeft: '40px', opacity:'0'}} className="rung" id="rung2" alt="rung2" src={rung} title="rung"></img>
                    <img style={{height:'360px', width:'195px', marginBottom: '-310px', marginLeft: '30px', opacity:'0'}} className="rung" id="rung3" alt="rung3" src={rung} title="rung"></img>
                    <img style={{height:'360px', width:'195px', marginBottom: '-310px', marginLeft: '25px', opacity:'0'}} className="rung" id="rung4" alt="rung4" src={rung} title="rung"></img>
                    <img style={{height:'360px', width:'195px', marginBottom: '-310px', marginLeft: '15px', opacity:'0'}} className="rung" id="rung5" alt="rung5" src={rung} title="rung"></img>
                </div>
            </div>
            <img className="cheese" src={cheese} alt="cheese" title="cheese"></img>
        </div>
    );
}

export default HangmanDisplay;