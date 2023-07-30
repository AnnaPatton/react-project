import { useState } from 'react';
import {puppyList} from './data.js';
import './App.css';

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    console.log("puppy id: ", puppyId);
    setFeatPupId(puppyId);
  }

const featuredPup = puppies.find((pup)=> pup.id === featPupId)
console.log(featuredPup);

  return (
    <div className="App">
  
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

      {puppies.map((puppy) => {
        return (
          <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App