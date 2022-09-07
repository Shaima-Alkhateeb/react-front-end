
// import { useState } from 'react';
import './App.css';
import Person from './component/Person';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [name, setName] = useState('shaima');

  // function handleName(e) {
  //   setName(e.target.value);
  // }


  return (
    <div>

      <Person />
      {/* <h2>My name is {name}</h2>
      <input type="text" value={name} onChange={handleName} /> */}

    </div>
  );
}

export default App;
