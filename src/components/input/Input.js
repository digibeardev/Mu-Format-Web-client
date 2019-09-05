import React, { useContext } from "react";
import OpenBox from "../openmenu/open";
import FormatButtons from "../formatButtons/formatButtons";
import { Context } from "../context/Context";

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

const Input = () => {
  const context = useContext(Context);
  context.setText(placeHolder);

  return (
    <div className="inputContainer">
      <OpenBox />
      <textarea
        id="input"
        onChange={e => context.setText(e.target.value)}
        value={context.text}
      ></textarea>
      <FormatButtons />
    </div>
  );
};

export default Input;
