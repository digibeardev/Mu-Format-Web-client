import React from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import Input from './components/input/Input'
import Output from './components/output/output'

function App() {
  return (
    <div className = "wrapper">
      <div className="bgStripe">
        <div className = "container">   
          <Nav />
          <div class="grid">
            <Input />     
            <Output />
          </div>
        </div>
      </div>        
    </div>
  );
}

export default App;
