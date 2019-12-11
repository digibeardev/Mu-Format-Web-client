import React, { useContext, useRef } from "react";
import OpenBox from "../openmenu/open";
import { Context } from "../context/Context";
import formatter from "@digibear/mush-format";

const Input = () => {
  const edit = useRef();
  const context = useContext(Context);

  const { setText, text, setOutput } = context;

  const handleChange = async e => setOutput(await formatter(e.target.value));

  const handleKeyPress = e => {
    if (e.keyCode === 9) {
      e.preventDefault();
      let s = edit.current.selectionStart;
      edit.current.value =
        edit.current.value.substring(0, edit.current.selectionStart) +
        "  " +
        edit.current.value.substring(edit.current.selectionEnd);
      edit.current.selectionEnd = s + 1;
    }
  };

  return (
    <div className="inputContainer">
      <OpenBox />
      <textarea
        ref={edit}
        id="input"
        onKeyDown={handleKeyPress}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Input;
