import React from "react";
import '../css/CategoryAndNumOfLettersToChoose.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CategoryAndNumOfLettersToChoose() {
    
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const [gamersName, setGamersName] = useState("");
    
    const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    localStorage.setItem('formData', JSON.stringify(data));
        if(inputs.category !== undefined && inputs.level !== undefined) {
            navigate(`/game`);
        } else if(inputs.category === undefined && inputs.level !== undefined) {
            document.getElementById('errorMsg').innerText = 'Please, select a category!';
        } else if(inputs.category !== undefined && inputs.level === undefined) {
            document.getElementById('errorMsg').innerText = 'Please, select a level!';
        } else {
           document.getElementById('errorMsg').innerText = 'Please, select a category and a level!';
        }
    }

    return (
        <>
            <h1>Save the cheese - by guessing a word - before the mouse eats it!</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:</label>
                <br></br>
                <input type="text" name="name" id="name" autoFocus value={gamersName}
          onChange={(e) => setGamersName(e.target.value)} />
                <br></br>
                <br></br>
                <label>Select a category:</label>
                <br></br>
                <select name="category" value={inputs.category || ""} onChange={handleChange}>
                    <option value="" disabled>Select a category</option>
                    <option value="nature">Nature</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="society">Society</option>
                </select>
                <br></br>
                <br></br>
                <label>Select a level:</label>
                <br></br>
                <select name="level" value={inputs.level || ""} onChange={handleChange}>
                    <option value="" disabled>Select a level</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <br></br>
                <br></br>
                <button type="submit">Let's start!</button>
                <p id="errorMsg"></p>
            </form>
        </>
    )

}

export default CategoryAndNumOfLettersToChoose;