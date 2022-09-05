import axios from "axios";
import React, {useState} from "react";

export default function Person() {
    const [name, setName] = useState('Enter your name');
    const [age, setAge] = useState('Enter your age');
    const [gender, setGender] = useState('Enter your gender');
    const [newAge, setNewAge] = useState('Your Age +5Years');

    function handleSubmmit(e) {
        e.preventDefault();
        // setNewAge(parseInt(age) + 5);
        getNewAge();
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handleAge(e) {
        setAge(e.target.value);
    }

    function handleGender(e) {
        setGender(e.target.value);
    }

    async function getNewAge() {
        await axios.post('http://localhost:5000/api/person', {
            name: name,
            age: age,



    return (
        <>
        <div data-testid="person">
            // <form onSubmit={handleSubmmit}>
            //     <label>
            //         Name:
            //         <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            //     </label>
            //     <label>
            //         Age:
            //         <input type="text" value={age} onChange={e => setAge(e.target.value)}/>
            //     </label>
            // </form>  

            <h3>Your data</h3>
            <p data-testid="">Name: {name}</p>
            <p>Age: {age}</p>
            <p>gender: {gender}</p>
            <p>Age + 5 years: {newAge}</p>
        </div>  
        </>
    );         
}
