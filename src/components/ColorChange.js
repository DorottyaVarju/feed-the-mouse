import React from 'react';
import '../css/ColorChange.css';

const ColorChange = () => {

    const themeChange = (id) => {
        let buttons = document.getElementsByTagName('button');
        let selects = document.getElementsByTagName('select');
        let inputs = document.getElementsByTagName('input');
        let options = document.getElementsByTagName('option');
    
        let color = window.getComputedStyle(document.getElementById(id)).backgroundColor;

        for (let i = 0; i < buttons.length; i++) {
            let isChildOfColorChangeDiv = document.getElementById('colorChange').contains(buttons[i]);
    
            if (!isChildOfColorChangeDiv) {
                buttons[i].style.backgroundColor = color;
                buttons[i].addEventListener('mouseover', () => {
                    buttons[i].style.backgroundColor = '#fff88bff';
                    buttons[i].style.color = color;
                });
    
                buttons[i].addEventListener('mouseout', () => {
                    buttons[i].style.backgroundColor = color;
                    buttons[i].style.color = '#fff88bff';
                });
            }
        }
    
        for (let i = 0; i < selects.length; i++) {
            selects[i].style.backgroundColor = color;
        }
    
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.backgroundColor = color;
        }
    
        for (let i = 0; i < options.length; i++) {
            options[i].style.backgroundColor = color;
        }
    
        switch (id) {
            case 'brownBtn':
                document.body.style.backgroundColor = '#533e08d7';
                break;
            case 'pinkBtn':
                document.body.style.backgroundColor = '#b5485d';
                break;
            case 'blueBtn':
                document.body.style.backgroundColor = '#184a87';
                break;
            case 'greenBtn':
                document.body.style.backgroundColor = '#2e785a';
                break;
            case 'purpleBtn':
                document.body.style.backgroundColor = '#53228c';
                break;
        }
    };
    

  return (
    <div id="colorChange">
        <button id="brownBtn" onClick={() => themeChange("brownBtn")}></button>
        <button id="pinkBtn" onClick={() => themeChange("pinkBtn")}></button>
        <button id="blueBtn" onClick={() => themeChange("blueBtn")}></button>
        <button id="greenBtn" onClick={() => themeChange("greenBtn")}></button>
        <button id="purpleBtn" onClick={() => themeChange("purpleBtn")}></button>
    </div>
  );
};

export default ColorChange;
