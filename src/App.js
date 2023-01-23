
import './App.css';
import axios from 'axios'
import { useState } from 'react';

const App = () => {
  const[ aJoke, setJoke ] = useState("");
  const[ jokeQuestion, setJokeQuestion ] = useState("");
  
    const getJoke = () => {
      axios.get("https://official-joke-api.appspot.com/random_joke")
      
      .then((response)=> {
  
        console.log(response)
        setJokeQuestion( " Joke Question? " +
          response.data.setup)
        setJoke( " Answer; " +
          response.data.punchline)
        }
        )
      .catch((error)=> {
        console.log(error)
      })

    }
  
  return (
    <div className="App">
      <header className="App-header">
      <button className='btn' onClick={getJoke}>Get a New Joke</button>
      <br/><br/>
       <p> {jokeQuestion} </p>
       <p>{aJoke}</p>
      </header>
    </div>
  );
}

export default App;
