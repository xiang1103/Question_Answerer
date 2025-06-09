import React, {useState} from "react";  
import './App.css';

function App() {
  const [inputValue, setInputValue]=useState(''); 

  const handleSubmit= () =>
  {
    alert("You have submitted the search")
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>main/question_answerer</code>
        </p>
        <input className="searchBar"
          type="text" 
          placeholder='Type your question here!'
          value= {inputValue}
          onChange={(e) => setInputValue(e.target.value) }

        
        />
          <button className='search_button' onClick={handleSubmit}>Search</button>
        
      </header>
    </div>
  );
}

export default App;
