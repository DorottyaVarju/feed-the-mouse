import React from "react";
import '../css/CategoryAndNumOfLettersToChoose.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function CategoryAndNumOfLettersToChoose() {
    
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
    const handleSubmit = (event) => {
    event.preventDefault();
//    alert(JSON.stringify(inputs));
    navigate('/game');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Choose a category:</label>
            <br></br>
            <select name="category" value={inputs.category || ""} onChange={handleChange}>
                <option value="Nature">Nature</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Society">Society</option>
            </select>
            <br></br>
            <br></br>
            <label>Choose the level:</label>
            <br></br>
            <select name="level" value={inputs.level || ""} onChange={handleChange}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <br></br>
            <br></br>
            <button type="submit">Let's start!</button>
        </form>
    )

}

export default CategoryAndNumOfLettersToChoose;