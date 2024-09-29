import React from "react";
import '../css/HangmanDisplay.css';
import { useEffect } from "react";
import ladderfoot from '../images/ladderfoot.png';
import rung from '../images/rung.png';

function HangmanDisplay(props) {

    const { word, goodGuess } = props;
    document.getElementById("drawingDiv").style.opacity = "1";

    let ladderFeet = Array.from(document.getElementsByClassName('ladderfoot'));
    let ladder = document.getElementById('ladder');
    let rung1 = document.getElementById('rung1');
    let rung2 = document.getElementById('rung2');
    let rung3 = document.getElementById('rung3');
    let rung4 = document.getElementById('rung4');
    let rung5 = document.getElementById('rung5');
    let cheese = document.getElementsByClassName('cheese')[0];
    let bodyHeight = document.body.clientHeight;

    switch (word.length) {
        case 4:
            if (ladder !== null) {
                ladder.style.gridRow = '5/5';
                ladderFeet.forEach(function (ladderFoot, index) {
                    ladderFoot.style.minHeight = '120px';
                    ladderFoot.style.height = word.length * 10 + '%';
                });
                rung5.style.marginLeft = '20%';
                rung4.style.marginLeft = '25%';

                if (bodyHeight > 800) {
                    rung1.style.marginTop = '-130%';
                } else {
                    rung1.style.marginTop = '-140%';
                }
            }
            cheese.style.gridRow = '5/5';
            break;
        case 5:
            if (ladder !== null) {
                ladder.style.gridRow = '4/5';
                ladderFeet.forEach(function (ladderFoot, index) {
                    ladderFoot.style.minHeight = '150px';
                    ladderFoot.style.height = word.length * 12 + '%';
                });
                rung5.style.marginLeft = '40px';
                rung4.style.marginLeft = '50px';
                rung3.style.marginLeft = '60px';
                if (bodyHeight > 800) {
                    rung1.style.marginTop = '-110%';
                } else {
                    rung1.style.marginTop = '-120%';
                }
            }
            if (bodyHeight > 800) {
                cheese.style.marginTop = '45px';
            } else {
                cheese.style.marginTop = '-7px';
            }
            break;
        case 6:
            if (ladder !== null) {
                ladder.style.gridRow = '3/5';
                ladderFeet.forEach(function (ladderFoot, index) {
                    ladderFoot.style.minHeight = '180px';
                    ladderFoot.style.height = word.length * 14 + '%';
                });
                rung5.style.marginLeft = '40px';
                rung4.style.marginLeft = '50px';
                rung3.style.marginLeft = '55px';
                rung2.style.marginLeft = '65px';

                if (bodyHeight > 800) {
                    rung1.style.marginTop = '-100%';
                } else {
                    rung1.style.marginTop = '-100%';
                }
            }
            if (bodyHeight > 800) {
                cheese.style.marginTop = '-41px';
            } else {
                cheese.style.marginTop = '-41px';
            }
            break;
        case 7:
            if (ladder !== null) {
                ladderFeet.forEach(function (ladderFoot, index) {
                    ladderFoot.style.minHeight = '210px';
                    ladderFoot.style.height = word.length * 12 + '%';
                });
                rung5.style.marginLeft = '40px';
                rung4.style.marginLeft = '50px';
                rung3.style.marginLeft = '55px';
                rung2.style.marginLeft = '65px';

                if (bodyHeight > 800) {
                    ladder.style.gridRow = '3/5';
                    rung1.style.marginTop = '-70%';
                    cheese.style.marginTop = '-6px';
                    rung5.style.marginBottom = '-320px';
                    rung4.style.marginBottom = '-320px';
                    rung3.style.marginBottom = '-320px';
                    rung2.style.marginBottom = '-320px';
                    rung1.style.marginBottom = '-320px';
                } else {
                    ladder.style.gridRow = '2/5';
                    rung1.style.marginTop = '-83%';
                    cheese.style.marginTop = '-73px';
                }
            }
            if (bodyHeight > 800) {
                cheese.style.marginTop = '-6px';
            } else {
                cheese.style.marginTop = '-73px';
            }
            break;
        default:
            if (ladder !== null) {
                ladderFeet.forEach(function (ladderFoot, index) {
                    ladderFoot.style.minHeight = '210px';
                    ladderFoot.style.height = word.length * 12 + '%';
                });
                rung5.style.marginLeft = '40px';
                rung4.style.marginLeft = '50px';
                rung3.style.marginLeft = '55px';
                rung2.style.marginLeft = '65px';

                if (bodyHeight > 800) {
                    ladder.style.gridRow = '3/5';
                    rung1.style.marginTop = '-70%';
                    cheese.style.marginTop = '-6px';
                    rung5.style.marginBottom = '-320px';
                    rung4.style.marginBottom = '-320px';
                    rung3.style.marginBottom = '-320px';
                    rung2.style.marginBottom = '-320px';
                    rung1.style.marginBottom = '-320px';
                } else {
                    ladder.style.gridRow = '2/5';
                    rung1.style.marginTop = '-83%';
                    cheese.style.marginTop = '-73px';
                }
            }
            if (bodyHeight > 800) {
                cheese.style.marginTop = '-6px';
            } else {
                cheese.style.marginTop = '-73px';
            }
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