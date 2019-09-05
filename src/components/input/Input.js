import React, { useContext } from "react";
import OpenBox from "../openmenu/open";
import FormatButtons from "../formatButtons/formatButtons";
import { Context } from "../context/Context";

const Input = () => {
  const context = useContext(Context);

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
