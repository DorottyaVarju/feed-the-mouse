import React from "react";
import '../css/HangmanDisplay.css';
import { useRef, useEffect } from "react";


function HangmanDisplay({wrongGuess}){
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.lineCap = 'round';
        ctx.lineWidth = 6;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // gallows
        if (wrongGuess > 0) {
            ctx.moveTo(10, 130);
            ctx.lineTo(50, 130);
            ctx.moveTo(30, 130);
            ctx.lineTo(30, 10);
            ctx.moveTo(30, 10);
            ctx.lineTo(120, 10);
            ctx.lineTo(120, 20);
            ctx.stroke();
        }

        // head
        if (wrongGuess > 1) {
            ctx.beginPath();
            ctx.arc(120, 35, 10, 0, Math.PI * 2, true);
            ctx.stroke();
        }

        // body
        if (wrongGuess > 2) {
            ctx.beginPath();
            ctx.moveTo(120, 50);
            ctx.lineTo(120, 100);
            ctx.stroke();
        }

        // right arm
        if (wrongGuess > 3) {
            ctx.beginPath();
            ctx.moveTo(123, 65);
            ctx.lineTo(140, 80);
            ctx.stroke();
        }

        // left arm
        if (wrongGuess > 4) {
            ctx.beginPath();
            ctx.moveTo(117, 65);
            ctx.lineTo(100, 80);
            ctx.stroke();
        }

        // right leg
        if (wrongGuess > 5) {
            ctx.beginPath();
            ctx.moveTo(123, 100);
            ctx.lineTo(140, 120);
            ctx.stroke();
        }

        // left leg
        if (wrongGuess > 6) {
            ctx.beginPath();
            ctx.moveTo(117, 100);
            ctx.lineTo(100, 120);
            ctx.stroke();
        }

    }, [wrongGuess]);

    return (
        <canvas ref={canvasRef}></canvas>
    );
}

export default HangmanDisplay;