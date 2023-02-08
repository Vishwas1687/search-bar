import React from 'react';
import SearchBar from './SearchBar.js';
import data from './data.js';
import './App.css';

function App() {
  return (
    <div>
      <SearchBar data={data}/>
    </div>
  );
}

export default App;
