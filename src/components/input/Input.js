import React, { useContext, useRef, useEffect } from "react";
import OpenBox from "../openmenu/open";
import { Context } from "../context/Context";
import AceEditor from "react-ace";
import { format } from "@digibear/mush-format";
import "ace-builds/src-noconflict/mode-mushcode";
import "ace-builds/src-noconflict/theme-monokai";

const Input = () => {
  const edit = useRef();
  const results = useRef();
  const context = useContext(Context);

  const { setText, text, setOutput, output } = context;

  const handleChange = async val => setText(val);

  useEffect(() => {
    const runOnce = async () => setOutput(await format(text));
    runOnce();
  }, [text]);

  return (
    <div className="inputContainer">
      <AceEditor
        className="code"
        ref={edit}
        mode="mushcode"
        theme="monokai"
        name="input"
        width="730px"
        height="75vh"
        value={text}
        onChange={handleChange}
      />

      <AceEditor
        className="code"
        ref={results}
        mode="mushcode"
        theme="monokai"
        name="output"
        height="75vh"
        value={output}
        wrapEnabled
      />
    </div>
  );
};

export default Input;
