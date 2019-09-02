import React from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import Input from './components/input/Input'
import FormatButtons from './components/formatButtons/formatButtons'
import Output from './components/output/output'
import Log from './components/log/log'

function App() {
  return (
    <div className = "wrapper">
      <div className="bgStripe">
      <div className = "container">   
        <Nav />
        <div class="grid">
          <Input />
          <FormatButtons />
          <Output />
          <Log />

        </div>
      </div>
    </div>        

      </div>
  );
}

export default App;
