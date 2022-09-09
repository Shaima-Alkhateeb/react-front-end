import axios from 'axios';
import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';

export default function Person() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [newAge, setNewAge] = useState();

  function handleSubmmit(e) {
    e.preventDefault();
    // setName(e.target.name.value);
    // setAge(e.target.age.value);
    // setGender(e.target.gender.value);
    // setNewAge(parseInt(age) + 5);
    getNewAge(age);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAgeChange(e) {
    setAge(e.target.value);
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
  }


  function getNewAge() {
    // console.log('age', age);
    axios.post(`https://express-server401.herokuapp.com/person?name=${name}&age=${age}&gender=${gender}`)
      .then(res => {
        console.log(res);
        setNewAge(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <div className="person-perant">

      <Form onSubmit={handleSubmmit} className="person-child">

        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" id="Name" data-testid='input-name' onChange={handleNameChange}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter Age" id="Age" data-testid='input-age' onChange={handleAgeChange}/>
        </Form.Group>
        <br></br>

        <Form.Select aria-label="Default select example" id="Gender" data-testid='input-gender' onChange={handleGenderChange}>
          <option>select your gender ...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
        <br></br>

        <Button variant="outline-dark" type="submit" data-testid="submit">
          Submit
        </Button>

        <Form.Group>
          <Form.Label>-------------------------------------------------------------------------</Form.Label> <br></br>
          <Form.Label data-testid='Name'>Name: {name}</Form.Label> <br></br>
          <Form.Label data-testid='Age'>Age: {age}</Form.Label> <br></br>
          <Form.Label data-testid='Gender'>Gender: {gender}</Form.Label> <br></br>
          {/* {console.log(newAge)} */}
          <Form.Label id="new-age" data-testid='newAge'>New Age: {newAge}</Form.Label>
        </Form.Group>

      </Form>
    </div>
  );
}
