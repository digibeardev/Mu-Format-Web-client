import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Input from "./components/input/Input";
import Output from "./components/output/output";
import { Provider } from "./components/context/Context";
import Footer from "./components/footer/footer";
const placeHolder = `
/*
###########################################################
### Welcome to Mush Formatter! ############################

Welcome to the mush formatter web client! A JavaScript 
library that minifies pretty, human readable code into 
something you can quote into your favorite client. You can 
enter your text here, or (soon) try out loading code from a
 github archive.

If you hit a bug, and wouldn't mind contributing?
please leave an issue on the github repository.

* https://github.com/digibeardev/mush-format/issues 
===========================================================
*/

// Yeah! Writing examples at 2am!
&cmd.example me = $+world:
    @pemit me = "My first formatted bit of code! 
        you're awesome! - me"
`;

function App() {
  return (
    <div className="wrapper">
      <div className="bgStripe">
        <div className="container">
          <Provider initialText={placeHolder} initialOutput="">
            <Nav />
            <div className="grid">
              <Input />
              <Output />
            </div>
            <Footer />
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
