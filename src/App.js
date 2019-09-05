import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Input from "./components/input/Input";
import Output from "./components/output/output";
import { Provider } from "./components/context/Context";

function App() {
  return (
    <div className="wrapper">
      <div className="bgStripe">
        <div className="container">
          <Provider initialText="" initialOutput="">
            <Nav />
            <div className="grid">
              <Input />
              <Output />
            </div>
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
